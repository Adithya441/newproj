import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import * as ExcelJS from "exceljs";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import "jspdf-autotable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";


const SecuritySetup = ({ meternum }) => {
  const [searchKey, setSearchKey] = useState();
  const [securityKey, setSecurityKey] = useState("");
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "transactionId", filter: true, headerName: "Transaction ID" },
    { field: "CommandName", filter: true, headerName: "Command Name" },
    { field: "CommandType", filter: true, headerName: "Command Type" },
    { field: "requestTime", filter: true, headerName: "Request Time" },
    { field: "responseTime", filter: true, headerName: "Response Time" },
    { field: "Response", filter: true, headerName: "Response" }
  ]);
  //SERVICE URLS 
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';

  //SERVICE CALLS
  const buildGridUrl = () => {
    const params = new URLSearchParams({
      meterNumber: meternum,
      method: "SET"
    });
    if (securityKey) params.append("commandType", securityKey);

    return `/api/server3/UHES-0.0.1/WS/getsecuritySetupJobQuerybyMeterno?${params.toString()}`;
  };

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
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchGridData();
  }, []);

  const exportCSV = () => {
    const csvData = rowData.map(row => ({
      TransactionID: row.transactionId,
      CommandName: row.CommandName,
      CommandType: row.CommandType,
      RequestTime: row.requestTime,
      ResponseTime: row.responseTime,
      Response: row.Response
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'SecuritySetup.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Security Setup');
    const headers = Object.keys(rowData[0] || {});
    const title = worksheet.addRow(['Security Setup']);
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
    saveAs(blob, `SecuritySetup.xlsx`);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Transaction ID", "Command Name", "Command Type", "Request Time", "Response Time", "Response"];
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.transactionId, row.CommandName, row.CommandType, row.requestTime, row.responseTime, row.Response]);
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('SecuritySetup.pdf');
  };

  const copyData = () => {
    const textData = rowData
      .map(row =>
        `${row.transactionId}\t${row.CommandName}\t${row.CommandType}\t${row.requestTime}\t${row.responseTime}\t${row.Response}`
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
      <form className='form-inline mt-4 mx-auto mb-5'>
        <div className="col-xs-10 col-md-4">
          <label htmlFor="profileName">
            Security Keys <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <div className="border border-left border-left-5 border-danger" ></div>
            <select
              id="profileName"
              className="form-control"
              aria-label="Profile Name" required value={securityKey} onChange={(e) => setSecurityKey(e.target.value)}
            >
              <option value="" selected>
                -NA-
              </option>
              <option value="uspassword">Utility setting password</option>
              <option value="frpassword">Firmware password</option>
              <option value="mrpassword">MR password</option>
              <option value="global_password">Global password</option>
            </select>
          </div>
        </div>
        <br />
        <div className='col-8  m-2 text-center mx-auto'>
          <button className='btn btn-primary btn-md'
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }}>Send Request</button>
        </div>
      </form>
      {rowData ? (
        <div className="container-fluid col-12">
          <div className="d-flex flex-wrap mt-4">
            <div className="d-flex flex-wrap" style={{ marginLeft: '1vw', gap: '1vw' }}>
              <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
              <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
              <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
              <button className='btn btn-primary btn-md mr-1' onClick={copyData}>Copy</button>
            </div>
            <div className="align-right" style={{ marginLeft: '2vw' }}>
              <input type="text" className="form-control" placeholder="search" value={searchKey} onChange={searchData} />
            </div>
          </div>
          <div className="container-fluid ag-theme-quartz mt-3 mx-auto" style={{ height: 350, width: "100%" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              pagination={true}
              paginationPageSize={5}
              paginationPageSizeSelector={[5, 10, 15, 20]}
            />
          </div>
        </div>
      ) :
        (
          <div className="text-center text-danger mx-auto">
            No data found...
          </div>
        )}
    </div>
  );
}

export default SecuritySetup;