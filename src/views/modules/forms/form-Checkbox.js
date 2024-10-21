import React, { Fragment } from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";

const FormCheckbox = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic Checkbox</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <div className="checkbox d-inline-block me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="checkbox-input"
                    id="checkbox1"
                  />
                  <FormLabel className="mb-0" htmlFor="checkbox1">Primary / Inactive</FormLabel>
                </div>
                <div className="checkbox d-inline-block me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="checkbox-input"
                    id="checkbox2"
                    defaultChecked
                  />
                  <FormLabel className="mb-0" htmlFor="checkbox2">Primary / Active</FormLabel>
                </div>
                <div className="checkbox d-inline-block me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="checkbox-input"
                    id="checkbox3"
                    disabled
                  />
                  <FormLabel className="mb-0" htmlFor="checkbox3">Disable / Inactive</FormLabel>
                </div>
                <div className="checkbox d-inline-block me-2">
                  <Form.Check.Input
                    type="checkbox"
                    className="checkbox-input"
                    id="checkbox4"
                    defaultChecked
                    disabled
                  />
                  <FormLabel className="mb-0" htmlFor="checkbox4">Active / Disable</FormLabel>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Custom Color</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input bg-primary"
                      id="customCheck-11"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-11"
                    >
                      Primary{" "}
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input bg-success"
                      id="customCheck-22"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-22"
                    >
                      Success
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input bg-danger"
                      id="customCheck-33"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-33"
                    >
                      Danger
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input bg-warning"
                      id="customCheck-44"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-44"
                    >
                      Warning
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input bg-dark"
                      id="customCheck-55"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-55"
                    >
                      Dark
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input bg-info"
                      id="customCheck-66"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-66"
                    >
                      {" "}
                      Info
                    </FormLabel>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Boolean Checkbox</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <div className="d-flex gap-4">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input me-1"
                      id="customCheck-t"
                      defaultChecked
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-t"
                    >
                      True
                    </FormLabel>
                  </div>
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input me-1"
                      id="customCheck-f"
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customCheck-f"
                    >
                      False
                    </FormLabel>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <div className="col-sm-12 col-lg-6">
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Checkbox</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="d-flex gap-3 flex-wrap">
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck5" />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck5">Primary / Inactive</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck6" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck6">Primary - active</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck7"  disabled />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck7">Primary - inactive - disabled</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck8"  checked="" disabled />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck8">Primary - active - disabled</FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="d-flex gap-3 flex-wrap">
                              <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-primary me-1" id="customCheck-1" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-1"> Primary</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-success me-1" id="customCheck-2" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-2">Success</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-danger me-1" id="customCheck-3" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-3">Danger</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-warning me-1" id="customCheck-4" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-4">Warning</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-dark me-1" id="customCheck-5" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-5">Dark</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input bg-info me-1" id="customCheck-6" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-6">Info</FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Change Icon</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="d-flex gap-3 flex-wrap">
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-10" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-10"><i className="fa fa-music"></i>Music</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-20" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-20"><i className="fa fa-commenting-o"></i>SMS</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-30" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-30"><i className="fa fa-times"></i>cancel</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-40" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-40"><i className="fa fa-file"></i>File</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-50" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-50"><i className="fa fa-bold"></i>Bold</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-60" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-60"><i className="fa fa-map-marker"></i>Location</FormLabel>
                              </div>
                              <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                 <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck-70" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customCheck-70"><i className="fa fa-camera"></i>Camera</FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
        </Row>
    </Fragment>
  );
};

export default FormCheckbox;
