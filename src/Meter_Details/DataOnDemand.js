import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useEffect } from 'react';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import "jspdf-autotable";
import './styles.css';


const DataOnDemand = ({meternum}) => {
  const [searchKey, setSearchKey] = useState("");
  const [profileOptions, setProfileOptions] = useState([]);
  const [profileName, setProfileName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rowData, setRowData] = useState([]);
  const [fromDate,setFromDate]=useState('');
  const [toDate,setToDate]=useState('');
  const profileArr=Array('LP','COE','CE','ED','EOB','NRE','OE','PF','TE','VE');
  const [dataStatus,setDataStatus]=useState();
  const [colDefs] = useState([
    { field: "transactionId", filter: true, flex: 2 },
    { field: "requestType", filter: true, flex: 2 },
    { field: "requestTime", filter: true, flex: 2 },
    { field: "requestFrom", filter: true, flex: 2 },
    { field: "responseTime", filter: true, flex: 2 },
    { field: "responseCode", filter: true, flex: 2 }
  ]);
  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const profileUrl = `/api/server3/UHES-0.0.1/WS/getProfileNamesForOndemand?cmdName=CONN%2CDISCONN`;

  const buildGridUrl = () => {
    const params = new URLSearchParams({
      meterNumber: meternum,
    });
    if (profileName) params.append("requestType", profileName);
    if (fromDate) params.append("createDateStart", fromDate);
    if (toDate) params.append("createDateEnd", toDate);

    return `/api/server3/UHES-0.0.1/WS/getdataByMeterNumberAndRequestType?${params.toString()}`;
  };

  const fetchProfileOptions = async () => {
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

      const dataResponse = await fetch(profileUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setProfileOptions(responseData.data);

    } catch (err) {
      console.error(err.message);
    }
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
      setDataStatus((responseData.status));
      setFromDate('');
      setToDate('');
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchProfileOptions();
    fetchGridData(); 
  }, []);
 console.log('prof name',profileName ,typeof profileName,profileName in profileArr);
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
    link.setAttribute('download', 'DataOnDemand.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export function for Excel with adjusted column widths
  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');
    const headers = Object.keys(rowData[0] || {});
    const title = worksheet.addRow([`Data on Demand`]); // Replace with your title text
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
    saveAs(blob, `DataOnDemand.xlsx`);
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
    doc.save('DataOnDemand.pdf');
  };

  return (
    <div className="container-fluid col-xs-12 p-1">
      <form className='form mt-4 mx-auto'>
        <div className="col-xs-10 col-md-4">
          <label htmlFor="profileName">
            Profile Name <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <div className="border border-left border-left-5 border-danger" ></div>
            <select
              id="profileName"
              className="form-control"
              aria-label="Profile Name" required
              onChange={(e) => setProfileName(e.target.value)}
            >
              <option value="" disabled selected>
                -NA-
              </option>
              {profileOptions.map((profOption, index) => (
                <option key={index} value={profOption.CMD_SHORT_NAME}>
                  {profOption.FEP_COMMAND_NAME}
                </option>
              ))}
            </select>
          </div>
        </div><br />
        { (profileName==="LP" || profileName==="COE" || profileName==="CE" || profileName==="ED" || profileName==="EOB" || profileName==="NRE" || profileName==="OE" || profileName==="PF" || profileName==="TE" || profileName==="VE") 
        && (
          <div className='d-flex flex-row justify-content-between col-xs-10 mx-auto'>
          <div className='col-xs-10 col-md-4'>
            <label htmlFor='fromDate'>
              From Date
            </label>
            <div className='input-group'>
            <div className="border border-left border-left-5 border-danger" ></div>
            <input
              type="datetime-local"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className='form-control border border-left-3 border-danger'
              placeholder='From Date'
            />
            </div>
          </div>
          <div className='col-xs-10 col-md-4'>
            <label htmlFor='toDate'>
              To Date
            </label>
            <div className='input-group'>
            <div className="border border-left border-left-5 border-danger" ></div>
            <input
              type="datetime-local"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className='form-control border border-left-3 border-danger'
              placeholder='To Date'
            />
            </div>
          </div>
          </div>
        )}
        <div className='col-8  m-2 text-center mx-auto mt-3'>
          <button className='btn btn-primary btn-md'
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }}
          >
            Send Request
          </button>
        </div>
      </form>
      {dataStatus && (
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
        <div className="container-fluid ag-theme-quartz mt-4 col-md-12 m-2 mx-auto" style={{ height: 350, width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            pagination={true}
            paginationPageSize={5}
            paginationPageSizeSelector={[5, 10, 15, 20]}
          />
        </div>
      </div>
      ) 
    }
    {
      (!rowData && dataStatus) && (
        <div className='text-danger mx-auto text-center'>
          Loading Grid...
        </div>
      )
    } 
    {!dataStatus && (
        <div className='text-danger mx-auto text-center'>
          No data found...
        </div>
      )}
    </div>
  );
};

export default DataOnDemand;
