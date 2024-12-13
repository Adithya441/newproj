import React, { useState, useEffect,useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './MeterDetails.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { Form, Row, Col, Button } from "react-bootstrap";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ExcelJS from 'exceljs';
import { TreeSelect, Spin } from 'antd'

const renameKeys = (data, keyMap) => {
  return data.map((item) => {
    // Create a new object with renamed keys
    const newItem = {
      [keyMap.title]: item.text,
      [keyMap.value]: item.id,
      [keyMap.code]: item.code,
    };

    // If children exist, recursively rename keys in children
    if (item.inc) {
      newItem[keyMap.children] = renameKeys(item.inc, keyMap);
    }

    return newItem;
  });
};

function MeterDetails({onMeterClick, officeidChange }) {
  const tokenUrl = '/api/server3/UHES-0.0.1/oauth/token';
 
  const [loading, setLoading] = useState(false);
  const [meterData, setMeterData] = useState(null);
  const [manufactures, setManufactures] = useState([]);
  const [types, setTypes] = useState([]);
  const [interfaces, setInterfaces] = useState([]);
  const [start, setStart] = useState(0);
  const [recordsTotal, setRecordsTotal] = useState(0);
  const [grid, setGrid] = useState(false);
  const [selectedValue, setSelectedValue] = useState('3459274e-f20f-4df8-a960-b10c5c228d3e');
  const [submitted, setSubmitted] = useState(false);
 
  const [selectedManufacture, setSelectedManufacture] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedInterface, setSelectedInterface] = useState('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');
  const [selectedRelayStatus, setSelectedRelayStatus] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [office, setOffice] = useState('3459274e-f20f-4df8-a960-b10c5c228d3e');
  const length = 10;
 
  const columnDefs = [
    { headerName: "Meter No", field: "meterno", onCellClicked: (params) => {
      onMeterClick(params.data);
    }},
    { headerName: "Meter Type", field: "metertype" },
    { headerName: "Meter Manufacture", field: "metermake" },
    { headerName: "Meter Interface", field: "meterInterface" },
    { headerName: "Payment Type", field: "paymenttype" },
    { headerName: "Relay Status", field: "relaystatus" },
  ];

 
  
 
  const data = [{
    "code": "Fluentgrid",
    "text": "Fluentgrid",
    "id": "3459274e-f20f-4df8-a960-b10c5c228d3e",
    "inc": [
        {
            "code": "Vishakhapatnam",
            "text": "FG LOCAL",
            "id": "94ca1bc1-6fb2-459e-acf8-8c943ca7bd5a",
            "inc": [
                {
                    "code": "Rushikonda",
                    "text": "Rushikonda",
                    "id": "194ba864-ba77-4442-abf9-e5ddc7bd4a16",
                    "inc": [
                        {
                            "code": "FGRF_Wirepas",
                            "text": "FGRF_Wirepas",
                            "id": "072ec111-14f4-4eb0-958d-acd3f3b03603",
                            "inc": []
                        },
                        {
                            "code": "00121",
                            "text": "FG-Smart Meter Lab",
                            "id": "20a080b9-4f4e-4a51-9feb-d88ec09b90d8",
                            "inc": [
                                {
                                    "code": "FG-AMI_Smart_Meter_Lab_Wall",
                                    "text": "FG-AMI_Smart_Meter_Lab_Wall",
                                    "id": "4c53f194-268d-42c9-99c4-cd8520050dbb",
                                    "inc": []
                                },
                                {
                                    "code": "FG-AMI_Smart_Meter_Lab_Stand",
                                    "text": "FG-AMI Smart Meter Lab Test Bench",
                                    "id": "a2059d97-4aed-41d0-b1b4-350e5b6e21de",
                                    "inc": [
                                        {
                                            "code": "STREET_LIGHT",
                                            "text": "Street Light",
                                            "id": "a85a8884-a85f-4b72-9ce2-d7d6c4d2a143",
                                            "inc": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "code": "ESKOM",
                            "text": "ISKRAEMECO",
                            "id": "28a14582-5416-40cf-b1b5-cc147a8f7ace",
                            "inc": []
                        },
                        {
                            "code": "Cyan AMISP",
                            "text": "Cyan AMISP",
                            "id": "28e465ed-c351-454f-9ca8-4f97205599f3",
                            "inc": [
                                {
                                    "code": "Schniederami",
                                    "text": "Schniederami",
                                    "id": "0e2a7a11-f2fd-46a3-8fad-42e884b9dbf9",
                                    "inc": []
                                },
                                {
                                    "code": "Genusami",
                                    "text": "Genusami",
                                    "id": "981f7326-8562-4821-a685-791989e24525",
                                    "inc": []
                                }
                            ]
                        },
                        {
                            "code": "TINYMESH AMISP",
                            "text": "TINYMESH AMISP",
                            "id": "34d7e675-d70c-47b5-a835-809f3460ec9d",
                            "inc": [
                                {
                                    "code": "TM-CPS",
                                    "text": "TM-CAPITAL",
                                    "id": "270528a0-4d71-4125-84c2-a2117584e4d1",
                                    "inc": []
                                },
                                {
                                    "code": "TM-VTK",
                                    "text": "TM-VTK",
                                    "id": "89e12ae5-1366-41b2-95e5-1582e8bac2cf",
                                    "inc": []
                                },
                                {
                                    "code": "TM-ALLIED",
                                    "text": "TM-ALLIED",
                                    "id": "e050bdea-86b1-4dc3-a4c9-42b3e730cda9",
                                    "inc": []
                                }
                            ]
                        },
                        {
                            "code": "TATAPOWER AMISP",
                            "text": "TATAPOWER AMISP",
                            "id": "4dfd5a57-a92d-4e25-b5c5-725b9ecf5c83",
                            "inc": []
                        },
                        {
                            "code": "VijayEle",
                            "text": "VijayEle",
                            "id": "5a19fba7-f2e4-453d-bca5-c9662ad21313",
                            "inc": []
                        },
                        {
                            "code": "HPLAMISP",
                            "text": "HPLAMISP",
                            "id": "5fd1ea95-1ac7-4a9b-b2e8-b5e5241ff50d",
                            "inc": []
                        },
                        {
                            "code": "PGCIL HPL",
                            "text": "PGCIL HPL",
                            "id": "66fcd4cb-1de6-4268-b81e-ed0c87837798",
                            "inc": []
                        },
                        {
                            "code": "ALLIED_AMISP",
                            "text": "ALLIED_AMISP",
                            "id": "774054e5-dd42-41b7-bb2e-ebae8766f675",
                            "inc": [
                                {
                                    "code": "VISIONTK",
                                    "text": "VISIONTK",
                                    "id": "4e21c1f5-1cb7-4c19-80ea-13c971aa5c89",
                                    "inc": []
                                },
                                {
                                    "code": "ALLIED_SP",
                                    "text": "ALLIED_SP",
                                    "id": "8b9afcf4-cb83-451d-98ff-21a6804aa734",
                                    "inc": []
                                }
                            ]
                        },
                        {
                            "code": "MPAdani",
                            "text": "MPAdani",
                            "id": "794c74d4-c2bf-4eb7-ac3e-e0d6cb66ec18",
                            "inc": []
                        },
                        {
                            "code": "Bundu",
                            "text": "Bundu",
                            "id": "7aede65f-cc4f-458f-b05e-8e6c4a5cbede",
                            "inc": []
                        },
                        {
                            "code": "FG_AMISP_1",
                            "text": "FG_AMISP_1",
                            "id": "7e0a879d-efcd-4858-99ad-30c408c96f22",
                            "inc": []
                        },
                        {
                            "code": "MP-Jabhalpur",
                            "text": "MP-Jabhalpur",
                            "id": "866143ae-acb8-4cec-a499-cbc3fbe5390a",
                            "inc": []
                        },
                        {
                            "code": "FGAMISP",
                            "text": "FGAMISP",
                            "id": "8c543aa7-f8f3-44ff-b64b-5523b3f5007b",
                            "inc": []
                        },
                        {
                            "code": "JabalpurMP",
                            "text": "JabalpurMP",
                            "id": "8ecdff69-fa83-46d6-a045-8d49e8263193",
                            "inc": []
                        },
                        {
                            "code": "IIPL_APDCL",
                            "text": "IIPL_APDCL",
                            "id": "984e505e-c7a1-4585-b988-c441e5c5cf5b",
                            "inc": []
                        },
                        {
                            "code": "Electrify",
                            "text": "Electrify",
                            "id": "9cdb2206-6dd2-4ade-b669-1330d4ecd367",
                            "inc": []
                        },
                        {
                            "code": "CS_Test",
                            "text": "CS_Test",
                            "id": "b417d2ca-13c2-43da-8874-8c2ec4c7b580",
                            "inc": []
                        },
                        {
                            "code": "MP",
                            "text": "MP",
                            "id": "b7bce2a7-41b7-4366-906d-da7fb16fb81b",
                            "inc": []
                        },
                        {
                            "code": "Vijaya Elec AMI SP",
                            "text": "Vijaya Elec AMI SP",
                            "id": "baa4fa16-dd41-4a40-89a0-8156a4e48296",
                            "inc": []
                        },
                        {
                            "code": "Adani-AMISP-3",
                            "text": "Adani-AMISP-3",
                            "id": "bb985b84-5b5c-42a3-9e60-a1aea9f7e672",
                            "inc": []
                        },
                        {
                            "code": "VISIONTEK_AMISP",
                            "text": "VISIONTEK_AMISP",
                            "id": "bdd2d0ea-422d-44ef-9b00-a8907a05bdd5",
                            "inc": []
                        },
                        {
                            "code": "GMR",
                            "text": "GMR",
                            "id": "c876d4ab-c2b2-4e9e-9013-0f45b4305257",
                            "inc": []
                        },
                        {
                            "code": "MPVisionTK",
                            "text": "MPVisionTK",
                            "id": "ca7b26d8-8455-4147-b286-c63045ff6ab6",
                            "inc": []
                        },
                        {
                            "code": "BhopalAdani",
                            "text": "BhopalAdani",
                            "id": "e1bbc9e5-6f13-412d-8449-e349de274c90",
                            "inc": []
                        },
                        {
                            "code": "AMI-SP",
                            "text": "SECURE AMI-SP",
                            "id": "e67bf16c-c3e0-430e-93dd-1be303d1b21b",
                            "inc": []
                        },
                        {
                            "code": "PSPCL",
                            "text": "PSPCL",
                            "id": "e9f02712-b302-4f9e-850a-b99629bd0dbc",
                            "inc": []
                        },
                        {
                            "code": "Adani-AMISP-1",
                            "text": "Adani-AMISP-1",
                            "id": "ee936009-fa4a-46c2-84dc-58b97cbe2c2f",
                            "inc": []
                        },
                        {
                            "code": "AMI-LAB",
                            "text": "AMI-LAB",
                            "id": "f40af32e-c631-447e-8df6-600446f6210d",
                            "inc": []
                        },
                        {
                            "code": "Adani-AMISP-2",
                            "text": "Adani-AMISP-2",
                            "id": "f737a241-ead8-4950-9f4a-48a82f171b14",
                            "inc": []
                        },
                        {
                            "code": "AVON",
                            "text": "AVON",
                            "id": "ffeb1b86-9a05-4190-8621-c2198d80b37c",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "ADANI MUMBAI",
                    "text": "ADANI MUMBAI",
                    "id": "2111828d-1ab9-4fba-9d20-a4a4515109a8",
                    "inc": [
                        {
                            "code": "BCITS RF ADANI",
                            "text": "BCITS RF ADANI",
                            "id": "301364a0-25a4-4829-bbbe-700bf947ccd4",
                            "inc": []
                        },
                        {
                            "code": "PROBUS ADANI",
                            "text": "PROBUS ADANI",
                            "id": "6ada13f5-e5a4-45fa-adca-a5d053f0c8e5",
                            "inc": []
                        },
                        {
                            "code": "GPRS ADANI",
                            "text": "GPRS ADANI",
                            "id": "6c98ff5f-5efc-4488-b106-13ae2f01bf46",
                            "inc": []
                        },
                        {
                            "code": "CC RF Adani",
                            "text": "CC RF Adani",
                            "id": "b15951ef-b207-48df-9d90-c7f5ad7d7ec7",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "Elecrama2023",
                    "text": "Elecrama2023",
                    "id": "21169a50-ed64-4ebe-8cd2-5b23fef2bfd3",
                    "inc": []
                },
                {
                    "code": "IEEMA",
                    "text": "IEEMA",
                    "id": "360a5c01-04df-439a-928b-8358dd816840",
                    "inc": [
                        {
                            "code": "IEEMA_GPRS",
                            "text": "IEEMA_GPRS",
                            "id": "81b1e0b4-795f-4cef-8848-aab2a476f592",
                            "inc": []
                        },
                        {
                            "code": "IEEMA_ RF",
                            "text": "IEEMA_ RF",
                            "id": "c488c4c6-9c4e-464c-9d59-a52dfc2cd9f7",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "EA",
                    "text": "Energy Audit",
                    "id": "40b74c19-c769-4753-a230-bb2a890c13c8",
                    "inc": []
                },
                {
                    "code": "FG EL Sewedy",
                    "text": "FG EL Sewedy",
                    "id": "4e0c55d3-710c-4239-b572-6e5f0a8b4b13",
                    "inc": []
                },
                {
                    "code": "MegaHz",
                    "text": "MegaHz",
                    "id": "5050728e-b304-407c-87c7-104462987809",
                    "inc": [
                        {
                            "code": "Allied",
                            "text": "Allied",
                            "id": "75b1f2d0-b04a-4035-9bc2-5247c44dafe8",
                            "inc": []
                        },
                        {
                            "code": "HP",
                            "text": "HP",
                            "id": "d87e1026-8965-4564-8121-2cab9a7ad434",
                            "inc": []
                        },
                        {
                            "code": "TestAllied",
                            "text": "TestAllied",
                            "id": "ec21c501-6501-44d0-a780-08cce4b8b7f2",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "Probus_Adani",
                    "text": "Probus_Adani",
                    "id": "60c3fdb2-9620-4ff9-8a2c-cdd1402dcdf3",
                    "inc": []
                },
                {
                    "code": "GVPR",
                    "text": "GVPR",
                    "id": "66274ea0-1c17-491f-bb15-9a7a6d5d31d1",
                    "inc": [
                        {
                            "code": "Secure",
                            "text": "Secure",
                            "id": "c2fc4eb4-c24a-4d39-ba28-27c7005f06fb",
                            "inc": []
                        },
                        {
                            "code": "Capital",
                            "text": "Capital",
                            "id": "dbe00897-c1c8-4a52-b1bf-d9c22eec0d8c",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "JPM",
                    "text": "JPM",
                    "id": "6bf85c1d-8507-4865-845d-11e7ed925ba8",
                    "inc": []
                },
                {
                    "code": "NURI_PNG",
                    "text": "NURI_PNG",
                    "id": "77389d86-ea96-4b4a-aca5-9a918b631c59",
                    "inc": []
                },
                {
                    "code": "Bhopal_AMI",
                    "text": "Bhopal_AMI",
                    "id": "8eab53cb-0c58-48b1-b336-e224b9988a2c",
                    "inc": [
                        {
                            "code": "HPL",
                            "text": "HPL",
                            "id": "07b4cf6a-762c-41bb-ae9e-4e67ac945b03",
                            "inc": []
                        },
                        {
                            "code": "VisionTek",
                            "text": "VisionTek",
                            "id": "6ecca4f0-8891-4a30-a472-7a22f5b94194",
                            "inc": []
                        },
                        {
                            "code": "Schnieder",
                            "text": "Schnieder",
                            "id": "a44a1b8e-e7e1-494e-9dc0-b4587691dae5",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "GOA",
                    "text": "GOA",
                    "id": "9cc2c29c-64a3-41d1-ab9b-8598aa3c6166",
                    "inc": []
                },
                {
                    "code": "TPL_Probus",
                    "text": "TPL_Probus",
                    "id": "ab26f111-3a64-4453-b4e0-901310f8031d",
                    "inc": []
                },
                {
                    "code": "2102",
                    "text": "FGRFWP",
                    "id": "d8a52430-fad7-4a33-853b-2d5fecc421fd",
                    "inc": []
                },
                {
                    "code": "BEST_MUMBAI",
                    "text": "BEST_MUMBAI",
                    "id": "f3488c58-8fb0-4838-bfeb-e3566f3f4ff7",
                    "inc": []
                },
                {
                    "code": "Uttarakhand_POC",
                    "text": "Uttarakhand POC",
                    "id": "f9680ef6-54aa-42f3-8b92-73ea16342b70",
                    "inc": [
                        {
                            "code": "Schnieder1",
                            "text": "Schnieder1",
                            "id": "230b6dec-b912-4731-b4d6-18c52031d73c",
                            "inc": []
                        },
                        {
                            "code": "GENUS",
                            "text": "GENUS",
                            "id": "a9f8d3c8-6bc3-4a5b-ab3f-1253fd73fec9",
                            "inc": []
                        }
                    ]
                },
                {
                    "code": "FG RF AMISP",
                    "text": "FG RF AMISP",
                    "id": "fdb4d501-4b4a-4a48-aa2a-67c438bc4e3b",
                    "inc": [
                        {
                            "code": "VTK RF Office",
                            "text": "VTK RF Office",
                            "id": "15c57d15-5d22-4823-9945-2f3cbdc46b46",
                            "inc": []
                        },
                        {
                            "code": "CPS RF Office",
                            "text": "CPS RF Office",
                            "id": "4680df37-2aa6-4ca5-83d8-4327e3dcb25f",
                            "inc": []
                        }
                    ]
                }
            ]
        },
        {
            "code": "0012",
            "text": "spmtest",
            "id": "cb007375-5fe6-497c-a6a0-a61420ca01e8",
            "inc": []
        },
        {
            "code": "001",
            "text": "TP-M",
            "id": "fd4c1f15-4660-43fe-bb2d-4af034ef1ca8",
            "inc": []
        }
    ]
}
]

const keyMap = {
  title: "title", // Rename `title` to `label`
  children: "children", // Rename `children` to `nodes`
  value: "value", // Rename `value` to `id`
  code: "code", // Rename `code` to `identifier`
};

// Renaming keys
const transformedData = renameKeys(data, keyMap);

const getBaseUrl = () => `/api/server3/UHES-0.0.1/WS/callForServerpaginationForMeterDetails?draw=2&length=${length}&metermake=${selectedManufacture}&metertype=${selectedType}&mtrInterface=${selectedInterface?.ID || ''}&mtrNumber=${meterNumber}&office=${office}&paymenttype=${selectedPaymentMode}&relaystatus=${selectedRelayStatus}&start=${start}`;
const totalurl=`api/server3/UHES-0.0.1//WS/callForServerpaginationForMeterDetails?draw=2&length=272&office=${office}&start=0`;
let fields = {dataSource: data, value:'id', text: 'text', child:'inc'}
const fetchAccessToken = useCallback(async () => {
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
  return tokenData.access_token;
}, []);
 
const fetchData = useCallback(async () => {
  try {
    const accessToken = await fetchAccessToken();
    console.log('onChange ', office)
    const urls = [
      `/api/server3/UHES-0.0.1/WS/getmetermake?officeid=${office}`,
      `/api/server3/UHES-0.0.1/WS/getMeterType?officeid=${office}`,
      `/api/server3/UHES-0.0.1/WS/getMeterInterface?officeid=${office}`,
    ];
 
    const [manufactureData, typeData, interfaceData] = await Promise.all(
      urls.map((url) =>
        fetch(url, { headers: { 'Authorization': `Bearer ${accessToken}` } })
          .then(response => response.ok ? response.json() : Promise.reject('Fetch failed'))
      )
    );
   
    setManufactures(manufactureData.data || []);
    setTypes(typeData.data || []);
    setInterfaces(interfaceData.data || []);
  } catch (err) {
    console.error(err.message);
  }
}, [fetchAccessToken, office]);
 
 
  const fetchMeterData = useCallback(async () => {
    try {
      setLoading(true);
      setGrid(false);
      const accessToken = await fetchAccessToken();
 
      const dataResponse = await fetch(getBaseUrl(), {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });
 
      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
      setMeterData(responseData.data || []);
      setRecordsTotal(responseData.recordsTotal || 0);
      setGrid(true);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchAccessToken, getBaseUrl]);
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchAllData = useCallback(async () => {
    try {
      setLoading(true);
 
      const accessToken = await fetchAccessToken();
      const url = totalurl;
      const dataResponse = await fetch(url, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });
 
      if (!dataResponse.ok) throw new Error('Failed to fetch data');
      const responseData = await dataResponse.json();
 
      setMeterData(responseData.data || []);
      console.log(responseData.data)
      setRecordsTotal(responseData.recordsTotal || 0);
      console.log(responseData.recordsTotal)
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchAccessToken]);

 
const totalPages = Math.ceil(recordsTotal / length);
const currentPage = Math.floor(start / length) + 1;
 
const setPage = (page) => {
  const newStart = (page - 1) * length;
  setStart(newStart);
}
 
  const handlePreviousPage = () => {
    setStart((prevStart) => Math.max(prevStart - length, 0));
  };
 
  // Fetch data when 'start' changes
  useEffect(() => {
    fetchMeterData();
  }, [start]);
 
 
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setStart(0);
    fetchMeterData();  
    setSubmitted(true);
  };
 
 
 
 
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
 
 
  const exportExcel = async () => {
    await fetchAllData();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Meter Details');
    worksheet.addRow([`Meter Details Data for Office: ${selectedValue}`]);
    const headers = ['Meter Type', 'Metering Mode', 'Relay Status', 'Meter Interface', 'Firmware Version', 'Meter Number', 'Meter Make', 'Payment Type'];
    const headerRow = worksheet.addRow(headers);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00' } };
    });
    meterData.forEach((data) => {
      worksheet.addRow([data.metertype, data.meteringmode, data.relaystatus, data.meterInterface, data.firmwareversion, data.meterno, data.metermake, data.paymenttype]);
    });
    worksheet.columns.forEach((column) => {
      let maxLength = 0;
      column.eachCell({ includeEmpty: true }, (cell) => {
        const columnLength = cell.value ? cell.value.toString().length : 10;
        if (columnLength > maxLength) maxLength = columnLength;
      });
      column.width = maxLength + 6;
    });
    worksheet.autoFilter = { from: 'A2', to: `${String.fromCharCode(64 + headers.length)}2` };
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, 'MeterDetails.xlsx');
  };
 
  const exportCSV = async () => {
    await fetchAllData();
    const worksheet = XLSX.utils.json_to_sheet(meterData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'MeterDetails.csv');
  };
 
  const exportPDF = async () => {
    await fetchAllData();
    const doc = new jsPDF();
    doc.text("Meter Details Data", 20, 10);
    doc.autoTable({
      head: [["Meter Number", "Meter Type", "Metering Mode", "Relay Status", "Meter Interface", "Firmware Version", "Meter Make", "Payment Type"]],
      body: meterData.map((data) => [
        data.meterno,
        data.metertype,
        data.meteringmode,
        data.relaystatus,
        data.meterInterface,
        data.firmwareversion,
        data.metermake,
        data.paymenttype
      ]),
      startY: 20,
    });
    doc.save("MeterDetails.pdf");
  };

  const onChange = (newValue) => {
    setOffice(newValue)
    officeidChange(newValue);
}
  return (
    <div className="meter-details-container">
      <Form
      onSubmit={handleSubmit}
      className="p-3"
      style={{
        backgroundColor: "#f0f8ff",
        borderRadius: "8px",
      }}
    >
      {/* Row 1: TreeSelect for Office */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Office ID</Form.Label>
            <TreeSelect
              style={{ width: "100%", height: "30px" }}
              value={office}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Please select"
              onChange={onChange}
              treeData={transformedData}
            />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Meter Manufacture</Form.Label>
            <Form.Select
              id="meterManufacture"
              name="meterManufacture"
              value={selectedManufacture}
              onChange={(e) => setSelectedManufacture(e.target.value)}
            >
              <option value="">-NA-</option>
              {manufactures.map((manufacture, index) => (
                <option key={index} value={manufacture.id}>
                  {manufacture.make_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Meter Type</Form.Label>
            <Form.Select
              id="meterType"
              name="meterType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">-NA-</option>
              {types.map((type, index) => (
                <option key={index} value={type.id}>
                  {type.type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Meter Interface</Form.Label>
            <Form.Select
              id="meterInterface"
              name="meterInterface"
              value={selectedInterface?.ID}
              onChange={(e) => setSelectedInterface(e.target.value)}
            >
              <option value="">-NA-</option>
              {interfaces.map((meterInterface, index) => (
                <option key={index} value={meterInterface.id}>
                  {meterInterface.PROTOCOL_NAME}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Payment Mode</Form.Label>
            <Form.Select
              id="paymentMode"
              name="paymentMode"
              value={selectedPaymentMode}
              onChange={(e) => setSelectedPaymentMode(e.target.value)}
            >
              <option value="">-NA-</option>
              <option value="POSTPAID">Postpaid</option>
              <option value="PREPAID">Prepaid</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Relay Status</Form.Label>
            <Form.Select
              id="relaystatus"
              name="relaystatus"
              value={selectedRelayStatus}
              onChange={(e) => setSelectedRelayStatus(e.target.value)}
            >
              <option value="">-NA-</option>
              <option value="0">Disconnected</option>
              <option value="1">Connected</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-bold">Meter Number</Form.Label>
            <Form.Control
              type="text"
              id="meterNumber"
              name="meterNumber"
              placeholder="Enter Meter Number"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Submit Button */}
      <div className="text-center mt-3">
        <Button
          type="submit"
          className="submitbutt"
          onClick={handleSubmit}
          variant="primary"
        >
          Submit
        </Button>
      </div>
    </Form>
    <Row className="mb-3 justify-content-start">
      <Col xs="auto" className="px-1">
      <button onClick={exportExcel} className="export-button">Excel</button>
      </Col>
      <Col xs="auto" className="px-1">
      <button onClick={exportPDF} className="export-button">Pdf</button>
      </Col>
      <Col xs="auto" className="px-1">
      <button onClick={exportCSV} className="export-button">Csv</button>
      </Col>
    </Row>
      {meterData && submitted &&  (
  <div className="meter-data-table ag-theme-quartz" id="myGrid" style={{ height: '400px', width: '100%' }}>
    <AgGridReact
      columnDefs={columnDefs.map((col) => ({
        ...col,
        headerClass: 'custom-header',
      }))}
      rowData={meterData}
      pagination={false}
      domLayout="normal"
      defaultColDef={defaultColDef}
    />
  </div>
)}
{submitted && (
<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'right' }}>
      <span style={{ fontSize: '0.875rem', marginLeft: '10px' }}>
        Showing {start + length >= recordsTotal ? recordsTotal : start + 1} to {Math.min(start + length, recordsTotal)} of {recordsTotal} entries
      </span>
 
      <div>
        <button
          style={{ fontSize: '0.875rem', margin: '0 2px', padding: '4px 8px', marginLeft: '400px' }}
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
 
        {totalPages >= 5 && (
  <>
    <button
      style={{
        fontSize: '0.875rem',
        margin: '0 2px',
        padding: '4px 8px',
        backgroundColor: currentPage === 1 ? '#2196f3' : 'white',
        color: currentPage === 1 ? 'white' : 'black',
        border: currentPage === 1 ? '1px solid #2196f3' : '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={() => setPage(1)}
    >
      1
    </button>
    {currentPage > 4 && <span style={{ margin: '0 2px', fontSize: '0.875rem' }}>...</span>}
    {Array.from({ length: 3 }, (_, i) => {
      let page;
      if (currentPage <= 3) {
        page = i + 2;
      }
      else if (currentPage >= totalPages - 2) {
        page = totalPages - 3 + i;
      }
      else {
        page = currentPage - 1 + i;
      }
 
      if (page > 1 && page < totalPages) {
        return (
          <button
            key={page}
            style={{
              fontSize: '0.875rem',
              margin: '0 2px',
              padding: '4px 8px',
              backgroundColor: currentPage === page ? '#2196f3' : 'white',
              color: currentPage === page ? 'white' : 'black',
              border: currentPage === page ? '1px solid #2196f3' : '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      }
      return null;
    })}
 
 
    {currentPage < totalPages - 3 && <span style={{ margin: '0 2px', fontSize: '0.875rem' }}>...</span>}
 
 
    <button
      style={{
        fontSize: '0.875rem',
        margin: '0 2px',
        padding: '4px 8px',
        backgroundColor: currentPage === totalPages ? '#2196f3' : 'white',
        color: currentPage === totalPages ? 'white' : 'black',
        border: currentPage === totalPages ? '1px solid #2196f3' : '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
      onClick={() => setPage(totalPages)}
    >
      {totalPages}
    </button>
  </>
)}
 
 
<button
  style={{ fontSize: '0.875rem', margin: '0 2px', padding: '4px 8px' }}
  onClick={() => setPage(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  Next
</button>
      </div>
    </div>
  )}
    </div>
  );
}
export default MeterDetails;