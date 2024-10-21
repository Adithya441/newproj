import React, { Fragment, useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

// Img
import img from "../../../assets/images/page-img/img-success.png";
import { Link } from "react-router-dom";

const ValidateWizard = () => {
  const [show, setShow] = useState("A");
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Validate Wizard</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="stepwizard mt-4">
                  <div className="stepwizard-row setup-panel">
                    <div
                      id="user"
                      className={`wizard-step active ${
                        show === "user-detail" ? "active done" : ""
                      } ${show === "document-detail" ? " active done" : ""} ${
                        show === "bank-detail" ? " active done" : ""
                      } ${show === "A" ? "active" : ""}`}
                    >
                      <Link to="#user-detail" className="active btn">
                        <i className="ri-lock-unlock-line text-primary"></i>
                        <span>User Detail</span>
                      </Link>
                    </div>
                    <div
                      id="document"
                      className={`wizard-step ${
                        show === "document-detail" ? " active done" : ""
                      } ${show === "bank-detail" ? " active done" : ""} ${
                        show === "cpnfirm-data" ? "active " : ""
                      }`}
                    >
                      <Link
                        to="#document-detail"
                        className="btn btn-default disabled"
                      >
                        <i className="ri-user-fill text-danger"></i>
                        <span>Document Detail</span>
                      </Link>
                    </div>
                    <div
                      id="bank"
                      className={`wizard-step ${
                        show === "bank-detail" ? " active done" : ""
                      } ${show === "cpnfirm-data" ? "active" : ""}`}
                    >
                      <Link
                        to="#bank-detail"
                        className="btn btn-default disabled"
                      >
                        <i className="ri-camera-fill text-success"></i>
                        <span>Bank Detail</span>
                      </Link>
                    </div>
                    <div
                      id="confirm"
                      className={`wizard-step ${
                        show === "cpnfirm-data" ? " active " : ""
                      } `}
                    >
                      <Link
                        to="#cpnfirm-data"
                        className="btn btn-default disabled"
                      >
                        <i className="ri-check-fill text-warning"></i>
                        <span>Confirm</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <Form className="row setup-content" id="user-detail">
                  <div
                    className={`${
                      show === "A" ? "d-block" : "d-none"
                    }`}
                    
                  >
                    <Col sm='12'>
                      <Col md='12' className="p-0">
                        <h3 className="mb-4">User Information:</h3>
                        <Row>
                          <Col md='6' className="form-group">
                            <FormLabel className="control-label mb-2">
                              First Name
                            </FormLabel>
                            <FormControl
                              maxLength="100"
                              type="text"
                              required="required"
                              className="form-control"
                              placeholder="Enter First Name"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel className="control-label mb-2">
                              Last Name
                            </FormLabel>
                            <FormControl
                              maxLength="100"
                              type="text"
                              required="required"
                              className="form-control"
                              placeholder="Enter Last Name"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="uname" className="control-label my-2">
                              User Name: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              id="uname"
                              required="required"
                              name="uname"
                              placeholder="Enter User Name"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="emailid" className="control-label my-2">
                              Email Id: *
                            </FormLabel>
                            <input
                              type="email"
                              id="emailid"
                              className="form-control"
                              required="required"
                              name="emailid"
                              placeholder="Email ID"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="pwd" className="control-label my-2">
                              Password: *
                            </FormLabel>
                            <input
                              type="password"
                              className="form-control"
                              required="required"
                              id="pwd"
                              name="pwd"
                              placeholder="Password"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="cpwd" className="control-label my-2">
                              Confirm Password: *
                            </FormLabel>
                            <input
                              type="password"
                              className="form-control"
                              id="cpwd"
                              required="required"
                              name="cpwd"
                              placeholder="Confirm Password"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="cno" className="control-label my-2">
                              Contact Number: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="cno"
                              name="cno"
                              placeholder="Contact Number"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="acno" className="control-label my-2">
                              Alternate Contact Number: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="acno"
                              name="acno"
                              placeholder="Alternate Contact Number"
                            />
                          </Col>
                          <Col md='12' className=" mb-3 form-group mt-2">
                            <FormLabel className="mb-0" htmlFor="floatingTextarea2">
                              Company Address: *
                            </FormLabel>
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea2"
                              style={{ height: "100px" }}
                            ></textarea>
                          </Col>
                        </Row>
                        <Button
                        size="lg"
                          className="btn btn-primary nextBtn float-end"
                          type="button"
                          onClick={() => setShow("document-detail")}
                        >
                          Next
                        </Button>
                      </Col>
                    </Col>
                  </div>
                  <div
                    className={`${
                      show === "document-detail" ? "d-block" : "d-none"
                    }`}
                    id="document-detail"
                  >
                    <Col sm='12'>
                      <Col md='12' className=" p-0">
                        <h3 className="mb-4">Document Details:</h3>
                        <Row>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="fname" className="control-label mb-0">
                              Company Name: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="fname"
                              name="fname"
                              placeholder="Company Name"
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormGroup className="form-group">
                              <FormLabel htmlFor="ccno" className="control-label mb-0">
                                Contact Number: *
                              </FormLabel>
                              <FormControl
                                type="text"
                                className="form-control"
                                required="required"
                                id="ccno"
                                name="ccno"
                                placeholder="Contact Number"
                              />
                            </FormGroup>
                          </Col>
                          <Col md='6' className="form-group">
                            <FormGroup>
                              <FormLabel htmlFor="url" className="control-label mb-0">
                                Company Url: *
                              </FormLabel>
                              <FormControl
                                type="text"
                                className="form-control"
                                required="required"
                                id="url"
                                name="url"
                                placeholder="Company Url."
                              />
                            </FormGroup>
                          </Col>
                          <Col md='6' className="form-group">
                            <FormGroup className="form-group">
                              <FormLabel htmlFor="cemail" className="control-label mb-0">
                                Company Mail Id: *
                              </FormLabel>
                              <FormControl
                                type="email"
                                className="form-control"
                                required="required"
                                id="cemail"
                                name="cemail"
                                placeholder="Company Mail Id."
                              />
                            </FormGroup>
                          </Col>
                          <Col md='12'>
                            <FormGroup className="form-group">
                              <FormLabel htmlFor="floatingTextarea2" className="mb-0">
                                Company Address: *
                              </FormLabel>
                              <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: "100px" }}
                              ></textarea>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn btn-primary nextBtn btn-lg pull-right"
                          type="button"
                          onClick={() => setShow("bank-detail")}
                        >
                          Next
                        </Button>
                      </Col>
                    </Col>
                  </div>
                  <div
                    className={`${
                      show === "bank-detail" ? "d-block" : "d-none"
                    }`}
                    id="bank-detail"
                  >
                    <Col sm='12'>
                      <Col md='12' className=" p-0">
                        <h3 className="mb-4">Bank Detail:</h3>
                        <Row>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="panno" className="control-label mb-0">
                              Pan No: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="panno"
                              name="panno"
                              placeholder="Pan No."
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="accno" className="control-label mb-0">
                              Account No: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="accno"
                              name="accno"
                              placeholder="Account No."
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="accname" className="control-label mb-0">
                              Account Holder Name: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="accname"
                              name="accname"
                              placeholder="Account Holder Name."
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="ifsc" className="control-label mb-0">
                              IFSC Code: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="ifsc"
                              name="ifsc"
                              placeholder="IFSC Code."
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="bankname" className="control-label mb-0">
                              Bank Name: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="bankname"
                              name="bankname"
                              placeholder="Bank Name."
                            />
                          </Col>
                          <Col md='6' className="form-group">
                            <FormLabel htmlFor="branch" className="control-label mb-0">
                              Bank Branch Name: *
                            </FormLabel>
                            <FormControl
                              type="text"
                              className="form-control"
                              required="required"
                              id="branch"
                              name="branch"
                              placeholder="Bank Branch Name."
                            />
                          </Col>
                        </Row>
                        <Button
                          className="btn btn-primary nextBtn btn-lg pull-right"
                          type="button"
                          onClick={() => setShow("cpnfirm-data")}
                        >
                          Next
                        </Button>
                      </Col>
                    </Col>
                  </div>
                  <div
                    className={`${
                      show === "cpnfirm-data" ? "d-block" : "d-none"
                    }`}
                    id="cpnfirm-data"
                  >
                    <Col sm='12'>
                      <Col md='12' className=" p-0">
                        <h3 className="mb-4 text-md-start text-center">
                          Finish:
                        </h3>
                        <Row className="justify-content-center">
                          <div className="col-3">
                            {" "}
                            <img
                              src={img}
                              className="fit-image"
                              alt="img-success"
                            />{" "}
                          </div>
                        </Row>
                      </Col>
                    </Col>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default ValidateWizard;
