import React, { Fragment } from 'react'

// react-bootstrap
import { Button, Col, Row } from 'react-bootstrap'

// react-router
import { Link } from 'react-router-dom'


import img from "../../../assets/images/page-img/26.jpg"
import img1 from "../../../assets/images/page-img/28.jpg"
import img2 from "../../../assets/images/page-img/27.jpg"
const PricingOne = () => {
   return (
      <Fragment>
         <Row>

            <Col lg='3' sm='6'>
               <div className="iq-card">
                  <div className="iq-card-body border-0 text-center rounded">
                     <span className="font-size-16 text-uppercase">Basic</span>
                     <h2 className="mb-4 display-3 fw-bold">$26<small className="font-size-14 text-muted">/ Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Link to="#" className="btn btn-primary mt-5 rounded-3">Start Starter</Link>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="iq-card bg-primary text-white">
                  <div className="iq-card-body border-0 text-center rounded">
                     <span className="font-size-16 text-uppercase">Basic</span>
                     <h2 className="mb-4 display-3 fw-bold text-white">$99<small className="font-size-14 text-white-50">/ Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0 ">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Link to="#" className="btn btn-light btn-block mt-5 rounded-3">Start Starter</Link>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="iq-card">
                  <div className="iq-card-body border-0 text-center rounded">
                     <span className="font-size-16 text-uppercase">Basic</span>
                     <h2 className="mb-4 display-3 fw-bold">$39<small className="font-size-14 text-muted">/ Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Link to="#" className="btn btn-primary mt-5 rounded-3">Start Starter</Link>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="iq-card">
                  <div className="iq-card-body border-0 text-center rounded">
                     <span className="font-size-16 text-uppercase">Basic</span>
                     <h2 className="mb-4 display-3 fw-bold">$25<small className="font-size-14 text-muted">/ Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Link to="#" className="btn btn-primary mt-5 rounded-3">Start Starter</Link>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="card bg-dark text-white text-center iq-mb-3">
                  <img src={img} className="card-img rounded" alt="#" />
                  <div className="card-img-overlay">
                     <h2 className="mb-4 display-3 fw-bold text-white">19<small className="font-size-14 text-white">$ / Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0 ">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Button variant='primary' type="button" className="btn btn-primary mt-5">Get started</Button>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="card bg-dark text-white text-center iq-mb-3">
                  <img src={img} className="card-img rounded" alt="#" />
                  <div className="card-img-overlay">
                     <h2 className="mb-4 display-3 fw-bold text-white">19<small className="font-size-14 text-white">$ / Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0 ">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Button variant='primary' type="button" className="btn btn-primary mt-5">Get started</Button>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="card bg-dark text-white text-center iq-mb-3">
                  <img src={img1} className="card-img rounded" alt="#" />
                  <div className="card-img-overlay">
                     <h2 className="mb-4 display-3 fw-bold text-white">19<small className="font-size-14 text-white">$ / Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0 ">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Button variant='primary' type="button" className="btn btn-primary mt-5">Get started</Button>
                  </div>
               </div>
            </Col>
            <Col lg='3' sm='6'>
               <div className="card bg-dark text-white text-center iq-mb-3">
                  <img src={img2} className="card-img rounded" alt="#" />
                  <div className="card-img-overlay">
                     <h2 className="mb-4 display-3 fw-bold text-white">19<small className="font-size-14 text-white">$ / Month</small></h2>
                     <ul className="list-unstyled line-height-4 mb-0 ">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                     </ul>
                     <Button variant='primary' type="button" className="btn btn-primary mt-5">Get started</Button>
                  </div>
               </div>
            </Col>
         </Row>
      </Fragment>
   )
}

export default PricingOne
