import React, { Fragment, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const UiModal = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Modal components</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Below is a <em>static</em> modal example (meaning its{" "}
                  <code>position</code> and <code>display</code> have been
                  overridden). Included are the modal header, modal body
                  (required for <code>padding</code>), and modal footer
                  (optional). We ask that you include modal headers with dismiss
                  actions whenever possible, or provide another explicit dismiss
                  action.
                </p>

                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Modal Scrolling </h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  When modals become too long for the user’s viewport or device,
                  they scroll independent of the page itself. Try the demo below
                  to see what we mean.
                </p>

                <Button variant="primary" onClick={handleShow1}>
                  Launch demo modal
                </Button>
                <Modal show={show1} onHide={handleClose1}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose1}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Optional sizes</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Modals have three optional sizes, available via modifier
                  classes to be placed on a .modal-dialog. These sizes kick in
                  at certain breakpoints to avoid horizontal scrollbars on
                  narrower viewports.
                </p>

                <Button
                  variant="primary"
                  className="me-1"
                  onClick={handleShow2}
                >
                  Extra large modal
                </Button>
                {/* Extra Large modal  */}
                <Modal size="xl" show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* <!-- Large modal --> */}
                <Button
                  variant="primary"
                  className="me-1 "
                  onClick={handleShow3}
                >
                  Large modal
                </Button>
                <Modal size="lg" show={show3} onHide={handleClose3}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose3}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* <!-- Small modal --> */}

                <Button
                  variant="primary"
                  className="me-1"
                  onClick={handleShow4}
                >
                  Small modal
                </Button>
                <Modal show={show4} onHide={handleClose4}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose4}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose4}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Scrolling long content</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  When modals become too long for the user’s viewport or device,
                  they scroll independent of the page itself. Try the demo below
                  to see what we mean.
                </p>
                <Button variant="primary" onClick={handleShow5}>
                  Launch demo modal
                </Button>
                <Modal show={show5} onHide={handleClose5}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose5}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose5}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Vertically centered</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Add{" "}
                  <code className="highlighter-rouge">.modal-dialog-centered</code>{" "}
                  to <code className="highlighter-rouge">.modal-dialog</code> to
                  vertically center the modal.
                </p>

                <Button
                  variant="primary"
                  className="me-1"
                  onClick={handleShow6}
                >
                  Launch demo modal
                </Button>
                <Button
                  variant="primary"
                  className="me-1"
                  onClick={handleShow7}
                >
                  Vertically centered scrollable modal
                </Button>
                <Modal show={show6} onHide={handleClose6} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose6}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose6}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={show7} onHide={handleClose7} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose7}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose7}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Using the grid</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Utilize the Bootstrap grid system within a modal by nesting <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.</p>
                           <Button variant="primary" onClick={handleShow8}>
                  Launch demo modal
                </Button>
                <Modal show={show8} onHide={handleClose8}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div className="iq-example-row">
                                          <Container fluid>
                                             <Row>
                                                <Col md='4'>.col-md-4</Col>
                                                <Col md='4' className="ms-auto">.col-md-4 .ms-auto</Col>
                                             </Row>
                                             <Row>
                                                <Col md='3' className="ms-auto">.col-md-3 .ms-auto</Col>
                                                <Col md='2' className="ms-auto">.col-md-2 .ms-auto</Col>
                                             </Row>
                                             <Row >
                                                <Col md='6' className="ms-auto">.col-md-6 .ms-auto</Col>
                                             </Row>
                                             <Row >
                                                <Col sm='9'>
                                                   Level 1: .col-sm-9
                                                   <Row>
                                                      <Col sm='6' className="col-8">
                                                         Level 2: .col-8 .col-sm-6
                                                      </Col>
                                                      <Col sm='6' className="col-4 ">
                                                         Level 2: .col-4 .col-sm-6
                                                      </Col>
                                                   </Row>
                                                </Col>
                                             </Row>
                                          </Container>
                                       </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose8}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose8}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                        </div>
                     </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiModal;
