import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DynamicConfigurations = ({ meternum, meterty, meterman }) => {
  const [configType, setConfigType] = useState();
  const [configOptions, setConfigOptions] = useState([]);
  const [editConfig, seteditConfig] = useState();
  const [meterData, setMeterData] = useState();
  const [rowData, setRowData] = useState([]);
  const [operationMode, setOperationMode] = useState("GET");
  const [valueInput, setValueInput] = useState();
  const [searchKey, setSearchKey] = useState();
  const [colDefs, setColDefs] = useState([
    { field: 'transactionId', filter: true, headerName: "Transaction ID" },
    { field: 'type', filter: true, headerName: "Type" },
    { field: 'requestTime', filter: true, headerName: "Request Time" },
    { field: 'responseFrom', filter: true, headerName: "Request From" },
    { field: 'response', filter: true, headerName: "Response" },
    { field: 'responseTime', filter: true, headerName: "Response Time" },
    { field: 'responseCode', filter: true, headerName: "Status" }
  ]);

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const configsUrl = `/api/server3/UHES-0.0.1/WS/getConfigurationsBasedOnClassId?ClassId=${configType}&Flag=${operationMode}&MeterMake=${meterman}&MeterType=${meterty}`;
  //GENERATING GRID SERVICE URL DYNAMICALLY
  const buildGridUrl = () => {
    const params = new URLSearchParams({
      MeterNo: meternum,
    });
    if (editConfig) params.append("commandType", editConfig);
    if (operationMode) params.append("method", operationMode);
    if (valueInput) params.append("value", valueInput);
    return `/api/server3/UHES-0.0.1/WS/getAllMeterStatusJobDetailsBasedOnMeterNo?${params.toString()}`;
  };
  //SERVICE CALLS
  const fetchConfigOptions = async () => {
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

      const dataResponse = await fetch(configsUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();

      setConfigOptions(Array.isArray(responseData.data) ? responseData.data : Array(responseData.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchConfigOptions();
  }, [configType, operationMode]);

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

  const exportCSV = () => {
    const csvData = rowData.map(row => ({
      TransactionID: row.transactionId,
      Type: row.type,
      RequestTime: row.requestTime,
      RequestFrom: row.responseFrom,
      Response: row.response,
      ResponseTime: row.responseTime,
      Status: row.responseCode
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'DynamicConfiguration.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Dynamic Configuration');
    const headers = Object.keys(rowData[0] || {});
    const title = worksheet.addRow(['Dynamic Configuration']);
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
    saveAs(blob, `DynamicConfiguration.xlsx`);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Transaction ID", "Type", "Request Time", "Request From", "Response", "Response Time", "Status"];
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.transactionId, row.type, row.requestTime, row.responseFrom, row.response, row.responseTime, row.responseCode]);
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('DynamicConfiguration.pdf');
  };

  const copyData = () => {
    const textData = rowData
      .map(row =>
        `${row.transactionId}\t${row.type}\t${row.requestTime}\t${row.responseFrom}\t${row.response}\t${row.responseTime}\t${row.responseCode}`
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
    <div className="container-fluid col-12">
      <form className="col-12">
        <div className="d-flex justify-content-center mb-4">
          <div className="form-check mx-3">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="GET"
              checked={operationMode === "GET"}
              onChange={(e) => setOperationMode(e.target.value)}
            />
            <label className="form-check-label" htmlFor="gridRadios1">
              Get
            </label>
          </div>
          <div className="form-check mx-3">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="SET"
              checked={operationMode === "SET"}
              onChange={(e) => setOperationMode(e.target.value)}
            />
            <label className="form-check-label" htmlFor="gridRadios2">
              Set
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="col-lg-4">
            <label htmlFor="Configurations">Configurations</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <select
                id="Configurations"
                value={configType}
                className="form-control border border-left-3 border-left-danger"
                onChange={(e) => {
                  setConfigType(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option>-NA-</option>
                <option value="1">Data</option>
                <option value="8">Clock</option>
                <option value="9">Script Table</option>
                <option value="20">Activity Calendar</option>
                <option value="22">Single Action Object</option>
                <option value="40">IP Address</option>
                <option value="70">Disconnect Control</option>
                <option value="71">Limiter</option>
                <option value="115">Token Gateway</option>
                <option value="112">Credit</option>
                <option value="113">Charge</option>
                <option value="111">Account</option>
                <option value="11">Special Day</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <label htmlFor="editConfig">Get/Set Configurations</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <select
                id="editConfig"
                value={editConfig}
                className="form-control border border-left-3 border-left-danger"
                onChange={(e) => seteditConfig(e.target.value)}
              >
                <option>-NA-</option>
                {(configOptions || []).map((confOpt, index) => (
                  <option key={index} value={confOpt.OBISNAME}>
                    {confOpt.OBISNAME}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {operationMode === "SET" && (
          <div className="col-lg-4 mx-auto mb-4">
            <label htmlFor="valueInput">Value</label>
            <div className="input-group">
              <div className="border border-left-danger border-left-5" ></div>
              <input
                type="number"
                id="valueInput"
                className="form-control border border-left-3 border-left-danger"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }}
          >
            Submit Request
          </button>
        </div>
      </form>
      <div className="text-center col-12">
        {rowData ? (
          <div className="container-fluid col-12">
            <div className="d-flex flex-wrap justify-content-between mt-4">
              <div className="d-flex flex-wrap gap-2" style={{ marginLeft: '1vw' }}>
                <button className="btn btn-primary btn-md" onClick={exportExcel}>Excel</button>
                <button className="btn btn-primary btn-md" onClick={exportPDF}>PDF</button>
                <button className="btn btn-primary btn-md" onClick={exportCSV}>CSV</button>
                <button className="btn btn-primary btn-md" onClick={copyData}>Copy</button>
              </div>
              <div style={{ marginRight: '1vw' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                  value={searchKey}
                  onChange={searchData}
                />
              </div>
            </div>
            <div
              className="col-12 ag-theme-quartz mx-auto mt-3"
              style={{ height: 350, width: "100%" }}
            >
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                pagination={true}
                paginationPageSize={5}
              />
            </div>
          </div>
        ) : (
          <div className="mt-4 col-md-10 text-center text-danger mx-auto">
            No records found...
          </div>
        )}
      </div>
    </div>
  );
}

export default DynamicConfigurations;