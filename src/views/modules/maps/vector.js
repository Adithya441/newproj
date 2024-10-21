import React, { Fragment } from 'react'
import { Col, Container } from 'react-bootstrap'
import Leaflet from '../../../components/leaflet'

const Vector = () => {
  return (
    <Fragment>
      <Container fluid>
      <Col sm='12'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Vector Map</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                        <Leaflet
                  id="chart-map-column-05"
                  className="custom-chart"
                  style={{ height: "400px;" }}
                />                           
                        </div>
                     </div>
                  </Col>
      </Container>
    </Fragment>
  )
}

export default Vector
