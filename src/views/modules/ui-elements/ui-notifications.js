import React, { Fragment, useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";

const UiNotifications = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);
  const [showD, setShowD] = useState(true);
  const [showE, setShowE] = useState(true);
  const [showF, setShowF] = useState(true);
  const [showG, setShowG] = useState(true);
  const [showI, setShowI] = useState(true);
  const [showJ, setShowJ] = useState(true);
  const [showK, setShowK] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
  const toggleShowD = () => setShowD(!showD);
  const toggleShowE = () => setShowE(!showE);
  const toggleShowF = () => setShowF(!showF);
  const toggleShowG = () => setShowG(!showG);
  const toggleShowI = () => setShowI(!showI);
  const toggleShowJ = () => setShowJ(!showJ);
  const toggleShowK = () => setShowK(!showK);

  return (
    <Fragment>
        <Row>
          <Col lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Notifications</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Header>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="">Bootstrap</strong>
                    <small className="ms-auto">11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Stacking</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  When you have multiple toasts, we default to vertically
                  stacking them in a readable manner.
                </p>
                <Toast show={showB} onClose={toggleShowB}>
                  <Toast.Header>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="">Bootstrap</strong>
                    <small className="ms-auto">11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast show={showC} onClose={toggleShowC}>
                  <Toast.Header>
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <strong className="">Bootstrap</strong>
                    <small className="ms-auto">11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">
                    Notifications horizontally and/or vertically{" "}
                  </h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  You can also get fancy with flexbox utilities to align toasts
                  horizontally and/or vertically.
                </p>
                <div className="p-3 bg-dark">
                  {/* <!-- Flexbox container for aligning the toasts --> */}
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "200px" }}
                  >
                    {/* <!-- Then put toasts within --> */}
                    <Toast show={showD} onClose={toggleShowD}>
                      <Toast.Header>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                          role="img"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="">Bootstrap</strong>
                        <small className="ms-auto">11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Heads up, toasts will stack automatically
                      </Toast.Body>
                    </Toast>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Notifications</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over. For browsers that support the{" "}
                  <code>backdrop-filter</code> CSS property, we’ll also attempt
                  to blur the elements under a toast.
                </p>
                <div className="p-3 bg-dark">
                  <Toast show={showE} onClose={toggleShowE}>
                    <Toast.Header>
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                      >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                      </svg>
                      <strong className="">Bootstrap</strong>
                      <small className="ms-auto">11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Stacking Placement</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Place toasts with custom CSS as you need them. The top right
                  is often used for notifications, as is the top middle. If
                  you’re only ever going to show one toast at a time, put the
                  positioning styles right on the <code>.toast</code>.
                </p>
                <div className="bg-dark p-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    style={{ position: "relative", minHeight: "200px" }}
                  >
                    <Toast
                      show={showF}
                      onClose={toggleShowF}
                      style={{ position: "absolute", top: 0, right: 0 }}
                    >
                      <Toast.Header>
                        <svg
                          className="bd-placeholder-img rounded me-2"
                          width="20"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                          role="img"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="#007aff"
                          ></rect>
                        </svg>
                        <strong className="">Bootstrap</strong>
                        <small className="ms-auto">11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>
                        Heads up, toasts will stack automatically
                      </Toast.Body>
                    </Toast>
                  </div>
                </div>
                <p className="mt-3">
                  For systems that generate more notifications, consider using a
                  wrapping element so they can easily stack.
                </p>
                <div className="bg-dark p-3 mt-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    style={{ position: "relative", minHeight: "200px" }}
                  >
                    {/* Position it */}
                    <div style={{ position: "absolute", right: 0 }}>
                      {/* Then put toasts within */}
                      <Toast show={showG} onClose={toggleShowG}>
                        <Toast.Header>
                          <svg
                            className="bd-placeholder-img rounded me-2"
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            role="img"
                          >
                            <rect
                              width="100%"
                              height="100%"
                              fill="#007aff"
                            ></rect>
                          </svg>
                          <strong className="">Bootstrap</strong>
                          <small className="ms-auto">11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>See? Just like this.</Toast.Body>
                      </Toast>
                      <Toast show={showI} onClose={toggleShowI}>
                        <Toast.Header>
                          <svg
                            className="bd-placeholder-img rounded me-2"
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                            role="img"
                          >
                            <rect
                              width="100%"
                              height="100%"
                              fill="#007aff"
                            ></rect>
                          </svg>
                          <strong className="">Bootstrap</strong>
                          <small className="ms-auto">11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>
                          Hello, world! This is a toast message.
                        </Toast.Body>
                      </Toast>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm='12'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Notifications</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
                           <Toast show={showJ} onClose={toggleShowJ} bg="primary">
                  <Toast.Header className="bg-primary">
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#fff"></rect>
                    </svg>
                    <strong className="">Bootstrap</strong>
                    <small className="ms-auto">11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast show={showK} onClose={toggleShowK} bg="success" className="mt-3">
                  <Toast.Header className="bg-success">
                    <svg
                      className="bd-placeholder-img rounded me-2"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                    >
                      <rect width="100%" height="100%" fill="#fff"></rect>
                    </svg>
                    <strong className="">Bootstrap</strong>
                    <small className="ms-auto">11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
                        </div>
                     </div>
                  </Col>
        </Row>
    </Fragment>
  );
};

export default UiNotifications;
