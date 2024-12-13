import { useState, useEffect } from 'react';

const MeterInformation = ({meternum, meterInter}) => {
  //SERVICE URLS 
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
  const baseUrl = `/api/server3/UHES-0.0.1/WS/getdevicedetailsWithNodeStatus?meterNumber=${meternum}&meterinterface=${meterInter}`;

  // const [meterNo,setMeterNo]=useState('');
  // const [meterType,setMeterType]=useState('CT');
  // const [meterManufacture,setMeterManufacture]=useState('');
  // const [meterInterface,setMeterInterface]=useState('GPRS');
  // const [paymentType,setPaymentType]=useState('PREPAID');
  // const [relayStatus,setRelayStatus]=useState('NA');
  const [meterData, setMeterData] = useState();
  const [loading, setLoading] = useState(true);
  //FETCHING METER DATA
  const fetchMeterData = async () => {
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

      const dataResponse = await fetch(baseUrl, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setMeterData((responseData.data)[0]);
      console.log((responseData.data)[0]);

    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeterData();
    console.log('data fetched:', meterData);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      {meterData && Object.keys(meterData).length > 0 ? (
        <div className="container-fluid col-lg-8 mx-auto row border border-2 text-dark p-3 m-1" style={{ zIndex: 40, boxShadow: "4px grey" }}>
          <div className="d-flex justify-content-between align-content-center col-lg-5 col-xs-10 flex-column">
            <ul className="list-unstyled p-3 ml-3 mt-2">
              <li>Meter No:{meterData.meterid}</li>
              <li>Meter Manufacture:{meterData.metermanufacture}</li>
              <li>Meter Interface:{meterData.meterinterface}</li>
              <li>Firmware Version:{meterData.firmwareversion}</li>
              <li>Meter Installed Date:{meterData.mtrInstallationDate}</li>
            </ul>
          </div>
          <div className="d-flex justify-content-between align-content-center col-lg-5 col-xs-10 flex-column">
            <ul className="list-unstyled p-3 ml-3 mt-2">
              <li>Relay Status:NA</li>
              <li>Meter Type:{meterData.metertype}</li>
              <li>Meter Category:{meterData.metercategory}</li>
              <li>Meter Last Communicated:{meterData.mtrLastComm}</li>
            </ul>
          </div>
        </div>
      ) : (
        <p>No data found for this meter.</p>
      )}
    </div>
  );
}

export default MeterInformation;