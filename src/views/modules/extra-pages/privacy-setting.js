import React, { Fragment } from 'react'

// react-bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap'

// react-router
import { Link } from 'react-router-dom'

const PrivacySetting = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
        <Col lg='12'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Privacy Setting</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <div className="acc-privacy">
                              <div className="data-privacy">
                                 <h4 className="mb-2">Account Privacy</h4>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input type="checkbox" className="custom-control-input" id="acc-private" />
                                    <label className="custom-control-label privacy-status mb-2" htmlFor="acc-private">Private Account</label>
                                 </div>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                              </div>
                              <hr />
                              <div className="data-privacy">
                                 <h4 className="mb-2">Activity Status</h4>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input type="checkbox" className="custom-control-input" id="activety" defaultChecked />
                                    <label className="custom-control-label privacy-status mb-2" htmlFor="activety">Show Activity Status</label>
                                 </div>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                              </div>
                              <hr />
                              <div className="data-privacy">
                                 <h4 className="mb-2"> Story Sharing </h4>
                                 <div className="custom-control custom-checkbox custom-control-inline">
                                    <Form.Check.Input type="checkbox" className="custom-control-input" id="story" defaultChecked />
                                    <label className="custom-control-label privacy-status mb-2" htmlFor="story">Allow Sharing</label>
                                 </div>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                              </div>
                              <hr />
                              <div className="data-privacy">
                                 <h4 className="mb-2"> Photo Of You </h4>
                                 <div className="custom-control custom-radio">
                                    <Form.Check.Input type="radio" id="automatically" name="customRadio0" className="custom-control-input" defaultChecked  />
                                    <label className="custom-control-label" htmlFor="automatically"> Add Automatically</label>
                                 </div>
                                 <div className="custom-control custom-radio mb-2">
                                    <Form.Check.Input type="radio" id="manualy" name="customRadio0" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="manualy"> Add Manualy</label>
                                 </div>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                              </div>
                              <hr />
                              <div className="data-privacy">
                                 <h4 className="mb-2"> Your Profile </h4>
                                 <div className="custom-control custom-radio">
                                    <Form.Check.Input type="radio" id="public" name="customRadio1" className="custom-control-input" defaultChecked />
                                    <label className="custom-control-label" htmlFor="public"> Public </label>
                                 </div>
                                 <div className="custom-control custom-radio">
                                    <Form.Check.Input type="radio" id="friend" name="customRadio1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="friend"> Friend </label>
                                 </div>
                                 <div className="custom-control custom-radio">
                                    <Form.Check.Input type="radio" id="spfriend" name="customRadio1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="spfriend"> Specific Friend </label>
                                 </div>
                                 <div className="custom-control custom-radio mb-2">
                                    <Form.Check.Input type="radio" id="onlyme" name="customRadio1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="onlyme"> Only Me </label>
                                 </div>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                              </div>
                              <hr />
                              <div className="data-privacy">
                                 <h4 className="mb-2"> Login Notification </h4>
                                 <div className="custom-control custom-radio">
                                    <Form.Check.Input type="radio" id="enable" name="customRadio2" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="enable"> Enable </label>
                                 </div>
                                 <div className="custom-control custom-radio mb-2">
                                    <Form.Check.Input type="radio" id="disable" name="customRadio2" className="custom-control-input" defaultChecked />
                                    <label className="custom-control-label" htmlFor="disable"> Disable </label>
                                 </div>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                              </div>
                              <hr />
                              <div className="data-privacy">
                                 <h4 className="mb-2">Privacy Help</h4>
                                 <Link to="#"><i className="ri-customer-service-2-line me-2"></i>Support</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default PrivacySetting
