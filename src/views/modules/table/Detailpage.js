import React from 'react';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import Alarms from '../../../Meter_Details/Alarms';
import Configurations from '../../../Meter_Details/Configurations';
import DataOnDemand from '../../../Meter_Details/DataOnDemand';
import DynamicConfigurations from '../../../Meter_Details/DynamicConfigurations';
import DynamicOnDemand from '../../../Meter_Details/DynamicOnDemand';
import FirmwareUpgrade from '../../../Meter_Details/FirmwareUpgrade';
import MeterInformation from '../../../Meter_Details/MeterInformation';
import MeterReading from '../../../Meter_Details/MeterReading';
import SecuritySetup from '../../../Meter_Details/SecuritySetup';
import TransactionLog from '../../../Meter_Details/TransactionLog';
import PowerConnectDisconnect from '../../../Meter_Details/PowerConnectDisconnect';

const DetailPage = () => {

  const [meterdetType, setmeterdetType] = useState('meterinfo');

  const { encryptedno } = useParams(); // Get the encrypted parameter from the URL
  const decryptData = (encryptedData) => {
    if (!encryptedData) {
      console.error('No encrypted data provided.');
      return null;
    }
  
    try {
      const decodedData = decodeURIComponent(encryptedData); // Decode the URL-safe string
      const bytes = CryptoJS.AES.decrypt(decodedData, 'secret-key');
      const originalData = bytes.toString(CryptoJS.enc.Utf8); // Convert bytes to the original string
      return originalData;
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  };

  const meterno = decryptData(encryptedno); // Decrypt the encryptedno

  const renderComponent = () => {
    switch (meterdetType) {
      case 'meterinfo':
        return <MeterInformation meternum={meterno} />;
      case 'dataondemand':
        return <DataOnDemand meternum={meterno}/>;
      case 'meterreading':
        return <MeterReading meternum={meterno}/>;
      case 'configurations':
        return <Configurations meternum={meterno}/>;
      case 'firmwareupgrade':
        return <FirmwareUpgrade meternum={meterno}/>;
      case 'securitysetup':
        return <SecuritySetup meternum={meterno}/>;
      case 'alarms':
        return <Alarms meternum={meterno}/>;
      case 'transactionlog':
        return <TransactionLog meternum={meterno}/>;
      case 'dynamicconfigurations':
        return <DynamicConfigurations meternum={meterno}/>;
      case 'dynamicondemand':
        return <DynamicOnDemand meternum={meterno}/>;
      case 'powerconndisconn':
        return <PowerConnectDisconnect meternum={meterno}/>;
      default:
        return <MeterInformation meternum={meterno}/>;
    }
  };

  return (
    <div style={{marginBottom:'30px'}} >
      <div className='container-fluid'>
        <ul className='d-flex flex-wrap flex-row justify-content-between list-unstyled'>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('meterinfo')}>Meter Information</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('dataondemand')}>Data On Demand</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('meterreading')}>Meter Reading</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('configurations')}>Configurations</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('firmwareupgrade')}>Firmware Upgrade</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('securitysetup')}>Security Setup</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('alarms')}>Alarms</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('transactionlog')}>Transaction Log</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('dynamicconfigurations')}>Dynamic Configurations</button>
          </li>
          <li>
            <button className='btn btn-secondary' onClick={() => setmeterdetType('dynamicondemand')}>Dynamic OnDemand</button>
          </li>
          <li>
          <button className='btn btn-secondary' onClick={()=>setmeterdetType('powerconndisconn')}>Power Connect Disconnect</button>
          </li>
        </ul>
      </div>
      <div className='container-fluid mt-3 m-1'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default DetailPage;
