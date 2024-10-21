"use client"

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const CHUNK_SIZE = 5 // Number of items to fetch in each request
const AUTO_LOAD_INTERVAL = 500 // 0.5 seconds

export default function ProgressiveFetcher() {
  const [rowData, setRowData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentMin, setCurrentMin] = useState(11)
  const [hasMore, setHasMore] = useState(true)
  const [autoLoad, setAutoLoad] = useState(true)

  const columnDefs = useMemo(() => [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Value', field: 'value', sortable: true, filter: true }
  ], [])

  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 100,
    resizable: true,
  }), [])

  const fetchData = useCallback(async (minSeq, maxSeq) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`http://10.10.61.52:5454/MasterDatabySequence?minseq=${minSeq}&maxseq=${maxSeq}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const newData = await response.json()
      setRowData(prevData => [...prevData, ...newData])
      setCurrentMin(maxSeq + 1)
      setHasMore(newData.length === CHUNK_SIZE)
    } catch (err) {
      setError('Failed to fetch data')
      console.error('Error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      fetchData(currentMin, currentMin + CHUNK_SIZE - 1)
    }
  }, [isLoading, hasMore, currentMin, fetchData])

  useEffect(() => {
    fetchData(currentMin, currentMin + CHUNK_SIZE - 1)
  }, []) // Fetch initial data on component mount

  useEffect(() => {
    let interval
    if (autoLoad && hasMore) {
      interval = setInterval(() => {
        loadMore()
      }, AUTO_LOAD_INTERVAL)
    }
    return () => clearInterval(interval)
  }, [autoLoad, hasMore, loadMore])

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Progressive Data Fetcher</h1>
        <p className="text-gray-600">Automatically fetches data in chunks every 0.5 seconds</p>
      </header>
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="auto-load"
            checked={autoLoad}
            onChange={(e) => setAutoLoad(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="auto-load" className="text-sm text-gray-700">Auto-load every 0.5 seconds</label>
        </div>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="ag-theme-alpine w-full h-[400px]">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection='multiple'
        />
      </div>
      {isLoading && <p className="text-gray-500 text-center py-2">Loading...</p>}
      {!hasMore && <p className="text-gray-500 text-center mt-4">No more data to load.</p>}
    </div>
  )
}