import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const PowerConnectDisconnect = ({meternum}) => {
  const [reasonType, setReasonType] = useState();
  const [commentValue, setCommentValue] = useState();
  const [meterStatus, setMeterStatus] = useState('Disconnected');
  const [rowData, setRowData] = useState([]);
  const [searchKey,setSearchKey]=useState();
  const [colDefs] = useState([
    { field: "transactionId", filter: true,flex:2,headerName:"Transaction Id" },
    { field: "requestType", filter: true, flex: 2,headerName:"Comments" },
    { field: "requestTime", filter: true, flex: 2,headerName:"Reason" },
    { field: "requestFrom", filter: true, flex: 2,headerName:"Request From" },
    { field: "responseTime", filter: true, flex: 2,headerName:"Request Time" },
    { field: "responseCode", filter: true, flex: 2,headerName:"Response Time" },
    {field:"",filter:true,flex:2,headerName:"Response Code"}
  ]);
  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const gridUrl= `/api/server3/UHES-0.0.1/WS/getMeterConnectDisconnectData`;
  
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
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchGridData();
  }, [reasonType,commentValue,meterStatus]);

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', padding: '2vw' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2vh', width: '100%' }}>
    <div className="col-xs-10 col-md-4">
      <label htmlFor="reasonInput">Reason</label>
      <div className="input-group">
        <div className="border border-left border-left-5 border-danger"></div>
        <select
          id="reasonInput"
          value={reasonType}
          className="form-control"
          onChange={(e) => setReasonType(e.target.value)}
          required
        >
          <option value="SURRENDER_OF_PREMISES">Surrender of Premises</option>
          <option value="NON_PAYMENT">Non-Payment</option>
          <option value="OTHERS">Others</option>
          <option value="NEW_CONNECTION">New Connection</option>
          <option value="CONNECTION_ON_SR_CARD">Connection on SR Card</option>
          <option value="PAYMENT_DONE">Payment Done</option>
          <option value="OTHERS">Others</option>
        </select>
      </div>
    </div>

    <div className="col-xs-10 col-md-4">
      <label htmlFor="commentInput">Comment</label>
      <div className="input-group">
        <div className="border border-left border-left-5 border-danger"></div>
        <textarea
          className="form-control"
          id="commentInput"
          rows="3"
          required
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        ></textarea>
      </div>
    </div>

    <div className="col-xs-10 col-md-4">
      <label htmlFor="meterStatusInput">Meter Status</label>
      <input id="meterStatusInput" value={meterStatus} className="form-control" readOnly />
    </div>
  </div>

  <div className="text-center mt-4">
    <button
      className="btn btn-primary btn-md"
      onClick={(e) => {
        e.preventDefault();
        fetchGridData();
      }}
    >
      GetStatus
    </button>
  </div>

  {rowData && (
    <div className="col-12 d-flex flex-column">
      <div className="col-3 align-right"style={{marginLeft:'1vw'}}>
        <input
          type="text"
          className="form-control"
          placeholder="search"
          value={searchKey}
          onChange={searchData}
        />
      </div>
      <div
        className="container-fluid col-12 ag-theme-quartz m-2 mx-auto"
        style={{ height: 350, width: '100%' }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector={[5, 10, 15, 20]}
        />
      </div>
    </div>
  )}
</div>
  );
}

export default PowerConnectDisconnect;