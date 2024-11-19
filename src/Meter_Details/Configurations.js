import { useState,useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import "jspdf-autotable";

const Configurations = () => {
  const [configType, setConfigType] = useState("");
  const [editConfigs, setEditConfigs] = useState("");
  const [meterData, setMeterData] = useState();
  const [rowData, setRowData] = useState([]);
  const [searchKey,setSearchKey]=useState();
  const [valueInput,setValueInput]=useState();
  const [colDefs, setColDefs] = useState([
    { field: 'transactionId', filter: true,headerName:'Transaction ID' },
    { field: 'type', filter: true,headerName:'Type' },
    { field: 'jobName', filter: true,headerName:'Job Name' },
    { field: 'requestFrom', filter: true,headerName:'Request From' },
    { field: 'requestTime', filter: true,headerName:'Request Time' },
    { field: 'responseTime', filter: true,headerName:'Response Time' },
    { field: 'responseData', filter: true,headerName:'Response Data' },
    { field: 'status', filter: true,headerName:'status' }
  ]);
  const [operationMode, setOperationMode] = useState("GET");

  const configOptions = {
    LOAD_CURTAILMENT: [
      { value: "LOAD_CURTAILMENT_STATE", label: "Load Curtailment State" },
      { value: "LOAD_NORMAL", label: "Load Limit Normal (W)" },
      { value: "LOAD_MIN_UNDER_DURATION", label: "Min Under Threshold Duration (Min)" },
      { value: "LOAD_MIN_OVER_DURATION", label: "Min Over Threshold Duration (Min)" },
      { value: "PASSIVE_RELAY_TIME", label: "Passive Relay Time" },
    ],
    GENERAL_CONFIGURATION: [
      { value: "RTC", label: "RTC" },
      { value: "PROFILE_CAPTURE_PERIOD", label: "Profile Capture Period (Min)" },
      { value: "DEMAND_INTEGRATION_PERIOD ", label: "Demand Integration Period (Min)" },
      { value: "BILLING_PERIOD", label: "Billing Day Change" },
      { value: "PUSHIPCONFIG", label: "IP Address" },
      { value: "INSTANT_PUSH_CONFIGTIME", label: "Instant Push" },
      { value: "METERING_MODE", label: "Metering Mode" },
      { value: "MAX_DEMAND_RESET", label: "Max Demand Reset" },
      { value: "EVENT_PUSHIPCONFIG", label: "Event IP Address" },
      { value: "CT_RATIO", label: "CT Ratio" },
      { value: "PT_RATIO", label: "PT Ratio" },
      { value: "APPARENT_ENERGY", label: "Apparent energy computation type" }
    ],
    PRE_PAYMENT_CONFIGURATION: [
      { value: "PAYMENT_MODE", label: "Payment Mode" },
      { value: "LAST_TOCKEN_RECHARGE_AMOUNT", label: "Last token recharge amount" },
      { value: "LAST_TOCKEN_RECHARGE_TIME", label: "Last token recharge time" },
      { value: "BALANCE_TIME", label: "Current Balance Time" },
      { value: "TOTAL_AMOUNT_AT_LAST_RECHARGE", label: "Total Amount At Last Recharge" },
      { value: "BALANCE_AMOUNT", label: "Current Balance Amount" },
    ],
    ACTIVITYCALENDER: [
      { value: "DLMSACONF", label: "Activity Calendar" }
    ],
    PUSH_SCHEDULE_CONFIGURATIONS: [
      { value: "NODEPUSHCONFIGURATION", label: "Node Push Configuration" }
    ],
    ESW_CONFIGURATION: [
      { value: "ESW_CONFIG", label: "ESW Configuration" },
    ],
    LRC_CONFIGURATION: [
      { value: "LRC_CONFIG", label: "LRC Config" },
    ],
  };

  const filteredEditConfigs = configOptions[configType] || [];

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const gridUrl=`/api/server3/UHES-0.0.1/WS/getMeterStatusJobDetailsByJobNameandmeterno?jobname=${configType}&meterno=Z20000127`;

  //SERVICE CALL
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
      console.log('grid data :', (responseData.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const exportCSV = () => {
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
    link.setAttribute('download', 'Configurations.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export function for Excel with adjusted column widths
  const exportExcel = async () => {
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
    saveAs(blob, `Configurations.xlsx`);
};

  // Export function for PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["METERNO", "MeterLastCommunicated"]; // Add more columns based on your data structure
    const tableRows = [];

    rowData.forEach(row => {
      tableRows.push([row.METERNO, row.MeterLastCommunicated]);
      // Add other fields as needed
    });

    doc.autoTable(tableColumn, tableRows);
    doc.save('Configurations.pdf');
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
  }
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
    <div className="container-fluid col-12">
      <form className="col-12">
        <div className="col-sm-4 d-flex flex-wrap mx-auto ">
          <div className="form-check m-1">
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
          <div className="form-check m-1">
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
        </div> <br />
        <div className="d-flex">
          <div className="col-xs-10 col-lg-4">
            <label htmlFor="Configurations">Configurations</label>
            <select
              id="Configurations"
              value={configType}
              className="form-control border border-left-3 border-left-danger"
              onChange={(e) => {
                const selectedConfig = e.target.value;
                setConfigType(selectedConfig);

                const firstOption = configOptions[selectedConfig]?.[0]?.value || "";
                setEditConfigs(firstOption);
              }}
            >
              <option value="">  </option>
              <option value="LOAD_CURTAILMENT">Load Curtailment</option>
              <option value="GENERAL_CONFIGURATION">General Configuration</option>
              <option value="PRE_PAYMENT_CONFIGURATION">PrePayment Configuration</option>
              <option value="ACTIVITYCALENDER">Activity Calendar</option>
              <option value="PUSH_SCHEDULE_CONFIGURATIONS">Push Schedule Configurations</option>
              <option value="ESW_CONFIGURATION">ESW Configuration</option>
              <option value="LRC_CONFIGURATION">LRC Configuration</option>
            </select>
          </div>
          <div className="col-xs-10 col-lg-4">
            <label htmlFor="editconfigs">Get/Set Configurations</label>
            <select
              id="editconfigs"
              value={editConfigs}
              className="form-control border border-left-3 border-left-danger"
              onChange={(e) => setEditConfigs(e.target.value)}
            >
              {filteredEditConfigs.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {operationMode == 'SET' && (
          <div className='col-xs-10 col-lg-4'>
            <label htmlFor="valueInput">Value</label>
            <input type='number' className="form-control" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
          </div>
        )}
        <div className="col-10 text-center mt-4 mx-auto">
          <button className="btn btn-primary" 
          onClick={(e)=>{
          e.preventDefault();
          fetchGridData();
          }}>Submit Request</button>
        </div>
      </form>
      {/* AG GRID CONTAINER */}
      <div className="text-center col-12">
        {
          rowData.length>0 ?
            (
              <div>
                <div className="col-xs-12 mx-auto d-flex flex-wrap mt-4">
                  <div className="d-flex flex-wrap col-xs-10  col-md-6">
                    <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
                    <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
                    <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
                    <button className='btn btn-primary btn-md mr-1' onClick={copyData}>Copy</button>
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
            ) :
            (
              <div className='mt-4 col-md-10 text-center text-danger'>
                No records found...
              </div>
            )
        }
      </div>
    </div>
  );
};

export default Configurations;
