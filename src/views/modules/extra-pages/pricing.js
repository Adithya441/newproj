import React, { Fragment } from 'react'
import { Col, Row, Table } from 'react-bootstrap'

const Pricing = () => {
  return (
    <Fragment>
      <Row>
                  <Col sm='12'>
                     <div className="iq-card">
                        <div className="iq-card-body">
                           <div className="table-responsive">
                              <Table>
                                 <thead style={{borderTop:'hidden'}}>
                                    <tr>
                                       <th className="text-center" scope="col"></th>
                                       <th className="text-center" scope="col">Starter</th>
                                       <th className="text-center" scope="col">Business</th>
                                       <th className="text-center" scope="col">Enterprise</th>
                                       <th className="text-center" scope="col">Unlimited</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <th className="text-center" scope="row">Email support</th>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                    </tr>
                                    <tr>
                                       <th className="text-center" scope="row">UI Kit</th>
                                       <td className="text-center"></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                    </tr>
                                    <tr>
                                       <th className="text-center" scope="row">100% support</th>
                                       <td className="text-center"></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                    </tr>
                                    <tr>
                                       <th className="text-center" scope="row">Advance form</th>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                    </tr>
                                    <tr>
                                       <th className="text-center" scope="row">Custom shortcode</th>
                                       <td className="text-center"></td>
                                       <td className="text-center"></td>
                                       <td className="text-center"></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                    </tr>
                                    <tr>
                                       <th className="text-center" scope="row">Thousand of Widgets</th>
                                       <td className="text-center"></td>
                                       <td className="text-center"></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                       <td className="text-center"><i className="ri-check-line ri-2x text-success"></i></td>
                                    </tr>
                                    <tr>
                                       <td className="text-center"></td>
                                       <td className="text-center">
                                          <h2>$19<small> / Per month</small></h2>
                                          <button type="button" className="btn btn-primary mt-3 rounded-3">Purchase</button>
                                       </td>
                                       <td className="text-center">
                                          <h2>$39<small> / Per month</small></h2>
                                          <button type="button" className="btn btn-primary mt-3 rounded-3">Purchase</button>
                                       </td>
                                       <td className="text-center">
                                          <h2>$119<small> / Per month</small></h2>
                                          <button type="button" className="btn btn-primary mt-3 rounded-3">Purchase</button>
                                       </td>
                                       <td className="text-center">
                                          <h2>$219<small> / Per month</small></h2>
                                          <button type="button" className="btn btn-primary mt-3 rounded-3">Purchase</button>
                                       </td>
                                    </tr>
                                 </tbody>
                              </Table>
                           </div>
                        </div>
                     </div>
                  </Col>
               
      </Row>
    </Fragment>
  )
}

export default Pricing
