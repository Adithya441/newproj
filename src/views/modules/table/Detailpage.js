import React from 'react';
import { Tabs } from 'antd';
import MeterInformation from '../../../Meter_Details/MeterInformation';
import DataOnDemand from '../../../Meter_Details/DataOnDemand';
import MeterReading from '../../../Meter_Details/MeterReading';
import Configurations from '../../../Meter_Details/Configurations';
import FirmwareUpgrade from '../../../Meter_Details/FirmwareUpgrade';
import SecuritySetup from '../../../Meter_Details/SecuritySetup';
import Alarms from '../../../Meter_Details/Alarms';
import TransactionLog from '../../../Meter_Details/TransactionLog';
import DynamicConfigurations from '../../../Meter_Details/DynamicConfigurations';
import DynamicOnDemand from '../../../Meter_Details/DynamicOnDemand';
import PowerConnectDisconnect from '../../../Meter_Details/PowerConnectDisconnect';

const DetailPage = ({ data,office }) => {
  const tabItems = [
    {
      label: 'Meter Information',
      key: 'meterinfo',
      children: <MeterInformation meternum={data.meterno} meterInter={data.meterInterface}/>,
    },
    {
      label: 'Data On Demand',
      key: 'dataondemand',
      children: <DataOnDemand meternum={data.meterno} />,
    },
    {
      label: 'Meter Reading',
      key: 'meterreading',
      children: <MeterReading meternum={data.meterno} meterman={data.metermake} meterty={data.metertype}/>,
    },
    {
      label: 'Configurations',
      key: 'configurations',
      children: <Configurations meternum={data.meterno} />,
    },
    {
      label: 'Firmware Upgrade',
      key: 'firmwareupgrade',
      children: <FirmwareUpgrade meternum={data.meterno} />,
    },
    {
      label: 'Security Setup',
      key: 'securitysetup',
      children: <SecuritySetup meternum={data.meterno} />,
    },
    {
      label: 'Alarms',
      key: 'alarms',
      children: <Alarms meternum={data.meterno} officeid={office}/>,
    },
    {
      label: 'Transaction Log',
      key: 'transactionlog',
      children: <TransactionLog meternum={data.meterno} officeid={office}/>,
    },
    {
      label: 'Dynamic Configurations',
      key: 'dynamicconfigurations',
      children: <DynamicConfigurations meternum={data.meterno} meterty={data.metertype} meterman={data.metermake} />,
    },
    {
      label: 'Dynamic OnDemand',
      key: 'dynamicondemand',
      children: <DynamicOnDemand meternum={data.meterno} meterty={data.metertype} meterman={data.metermake}/>,
    },
    {
      label: 'Power Connect Disconnect',
      key: 'powerconndisconn',
      children: <PowerConnectDisconnect meternum={data.meterno} />,
    },
  ];

  return (
    <div className="container-fluid mt-3" style={{marginBottom:'20px'}}>
      <Tabs defaultActiveKey="meterinfo" items={tabItems} />
    </div>
  );
};

export default DetailPage;
