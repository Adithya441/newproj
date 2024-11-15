import React, { useState,useEffect } from 'react';
import './meterreading.css';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const MeterReading = () => {

  const [profileName, setProfileName] = useState('');
  const [requestType, setRequestType] = useState('');
  const [fromDate, setFromDate] = useState('From Date');
  const [toDate, setToDate] = useState('To Date');
  const [rowData,setRowData]=useState([]);
  const [colDefs,setColDefs]=useState([
    // { field: "RTC", filter: true },
    // { field: "Current,Ir", filter: true},
    // { field: "Current,Iy", filter: true },
    // { field: "Current,Ib", filter: true },
    // { field: "Voltage,Vrn", filter: true },
    // { field: "Voltage,Vyn", filter: true },
    // {field:"Voltage,Vbn",filter:true},
    // {field:"Block Energy  Wh Import",filter:true},
    // {field:"Block Energy Wh Export",filter:true},
    // {field:"Block Energy VArhQ1",filter:true},
    // {field:"Block Energy VArhQ2",filter:true},
    // {field:"Block Energy VArhQ3",filter:true},
    // {field:"Block Energy VArhQ4",filter:true},
    // {field:"Block Energy  VAh Import",filter:true},
    // {field:"Block Energy  VAh Export",filter:true},
    // {field:"Status Byte",filter:true},
    // {field:"Average Signal Strength",filter:true}
  ]);
  const [profileOptions,setProfileOptions]=useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { profileName, requestType, fromDate, toDate });
  };

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const profileUrl=`/api/server3/UHES-0.0.1/WS/getAllFepCsvHeaderByMeterManfacturerAndMeterType?meterManfacturer=ZEN-TP&meterType=CT`;

  const buildGridUrl = () => {
    const params = new URLSearchParams({
      meterManfacturer: "ZEN-TP",
      meterNumber: "Z20000127",
      meterType:"CT"
    });
    if (profileName) params.append("profileId", profileName);
    if (requestType) params.append("requestType",requestType);
    if (fromDate) params.append("startdate", fromDate);
    if (toDate) params.append("enddate", toDate);

    // WS/getAllDataByMeterNumberAndProfileIdAndMeterManfacturerAndMeterType?enddate=2024-11-13%2000%3A00&meterManfacturer=ZEN-TP&meterNumber=Z20000127&meterType=CT&profileId=CE&requestType=All&startdate=2024-06-01%2000%3A00

    return `/api/server3/UHES-0.0.1/WS/getAllDataByMeterNumberAndProfileIdAndMeterManfacturerAndMeterType?${params.toString()}`;
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

  useEffect(() => {
    fetchProfileOptions();  
  }, []);

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
      console.log('service data:',responseData.data);
      // setDataStatus((responseData.status));
      setFromDate('');
      setToDate('');
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(()=>{
    fetchGridData();
  },[profileName]);

  useEffect(()=>{
    const dt=Array(rowData);
    const keys = Object.keys(dt);
    console.log('keys:',keys);
    const newColDefs = keys.map(key => ({
      field: key,
      filter: true
    }));
    setColDefs(newColDefs);
    },[rowData]);
  return (
    <div className='col-10 mx-auto mt-5 '>
      <form className="form d-flex flex-wrap" onSubmit={handleSubmit}>
        <div className="col-xs-10 col-md-3">
          <label htmlFor="profileName">*Profile Name</label>
          <select
            id="profileName"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className='form-control border border-left-3 border-danger'
          >
            <option value="">-NA-</option>
            {profileOptions.map((profOption,index)=>
            (
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
            className='form-control border border-left-3 border-danger'
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
            className='form-control border border-left-3 border-danger'
            placeholder='From Date'
          />
        </div>

        <div className="col-xs-10 col-md-3">
          <label htmlFor="toDate">To Date</label>
          <input
            type="datetime-local"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className='form-control border border-left-3 border-danger'
            placeholder='To Date'
          />
        </div><br/>
        <div className='col-10 text-center mt-4 mx-auto'>
          <button type="submit" className="btn btn-primary"onClick={fetchGridData}>Submit</button>
        </div>
      </form>
      {
        rowData.length > 0 ? 
        (
          <div className="container-fluid ag-theme-quartz mt-4 col-md-12" style={{ height: 350, width: "100%" }}>
      <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            pagination={true}
            paginationPageSize={5}
            paginationPageSizeSelector={[5, 10, 15, 20]}
          />
      </div>
        ):
        (
          <div className='mt-4 col-md-10 text-center text-danger'>
            No records found...
          </div>
        )
      }
    </div>
  );
};

export default MeterReading;
