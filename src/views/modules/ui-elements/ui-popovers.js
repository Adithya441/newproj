import React, { Fragment } from "react";
import {
  Button,
  Col,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";

const UiPopovers = () => {
  return (
    <Fragment>
      
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Popovers</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">Popover Title</Popover.Header>
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="danger" size="lg">Click to toggle popover</Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Dismiss on next click</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Use the <code>focus</code> trigger to dismiss popovers on the
                  user’s next click of a different element than the toggle
                  element.
                </p>

                <OverlayTrigger
                  trigger="focus"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">Popover Title</Popover.Header>
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="danger">Dismissible popover</Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Disabled elements</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Elements with the <code>disabled</code> attribute aren’t
                  interactive, meaning users cannot hover or click them to
                  trigger a popover (or tooltip). As a workaround, you’ll want
                  to trigger the popover from a wrapper <code>&lt;div&gt;</code>{" "}
                  or <code>&lt;span&gt;</code> and override the{" "}
                  <code>pointer-events</code> on the disabled element.
                </p>

                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">Popover Title</Popover.Header>
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="primary " disabled>
                    Disabled popover
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Hover elements</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  For disabled popover triggers, you may also prefer{" "}
                  <code>data-bs-trigger="hover"</code> so that the popover
                  appears as immediate visual feedback to your users as they may
                  not expect to <em>click</em> on a disabled element.
                </p>
                {/* <span className="d-inline-block" data-bs-trigger="hover" data-bs-toggle="popover" data-bs-content="Disabled popover">
                           <button className="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
                           </span> */}
                <OverlayTrigger
                  trigger="hover"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="primary">Hover popove</Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Four directions</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <p>
                  Four options are available: top, right, bottom, and left
                  aligned.
                </p>
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary " className="me-1 mb-3">Popover on top</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary " className="me-1 mb-3">Popover on Right</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary " className="me-1 mb-3">Popover on Bottom</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary " className="me-1 mb-3">Popover on Left</Button>
                </OverlayTrigger>
               
              </div>
            </div>
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Popovers With Color</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <p>
                  Four options are available: top, right, bottom, and left
                  aligned.
                </p>
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="primary " className="me-1 mb-3">Popover on top</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="success " className="me-1 mb-3">Popover on Right</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="danger " className="me-1 mb-3">Popover on Bottom</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="info  text-white" className="me-1 mb-3">Popover on Left</Button>
                </OverlayTrigger>
               
              </div>
            </div>
            <div class="iq-card">
              <div class="iq-card-header d-flex justify-content-between">
                <div class="iq-header-title">
                  <h4 class="card-title">Popovers With Color</h4>
                </div>
              </div>
              <div class="iq-card-body">
                <p>
                  Four options are available: top, right, bottom, and left
                  aligned.
                </p>
                <OverlayTrigger
                  trigger="click"
                  placement="top"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button  variant="outline-primary" className="me-1 mb-3">Popover on top</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button  variant="outline-success" className="me-1 mb-3">Popover on Right</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button  variant="outline-danger" className="me-1 mb-3">Popover on Bottom</Button>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Body>
                        And here&#39;s some amazing content. It&#39;s very
                        engaging. Right?
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button  variant="outline-info" className="me-1 mb-3">Popover on Left</Button>
                </OverlayTrigger>
               
              </div>
            </div>
          </Col>
        </Row>
      
    </Fragment>
  );
};

export default UiPopovers;
