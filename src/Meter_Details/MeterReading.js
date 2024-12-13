import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { saveAs } from "file-saver";
import * as ExcelJS from "exceljs";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MeterReading = () => {
  const [profileName, setProfileName] = useState('');
  const [requestType, setRequestType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);
  const [searchKey, setSearchKey] = useState();
  const [profileOptions, setProfileOptions] = useState([]);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const profileUrl = `/api/server3/UHES-0.0.1/WS/getAllFepCsvHeaderByMeterManfacturerAndMeterType?meterManfacturer=ZEN-TP&meterType=CT`;

  const buildGridUrl = () => {
    const params = new URLSearchParams({
      meterManfacturer: "ZEN-TP",
      meterNumber: "Z20000127",
      meterType: "CT",
    });
    if (profileName) params.append("profileId", profileName);
    if (requestType) params.append("requestType", requestType);
    if (fromDate) params.append("startdate", fromDate);
    if (toDate) params.append("enddate", toDate);

    return `/api/server3/UHES-0.0.1/WS/getAllDataByMeterNumberAndProfileIdAndMeterManfacturerAndMeterType?${params.toString()}`;
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

      const data = responseData.data;
      if (data && data.length > 0) {
        const newColDefs = Object.keys(data[0]).map((key) => ({
          field: key,
          filter: true,
          sortable: true,
        }));
        setColDefs(newColDefs);
      }
      setRowData(data);
      console.log('service data:',responseData.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchProfileOptions();
  }, []);
  
  const exportCSV = () => {
    if (!rowData || rowData.length === 0 || !colDefs || colDefs.length === 0) {
      alert("No data to export.");
      return;
    }

    // Generate CSV headers dynamically
    const headers = colDefs.map(col => col.field).join(',');

    // Generate CSV rows dynamically
    const csvRows = rowData.map(row =>
      colDefs.map(col => row[col.field] || "").join(',')
    );

    const csvContent = [headers, ...csvRows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'MeterReadingData.csv');
  };

  const exportExcel = async () => {
    if (!rowData || rowData.length === 0 || !colDefs || colDefs.length === 0) {
      alert("No data to export.");
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Meter Reading Data');

    // Add headers dynamically
    const headers = colDefs.map(col => col.field);
    worksheet.addRow(headers).eachCell(cell => {
      cell.font = { bold: true };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFD700' }
      };
    });

    // Add rows dynamically
    rowData.forEach(row => {
      const values = colDefs.map(col => row[col.field] || '');
      worksheet.addRow(values);
    });

    // Adjust column widths dynamically
    headers.forEach((header, index) => {
      const maxLength = Math.max(
        header.length,
        ...rowData.map(row => row[header]?.toString()?.length || 0)
      );
      worksheet.getColumn(index + 1).width = maxLength + 2;
    });

    // Save file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'MeterReadingData.xlsx');
  };

  const exportPDF = () => {
    if (!rowData || rowData.length === 0 || !colDefs || colDefs.length === 0) {
      alert("No data to export.");
      return;
    }
    const doc = new jsPDF();
    const tableHeaders = colDefs.map(col => col.field);
    const tableRows = rowData.map(row =>
      colDefs.map(col => row[col.field] || "")
    );

    doc.autoTable({
      head: [tableHeaders],
      body: tableRows,
    });
    doc.save('MeterReadingData.pdf');
  };

  const copyData = () => {
    if (!rowData || rowData.length === 0) {
      alert("No data to copy.");
      return;
    }
    const headers = colDefs.map((col) => col.field);
    const textData = [
      headers.join('\t'),
      ...rowData.map((row) =>
        headers.map((header) => row[header] || "").join('\t')
      ),
    ].join('\n');

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
    <div className="container-fluid col-xs-12 p-1">
      <form className="form d-flex flex-wrap">
        <div className="col-xs-10 col-md-3">
          <label htmlFor="profileName">*Profile Name</label>
          <select
            id="profileName"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className="form-control border border-left-3 border-danger"
            style={{marginRight:'5px',width:'15vw'}}
          >
            <option value="">-NA-</option>
            {profileOptions.map((profOption, index) => (
              <option key={index} value={profOption.profileName}>
                {profOption.profileName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-xs-10 col-md-3">
          <label htmlFor="requestType">*Request Type</label>
          <select
            id="requestType"
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            className="form-control border border-left-3 border-danger"
            style={{marginRight:'5px',width:'15vw'}}
          >
            <option value="">-NA-</option>
            <option value="All">All</option>
            <option value="O">On Demand</option>
            <option value="S">Scheduler</option>
            <option value="SP">Scheduler PUSH</option>
          </select>
        </div>

        <div className="col-xs-10 col-md-3">
          <label htmlFor="fromDate">From Date</label>
          <input
            type="datetime-local"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="form-control border border-left-3 border-danger"
            style={{marginRight:'5px',width:'15vw'}}
          />
        </div>

        <div className="col-xs-10 col-md-3">
          <label htmlFor="toDate">To Date</label>
          <input
            type="datetime-local"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="form-control border border-left-3 border-danger"
            style={{marginRight:'5px',width:'15vw'}}
          />
        </div>
        <div className="col-10 text-center mt-4 mx-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={fetchGridData}
          >
            Submit
          </button>
        </div>
      </form>
      {rowData.length > 0 ? (
        <div>
        <div className="col-xs-12 mx-auto d-flex flex-wrap mt-4">
          <div className="d-flex flex-wrap col-xs-10  col-md-6 gap-1">
            <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
            <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
            <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
            <button className='btn btn-primary btn-md mr-1' onClick={copyData}>Copy</button>
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
      ) : (
        <div className="mt-4 col-md-10 text-center text-danger">
          No records found...
        </div>
      )}
    </div>
  );
};

export default MeterReading;
