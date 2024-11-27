import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import * as ExcelJS from "exceljs";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import "jspdf-autotable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const FirmwareUpgrade = () => {
  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const firwareUrl = `/api/server3/UHES-0.0.1/WS/getFepFirmwareByMtrMakeAndMtrType`;
  const [firmware, setFirmware] = useState();
  const [searchKey, setSearchKey] = useState('');
  const [firmwareOptions, setFirmwareOptions] = useState([]);
  const getData = () => {

  }
  //SERVICE CALLS
  const fetchFirmwareOptions = async () => {
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

      const dataResponse = await fetch(firwareUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setFirmwareOptions((responseData.data));
      console.log((responseData.data));

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchFirmwareOptions();
  }, []);
  const initialData = [
    { Transaction_ID: "NP:1504241817241275491", Firmware_Version: "$382", Request_Time: "15-04-2024 18:17:24", Response_Time: "07-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275492", Firmware_Version: "$572", Request_Time: "16-04-2024 18:17:24", Response_Time: "08-08-2024 16:18:33", Request_Code: "-" },
    { Transaction_ID: "NP:1504241817241275493", Firmware_Version: "$102", Request_Time: "17-04-2024 18:17:24", Response_Time: "09-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275494", Firmware_Version: "$190", Request_Time: "18-04-2024 18:17:24", Response_Time: "10-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275495", Firmware_Version: "$890", Request_Time: "19-04-2024 18:17:24", Response_Time: "11-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275496", Firmware_Version: "$357", Request_Time: "20-04-2024 18:17:24", Response_Time: "12-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275497", Firmware_Version: "$235", Request_Time: "21-04-2024 18:17:24", Response_Time: "13-08-2024 16:18:33", Request_Code: "-" },
    { Transaction_ID: "NP:1504241817241275498", Firmware_Version: "$645", Request_Time: "22-04-2024 18:17:24", Response_Time: "14-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275499", Firmware_Version: "$643", Request_Time: "23-04-2024 18:17:24", Response_Time: "15-08-2024 16:18:33", Request_Code: "-" },
    { Transaction_ID: "NP:1504241817241275487", Firmware_Version: "$368", Request_Time: "24-04-2024 18:17:24", Response_Time: "16-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275497", Firmware_Version: "$235", Request_Time: "21-04-2024 18:17:24", Response_Time: "13-08-2024 16:18:33", Request_Code: "-" },
    { Transaction_ID: "NP:1504241817241275498", Firmware_Version: "$645", Request_Time: "22-04-2024 18:17:24", Response_Time: "14-08-2024 16:18:33", Request_Code: "Success" },
    { Transaction_ID: "NP:1504241817241275499", Firmware_Version: "$643", Request_Time: "23-04-2024 18:17:24", Response_Time: "15-08-2024 16:18:33", Request_Code: "-" }
  ];
  const [rowData, setRowData] = useState(initialData);

  const [colDefs, setColDefs] = useState([
    { field: "Transaction_ID", filter: true, flex: 4, headerName: "Transaction ID" },
    { field: "Firmware_Version", filter: true, flex: 2, headerName: "Firmware Version" },
    { field: "Request_Time", filter: true, flex: 2, headerName: "Request Time" },
    { field: "Response_Time", filter: true, flex: 2, headerName: "Response Time" },
    { field: "Request_Code", filter: true, flex: 2, headerName: "Response Code" }
  ]);

  const exportCSV = () => {
    const csvData = rowData.map(row => ({
      TransactionID: row.Transaction_ID,
      FirmwareVersion: row.Firmware_Version,
      RequestTime: row.Request_Time,
      ResponseTime: row.Response_Time,
      ResponseCode: row.Request_Code
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'FirmwareUpgrade.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Firmware Upgrade');
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
    saveAs(blob, `FirmwareUpgrade.xlsx`);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Transaction ID", "Firmware Version", "Request Time", "Response Time", "Response Code"];
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.Transaction_ID, row.Firmware_Version, row.Request_Time, row.Response_Time, row.Request_Code]);
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('FirmwareUpgrade.pdf');
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

  const searchData = (e) => {
    const searchValue = e.target.value;
    setSearchKey(searchValue);
    if (searchValue === "") {
      setRowData(initialData);
    } else {
      const filteredData = initialData.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setRowData(filteredData);
    }
  };

  return (
    <div className="container-fluid col-12 ">
      <form className="form  mt-4 mx-auto">
        <div className="col-xs-10 col-md-4">
          <label htmlFor="profileName">
            <span className="text-danger">*</span>Upgrade Firmware
          </label>
          <div className="input-group">
            <div className="border border-left border-left-5 border-danger" ></div>
            <select
              id="profileName"
              className="form-control"
              aria-label="Profile Name" required onChange={(e) => setFirmware(e.target.vaue)}
            >
              <option value="" disabled selected>
                -NA-
              </option>
              <option value="1">Profile 1</option>
              <option value="2">Profile 2</option>
              <option value="3">Profile 3</option>
            </select>
          </div>
        </div>
        <br />
        <div className="col-md-10">
          <p>Current Image Version:</p>
          <p>Meter Firmware Version:{firmware}</p>
        </div>
        <div className='col-8  m-2 text-center mx-auto'>
          <button className='btn btn-primary btn-md' onClick={getData}>Update</button>
        </div>
      </form>
      <div className="d-flex flex-wrap mt-4">
        <div className="d-flex flex-wrap" style={{ gap: '1vw' }}>
          <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
          <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
          <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
          <button className="btn btn-primary btn-md mr-1" onClick={copyData}>Copy</button>
        </div>
        <div className="align-right" style={{ marginLeft: '2vw' }}>
          <input type="text" className="form-control" placeholder="search" value={searchKey} onChange={searchData} />
        </div>
      </div>
      <div className="col-12 mx-auto ag-theme-quartz mt-3" style={{ height: 350, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={5}
        />
      </div>
    </div>
  );
};

export default FirmwareUpgrade;
