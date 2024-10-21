import React, { Fragment } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EditableTable = () => {
  return (
    <Fragment>
      
        <Row>
        <Col sm='12' >
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Editable Table</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <div id="table" className="table-editable">
                              <span className="table-add float-end mb-3 me-2">
                              <Button size='sm' variant='' className="btn btn-sm iq-bg-success "><i
                                 className="ri-add-fill"><span className="ps-1">Add New</span></i>
                              </Button>
                              </span>
                              <div className="table-responsive-md w-100">
                                 <Table className="text-center" bordered striped>
                                    <thead>
                                       <tr>
                                          <th>Name</th>
                                          <th>Age</th>
                                          <th>Company Name</th>
                                          <th>Country</th>
                                          <th>City</th>
                                          <th>Sort</th>
                                          <th>Remove</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td contenteditable="true">Gio Metric</td>
                                          <td contenteditable="true">25</td>
                                          <td contenteditable="true">Deepends</td>
                                          <td contenteditable="true">Spain</td>
                                          <td contenteditable="true">Madrid</td>
                                          <td>
                                             <span className="table-up me-1"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-up" aria-hidden="true"></i></Link></span>
                                             <span className="table-down"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></Link></span>
                                          </td>
                                          <td>
                                             <span className="table-remove"><button type="button"
                                                className="btn iq-bg-danger btn-rounded btn-sm my-0">Remove</button></span>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td contenteditable="true">Manny Petty</td>
                                          <td contenteditable="true">45</td>
                                          <td contenteditable="true">Insectus</td>
                                          <td contenteditable="true">France</td>
                                          <td contenteditable="true">San Francisco</td>
                                          <td>
                                             <span className="table-up me-1"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-up" aria-hidden="true"></i></Link></span>
                                             <span className="table-down"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></Link></span>
                                          </td>
                                          <td>
                                             <span className="table-remove"><button type="button"
                                                className="btn iq-bg-danger btn-rounded btn-sm my-0">Remove</button></span>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td contenteditable="true">Lucy Tania</td>
                                          <td contenteditable="true">26</td>
                                          <td contenteditable="true">Isotronic</td>
                                          <td contenteditable="true">Germany</td>
                                          <td contenteditable="true">Frankfurt am Main</td>
                                          <td>
                                             <span className="table-up me-1"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-up" aria-hidden="true"></i></Link></span>
                                             <span className="table-down"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></Link></span>
                                          </td>
                                          <td>
                                             <span className="table-remove"><button type="button"
                                                className="btn iq-bg-danger btn-rounded btn-sm my-0">Remove</button></span>
                                          </td>
                                       </tr>
                                       <tr className="hide">
                                          <td contenteditable="true">Anna Mull</td>
                                          <td contenteditable="true">35</td>
                                          <td contenteditable="true">Portica</td>
                                          <td contenteditable="true">USA</td>
                                          <td contenteditable="true">Oregon</td>
                                          <td>
                                             <span className="table-up me-1"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-up" aria-hidden="true"></i></Link></span>
                                             <span className="table-down"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></Link></span>
                                          </td>
                                          <td>
                                             <span className="table-remove"><button type="button"
                                                className="btn iq-bg-danger btn-rounded btn-sm my-0">Remove</button></span>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </Table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Col>
        </Row>
    </Fragment>
  )
}

export default EditableTable
