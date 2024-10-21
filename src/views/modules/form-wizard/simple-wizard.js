import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Img
import img from "../../../assets/images/page-img/img-success.png";

const SimpleWizard = () => {
  const [show, AccountShow] = useState("A");
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Simple Wizard</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Form id="form-wizard1" className="text-center mt-4">
                  <ul id="top-tab-list" className="p-0 row list-inline">
                    <li
                      className={` ${show === 'Image' ? ' active done':''} ${show === 'Personal' ? ' active done':''} ${show === 'Account' ? ' active done':''} ${show === 'A' ? 'active':''}`}
                      id="account"
                    >
                      <Link href="#" className="mx-0">
                        <i className="ri-lock-unlock-line"></i>
                        <span>Account</span>
                      </Link>
                    </li>
                    <li
                      id="personal"
                      className={`${show === 'Personal' ? ' active done':''} ${show === 'Image' ? ' active done':''} ${show === 'Account' ? 'active ':''} `}
                    >
                      <Link href="#" className="mx-0">
                        <i className="ri-user-fill"></i>
                        <span>Personal</span>
                      </Link>
                    </li>
                    <li
                      id="payment"
                      className={`${show === 'Image' ? ' active done':''} ${show === 'Personal' ? 'active':''} `}
                    >
                      <Link href="#" className="mx-0">
                        <i className="ri-camera-fill"></i>
                        <span>Image</span>
                      </Link>
                    </li>
                    <li
                      id="confirm"
                      className={`${show === 'Image' ? ' active ':''} `}
                    >
                      <Link href="#" className="mx-0">
                        <i className="ri-check-fill"></i>
                        <span>Finish</span>
                      </Link>
                    </li>
                  </ul>
                  <fieldset
                    className={`${show === "A" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Account Information: </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 1 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Email: *</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email Id"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Username: *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="uname"
                              placeholder="UserName"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label mt-2">Password: *</label>
                            <input
                              type="password"
                              className="form-control"
                              name="pwd"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label mt-2">
                              Confirm Password: *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="cpwd"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="primary"
                      name="next"
                      className="next action-button float-end mt-2"
                      value="Next"
                      onClick={() => AccountShow("Account")}
                    >
                      Next
                    </Button>
                  </fieldset>
                  <fieldset
                    className={`${show === 'Account' ? 'd-block' : 'd-none'}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Personal Information:</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 2 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label mb-0">First Name: *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="fname"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label mb-0">Last Name: *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lname"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label mb-0">Contact No.: *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="phno"
                              placeholder="Contact No."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label mb-0">
                              Alternate Contact No.: *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phno_2"
                              placeholder="Alternate Contact No."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="button"
                      name="next"
                      variant="primary"
                      className="next action-button float-end"
                      value="Next"
                      onClick={() => AccountShow("Personal")}
                    >
                      Next
                    </Button>
                    <Button
                      type="button"
                      variant="dark"
                      name="previous"
                      className="dark previous action-button-previous float-end me-3"
                      value="Previous"
                      onClick={() => AccountShow("A")}
                    >
                      Previous
                    </Button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Personal" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Image Upload:</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 3 - 4</h2>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label mb-0">Upload Your Photo:</label>
                        <input
                          type="file"
                          className="form-control"
                          name="pic"
                          accept="image/*"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label mb-0">
                          Upload Signature Photo:
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="pic-2"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Submit"
                      onClick={() => AccountShow("Image")}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="dark"
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-3"
                      value="Previous"
                      onClick={() => AccountShow("Account")}
                    >
                      Previous
                    </Button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Image" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card">
                      <Row>
                        <div className="col-7">
                          <h3 className="mb-4 text-start">Finish:</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 4 - 4</h2>
                        </div>
                      </Row>
                      <br />
                      <br />
                      <h2 className="text-success text-center">
                        <strong>SUCCESS !</strong>
                      </h2>
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-3">
                          {" "}
                          <img
                            src={img}
                            width={2261}
                            height={2241}
                            className="img-fluid"
                            alt="fit-images"
                          />{" "}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-7 text-center">
                          <h5 className="purple-text text-center">
                            You Have Successfully Signed Up
                          </h5>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default SimpleWizard;
