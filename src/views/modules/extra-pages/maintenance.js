import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import img from "../../../assets/images/error/error-02.png"

const Maintenance = () => {
  return (
    <Fragment>
      <div className="iq-maintenance mt-5">
            <Container fluid>
                <Row className="no-gutters">
                    <Col sm='12' className="text-center">
                        <div className="iq-maintenance ">
                            <img src={img} className="img-fluid" alt="" />
                            <h3 className="mt-4 mb-1">We are Currently Performing Maintenance</h3>
                            <p>Please check back in sometime.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container  className="mt-3 mb-5">
                <Row className=''>
                    <Col lg='4'>
                        <div className="iq-card text-center mb-0">
                            <div className="iq-card-body">
                                <i className="ri-window-line ri-4x line-height text-primary"></i>
                                <h5 className="card-title mt-1">Why is the Site Down?</h5>
                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="iq-card text-center mb-0">
                            <div className="iq-card-body">
                                <i className="ri-time-line ri-4x line-height text-primary"></i>
                                <h5 className="card-title mt-1">What is the Downtime?</h5>
                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="iq-card text-center mb-0">
                            <div className="iq-card-body">
                                <i className="ri-information-line ri-4x line-height text-primary"></i>
                                <h5 className="card-title mt-1">Do you need Support?</h5>
                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Fragment>
  )
}

export default Maintenance
