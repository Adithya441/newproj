import React, { Fragment,useState ,useEffect, } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import APIChart from "./modules/charts/APIChart";
import FirstChart from './modules/charts/FirstChart';
import SecondChart from './modules/charts/SecondChart';
// import '../../src/views/modules/charts/styles.css';
import { RiBillLine } from 'react-icons/ri'; // Importing the meter icon
// import myicon from '../assets/images/user/metericon';

//apexcharts
import Chart from "react-apexcharts";

//flatpickr
import Flatpickr from "react-flatpickr";

// Img
import img from "../assets/images/user/11.png";
import user1 from "../assets/images/user/01.jpg";
import user2 from "../assets/images/user/02.jpg";
import user3 from "../assets/images/user/03.jpg";
import user4 from "../assets/images/user/04.jpg";
import user5 from "../assets/images/user/05.jpg";
import user6 from "../assets/images/user/06.jpg";
import user7 from "../assets/images/user/07.jpg";
import user8 from "../assets/images/user/08.jpg";
import user9 from "../assets/images/user/09.jpg";
import user10 from "../assets/images/user/10.jpg";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// eslint-disable-next-line camelcase
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);



const Index = () => {

// const bgImg = require("../assets/images/page-img//38.jpg");

const [tods,setTods]=useState([]);
const [prds,setProducts]=useState([]);
const [psts,setPosts]=useState([]);
const [menclCount,setmenclCount]=useState();
const [womenclCount,setwomenclCount]=useState();
const [jewCount,setjewCount]=useState();
const [electCount,setelectCount]=useState();
useEffect(() => {
  const getTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const tds = response.data;
      setTods(tds);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  getTodos();
},[]);
useEffect(()=>{
  const getProducts= async () =>{
    try{
      const response= await axios.get('https://fakestoreapi.com/products');
      const ps=response.data;
      const d1=ps.filter(p=>p.category ===`men's clothing`);
      const d2=ps.filter(p=>p.category ===`women's clothing`);
      const d3=ps.filter(p=>p.category ==='jewelery');
      const d4=ps.filter(p=>p.category ==='electronics');
      setmenclCount(d1.length);
      setwomenclCount(d2.length);
      setjewCount(d3.length);
      setelectCount(d4.length);
      setProducts(ps);
    }
    catch(error){
      console.log('Error fetching products:',error);
    }
  }
  getProducts();
},[]);
useEffect(()=>{
  const getPosts=async () =>{
    try{
      const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
      const pst=response.data;
      setPosts(pst);
    }
    catch(error){
      console.log('Error fetching posts:',error);
    }
  }
  getPosts();
},[])

console.log(tods);
console.log(prds);
console.log(psts);
  return (
    <Fragment>
     <Col lg="12">
            <Row>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-primary rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-primary">
                        <RiBillLine/>
                      </div>
                      <div className="text-end">
                      <h5 className="">Meter Count</h5>
                        <h2 className="mb-0">
                          <span className="counter">{menclCount}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-warning rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-warning">
                         <RiBillLine/>
                      </div>
                      <div className="text-end">
                      <h5 className="">Active Meters</h5>
                        <h2 className="mb-0">
                          <span className="counter">{womenclCount}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-danger rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-danger">
                        <RiBillLine/>
                      </div>
                      <div className="text-end">
                      <h5 className="">De-active Meters</h5>
                        <h2 className="mb-0">
                          <span className="counter">{jewCount}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-info rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-info">
                        <RiBillLine/>
                      </div>
                      <div className="text-end">
                      <h5 className="">Today Active</h5>
                        <h2 className="mb-0">
                          <span className="counter">{electCount}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="12">
              <Row>
                <Col md='4'>
                  <APIChart allt={tods} />
                </Col>
                <Col md='4'>
                  <FirstChart prods={prds} />
                </Col>
                <Col md='4' >
                  <SecondChart allpsts={psts} />
                </Col>
              </Row>
          </Col>
    </Fragment>
  );
};

export default Index;
