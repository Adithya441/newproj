import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Alarms = ({ meternum , officeid }) => {
  console.log(officeid + "hello");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [searchKey, setSearchKey] = useState();
  const [rowData, setRowData] = useState();

  const [colDefs] = useState([
    { field: "ALARAMNAME", filter: true, headerName: "Alarm Name", flex: 4 },
    { field: "ALARAMTIME", filter: true, headerName: "Alarm Time", flex: 4 },
    { field: "RESPONSETIME", filter: true, headerName: "HES Time", flex: 4 },
  ]);

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const gridUrl = `/api/server3/UHES-0.0.1/WS/getAlarms?fromdate=${fromDate}&meterno=${meternum}&office=${officeid}&todate=${toDate}`;

  //SERVICE CALLS
  const fetchGridData = async () => {
    setFromDate('');
    setToDate('');
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

      const dataResponse = await fetch(gridUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setRowData(responseData.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const exportCSV = () => {
    const csvData = rowData.map(row => ({
      AlarmName: row.ALARAMNAME,
      AlarmTime: row.ALARAMTIME,
      HESTime: row.RESPONSETIME
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Alarms.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Alarms Data');
    const headers = Object.keys(rowData[0] || {});
    const title = worksheet.addRow([`Alarms`]);
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
    saveAs(blob, `Alarms.xlsx`);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Alarm Name", "Alarm Time", "HES Time"];
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.ALARAMNAME, row.ALARAMTIME, row.RESPONSETIME]);
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('Alarms.pdf');
  };

  const copyData = () => {
    const textData = rowData
      .map(row =>
        `${row.ALARAMNAME}\t${row.ALARAMTIME}\t${row.RESPONSETIME}`
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
      <form className="form col-md-10 mx-auto">
        <div className="d-flex flex-wrap">
          <div className="col-xs-8 col-md-6" style={{ margin: '2vw 0', padding: '1vw' }}>
            <label htmlFor="fromDate">From Date</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <input type='date' id="fromDate" value={fromDate} className='form-control border border-left-3 border-left-danger' onChange={(e) => setFromDate(e.target.value)} />
            </div>
          </div>
          <div className="col-xs-8 col-md-6" style={{ margin: '2vw 0', padding: '1vw' }}>
            <label htmlFor="toDate">To Date</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <input type="date" id="toDate" value={toDate} className='form-control border border-left-3 border-left-danger' onChange={(e) => setToDate(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="text-center col-8 mx-auto mt-4">
          <button className="btn btn-primary btn-md"
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }}
          >Submit</button>
        </div>
      </form>
      {
        rowData ? (
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
            <div className="text-danger text-center m-2">
              No records found...
            </div>
          )
      }
    </div>
  );
}

export default Alarms;