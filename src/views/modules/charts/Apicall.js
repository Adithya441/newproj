// Apicall.js
import React, { useEffect } from 'react';

const Apicall = ({ setData }) => {
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = '/api/server3/UHES-0.0.1/WS/getcommunicationstatus?officeid=100-0';

  const fetchData = async () => {
    try {
      // Step 1: Authenticate and get the access token
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

      if (!tokenResponse.ok) {
        throw new Error('Failed to authenticate');
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // Step 2: Use the access token to fetch data
      const dataResponse = await fetch(baseUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!dataResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await dataResponse.json();
      setData(responseData); // Pass data to the parent
    } catch (err) {
      console.error(err.message); // Handle error as needed
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // No return statement, as this component doesn't render anything
  return null;
};

export default Apicall;
