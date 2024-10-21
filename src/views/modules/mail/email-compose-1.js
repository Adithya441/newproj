import React, { Fragment } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import ChoicesJs from "../../../components/choices";

const options1 = [
  { value: "Barb Dwyer", label: "Barb Dwyer" },
  { value: "Brock Lee", label: "Brock Lee" },
  { value: "Rick Shea", label: "Rick shea" },
  { value: "Cliff Hanger", label: "Cliff Hanger" },
];

const options = [
  { value: "Barb Dwyer", label: "Barb Dwyer" },
  { value: "Brock Lee", label: "Brock Lee" },
  { value: "Rick Shea", label: "Rick shea" },
  { value: "Cliff Hanger", label: "Cliff Hanger" },
];
const EmailComposeOne = (props) => {
  return (
    <div>
      <Fragment>
        <Row className="row-eq-height">
          <Col md="12">
            <Row>
              <Col md="12">
                <div className="iq-card iq-border-radius-20">
                  <div className="iq-card-body">
                    <Row>
                      <Col md="12" className="mb-3">
                        <h5 className="text-primary card-title">
                          <i className="ri-pencil-fill me-1"></i>
                          Compose Message
                        </h5>
                      </Col>
                      {props.closeBtn && (
                        <div>
                          <Button
                            className="primary"
                            size="sm"
                            onClick={props.onclick}
                          >
                            <svg width="24" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M17 7L7 17M7 7L17 17L7 7Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </Button>
                        </div>
                      )}
                    </Row>
                    <Form className="email-form">
                      <Row className="form-group">
                        <Form.Label className="col-sm-2 col-form-label">
                          To:
                        </Form.Label>
                        <Col sm="10" className="mb-3">
                          <ChoicesJs
                            options={options}
                            name="choices-multiple-remove-button"
                            select="multi"
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Form.Label className="col-sm-2 col-form-label">
                          Cc:
                        </Form.Label>
                        <Col sm="10" className="mb-3">
                          <ChoicesJs
                            options={options1}
                            name="choices-multiple-remove-button"
                            select="multi"
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Form.Label
                          htmlFor="subject"
                          className="col-sm-2 col-form-label"
                        >
                          Subject:
                        </Form.Label>
                        <Col sm="10" className="mb-3">
                          <input
                            type="text"
                            id="subject"
                            className="form-control"
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Form.Label
                          htmlFor="subject"
                          className="col-sm-2 col-form-label"
                        >
                          Your Message:
                        </Form.Label>
                        <Col md="10" className="mb-3">
                          <Form.Control
                            as="textarea"
                            rows={5}
                            defaultValue="Comment"
                          />
                        </Col>
                      </Row>
                      <Form.Group className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                        <div className="d-flex flex-grow-1 align-items-center gap-2">
                          <div className="send-btn pl-3">
                            <Button
                              role="button"
                              className="btn-primary"
                              to="#"
                            >
                              Send
                            </Button>
                          </div>
                          <div className="send-panel d-flex align-items-center flex-wrap gap-2">
                            <label className="mb-0 iq-bg-primary rounded-5">
                              <Link to="#">
                                <i className="ri-attachment-line"></i>
                              </Link>
                            </label>
                            <label className="mb-0 iq-bg-primary rounded-5">
                            <Link to="#">
                                <i className="ri-map-pin-user-line text-primary"></i>
                              </Link>
                            </label>
                            <label className="mb-0 iq-bg-primary rounded-5">
                            <Link to="#">
                                <i className="ri-drive-line text-primary"></i>
                              </Link>
                            </label>
                            <label className="mb-0 iq-bg-primary rounded-5">
                            <Link to="#">
                                <i className="ri-camera-line text-primary"></i>
                              </Link>
                            </label>
                            <label className="mb-0 iq-bg-primary rounded-5">
                            <Link to="#">
                                <i className="ri-user-smile-line text-primary"></i>
                              </Link>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="send-panel float-end">
                            <label className="mb-0 iq-bg-primary rounded-5 me-3">
                            <Link to="#">
                                <i className="ri-settings-2-line text-primary"></i>
                              </Link>
                            </label>
                            <label className="mb-0 iq-bg-primary rounded-5">
                            <Link to="#">
                                <i className="ri-delete-bin-line text-primary"></i>
                              </Link>
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
};

export default EmailComposeOne;
