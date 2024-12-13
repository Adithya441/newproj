"use client";

import React, { useState, useCallback } from 'react';
import { Tabs } from 'antd';
import MeterDetails from './MeterDetails';
import DetailPage from './Detailpage';

const Metertabs = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [officeid, setOfficeid] = useState('3459274e-f20f-4df8-a960-b10c5c228d3e');
  const [tabs, setTabs] = useState([
    {
      key: '1',
      label: 'Meters Data',
      closable: false,
    },
  ]);

  const handleMeterClick = useCallback((rowData) => {
    const newKey = `meter-${rowData.meterno}`;
    const existingTab = tabs.find((tab) => tab.key === newKey);

    if (!existingTab) {
      if (tabs.length < 5) {
        setTabs((prevTabs) => [
          ...prevTabs,
          {
            key: newKey,
            label: `Meter ${rowData.meterno}`,
            closable: true,
            data: rowData,
          },
        ]);
        setActiveKey(newKey);
      } else {
        alert("You can only open up to 5 tabs.");
      }
    } else {
      setActiveKey(newKey);
    }
  }, [tabs]);

  const handleOfficeChange= (officeId)=>{
    setOfficeid(officeId);
    console.log(officeId + 'hehehe');
  }


  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      const newTabs = tabs.filter((tab) => tab.key !== targetKey);
      setTabs(newTabs);
      if (targetKey === activeKey) {
        const lastTab = newTabs[newTabs.length - 1];
        setActiveKey(lastTab ? lastTab.key : '1');
      }
    }
  };

  return (
    <Tabs
      type="editable-card"
      hideAdd
      activeKey={activeKey}
      onChange={setActiveKey}
      onEdit={onEdit}
      items={tabs.map((tab) => ({
        key: tab.key,
        label: tab.label,
        children: tab.key === '1' 
          ? <MeterDetails onMeterClick={handleMeterClick} officeidChange={handleOfficeChange} />
          : <DetailPage data={tab.data} office={officeid}/>,
        closable: tab.closable,
      }))}
    />
  );
};

export default Metertabs;
