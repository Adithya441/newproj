import React, { Fragment } from "react";
import { Col,  Form, FormLabel, Row } from "react-bootstrap";

const FormSwitch = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">State</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="custom-control custom-switch custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch1"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customSwitch1"
                    >
                      false / Inactive
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-switch custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch2"
                      defaultChecked
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customSwitch2"
                    >
                      true / active
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-switch custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input"
                      disabled
                      defaultChecked
                      id="customSwitch3"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customSwitch3"
                    >
                      disable / active
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-switch custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input"
                      disabled
                      id="customSwitch4"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customSwitch4"
                    >
                      disable / Inactive
                    </FormLabel>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Text</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                    <div className="custom-switch-inner">
                      <p className="mb-0"> Primary </p>
                      <Form.Check.Input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch-11"
                        defaultChecked
                      />
                      <FormLabel
                        className="custom-control-label"
                        htmlFor="customSwitch-11"
                        data-on-label="On"
                        data-off-label="Off"
                      ></FormLabel>
                    </div>
                  </div>
                  <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                    <div className="custom-switch-inner">
                      <p className="mb-0"> Success </p>
                      <Form.Check.Input
                        type="checkbox"
                        className="custom-control-input bg-success"
                        id="customSwitch-22"
                        defaultChecked
                      />
                      <FormLabel
                        className="custom-control-label"
                        htmlFor="customSwitch-22"
                        data-on-label="Tr"
                        data-off-label="Fal"
                      ></FormLabel>
                    </div>
                  </div>
                  <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                    <div className="custom-switch-inner">
                      <p className="mb-0"> Danger </p>
                      <Form.Check.Input
                        type="checkbox"
                        className="custom-control-input bg-danger"
                        id="customSwitch-33"
                        defaultChecked
                      />
                      <FormLabel
                        className="custom-control-label"
                        htmlFor="customSwitch-33"
                        data-on-label="Yes"
                        data-off-label="No"
                      ></FormLabel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Col sm='12' lg='12'>
                  <div className="iq-card">
                     <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Color</h4>
                        </div>
                     </div>
                     <div className="iq-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis
                           mollis, diam nibh finibus leo</p>
                        <div className="d-flex gap-3 flex-wrap">
                           <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-primary" id="customSwitch01"
                                 defaultChecked />
                              <FormLabel className="custom-control-label" htmlFor="customSwitch01">Primary</FormLabel>
                           </div>
                           <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customSwitch02"
                                 defaultChecked />
                              <FormLabel className="custom-control-label" htmlFor="customSwitch02">Success</FormLabel>
                           </div>
                           <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customSwitch03"
                                 defaultChecked />
                              <FormLabel className="custom-control-label" htmlFor="customSwitch03">Danger</FormLabel>
                           </div>
                           <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-waring" id="customSwitch04"
                                 defaultChecked />
                              <FormLabel className="custom-control-label" htmlFor="customSwitch04">Waring</FormLabel>
                           </div>
                           <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customSwitch05"
                                 defaultChecked />
                              <FormLabel className="custom-control-label" htmlFor="customSwitch05">Dark</FormLabel>
                           </div>
                           <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                              <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customSwitch06"
                                 defaultChecked />
                              <FormLabel className="custom-control-label" htmlFor="customSwitch06">Info</FormLabel>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="iq-card">
                     <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Icon</h4>
                        </div>
                     </div>
                     <div className="iq-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis
                           mollis, diam nibh finibus leo</p>
                        <div className="d-flex gap-3 flex-wrap">
                           <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                              <div className="custom-switch-inner">
                                 <p className="mb-0"> Primary </p>
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customSwitch-1" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customSwitch-1">
                                    <span className="switch-icon-left"><i className="fa fa-check"></i></span>
                                    <span className="switch-icon-right"><i className="fa fa-check"></i></span>
                                 </FormLabel>
                              </div>
                           </div>
                           <div
                              className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                              <div className="custom-switch-inner">
                                 <p className="mb-0"> Success </p>
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-success" id="customSwitch-2"
                                    defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customSwitch-2">
                                    <span className="switch-icon-left"><i className="fa fa-check"></i></span>
                                    <span className="switch-icon-right"><i className="fa fa-check"></i></span>
                                 </FormLabel>
                              </div>
                           </div>
                           <div
                              className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                              <div className="custom-switch-inner">
                                 <p className="mb-0"> Danger </p>
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-danger" id="customSwitch-3"
                                    defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customSwitch-3">
                                    <span className="switch-icon-left"><i className="fa fa-times"></i></span>
                                    <span className="switch-icon-right"><i className="fa fa-times"></i></span>
                                 </FormLabel>
                              </div>
                           </div>
                           <div
                              className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                              <div className="custom-switch-inner">
                                 <p className="mb-0"> Warning </p>
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-warning" id="customSwitch-4"
                                    defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customSwitch-4">
                                    <span className="switch-icon-left"><i className="fa fa-exclamation-triangle"></i></span>
                                    <span className="switch-icon-right"><i className="fa fa-exclamation-triangle"></i></span>
                                 </FormLabel>
                              </div>
                           </div>
                           <div
                              className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                              <div className="custom-switch-inner">
                                 <p className="mb-0"> Dark </p>
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-dark" id="customSwitch-5"
                                    defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customSwitch-5">
                                    <span className="switch-icon-left"><i className="fa fa-thumb-tack"></i></span>
                                    <span className="switch-icon-right"><i className="fa fa-thumb-tack"></i></span>
                                 </FormLabel>
                              </div>
                           </div>
                           <div
                              className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                              <div className="custom-switch-inner">
                                 <p className="mb-0"> Info </p>
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-info" id="customSwitch-6"
                                    defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customSwitch-6">
                                    <span className="switch-icon-left"><i className="fa fa-info"></i></span>
                                    <span className="switch-icon-right"><i className="fa fa-info"></i></span>
                                 </FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Col>
    </Fragment>
  );
};

export default FormSwitch;
