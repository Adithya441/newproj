import React, { Fragment, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UiAlerts = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  const [show8, setShow8] = useState(true);
  const [show9, setShow9] = useState(true);
  const [show10, setShow10] = useState(true);
  const [show11, setShow11] = useState(true);
  const [show12, setShow12] = useState(true);
  const [show13, setShow13] = useState(true);

  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic Alerts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert variant="primary">
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="secondary">
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="success">
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="danger">
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="warning">
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="info">
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="light">
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="dark">
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic Alerts With Icons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert variant="primary">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="secondary">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="success">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="danger">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="warning">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="info">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert variant="light">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic Line Alerts</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert className="alert bg-white alert-primary">
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-secondary">
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-success">
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-danger">
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-warning">
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-info">
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-light">
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic Line Alerts With Icons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert className="alert bg-white alert-primary">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-secondary">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-success">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-danger">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-warning">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-info">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-white alert-light">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Alerts With Background</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert className="alert text-white bg-primary">
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-secondary">
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-success">
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-danger">
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-warning">
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-info">
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-light">
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Background Alerts With Icons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert className="alert text-white bg-primary">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-secondary">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-success">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-danger">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-warning">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert text-white bg-info">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert className="alert bg-light">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Alerts Dismissing</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert
                  show={show}
                  className="alert text-white alert-dismissible  alert-solid bg-primary fade show"
                  role="alert"
                  onClick={() => setShow(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show1}
                  className="alert text-white alert-dismissible bg-secondary"
                  role="alert"
                  onClick={() => setShow1(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show2}
                  className="alert text-white alert-dismissible bg-success"
                  role="alert"
                  onClick={() => setShow2(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show3}
                  className="alert text-white alert-dismissible bg-danger"
                  role="alert"
                  onClick={() => setShow3(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show4}
                  className="alert text-white alert-dismissible bg-warning"
                  role="alert"
                  onClick={() => setShow4(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show5}
                  className="alert text-white alert-dismissible bg-info"
                  role="alert"
                  onClick={() => setShow5(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show6}
                  className="alert bg-light"
                  role="alert"
                  onClick={() => setShow6(false)}
                  dismissible
                >
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Alerts Dismissing With Icons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Alert
                  show={show7}
                  className="alert text-white alert-dismissible bg-primary"
                  role="alert"
                  onClick={() => setShow7(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>primary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show8}
                  className="alert text-white alert-dismissible bg-secondary"
                  role="alert"
                  onClick={() => setShow8(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>secondary</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show9}
                  className="alert text-white alert-dismissible bg-success"
                  role="alert"
                  onClick={() => setShow9(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>success</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show10}
                  className="alert text-white alert-dismissible bg-danger"
                  role="alert"
                  onClick={() => setShow10(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>danger</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show11}
                  className="alert text-white alert-dismissible bg-warning"
                  role="alert"
                  onClick={() => setShow11(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>warning</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show12}
                  className="alert text-white alert-dismissible bg-info"
                  role="alert"
                  onClick={() => setShow12(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>info</b> alert—check it out!
                  </div>
                </Alert>
                <Alert
                  show={show13}
                  className="alert bg-light"
                  role="alert"
                  onClick={() => setShow13(false)}
                  dismissible
                >
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    A simple <b>light</b> alert—check it out!
                  </div>
                </Alert>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Alerts With Background</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <div className="alert alert-primary" role="alert">
                  <div className="iq-alert-text">
                    A simple primary alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert alert-secondary" role="alert">
                  <div className="iq-alert-text">
                    A simple secondary alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert alert-success" role="alert">
                  <div className="iq-alert-text">
                    A simple success alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert alert-danger" role="alert">
                  <div className="iq-alert-text">
                    A simple danger alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert alert-warning" role="alert">
                  <div className="iq-alert-text">
                    A simple warning alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert alert-info" role="alert">
                  <div className="iq-alert-text">
                    A simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert alert-light" role="alert">
                  <div className="iq-alert-text">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Background Alerts With Icons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <div className="alert text-white bg-primary" role="alert">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    simple primary alert with{" "}
                    <Link to="#" className="alert-link text-white">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert text-white bg-secondary" role="alert">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    simple primary alert with{" "}
                    <Link to="#" className="alert-link text-white">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert text-white bg-success" role="alert">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    simple primary alert with{" "}
                    <Link to="#" className="alert-link text-white">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert text-white bg-danger" role="alert">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    simple primary alert with{" "}
                    <Link to="#" className="alert-link text-white">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert text-white bg-warning" role="alert">
                  <div className="iq-alert-icon">
                    <i className="ri-alert-fill"></i>
                  </div>
                  <div className="iq-alert-text">
                    simple primary alert with{" "}
                    <Link to="#" className="alert-link text-white">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
                <div className="alert text-white bg-info" role="alert">
                  <div className="iq-alert-icon">
                    <i className="ri-information-line"></i>
                  </div>
                  <div className="iq-alert-text">
                    simple primary alert with{" "}
                    <Link to="#" className="alert-link text-white">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Additional content</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <div className="row">
                  <div className="col-sm-12 col-lg-6">
                    <div className="alert alert-primary" role="alert">
                      <div className="iq-alert-text">
                        <h5 className="alert-heading">Well done!</h5>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message. This example text is going to run a bit
                          longer so that you can see how spacing within an alert
                          works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                          Whenever you need to, be sure to use margin utilities
                          to keep things nice and tidy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <div className="alert alert-success" role="alert">
                      <div className="iq-alert-text">
                        <h5 className="alert-heading">Well done!</h5>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message. This example text is going to run a bit
                          longer so that you can see how spacing within an alert
                          works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                          Whenever you need to, be sure to use margin utilities
                          to keep things nice and tidy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiAlerts;
