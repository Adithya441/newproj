import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx'; // Import for Excel
import jsPDF from 'jspdf'; // Import for PDF
import 'jspdf-autotable'; // Import for using autotable with jsPDF
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import loadingGif from '../../../assets/img2.gif'

const GetLoadSwitch = ({ selectedLabel, office }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [start, setStart] = useState(0);
  const [recordsTotal, setRecordsTotal] = useState(0);
  const length = 10;
  const [exportFormat, setExportFormat] = useState('');

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const todaydate = year + month + day;
    setFromDate(todaydate);
  }, []);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';

  const fetchData = useCallback(async () => {
    setError(null);
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

      const baseUrl = `/api/server3/UHES-0.0.1/WS/ServerpaginationForLoadSwitchStatus?RelayStatus=${selectedLabel === 'CONNECTED' ? 1 : 0}&applyMaskingFlag=N&draw=1&length=${length}&officeid=${office}&start=${start}`;
      const dataResponse = await fetch(baseUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });
      const responseData = await dataResponse.json();

      setRecordsTotal(responseData.recordsTotal || 0);
      setData(responseData.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedLabel, start, length]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columnDefs = [
    { headerName: "METERNO", field: "METERNO", flex: 1, filter: true, sortable: true , valueFormatter: (params) => params.value ? params.value : "N/A"},
    { headerName: "STATUS", field: "STATUS", flex: 1, filter: true, sortable: true, valueFormatter: (params) => params.value ? params.value : "N/A" },
  ];

  const handleNextPage = () => setStart((prevStart) => prevStart + length);
  const handlePreviousPage = () => setStart((prevStart) => Math.max(prevStart - length, 0));

  const exportToCSV = () => {
    const csvData = data.map(row => ({
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
    const headers = Object.keys(data[0] || {});
    const title = worksheet.addRow([`${selectedLabel}`]); // Replace with your title text
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
    data.forEach(row => {
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
            ...data.map(row => row[header] ? row[header].toString().length : 0) // Length of the content
        );
        worksheet.getColumn(index + 1).width = maxLength + 2; // Adding padding
    });

    // Generate Excel file and trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${selectedLabel}.xlsx`);
};

  // Export function for PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["METERNO", "MeterLastCommunicated"]; // Add more columns based on your data structure
    const tableRows = [];

    data.forEach(row => {
      tableRows.push([row.METERNO, row.MeterLastCommunicated]);
      // Add other fields as needed
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('data.pdf');
  };

  const currentPage = Math.floor(start / length) + 1;
  const totalPages = Math.ceil(recordsTotal / length);

  const handleExport = (value) => {
    switch (value) {
      case 'csv':
        exportToCSV();
        break;
      case 'excel':
        exportToExcel();
        break;
      case 'pdf':
        exportToPDF();
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <div>
        <select
          id="export-format"
          value={exportFormat}
          onChange={(e) => handleExport(e.target.value)}
          style={{height:'30px'}}
        >
          <option value="">Export</option>
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
          <option value="pdf">PDF</option>
        </select>
      </div>
      {loading ? (
        <img src={loadingGif} alt="Loading..." style={{ width: '150px', height: '150px', margin:'50px 350px' }} />
      ) : (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%', marginTop: '20px' }}>
          <AgGridReact rowData={data} columnDefs={columnDefs} onGridReady={fetchData} />
        </div>
      )}

      <div style={{ marginTop: '20px', display:'flex', justifyContent:'space-between' }}>
        <span style={{ marginLeft: '10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handlePreviousPage} disabled={start === 0} style={{backgroundColor:'black', color:'white'}}>Previous</button>
        <button onClick={handleNextPage} disabled={start + length >= recordsTotal} style={{backgroundColor:'black', color:'white'}}>Next</button>
      </div>
    </div>
  );
};

export default GetLoadSwitch;
