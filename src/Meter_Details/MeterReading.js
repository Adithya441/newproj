import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const MeterReading = () => {
  const [profileName, setProfileName] = useState('');
  const [requestType, setRequestType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);
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

  return (
    <div className="col-10 mx-auto mt-5">
      <form className="form d-flex flex-wrap">
        <div className="col-xs-10 col-md-3">
          <label htmlFor="profileName">*Profile Name</label>
          <select
            id="profileName"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className="form-control border border-left-3 border-danger"
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
        <div
          className="container-fluid ag-theme-quartz mt-4 col-md-12"
          style={{ height: 350, width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            pagination={true}
            paginationPageSize={5}
            paginationPageSizeSelector={[5,10,15,20,30]}
          />
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
