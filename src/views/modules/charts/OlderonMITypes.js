import React, { useEffect, useState } from 'react';

const OlderonMITypes = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = '/api/server3/UHES-0.0.1/WS/gettingOlderBasedOnMI?officeid=3459274e-f20f-4df8-a960-b10c5c228d3e';

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

      // Process and manipulate data
      const processedData = (responseData.xData || []).map((name, index) => {
        const moreThanOneMonth = responseData.yData[0]?.data[index] || 0;
        const lessThanOneMonth = responseData.yData[1]?.data[index] || 0;

        // Additional data manipulation can be done here
        return {
          name,
          moreThanOneMonth,
          lessThanOneMonth,
        };
      });

      setChartData(processedData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBarClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedData(null);
  };

  if (loading) return <p>Loading...</p>;
  if (chartData.length === 0) return <p>No data available.</p>;

  const maxValue = Math.max(...chartData.flatMap(d => [d.moreThanOneMonth, d.lessThanOneMonth]));

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Meter Communication Status Based on MI Types</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {chartData.map((data, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "100px", textAlign: "right" }}>{data.name}</span>
            <div style={{ display: "flex", width: "300px", height: "20px" }}>
              <div
                style={{
                  width: `${(data.moreThanOneMonth / maxValue) * 100}%`,
                  backgroundColor: "rgb(35, 240, 12)",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={() => handleBarClick(data)}
                aria-label={`More than one month: ${data.moreThanOneMonth}`}
              />
              <div
                style={{
                  width: `${(data.lessThanOneMonth / maxValue) * 100}%`,
                  backgroundColor: "rgb(28, 148, 142)",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={() => handleBarClick(data)}
                aria-label={`Less than one month: ${data.lessThanOneMonth}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <span style={{ display: "inline-block", width: "20px", height: "20px", backgroundColor: "rgb(35, 240, 12)", marginRight: "10px" }}></span>
        <span>More than one month</span>
        <span style={{ display: "inline-block", width: "20px", height: "20px", backgroundColor: "rgb(28, 148, 142)", margin: "0 10px 0 20px" }}></span>
        <span>Less than one month</span>
      </div>
      {showModal && selectedData && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            maxWidth: "300px"
          }}>
            <h3>Details</h3>
            <p><strong>Category:</strong> {selectedData.name}</p>
            <p><strong>More than one month:</strong> {selectedData.moreThanOneMonth}</p>
            <p><strong>Less than one month:</strong> {selectedData.lessThanOneMonth}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OlderonMITypes;
