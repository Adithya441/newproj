import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <Fragment>
      <Container fluid className='py-0'>
      <Row className="no-gutters">
                    <Col sm='12' className="text-center">
                        <div className="iq-error pb-5">
                          <h1 className="text-primary">404</h1>
                            <h2 className="mb-0">Oops! This Page is Not Found.</h2>
                            <p>The requested page dose not exist.</p>
                            <div className="">
                                <Link className="btn btn-primary" to="/"><i className="ri-home-4-line"></i>Back to Home</Link>
                            </div>                           
                        </div>
                    </Col>
                </Row>
      </Container>
    </Fragment>
  )
}

export default Error404
