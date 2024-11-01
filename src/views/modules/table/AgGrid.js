import React, { useState, useEffect, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

export default function ProgressiveFetcher() {
  const [rowData, setRowData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadedData, setLoadedData] = useState([]); // Store the fetched data locally
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 100; // Number of rows per page
  const [datas] = useState({
    miServerAppUniqueID: "MI_APP_SERVER_0",
    meterNumberSet: ["LT1700108"]
  });

  const columnDefs = [
    { field: 'meterNumber', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'ipAddress', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'portNumber', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'meterManfacturer', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'authKey' , sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  }},
    { field: 'chyperKey', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'fwPwd', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'usPwd', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'mrPwd', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'meterID', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'fieldDeviceID', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'fieldDeviceNumber', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'meterMake', sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  } },
    { field: 'meterType' , sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  }},
    { field: 'fieldDeviceType' , sortable: true, filter: true, valueFormatter: (params) => {
      // Check if the value is null, undefined, or an empty string
      if (params.value === null || params.value === undefined || params.value === "") {
          return "N/A"; // Return "N/A" if no data
      }
      return params.value; // Otherwise, return the actual value
  }},
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

  // Function to fetch the data in chunks
  const fetchDataInChunks = async (minSeq, maxSeq) => {
    try {
      const response = await axios.post(
        `/api/server2/MasterDatabySequence?minseq=${minSeq}&maxseq=${maxSeq}`,
        datas,
        {
        headers: { 'Content-Type': 'application/json' },
       }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
      return [];
    }
  };

  // Function to fetch all data progressively
  const fetchAllData = async () => {
    const chunkSize = 200; // Define the chunk size
    let minSeq = 1;
    let maxSeq = chunkSize;
    let allData = [];
    
    while (minSeq <= totalRecords) {
      const chunkData = await fetchDataInChunks(minSeq, maxSeq);
      allData = [...allData, ...chunkData];
      setLoadedData(allData); // Store progressively loaded data
      minSeq = maxSeq + 1;
      maxSeq = Math.min(maxSeq + chunkSize, totalRecords);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchTotalCount();
  }, []);

  useEffect(() => {
    if (totalRecords > 0) {
      fetchAllData(); // Start fetching data in chunks
    }
  }, [totalRecords]);

  // Handle pagination change
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    const startRow = (newPage - 1) * pageSize;
    const endRow = newPage * pageSize;
    setRowData(loadedData.slice(startRow, endRow)); // Load the data for the current page
  };

  useEffect(() => {
    onPageChange(1); // Load the first page initially
  }, [loadedData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meter Details</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span>{error}</span>
        </div>
      )}

      <div className="ag-theme-alpine w-full h-[calc(100vh-100px)]">
        {loading && <p>Loading...</p>}
        
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          paginationPageSize={pageSize}
          domLayout="autoHeight"
        />
      </div>

      {/* Pagination Control */}
      <div className="mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-black-500 text-white rounded" style={{backgroundColor:'black'}}
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {Math.ceil(totalRecords / pageSize)}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalRecords / pageSize)}
          className="px-4 py-2 bg-black-500 text-white rounded" style={{backgroundColor:'black'}}
        >
          Next
        </button>
      </div>
    </div>
  );
}
