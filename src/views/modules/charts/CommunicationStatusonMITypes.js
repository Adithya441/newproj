import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Modal, Button } from 'react-bootstrap';
import GetCommunicationStatusonMITypes from './GetCommunicationStatusonMITypes';

const CommunicationStatusonMITypes = ({officeid}) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [categorys, setCategory] = useState(null);
  const [selectlabel, setSelectlabel] = useState(null);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = `/api/server3/UHES-0.0.1/WS/getmeterCommunicationStatusBasedOnMI?officeid=${officeid}`;

  const fetchData = async () => {
    try {
      const tokenResponse = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: 'Admin',
          password: 'Admin@123',
          client_id: 'fooClientId',
          client_secret: 'secret',
        }),
      });
  
      if (!tokenResponse.ok) throw new Error('Failed to authenticate');
      const { access_token: accessToken } = await tokenResponse.json();
  
      const dataResponse = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
  
      // Check if data exists and is valid
      if (!responseData.xData) {
          setLoading(false)
          return <p>No Data available</p>
      }
      else{
  
      const labels = responseData.xData || [];
      const communicatedData = responseData.yData[0]?.data || [];
      const notCommunicatedData = responseData.yData[1]?.data || [];
  
      const percentageData = labels.map((_, index) => {
        const total = communicatedData[index] + notCommunicatedData[index];
        const commPercent = total ? ((communicatedData[index] / total) * 100).toFixed(2) : 0;
        const notCommPercent = total ? ((notCommunicatedData[index] / total) * 100).toFixed(2) : 0;
        return [parseFloat(commPercent), parseFloat(notCommPercent)];
      });
  
      setChartData({
        options: {
          chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            toolbar: {
              show: true, 
              tools: {
                download: true,
              },
              export: {
                csv: {
                  filename: `Meter Communication Status Based on MI Types`,
                },
                svg: {
                  filename: `Meter Communication Status Based on MI Types`,
                },
                png: {
                  filename: `Meter Communication Status Based on MI Types`,
                },
              },
            },
            events: {
              dataPointSelection: (event, chartContext, config) => {
                const { dataPointIndex, seriesIndex } = config;
                const category = labels[dataPointIndex];
                const value = percentageData[dataPointIndex][seriesIndex];
                const label = seriesIndex === 0 ? 'Meter Communicated' : 'Meter Not Communicated';
                setCategory(category);
                setSelectlabel(label);
                setSelectedData({ category, value, label });
                setShowModal(true);
              },
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            categories: labels,
          },
          yaxis: {
            max: 100,
          },
          colors: ['rgb(35, 240, 12)', 'rgb(28, 148, 142)'],
          tooltip: {
            y: {
              formatter: (val) => `${val}%`,
            },
          },
          legend: {
            position: 'top',
          },
        },
        series: [
          {
            name: 'Meter Communicated',
            data: percentageData.map((d) => d[0]),
          },
          {
            name: 'Meter Not Communicated',
            data: percentageData.map((d) => d[1]),
          },
        ],
      });
  
      setLoading(false);
    }
    } catch (err) {
      console.error(err.message);
      setChartData(null); // Set chartData to null to indicate no data
      setLoading(false);
    }
  };
  

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [officeid]);

  if (loading) return <p>Loading...</p>;
  if (!chartData) return <h5 style={{margin:'110px 120px'}}>No data available.</h5>;

  const handleClose = () => setShowModal(false);

  return (
    <div style={{ border:'2px solid black', borderRadius:'12px', paddingRight:'10px', height:'50vh'}}>
      <h5 style={{marginLeft:'45px', fontWeight:'bold'}}>Meter Communication Status Based on MI Types</h5>
      <div style={{ width: '35vw', height: '40vh' }}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>

      {showModal && (
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
            <h5 id="contained-modal-title-vcenter">{selectlabel}</h5>
            <button onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ maxHeight: '70vh', width: '970px', overflowY: 'auto' }}>
            <GetCommunicationStatusonMITypes selectedLabel={selectlabel} selectedCategory={categorys} office={officeid}/>
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

export default CommunicationStatusonMITypes;