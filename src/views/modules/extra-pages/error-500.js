import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error500 = () => {
  return (
    <Fragment>
      <Row className="row no-gutters">
                    <Col sm='12' className="text-center">
                        <div className="iq-error error-500 pb-5">
                          <h1 className="text-primary">500</h1>
                            <h2 className="mb-0">Oops! This Page is Not Working.</h2>
                            <p>The requested is Internal Server Error.</p>
                            <div className="mt-3">
                                <Link className="btn btn-primary" to="/"><i className="ri-home-4-line"></i>Back to Home</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
    </Fragment>
  )
}

export default Error500
