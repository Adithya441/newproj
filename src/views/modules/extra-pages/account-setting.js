import React, { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const AccountSetting = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
        <Col lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Account Setting</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <div className="acc-edit">
                              <Form>
                                 <Form.Group>
                                    <Form.Label htmlFor="uname">User Name:</Form.Label>
                                    <Form.Control type="text" className="form-control" id="uname" defaultValue="Bini@01" />
                                 </Form.Group>
                                 <Form.Group>
                                    <Form.Label htmlFor="email">Email Id:</Form.Label>
                                    <Form.Control type="email" className="form-control" id="email" defaultValue="Binijohn@gmail.com" />
                                 </Form.Group>
                                 <Form.Group>
                                    <label htmlFor="altemail">Alternate Email:</label>
                                    <Form.Control type="email" className="form-control" id="altemail" defaultValue="designtheme@gmail.com" />
                                 </Form.Group>
                                 <Form.Group className="form-group mb-3">
                                    <Form.Label className="d-block">Language Known:</Form.Label>
                                    
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                       <Form.Check.Input type="checkbox" className="custom-control-input" id="english" defaultChecked />
                                       <Form.Label className="custom-control-label" htmlFor="english">English</Form.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                       <Form.Check.Input type="checkbox" className="custom-control-input" id="french" defaultChecked />
                                       <Form.Label className="custom-control-label" htmlFor="french">French</Form.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                       <Form.Check.Input type="checkbox" className="custom-control-input" id="hindi" />
                                       <Form.Label className="custom-control-label" htmlFor="hindi">Hindi</Form.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                       <Form.Check.Input type="checkbox" className="custom-control-input" id="spanish" defaultChecked />
                                       <Form.Label className="custom-control-label" htmlFor="spanish">Spanish</Form.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                       <Form.Check.Input type="checkbox" className="custom-control-input" id="arabic" />
                                       <Form.Label className="custom-control-label" htmlFor="arabic">Arabic</Form.Label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                       <Form.Check.Input type="checkbox" className="custom-control-input" id="italian" />
                                       <Form.Label className="custom-control-label" htmlFor="italian">Italian</Form.Label>
                                    </div>
                                 </Form.Group>
                                 <Button type="submit" variant='primary' className="btn btn-primary">Submit</Button>
                                 <Button variant='danger' type="reset" className="btn iq-bg-danger ms-2">cancel</Button>
                              </Form>
                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6'>
                  <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Social Media</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <div className="acc-edit">
                              <Form>
                                 <Form.Group>
                                    <label htmlFor="facebook">Facebook:</label>
                                    <Form.Control type="text" className="form-control" id="facebook" defaultValue="www.facebook.com" />
                                 </Form.Group>
                                 <Form.Group>
                                    <label htmlFor="twitter">Twitter:</label>
                                    <Form.Control type="text" className="form-control" id="twitter" defaultValue="www.twitter.com" />
                                 </Form.Group>
                                 <Form.Group>
                                    <label htmlFor="google">Google +:</label>
                                    <Form.Control type="text" className="form-control" id="google" defaultValue="www.google.com" />
                                 </Form.Group>
                                 <Form.Group>
                                    <label htmlFor="instagram">Instagram:</label>
                                    <Form.Control type="text" className="form-control" id="instagram" defaultValue="www.instagram.com" />
                                 </Form.Group>
                                 <div className="form-group mb-3">
                                    <label htmlFor="youtube">You Tube:</label>
                                    <Form.Control type="text" className="form-control" id="youtube" defaultValue="www.youtube.com" />
                                 </div>
                                 <Button variant='primary' type="submit" className="btn btn-primary">Submit</Button>
                                 <Button variant='danger' type="reset" className="btn iq-bg-danger ms-2">cancel</Button>
                              </Form>
                           </div>
                        </div>
                     </div>
                  </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default AccountSetting
