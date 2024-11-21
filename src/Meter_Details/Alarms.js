import { useState,useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Alarms = ({meternum}) => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [searchKey,setSearchKey]=useState();
  const [rowData, setRowData] = useState();

  const [colDefs] = useState([
    { field: "Transaction_ID", filter: true,headerName:"Alarm Name",flex:4 },
    { field: "Request_Type", filter: true,headerName:"Alarm Time",flex:4 },
    { field: "Request_Time", filter: true,headerName:"HES Time",flex:4 },
  ]);

  //SERVICE URLS
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const gridUrl=`/api/server3/UHES-0.0.1/WS/getAlarms?fromdate=${fromDate}&meterno=${meternum}&office=3459274e-f20f-4df8-a960-b10c5c228d3e&todate=${toDate}`;
  
  //SERVICE CALLS
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
      setFromDate('');
      setToDate('');
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchGridData();
  }, [fromDate,toDate]);

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
    <div className="col-12">
      <form className="form col-md-10 mx-auto">
        <div className="d-flex flex-wrap">
          <div className="col-xs-8 col-md-6" style={{ margin: '2vw 0', padding: '1vw' }}>
            <label htmlFor="fromDate">From Date</label>
            <input type='date' id="fromDate" value={fromDate} className='form-control border border-left-3 border-left-danger' onChange={(e) => setFromDate(e.target.value)} />
          </div>
          <div className="col-xs-8 col-md-6" style={{ margin: '2vw 0', padding: '1vw' }}>
            <label htmlFor="toDate">To Date</label>
            <input type="date" id="toDate" value={toDate} className='form-control border border-left-3 border-left-danger' onChange={(e) => setToDate(e.target.value)} />
          </div>
        </div>
        <div className="text-center col-8 mx-auto mt-4">
          <button className="btn btn-primary btn-md" 
          onClick={(e)=>{
            e.preventDefault();
            fetchGridData();
          }}
          >Submit</button>
        </div>
      </form>
      {
        rowData ? (
          <div>
          <div className="d-flex flex-wrap mt-4">
            <div className="d-flex flex-wrap" style={{marginLeft:'1vw', gap: '1vw'}}>
              <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
              <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
              <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
            </div>
            <div className="align-right" style={{ marginLeft: '2vw' }}>
              <input type="text" className="form-control" placeholder="search" value={searchKey} onChange={searchData} />
            </div>
          </div>
          <div className="container-fluid ag-theme-quartz mt-3 col-md-12 m-2 mx-auto" style={{ height: 350, width: "100%" }}>
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
            <div className="text-danger text-center m-2">
              No records found...
            </div>
          )
      }
    </div>
  );
}

export default Alarms;