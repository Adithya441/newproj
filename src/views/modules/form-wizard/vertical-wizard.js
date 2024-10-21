import React, { Fragment, useState } from "react";

// react-bootstrap
import { Button, Col, Row } from "react-bootstrap";

// react-router
import { Link } from 'react-router-dom'


const VerticalWizard = () => {
  const [show, setShow] = useState("A");

  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Vertical Wizard</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Row>
                  <Col md="3">
                    <ul id="top-tabbar-vertical" className="p-0">
                      <li
                        className={`active ${
                          show === "personal" ? " active done" : ""
                        } ${show === "contact" ? " active done" : ""} ${show === "payment" ? " active done" : ""} ${
                          show === "official" ? " active done" : ""
                        } ${show === "A" ? "active" : ""}`}
                        id="personal"
                      >
                        <Link to="#">
                          <i className="ri-lock-unlock-line text-primary"></i>
                          <span>Personal</span>
                        </Link>
                      </li>
                      <li
                        id="contact"
                        className={` ${
                          show === "personal" ? " active done" : ""
                        } ${show === "official" ? " active done" : ""} ${
                          show === "payment" ? "active done" : ""
                        } ${show === "contact" ? 'active' : ''}`}
                      >
                        <Link to="#">
                          <i className="ri-user-fill text-danger"></i>
                          <span>Contact</span>
                        </Link>
                      </li>
                      <li id="official" className={` ${show === "official" ? " active done" : ""} ${
                        show === "contact" ? "active" : ""
                      } ${show === "payment" ? " active done" : ""}` }>
                        <Link to="#">
                          <i className="ri-camera-fill text-success"></i>
                          <span>Official</span>
                        </Link>
                      </li>
                      <li id="payment" className={`${
                        show === "payment" ? " active " : ""
                      } `}>
                        <Link to="#">
                          <i className="ri-check-fill text-warning"></i>
                          <span>Payment</span>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <div className="col-md-9">
                    <form id="form-wizard3" className={` text-center`}>
                      {/* <!-- fieldsets --> */}
                      <fieldset className={`${show === "A" ? "d-block" : "d-none"}`}>
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4">User Information:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <div className="form-group">
                                <label for="fname" className="mb-2">
                                  First Name: *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="fname"
                                  name="fname"
                                  placeholder="First Name"
                                  required="required"
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="lname" className="my-2">
                                  Last Name: *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lname"
                                  name="lname"
                                  placeholder="Last Name"
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label className="my-2">Gender: *</label>
                                <div className="form-check d-flex ps-0">
                                  <div className="custom-control custom-radio custom-control-inline me-4">
                                    <input
                                      type="radio"
                                      id="customRadio1"
                                      name="customRadio"
                                      className="custom-control-input"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customRadio1"
                                    >
                                      {" "}
                                      Male
                                    </label>
                                  </div>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      type="radio"
                                      id="customRadio2"
                                      name="customRadio"
                                      className="custom-control-input"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customRadio2"
                                    >
                                      {" "}
                                      Female
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="dob" className="my-2">
                                  Date Of Birth: *
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="dob"
                                  name="dob"
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          id="submit"
                          type="button"
                          name="next"
                          className="btn btn-primary next action-button float-end mt-3"
                          value="Next"
                          onClick={() => setShow("personal")}
                        >
                          Next
                        </Button>
                      </fieldset>
                      <fieldset className={`${show === "personal" ? "d-block" : "d-none"}`}>
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4">Contact Information:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <div className="form-group">
                                <label for="email">Email Id: *</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="Email Id"
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="ccno">Contact Number: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ccno"
                                  name="ccno"
                                  placeholder="Contact Number"
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="city">City: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="city"
                                  name="city"
                                  placeholder="City."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="state">State: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="state"
                                  name="state"
                                  placeholder="State."
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          type="button"
                          name="next"
                          className="btn btn-primary next action-button float-end"
                          value="Next"
                          onClick={() => setShow("official")}
                        >
                          Next
                        </Button>
                        <Button
                          type="button"
                          name="previous"
                          className="btn btn-dark previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => setShow("A")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset className={`${show === "official" ? "d-block" : "d-none"}`}>
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4">Official Information:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <div className="form-group">
                                <label for="empid">Employee Id: *</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="empid"
                                  name="empid"
                                  placeholder="Employee Id."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="desg">Designation: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="desg"
                                  name="desg"
                                  placeholder="Designation."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="accname">Departmrnt Name: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="accname"
                                  name="accname"
                                  placeholder="Departmrnt Name."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="workhour">Working Hour: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="workhour"
                                  name="workhour"
                                  placeholder="Working Hour."
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          type="button"
                          name="next"
                          className="btn btn-primary next action-button float-end"
                          value="Submit"
                          onClick={() => setShow("payment")}
                        >
                          Submit
                        </Button>
                        <Button
                          type="button"
                          name="previous"
                          className="btn btn-dark previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={() => setShow("personal")}
                        >
                          Previous
                        </Button>
                      </fieldset>
                      <fieldset className={`${show === "payment" ? "d-block" : "d-none"}`}>
                        <div className="form-card text-start">
                          <Row>
                            <div className="col-12">
                              <h3 className="mb-4 text-start">Payment:</h3>
                            </div>
                          </Row>
                          <Row>
                            <Col md="12">
                              <div className="form-group">
                                <label for="panno">Pan No: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="panno"
                                  name="panno"
                                  placeholder="Pan No."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="accno">Account No: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="accno"
                                  name="accno"
                                  placeholder="Account No."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="holname">
                                  Account Holder Name: *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="holname"
                                  name="accname"
                                  placeholder="Account Holder Name."
                                />
                              </div>
                            </Col>
                            <Col md="12">
                              <div className="form-group">
                                <label for="ifsc">IFSC Code: *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ifsc"
                                  name="ifsc"
                                  placeholder="IFSC Code."
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Link
                          className="btn btn-primary action-button float-end"
                          to="#"
                          onClick={()=>setShow('A')}
                        >
                          Submit
                        </Link>
                        <Button
                          type="button"
                          name="previous"
                          className="btn btn-dark previous action-button-previous float-end me-3"
                          value="Previous"
                          onClick={()=>setShow('official')}
                        >
                          Previous
                        </Button>
                      </fieldset>
                    </form>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default VerticalWizard;
