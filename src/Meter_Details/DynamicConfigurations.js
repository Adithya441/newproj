import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DynamicConfigurations = ({meternum}) => {
  const [configType, setConfigType] = useState();
  const [configOptions, setConfigOptions] = useState([]);
  const [editConfig, seteditConfig] = useState();
  const [meterData, setMeterData] = useState();
  const [rowData, setRowData] = useState([]);
  const [operationMode, setOperationMode] = useState("GET");
  const [valueInput, setValueInput] = useState();
  const [searchKey,setSearchKey]=useState();
  const [colDefs, setColDefs] = useState([
    { field: 'transactionId', filter: true },
    { field: 'type', filter: true },
    { field: 'requestTime', filter: true },
    { field: 'responseFrom', filter: true },
    { field: 'response', filter: true },
    { field: 'responseTime', filter: true },
    { field: 'responseCode', filter: true }
  ]);

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const configsUrl = `/api/server3/UHES-0.0.1/WS/getConfigurationsBasedOnClassId?ClassId=${configType}&Flag=${operationMode}&MeterMake=ZEN-TP&MeterType=CT`;
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
      console.log('grid data :', (responseData.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchGridData();
  }, [operationMode]);
  
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();

    const maxLengths = rowData.reduce((acc, row) => {
      Object.keys(row).forEach((key, i) => {
        const value = row[key].toString().length;
        acc[i] = acc[i] ? Math.max(acc[i], value) : value;
      });
      return acc;
    }, []);

    worksheet['!cols'] = maxLengths.map(length => ({ wch: length + 5 }));

    const header = Object.keys(rowData[0]);
    header.forEach((key, index) => {
      const cellAddress = XLSX.utils.encode_cell({ c: index, r: 0 });
      worksheet[cellAddress].s = {
        fill: {
          fgColor: { rgb: "FFFF00" }
        }
      };
    });

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "FirmwareUpgrade.xlsx");
  };


  const exportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "FirmwareUpgrade.csv";
    link.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Firmware Upgrade Data", 20, 10);
    doc.autoTable({
      head: [["Transaction ID", "Firmware Version", "Request Time", "Response Time", "Request Code"]],
      body: rowData.map((row) => [
        row.Transaction_ID,
        row.Firmware_Version,
        row.Request_Time,
        row.Response_Time,
        row.Request_Code,
      ]),
    });
    doc.save("FirmwareData.pdf");
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
              className='form-control border border-left-3 border-left-danger'
              onChange={(e) => {
                setConfigType(e.target.value);
                console.log(e.target.value);
              }} >
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
          <div className="col-xs-10 col-lg-4">
            <label htmlFor="editConfig">Get/Set Configurations</label>
            <select
              id="editConfig"
              value={editConfig}
              className='form-control border border-left-3 border-left-danger'
              onChange={(e) => seteditConfig(e.target.value)} >
              <option>-NA-</option>
              {(configOptions || []).map((confOpt, index) => (
                <option key={index} value={confOpt.OBISNAME}>
                  {confOpt.OBISNAME}
                </option>
              ))}
            </select>
          </div>
        </div><br />
        {operationMode == 'SET' && (
          <div className='col-xs-10 col-lg-4'>
            <label htmlFor="valueInput">Value</label>
            <input type='number' className="form-control" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
          </div>
        )}
        <div className="col-10 text-center mt-4 mx-auto">
          <button className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }
            }>Submit Request</button>
        </div>
      </form>
      {/* AG GRID CONTAINER */}
      <div className="text-center col-12">
        {
          rowData ?
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
}

export default DynamicConfigurations;