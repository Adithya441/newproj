import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Dropdown,Row,Col,DropdownButton,Button,Modal,Table } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { useRef,useState,useEffect } from 'react';
import ExcelJS from 'exceljs';
import './styles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SecondChart = ({allpsts}) => {
  const chartRef=useRef(null);
  const [clickedData,setClickedData]=useState([]);
  const [showModal,setShowModal]=useState(false);
  const [user1,setuser1]=useState([]);
  const [user2,setuser2]=useState([]);
  const [user3,setuser3]=useState([]);
  const [user4,setuser4]=useState([]);
  const [user1Count,setuser1Count]=useState();
  const [user2Count,setuser2Count]=useState();
  const [user3Count,setuser3Count]=useState();
  const [user4Count,setuser4Count]=useState();
  const [usercat,setusercat]=useState();
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [defChartData,setDefChartData] = useState({
    labels: [], 
    datasets: [
      {
        label: 'User Posts Data', 
        data: [],
        backgroundColor:[], 
        borderColor:[], 
        borderWidth: 1, 
      },
    ],
  });

  const options = {
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, 
        position: 'top', 
      },
      title: {
        display: true, 
        text: 'User Posts Data', 
      },
      datalabels: {
        color: '#000',
        anchor:'center',
        align: 'center',
        formatter: (value, context) => {
          // const label = context.chart.data.labels[context.dataIndex];
          return `${value} `;
        },
    },
  },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        // const datasetIndex = elements[0].datasetIndex;
        const index = elements[0].index;
        const label = defChartData.labels[index];
        // const value = data.datasets[datasetIndex].data[index];
        if(label==='User1'){
          setClickedData(user1);
          setusercat('User1');
        }
        else if(label==='User2'){
          setClickedData(user2);
          setusercat('User2');
        }
        else if(label==='User3'){
          setClickedData(user3);
          setusercat('User3');
        }
        else if(label==='User4'){
          setClickedData(user4);
          setusercat('User4');
        }
        setShowModal(true);
        console.log(clickedData);
      }
    },
    scales: {
      x:{
        grid:{
          display:false,
        },
        ticks: {
          minRotation: 45, 
          maxRotation: 45, 
        }
      },
      y: {
        beginAtZero: true, 
        grid:{
          display:false,
        }
      },
    },
  };
  useEffect(()=>{
    const psts=allpsts;
    const u1=psts.filter(p=>p.userId ===1);
    const u2=psts.filter(p=>p.userId ===2);
    const u3=psts.filter(p=>p.userId ===3);
    const u4=psts.filter(p=>p.userId ===4);
    setuser1(u1);
    setuser2(u2);
    setuser3(u3);
    setuser4(u4);
    setuser1Count(u1.length);
    setuser2Count(u2.length);
    setuser3Count(u3.length);
    setuser4Count(u4.length);

    console.log(user1);
    console.log(user2);
    console.log(user3);
    console.log(user4);
  },[allpsts]);

  useEffect(()=>{
    setDefChartData({
      labels:['User1','User2','User3','User4'],
      datasets:[
        {
          label:'Users',
          data:[user1Count,user2Count,user3Count,user4Count],
          backgroundColor:['rgb(255, 197, 140)'], 
          borderColor:['rgb(255, 197, 140)']
        },
      ]
    });  
},[user1Count,user2Count,user3Count,user4Count]);
  function downloadCSV(){
    const labels = defChartData.labels;
    const dta = defChartData.datasets[0].data;
    const csvContent =`User Posts Data\nUser Category,Count\n` + labels.map((label, idx) => `${label},${dta[idx]}`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'userposts_data.csv');
  }
  function downloadPDF(){
    const doc=new jsPDF();
      doc.text('User Posts Data', 10, 10);
      html2canvas(chartRef.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 130, 170);
        doc.save('userposts_data.pdf');
      });
  }
  function downloadPNG(){
    html2canvas(chartRef.current.canvas).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'userposts_data.png';
      link.click();
    });
  }
  const handleSort = (field) => {
    const sortedData = [...clickedData]; 
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
  
    sortedData.sort((a, b) => {
      if (order === 'asc') return a[field] > b[field] ? 1 : -1;
      else return a[field] < b[field] ? 1 : -1;
    });
  
    setSortField(field);
    setSortOrder(order);
    setClickedData(sortedData); 
  };
  const DataModal=({onClose, canvasref, dt,mtitle})=>{
    function dCSV() {
      const csvContent = `Posts Data for user: ${mtitle}\nUserId,PostId,PostTitle\n`
        + dt.map((u) => `${u.userId},${u.id},${u.title}`).join('\n');
  
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, `${mtitle}_posts.csv`);
    }
    
    function dPDF(){
      const doc=new jsPDF();
      doc.text(`Posts Data for user: ${mtitle}`, 10, 10);
      html2canvas(canvasref.current.canvas).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 20, 20, 140, 160);
        doc.save(`${mtitle}_posts.pdf`);
      });
    }
   
    const dExcel = async () => {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('User Posts Data');
    
      worksheet.addRow([`Posts Data for User: ${mtitle}`]);
    
      const header = ['UserId', 'PostId', 'PostTitle'];
      const headerRow = worksheet.addRow(header);
    
      headerRow.eachCell((cell) => {
        cell.font = { bold: true };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFF00' }, 
        };
      });
    
      dt.forEach((record) => {
        worksheet.addRow([record.userId, record.id, record.title]);
      });
    
      worksheet.columns.forEach((column) => {
        let maxLength = 0;
        column.eachCell({ includeEmpty: true }, (cell) => {
          const columnLength = cell.value ? cell.value.toString().length : 10;
          if (columnLength > maxLength) {
            maxLength = columnLength;
          }
        });
        column.width = maxLength + 2; 
      });
    
      worksheet.autoFilter = {
        from: 'A2',
        to: 'D2',
      };
    
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, `${mtitle}_posts.xlsx`);
    };
    return (
        <Modal show={showModal} onHide={onClose} size="xl" centered className='mdl' style={{height:"550px"}}>
          <Modal.Header closeButton>
            <Col md='10'>
              <Row >
                <Col md='8' className='d-flex'>
                  <Modal.Title>
                    <p>Posts data for user:{mtitle}</p>
                  </Modal.Title>
                </Col>
                <Col md='2' className="d-flex justify-content-end">
                  <DropdownButton id="dropdown-basic-button" title="Export Options" >
                  <Dropdown.Item onClick={dCSV}>CSV</Dropdown.Item>
                  <Dropdown.Item onClick={dPDF}>PDF</Dropdown.Item>
                  <Dropdown.Item onClick={dExcel}>Excel</Dropdown.Item>
                </DropdownButton>
                </Col>
              </Row>
            </Col>         
          </Modal.Header>
          <Modal.Body>
            <Table hover bordered striped size='lg'>
              <thead className='text-center'>
                <tr>
                  <th>User Id</th>
                  <th onClick={() => handleSort('id')}>Post Id{sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('title')}>Post Title{sortField === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                  dt.map(u=>(
                    <tr>
                      <td>{u.userId}</td>
                      <td>{u.id}</td>
                      <td>{u.title}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" className="m-2" onClick={onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  };
  return (
    <div className="mx-auto">
      <Row lg='12'>
        <Col column lg='8' className='d-flex'>
          <Bar data={defChartData} options={options} style={{ height: '350px', width: '300px' }} ref={chartRef} />
        </Col>
        <Col column lg='2' className='d-flex justify-content-end'>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <FaBars />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={downloadCSV}>CSV</Dropdown.Item>
              <Dropdown.Item onClick={downloadPDF}>PDF</Dropdown.Item>
              <Dropdown.Item onClick={downloadPNG}>PNG</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {showModal && (
        <DataModal onClose={() => setShowModal(false)} dt={clickedData} canvasref={chartRef} mtitle={usercat}/>
      )}
    </div>
  );
  
}

export default Secondchart;
