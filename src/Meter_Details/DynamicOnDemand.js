import { AgGridReact } from 'ag-grid-react';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useEffect } from 'react';
import './styles.css';

const DynamicOnDemand = ({meternum}) => {
  const [searchKey, setSearchKey] = useState();
  const [profileOptions, setProfileOptions] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [dataStatus, setDataStatus] = useState();
  const [profileName,setProfileName]=useState();
  const [fromDate,setFromDate]=useState();
  const [toDate,setToDate]=useState();
  const [colDefs, setColDefs] = useState([
    { field: "transactionId", filter: true,flex:2 },
    { field: "requestType", filter: true,flex:2 },
    { field: "requestTime", filter: true,flex:2 },
    { field: "requestFrom", filter: true,flex:2 },
    { field: "responseTime", filter: true,flex:2 },
    { field: "responseCode", filter: true,flex:2 }
  ]);
  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const profileUrl = `/api/server3/UHES-0.0.1/WS/getProfileNamesWithClassId?ClassId=7&Class_type=Reading&MeterMake=ZEN-TP&MeterType=CT`;

  const buildGridUrl = () => {
    const params = new URLSearchParams({
      meterNumber: meternum,
    });
    if (profileName) params.append("requestType", profileName);
    if (fromDate) params.append("createDateStart", fromDate);
    if (toDate) params.append("createDateEnd", toDate);

    return `/api/server3/UHES-0.0.1/WS/getdataByMeterNumberAndRequestType?${params.toString()}`;
  };

  //SERVICE CALLS
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
      setProfileOptions((responseData.data));
      console.log((responseData.data));

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
      setDataStatus((responseData.message));
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

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();

    // Set auto width for columns
    const maxLengths = rowData.reduce((acc, row) => {
      Object.keys(row).forEach((key, i) => {
        const value = row[key].toString().length;
        acc[i] = acc[i] ? Math.max(acc[i], value) : value;
      });
      return acc;
    }, []);

    worksheet['!cols'] = maxLengths.map(length => ({ wch: length + 5 }));

    // Add background color for headers
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
  return (
    <div className="container-fluid col-12 p-1">
      {/* Form */}
      <div className='form col-xs-10 mb-3'>
        <div className="align-left col-md-4">
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Profile Name:</label>
          <select className="custom-select mr-sm-2 border border-left-danger border-2" id="inlineFormCustomSelect" value={profileName} onChange={(e) => setProfileName(e.target.value)}>
            <option value="">-NA-</option>
            {profileOptions.map((profOption, index) => (
              <option key={index} value={profOption.SHORT_CODE}>
                {profOption.OBIS_NAME}
              </option>
            ))}
          </select>
        </div><br />
        {(profileName === "EOB" || profileName === "LP" || profileName === "ED")
          && (
            <div className='d-flex flex-row justify-content-between col-xs-10 align-left'>
              <div className='col-xs-10 col-md-4'>
                <label htmlFor='fromDate'>
                  From Date
                </label>
                <div className='input-group'>
                  <div className="border border-left border-left-5 border-danger" ></div>
                  <input
                    type="month"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className='form-control border border-left-3 border-danger'
                    placeholder='January,2024'
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
                    type="month"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className='form-control border border-left-3 border-danger'
                    placeholder='December,2024'
                  />
                </div>
              </div>
            </div>
          )} <br/>
        <div className='text-center'>
          <button className='btn btn-primary'
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }}>Send Request</button>
        </div>
      </div>
      {/* Grid Container */}
      {(rowData) && (
        <div>
        <div className="d-flex flex-wrap mt-4">
          <div className="d-flex flex-wrap"style={{ marginLeft:'1vw',gap: '1vw'}}>
            <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
            <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
            <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
          </div>
          <div className="align-right" style={{ marginLeft: '2vw' }}>
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
      (!rowData && dataStatus==="Success") && (
        <div className='text-danger mx-auto text-center'>
          No data found...
        </div>
      )
    } 
    {(dataStatus==="Failure") && (
        <div className='text-danger mx-auto text-center'>
          Loading Grid...
          </div>
      )}
    </div>
  );
}

export default DynamicOnDemand;
