import React, { useState, useEffect, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import loadingGif from '../../../assets/img2.gif';
import * as XLSX from 'xlsx'; // Import for Excel
import jsPDF from 'jspdf'; // Import for PDF
import 'jspdf-autotable'; // Import for using autotable with jsPDF
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import GetDataAvailability from './GetDataAvailability';

// Profile Form for selection
const ProfileForm = ({ onProfileSelect }) => {
  const [officeId] = useState("3459274e-f20f-4df8-a960-b10c5c228d3e");
  const [profiles] = useState([
    { value: "Daily Load Profile", label: "Daily Load Profile" },
    { value: "Block Load Profile", label: "Block Load Profile" },
    { value: "Instantaneous Profile", label: "Instantaneous Profile" },
    { value: "Monthly Billing", label: "Monthly Billing" },
    { value: "Instd Push Profile", label: "Instd Push Profile" },
  ]);
  const [selectedProfile, setSelectedProfile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileSelect(selectedProfile);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      padding: '10px 15px',
      maxWidth: '100%'
    }}>
      <div style={{ marginRight: '10px' }}>
        <label htmlFor="officeId" style={{ fontWeight: 'bold', color: '#333' }}>Office ID:</label>
        <input id="officeId" type="text" value={officeId} readOnly style={{
          marginLeft: '10px',
          padding: '5px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          backgroundColor: '#e6f7ff'
        }} />
      </div>
      <div style={{ marginRight: '10px' }}>
        <label htmlFor="profile" style={{ fontWeight: 'bold', color: '#333' }}>Profile:</label>
        <select 
          id="profile" 
          value={selectedProfile} 
          onChange={(e) => setSelectedProfile(e.target.value)}
          style={{
            marginLeft: '10px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#e6f7ff'
          }}
        >
          <option value="">-NA-</option>
          {profiles.map((profile) => (
            <option key={profile.value} value={profile.value}>
              {profile.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" style={{
        borderRadius: '8px',
        padding: '5px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer'
      }}>Submit</button>
    </form>
  );
};

// Stacked Bar Chart with clickable dates
const StackedBarChart = ({ profile, onDateClick }) => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!profile) return;

      const endpointMap = {
        "Daily Load Profile": "/api/server3/UHES-0.0.1/WS/getDailyLoadProfileDataAvaliability",
        "Block Load Profile": "/api/server3/UHES-0.0.1/WS/getBlockLoadProfileDataAvaliability",
        "Instantaneous Profile": "/api/server3/UHES-0.0.1/WS/getInstantaneousDataAvaliability",
        "Monthly Billing": "/api/server3/UHES-0.0.1/WS/getEOBProfileDataAvaliability",
        "Instd Push Profile": "/api/server3/UHES-0.0.1/WS/getINSTDPushProfileDataAvaliability"
      };

      try {
        const tokenResponse = await fetch('/api/server3/UHES-0.0.1/oauth/token', {
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
        const { access_token } = await tokenResponse.json();

        const response = await fetch(`${endpointMap[profile]}?officeid=3459274e-f20f-4df8-a960-b10c5c228d3e`, {
          headers: { Authorization: `Bearer ${access_token}` },
        });

        const { xData, yData } = await response.json();
        setChartOptions({
          chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            events: {
              dataPointSelection: (e, chartContext, { dataPointIndex }) => {
                const selectedDate = xData[dataPointIndex];
                const formattedDate = selectedDate.replace(/-/g, ''); // Format date to yyyyMMdd
                const months = {
                  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
                  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
                };
              
                const day = formattedDate.slice(0, 2); // Extract day
                const month = formattedDate.slice(2, 5); // Extract month abbreviation
                const year = formattedDate.slice(5); // Extract year
              
                const datess = `${year}${months[month]}${day}`;
                onDateClick(datess);
              }
            }
          },
          xaxis: { categories: xData || [] },
          colors: ['#10B981', '#8B5CF6'],
          legend: { position: 'top' },
          title: { text: profile, align: 'center' }
        });
        setChartSeries(yData.map((item) => ({ name: item.name, data: item.data })));
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [profile, onDateClick]);

  return (
    <div style={{ width: '100%', height: '400px', margin: '0 auto' }}>
      {chartSeries.length > 0 ? (
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height="100%" />
      ) : (
        <p style={{ textAlign: 'center', color: '#666' }}>Please select a profile to display the chart.</p>
      )}
    </div>
  );
};



// Main DataAvailability Component with pagination logic
const DataAvailability = () => {
  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [modal,setModal] = useState(false);
  

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setSelectedDate("");
  };

  const handleClose = () => {
    setModal(false);
  }

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setModal(true);
  };

  return (
    <div style={{ padding: '10px 20px' }}>
      <h3 style={{ color: '#007bff', fontSize: '18px' }}>Data Availability Profiles</h3>
      <ProfileForm onProfileSelect={handleProfileSelect} />
      <StackedBarChart profile={selectedProfile} onDateClick={handleDateClick} />
      {modal && selectedDate && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1050,
            backgroundColor: '#fff',
            width: '1000px',
            borderRadius: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            padding: '1em',
            marginLeft: '125px',
          }}
        >
          {/* Modal Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5 id="contained-modal-title-vcenter">{selectedProfile} - {selectedDate}</h5>
            <button onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ maxHeight: '70vh', width: '970px', overflowY: 'auto' }}>
            <GetDataAvailability selecteddate={selectedDate} profile={selectedProfile}/>
          </div>

          {/* Modal Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1em' }}>
            <button onClick={handleClose} style={{ padding: '0.5em 1em', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataAvailability;