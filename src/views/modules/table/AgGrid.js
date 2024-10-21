import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import { Loader2, AlertCircle } from 'lucide-react';

export default function LargeData() {
  const [gridApi, setGridApi] = useState(null);
  const [totalRecords, setTotalRecords] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas] = useState({
    miServerAppUniqueID: "MI_APP_SERVER_0",
    meterNumberSet: ["LT1700108"]
  });

  const columnDefs = [
    { field: 'meterNumber',valueFormatter: params => params.value || 'N/A', sortable:true},
    {  field: 'ipAddress' ,valueFormatter: params => params.value || 'N/A'},
    { headerName: 'Port Number', field: 'portNumber',valueFormatter: params => params.value || 'N/A' },
    {  field: 'meterManfacturer',valueFormatter: params => params.value || 'N/A' },
    { headerName: 'Auth Key', field: 'authKey',valueFormatter: params => params.value || 'N/A' },
    { headerName: 'Cipher Key', field: 'chyperKey' ,valueFormatter: params => params.value || 'N/A'},
    { headerName: 'Firmware Password', field: 'fwPwd',valueFormatter: params => params.value || 'N/A' },
    { headerName: 'User Password', field: 'usPwd',valueFormatter: params => params.value || 'N/A' },
    { headerName: 'Master Password', field: 'mrPwd',valueFormatter: params => params.value || 'N/A' },
    { headerName: 'Meter ID', field: 'meterID',valueFormatter: params => params.value || 'N/A' },
    { headerName: 'Field Device ID', field: 'fieldDeviceID' },
    { headerName: 'Field Device Number', field: 'fieldDeviceNumber' },
    { headerName: 'Meter Make', field: 'meterMake' },
    { headerName: 'Meter Type', field: 'meterType' },
    { headerName: 'Field Device Type', field: 'fieldDeviceType' },
  ];

  const fetchTotalCount = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/server1/getMasterDataCount', datas, {
        headers: { 'Content-Type': 'application/json' },
      });
      setTotalRecords(response.data.count-1);
    } catch (error) {
      console.error('Error fetching total record count:', error);
      setError('Failed to fetch total record count. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [datas]);

  useEffect(() => {
    fetchTotalCount();
  }, [fetchTotalCount]);

  // Define the datasource only after totalRecords is updated
  const datasource = {
    getRows: (params) => {
      const { startRow, endRow } = params;
  
      // Adjust minseq and maxseq
      const minseq = startRow + 1;
      const maxseq = Math.min(endRow, totalRecords);
  
      if (startRow >= totalRecords) {
        // No more data to load
        params.successCallback([], totalRecords);
        return;
      }
  
      setLoading(true);
      setError(null);
  
      axios.post(
        '/api/server2/MasterDatabySequence',
        datas, {
          params: { minseq, maxseq },
          headers: { 'Content-Type': 'application/json' },
        }
      )
        .then(response => {
          const rowsThisBlock = response.data || [];
          const lastRow = startRow + rowsThisBlock.length >= totalRecords ? totalRecords : -1;
  
          // If we have reached the last row, provide the total record count to stop further calls
          params.successCallback(rowsThisBlock, lastRow);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data. Please try again later.');
          params.failCallback();
        })
        .finally(() => {
          setLoading(false);
        });
    },
  };
  

  // Set the datasource only when totalRecords is defined and gridApi is available
  useEffect(() => {
    if (gridApi && totalRecords > 0) {
      gridApi.setGridOption('datasource', datasource);
    }
  }, [gridApi, totalRecords]);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Grid</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}
      <div className="ag-theme-alpine w-full h-[calc(100vh-100px)]">
        {loading && (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
        )}
        <AgGridReact
          columnDefs={columnDefs}
          rowModelType="infinite"
          pagination={true}
          paginationPageSize={20}
          cacheBlockSize={100}
          paginationPageSizeSelector={[20,50,100]}
          onGridReady={onGridReady}
          domLayout='autoHeight'
        />
      </div>
    </div>
  );
}


