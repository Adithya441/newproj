import { useState,useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import "jspdf-autotable";

const Alarms = ({meternum}) => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [searchKey,setSearchKey]=useState();
  const [rowData, setRowData] = useState();

  const [colDefs] = useState([
    { field: "Transaction_ID", filter: true,headerName:"Alarm Name",flex:4 },
    { field: "Request_Type", filter: true,headerName:"Alarm Time",flex:4 },
    { field: "Request_Time", filter: true,headerName:"HES Time",flex:4 },
  ]);

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const gridUrl=`/api/server3/UHES-0.0.1/WS/getAlarms?fromdate=${fromDate}&meterno=${meternum}&office=3459274e-f20f-4df8-a960-b10c5c228d3e&todate=${toDate}`;
  
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

      const dataResponse = await fetch(gridUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setRowData(responseData.data);
      setFromDate('');
      setToDate('');
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchGridData();
  }, [fromDate,toDate]);

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

  const exportToCSV = () => {
    const csvData = rowData.map(row => ({
      METERNO: row.METERNO,
      MeterLastCommunicated: row.MeterLastCommunicated,
      // Add other fields as needed
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','), // Header
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export function for Excel with adjusted column widths
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');
    const headers = Object.keys(rowData[0] || {});
    const title = worksheet.addRow([`Alarms`]); // Replace with your title text
    title.font = { bold: true, size: 16, color: { argb: 'FFFF00' } }; // Set font color and size
    title.alignment = { horizontal: 'center' };
    worksheet.mergeCells('A1', `${String.fromCharCode(64 + headers.length)}1`);

    const headerRow = worksheet.addRow(headers);

    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: 'FFFFFF' } }; // White font color
      cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFADD8E6' }, // Black background color
      };
  });

    // Add data rows
    rowData.forEach(row => {
        worksheet.addRow(Object.values(row));
    });

    worksheet.autoFilter = {
      from: 'A2', // Starting cell of the filter (top-left corner)
      to: `${String.fromCharCode(64 + headers.length)}2` // Ending cell (top-right corner based on header count)
  };

    // Adjust column widths based on the max length of the column data
    headers.forEach((header, index) => {
        const maxLength = Math.max(
            header.length, // Length of the header
            ...rowData.map(row => row[header] ? row[header].toString().length : 0) // Length of the content
        );
        worksheet.getColumn(index + 1).width = maxLength + 2; // Adding padding
    });

    // Generate Excel file and trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `Alarms.xlsx`);
};

  // Export function for PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["METERNO", "MeterLastCommunicated"]; // Add more columns based on your data structure
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.METERNO, row.MeterLastCommunicated]);
      // Add other fields as needed
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('data.pdf');
  };
  const copyData = () => {
    const textData = rowData
      .map(row =>
        `${row.Transaction_ID}\t${row.Firmware_Version}\t${row.Request_Time}\t${row.Response_Time}\t${row.Request_Code}`
      )
      .join("\n");
    navigator.clipboard.writeText(textData)
      .then(() => alert("Data copied to clipboard!"))
      .catch((error) => alert("Failed to copy data: " + error));
  };

  return (
    <div className="col-12">
      <form className="form col-md-10 mx-auto">
        <div className="d-flex flex-wrap">
          <div className="col-xs-8 col-md-6">
            <label htmlFor="fromDate">From Date</label>
            <input type='date' id="fromDate" value={fromDate} className='form-control border border-left-3 border-left-danger' onChange={(e) => setFromDate(e.target.value)} />
          </div>
          <div className="col-xs-8 col-md-6">
            <label htmlFor="toDate">To Date</label>
            <input type="date" id="toDate" value={toDate} className='form-control border border-left-3 border-left-danger' onChange={(e) => setToDate(e.target.value)} />
          </div>
        </div>
        <div className="text-center col-8 mx-auto mt-4">
          <button className="btn btn-primary btn-md" 
          onClick={(e)=>{
            e.preventDefault();
            fetchGridData();
          }}
          >Submit</button>
        </div>
      </form>
      {
        rowData ? (
          <div>
          <div className="col-xs-12 mx-auto d-flex flex-wrap mt-4">
            <div className="d-flex flex-wrap col-xs-10  col-md-6">
              <button className="btn btn-primary btn-md mr-1" onClick={exportToExcel}>Excel</button>
              <button className='btn btn-primary btn-md mr-1' onClick={exportToPDF}>PDF</button>
              <button className='btn btn-primary btn-md mr-1' onClick={exportToCSV}>CSV</button>
            </div>
            <div className="col-xs-8 col-md-3 align-right">
              <input type="text" className="form-control" placeholder="search" value={searchKey} onChange={searchData} />
            </div>
          </div>
          <div className="container-fluid ag-theme-quartz mt-3 col-md-12 m-2 mx-auto" style={{ height: 350, width: "100%" }}>
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