import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as ExcelJS from "exceljs";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";

const TransactionLog = ({ meternum }) => {
  const [transactionLogType, setTransactionLogType] = useState();
  const [requestType, setRequestType] = useState();
  const [fromDate, setFromDate] = useState();
  const [status, setStatus] = useState();
  const [toDate, setToDate] = useState();
  const [showGrid, setShowGrid] = useState(false);
  const [searchKey, setSearchKey] = useState();
  const [rowData, setRowData] = useState();

  const [colDefs] = useState([
    { field: "TRANSACTIONID", filter: true, headerName: "Transaction Id" },
    { field: "DEVICEID", filter: true, headerName: "Device Id" },
    { field: "METERID", filter: true, headerName: "Meter Id" },
    { field: "COMMANDNAME", filter: true, headerName: "Command Name" },
    { field: "DEFAULTCOMMUNICATIONTYPE", filter: true, headerName: "Default Communication Type" },
    { field: "TRANS_START_TIME", filter: true, headerName: "Request Time" },
    { field: "RESPONSETIME", filter: true, headerName: "Response Time" },
    { field: "REQUESTTIME", filter: true, headerName: "Meter Time" },
    { field: "REQUESTTYPE", filter: true, headerName: "Request Type" },
    { field: "RESONSEDATASIZE", filter: true, headerName: "Request Data Size" },
    { field: "RESONSEDATASIZE", filter: true, headerName: "Response Data Size" },
    { field: "NOOFATTEMPTS", filter: true, headerName: "No Of Attempts" },
    { field: "RESPONSESTATUS", filter: true, headerName: "Response Status" },
    { field: "MOBILENO", filter: true, headerName: "Mobile No" },
    { field: "IPADDRESS", filter: true, headerName: "Ip Address" },
    { field: "DIALING", filter: true, headerName: "Dailing" },
    { field: "MESSAGE", filter: true, headerName: "Message" }
  ]);

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const transactionLogUrl = `/api/server3/UHES-0.0.1/`;

  const buildGridUrl = () => {
    const params = new URLSearchParams({
      draw: "2",
      length: "10",
      meterNumber: meternum,
      office: "3459274e-f20f-4df8-a960-b10c5c228d3e",
      searchby: "1731643917529"
    });
    if (status) params.append("Status", status);
    if (toDate) params.append("Todate", toDate);
    if (transactionLogType) params.append("command", transactionLogType);
    if (requestType) params.append("requesttype", requestType);
    if (fromDate) params.append("start", fromDate);

    return `/api/server3/UHES-0.0.1/WS/callForServerpaginationForTransactionLog?${params.toString()}`;
  };
  //SERVICE CALLS
  const fetchGridData = async () => {
    try {
      const tokenResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'password',
          username: 'Admin',
          password: 'Admin@123',
          client_id: 'fooClientId',
          client_secret: 'secret',
        }),
      });

      if (!tokenResponse.ok) throw new Error('Failed to authenticate');
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      const dataResponse = await fetch(buildGridUrl(), {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setRowData(responseData.data);
      console.log('fetched service data:', (responseData.data));

    } catch (err) {
      console.error(err.message);
    }
  };

  const exportCSV = () => {
    const csvData = rowData.map(row => ({
      TransactionId: row.TRANSACTIONID,
      DeviceId: row.DEVICEID,
      MeterId: row.METERID,
      CommandName: row.COMMANDNAME,
      DefaultCommunicationType: row.DEFAULTCOMMUNICATIONTYPE,
      RequestTime: row.TRANS_START_TIME,
      ResponseTime: row.RESPONSETIME,
      MeterTime: row.REQUESTTIME,
      RequestType: row.REQUESTTYPE,
      RequestDataSize: row.RESONSEDATASIZE,
      ResponseDataSize: row.RESONSEDATASIZE,
      NoOfAttempts: row.NOOFATTEMPTS,
      ResponseStatus: row.RESPONSESTATUS,
      MobileNo: row.MOBILENO,
      IpAddress: row.IPADDRESS,
      Dailing: row.DIALING,
      Message: row.MESSAGE
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'TransactionLog.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Transaction Log');
    const headers = Object.keys(rowData[0] || {});
    const title = worksheet.addRow([`Firmware Upgrade`]);
    title.font = { bold: true, size: 16, color: { argb: 'FFFF00' } };
    title.alignment = { horizontal: 'center' };
    worksheet.mergeCells('A1', `${String.fromCharCode(64 + headers.length)}1`);

    const headerRow = worksheet.addRow(headers);

    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: 'FFFFFF' } };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFADD8E6' },
      };
    });

    rowData.forEach(row => {
      worksheet.addRow(Object.values(row));
    });

    worksheet.autoFilter = {
      from: 'A2',
      to: `${String.fromCharCode(64 + headers.length)}2`
    };

    headers.forEach((header, index) => {
      const maxLength = Math.max(
        header.length,
        ...rowData.map(row => row[header] ? row[header].toString().length : 0)
      );
      worksheet.getColumn(index + 1).width = maxLength + 2;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `TransactionLog.xlsx`);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Transaction Id", "Device Id", "Meter Id", "Command Name", "Default Communication Type", "Request Time", "Response Time", "Meter Time", "Request Type", "Request Data Size", "Response Data Size", "No Of Attempts", "Response Status", "Mobile No", "Ip Address", "Dailing", "Message"];
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.TRANSACTIONID, row.DEVICEID, row.METERID, row.COMMANDNAME, row.DEFAULTCOMMUNICATIONTYPE, row.TRANS_START_TIME, row.RESPONSETIME, row.REQUESTTIME, row.REQUESTTYPE, row.RESONSEDATASIZE, row.RESONSEDATASIZE, row.NOOFATTEMPTS, row.RESPONSESTATUS, row.MOBILENO, row.IPADDRESS, row.DIALING, row.MESSAGE]);
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('TransactionLog.pdf');
  };

  const copyData = () => {
    const textData = rowData
      .map(row =>
        `${row.TRANSACTIONID}\t${row.DEVICEID}\t${row.METERID}\t${row.COMMANDNAME}\t${row.DEFAULTCOMMUNICATIONTYPE}\t${row.TRANS_START_TIME}\t${row.RESPONSETIME}\t${row.REQUESTTIME}\t${row.REQUESTTYPE}\t${row.RESONSEDATASIZE}\t${row.RESONSEDATASIZE}\t${row.NOOFATTEMPTS}\t${row.RESPONSESTATUS}\t${row.MOBILENO}\t${row.IPADDRESS}\t${row.DIALING}\t${row.MESSAGE}`
      )
      .join("\n");
    navigator.clipboard.writeText(textData)
      .then(() => alert("Data copied to clipboard!"))
      .catch((error) => alert("Failed to copy data: " + error));
  };

  const searchData = (e) => {
    const searchValue = e.target.value;
    setSearchKey(searchValue);
    if (searchValue === "") {
      setRowData(rowData);
    } else {
      const filteredData = rowData.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setRowData(filteredData);
    }
  };

  return (
    <div className="col-12">
      <div className="col-10">
        <form className="form d-flex flex-wrap">
          <div className="col-xs-10 col-md-4" style={{ margin: '1vw 0', padding: '0.5vw' }}>
            <label htmlFor="translogtype">Transaction Log</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <select id="translogtype" value={transactionLogType} className='form-control border border-left-3 border-left-danger' required onChange={(e) => setTransactionLogType(e.target.value)}>
                <option value selected >-NA-</option>
                <option value="fep.FEP_CSV_CONTROL_EVENTS">Control Events</option>
                <option value="fep.FEP_CSV_CURRENT_EVENTS">Current Events</option>
                <option value="fep.FEP_csv_ED">Daily Load Profile</option>
                <option value="fep.FEP_csv_EOB_ed">Monthly Billing</option>
                <option value="FEP.FEP_CSV_FOTA">FOTA</option>
                <option value="fep.FEP_csv_instant">Instant Log</option>
                <option value="FEP.FEP_CSV_JSONCONFIG">Configurations</option>
                <option value="fep.fep_csv_lp">Block Load Profile</option>
                <option value="FEP.FEP_CSV_METER_PING">PING</option>
                <option value="FEP.FEP_CSV_MRO">Mode Relay Operation</option>
                <option value="fep.FEP_CSV_NAMEPLATE">Name Plate</option>
                <option value="fep.FEP_CSV_NONROLLOVER_EVENTS">Non Rollover Events</option>
                <option value="fep.FEP_CSV_OTHER_EVENTS">Other Events</option>
                <option value="fep.FEP_CSV_POWERFAILURE_EVENTS">Power Failure Events</option>
                <option value="fep.FEP_CSV_TRANSACTIONAL_EVENTS">Transactional Events</option>
                <option value="FEP.FEP_CSV_TRE">Temperature Events</option>
                <option value="fep.FEP_CSV_VOLTAGE_EVENTS">Voltage Events</option>
              </select>
            </div>
          </div>
          <div className="col-xs-10 col-md-4" style={{ margin: '1vw 0', padding: '0.5vw' }}>
            <label htmlFor="requesttype">Request Type</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <select id="requesttype" value={requestType} className='form-control border border-left-3 border-left-danger' required onChange={(e) => setRequestType(e.target.value)}>
                <option value="">-NA-</option>
                <option value="All">All</option>
                <option value="O">Ondemand</option>
                <option value="S">Scheduler</option>
                <option value="SP">Schedule Push</option>
              </select>
            </div>
          </div>
          <div className="col-xs-10 col-md-4" style={{ margin: '1vw 0', padding: '0.5vw' }}>
            <label htmlFor="fromdate">* From Date</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <input type="datetime-local" id="fromdate" value={fromDate} className='form-control border border-left-3 border-left-danger' required onChange={(e) => setFromDate(e.target.value)} />
            </div>
          </div>
          <div className="col-xs-10 col-md-4" style={{ margin: '1vw 0', padding: '0.5vw' }}>
            <label htmlFor="status">Status</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className='form-control border border-left-3 border-left-danger'>
                <option>-NA-</option>
                <option value="Success">Success</option>
                <option value="Failure">Failure</option>
              </select>
            </div>
          </div>
          <div className="col-xs-10 col-md-4" style={{ margin: '1vw 0', padding: '0.5vw' }}>
            <label htmlFor="todate">* To Date</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <input type="datetime-local" id="todate" value={toDate} className='form-control border border-left-3 border-left-danger' required onChange={(e) => setToDate(e.target.value)} />
            </div>
          </div>

          <div className="col-12 text-center mt-4 mb-4">
            <button className="btn btn-primary "
              onClick={(e) => {
                e.preventDefault();
                fetchGridData();
              }}
            >Submit</button>
          </div>
        </form>
      </div>
      {rowData ? (
        <div className="container-fluid col-xs-12 col-md-10 mx-auto">
          <div className="col-12 mx-auto d-flex flex-wrap mt-4">
            <div className="d-flex flex-wrap col-xs-10 p-2 col-md-6">
              <button className="btn btn-primary btn-md m-1" onClick={exportExcel}>Excel</button>
              <button className='btn btn-primary btn-md m-1' onClick={exportPDF}>PDF</button>
              <button className='btn btn-primary btn-md m-1' onClick={exportCSV}>CSV</button>
              <button className='btn btn-primary btn-md m-1' onClick={copyData}>Copy</button>
            </div>
            <div className="col-xs-10 col-md-4 align-item-right">
              <input type="text" className="form-control" placeholder="search" value={searchKey} onChange={searchData} />
            </div>
          </div>
          <div className="container-fluid ag-theme-quartz mt-4 col-md-10 m-2 mx-auto" style={{ height: 350, width: "100%" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              pagination={true}
              paginationPageSize={5}
              paginationPageSizeSelector={[5, 10, 15, 20]}
            />
          </div>
        </div>
      ) : (
        <div className="col-10 text-center text-danger mx-auto">
          No records found...
        </div>
      )}
    </div>
  );
}
export default TransactionLog;  