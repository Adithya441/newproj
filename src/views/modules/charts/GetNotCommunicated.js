import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx'; // Import for Excel
import jsPDF from 'jspdf'; // Import for PDF
import 'jspdf-autotable'; // Import for using autotable with jsPDF

const GetNotCommunicated = () => {
  const [data, setData] = useState([]); // Ensure data is an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fromDate, setFromDate] = useState('20241030');
  const [start, setStart] = useState(0); // Start index for pagination
  const [recordsTotal, setRecordsTotal] = useState(0); // Total records count
  const length = 10; // Number of records per page
  const [exportFormat, setExportFormat] = useState(''); // Selected export format

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';

  const fetchData = useCallback(async () => {
    setLoading(true);
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
  
      // Use the updated start parameter for pagination
      const baseUrl = `/api/server3/UHES-0.0.1/WS/ServerpaginationForNeverCommunicatedMetersReport?Date=${fromDate}&OfficeId=3459274e-f20f-4df8-a960-b10c5c228d3e&draw=1&length=${length}&start=${start}`; // Updated to include start
  
      const dataResponse = await fetch(baseUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });
  
      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
  
      // Set records total from API response
      setRecordsTotal(responseData.recordsTotal || 0); // Update this key based on your API response
      setData(responseData.data || []); // Set data to responseData.data or an empty array
    } catch (err) {
      setError(err.message + "hello");
    } finally {
      setLoading(false);
    }
  }, [fromDate, start, length]);
  

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // AG Grid column definitions
  const columnDefs = [
    { headerName: "METERNO", field: "METERNO", flex: 1, filter: true, sortable: true },
    { headerName: "MeterLastCommunicated", field: "MeterLastCommunicated", flex: 1, filter: true, sortable: true },
    // Add more columns based on your data structure
  ];

  // Handler for pagination
  const handleNextPage = () => setStart((prevStart) => prevStart + length);
  const handlePreviousPage = () => setStart((prevStart) => Math.max(prevStart - length, 0));

  // Calculate the current page number
  const currentPage = Math.floor(start / length) + 1;
  const totalPages = Math.ceil(recordsTotal / length);

  // Export function for CSV
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
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    // Adjust column widths based on the max length of the column data
    const columnKeys = Object.keys(data[0]); // Get the keys from the first object for column names
    const columnWidths = columnKeys.map(key => {
      const maxLength = Math.max(
        key.length, // Length of the header
        ...data.map(row => (row[key] ? row[key].toString().length : 0)) // Length of the content
      );
      return { wch: maxLength + 10 }; // Adding 2 for some extra padding
    });

    worksheet['!cols'] = columnWidths; // Set the column widths

    XLSX.writeFile(workbook, 'data.xlsx');
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

  // Handle export format change
  const handleExport = () => {
    switch (exportFormat) {
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
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div>
        <label htmlFor="export-format">Export Data As:</label>
        <select
          id="export-format"
          value={exportFormat}
          onChange={(e) => setExportFormat(e.target.value)}
        >
          <option value="">Select format</option>
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
          <option value="pdf">PDF</option>
        </select>
        <button onClick={handleExport} disabled={!exportFormat} style={{ marginLeft: '10px', backgroundColor: 'black', color: 'white' }}>
          Export
        </button>
      </div>

      <div className="ag-theme-alpine" style={{ height: 400, width: '100%', marginTop: '20px' }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={length}
          onGridReady={fetchData}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePreviousPage} disabled={start === 0}>Previous</button>
        <button onClick={handleNextPage} disabled={start + length >= recordsTotal}>Next</button>
        <span style={{ marginLeft: '10px' }}>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default GetNotCommunicated;
