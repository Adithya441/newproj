import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
const SecuritySetup = ({meternum}) => {
  const [searchKey, setSearchKey] = useState();
  const [securityKey, setSecurityKey] = useState("");
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "transactionId", filter: true, headerName: "Transaction ID" },
    { field: "CommandName", filter: true, headerName: "Command Name" },
    { field: "CommandType", filter: true, headerName: "Command Type" },
    { field: "requestTime", filter: true, headerName: "Request Time" },
    { field: "responseTime", filter: true, headerName: "Response Time" },
    { field: "Response", filter: true, headerName: "Response" }
  ]);
  //SERVICE URLS 
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';

  //SERVICE CALLS
  const buildGridUrl = () => {
    const params = new URLSearchParams({
      meterNumber: meternum,
      method: "SET"
    });
    if (securityKey) params.append("commandType", securityKey);

    return `/api/server3/UHES-0.0.1/WS/getsecuritySetupJobQuerybyMeterno?${params.toString()}`;
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
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchGridData();
  }, []);
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
      <form className='form-inline mt-4 mx-auto mb-5'>
        <div className="col-xs-10 col-md-4">
          <label htmlFor="profileName">
            Security Keys <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <div className="border border-left border-left-5 border-danger" ></div>
            <select
              id="profileName"
              className="form-control"
              aria-label="Profile Name" required value={securityKey} onChange={(e) => setSecurityKey(e.target.value)}
            >
              <option value="" selected>
                -NA-
              </option>
              <option value="uspassword">Utility setting password</option>
              <option value="frpassword">Firmware password</option>
              <option value="mrpassword">MR password</option>
              <option value="global_password">Global password</option>
            </select>
          </div>
        </div>
        <br />
        <div className='col-8  m-2 text-center mx-auto'>
          <button className='btn btn-primary btn-md'
            onClick={(e) => {
              e.preventDefault();
              fetchGridData();
            }}>Send Request</button>
        </div>
      </form>
      {rowData ? (
        <div>
        <div className="d-flex flex-wrap mt-4">
          <div className="d-flex flex-wrap" style={{ marginLeft:'1vw',gap: '1vw'}}>
            <button className="btn btn-primary btn-md mr-1" onClick={exportExcel}>Excel</button>
            <button className='btn btn-primary btn-md mr-1' onClick={exportPDF}>PDF</button>
            <button className='btn btn-primary btn-md mr-1' onClick={exportCSV}>CSV</button>
            <button className='btn btn-primary btn-md mr-1' onClick={copyData}>Copy</button>
          </div>
          <div className="align-right"style={{ marginLeft: '2vw' }}>
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
          <div className="text-center text-danger mx-auto">
            No data found...
          </div>
        )}
    </div>
  );
}

export default SecuritySetup;