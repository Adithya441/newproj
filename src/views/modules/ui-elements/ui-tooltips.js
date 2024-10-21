import React, { Fragment } from "react";
import {
  Button,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const UiTooltips = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Tooltips</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Hover over the buttons below to see the four tooltips
                  directions: top, right, bottom, and left. The
                  data-bs-placement attribute specifies the tooltip position.
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Tooltip on top</Tooltip>}
                >
                  <Button variant="secondary mt-3">Tooltip on top</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Tooltip on right</Tooltip>}
                >
                  <Button variant="secondary mt-3">Tooltip on right</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Tooltip on bottom</Tooltip>}
                >
                  <Button variant="secondary mt-3">Tooltip on bottom</Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Tooltip on left</Tooltip>}
                >
                  <Button variant="secondary mt-3">Tooltip on left</Button>
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
                  interactive, meaning users cannot focus, hover, or click them
                  to trigger a tooltip (or popover). As a workaround, you’ll
                  want to trigger the tooltip from a wrapper{" "}
                  <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally
                  made keyboard-focusable using <code>tabindex="0"</code>, and
                  override the <code>pointer-events</code> on the disabled
                  element.
                </p>

                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Disabled Tooltip</Tooltip>}
                >
                  <Button variant="primary" disabled>
                    Disabled button
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Tooltips</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Hover over the buttons below to see the four tooltips
                  directions: top, right, bottom, and left Using background
                  colors
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Tooltip on top</Tooltip>}
                >
                  <Button variant="primary mt-3 mr-2 ">
                    Tooltip on top
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Tooltip on Right</Tooltip>}
                >
                  <Button variant="success mt-3 mr-2 ">
                    Tooltip on Right
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Tooltip on Bottom</Tooltip>}
                >
                  <Button variant="danger mt-3 mr-2 ">
                    Tooltip on Bottom
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Tooltip on Left</Tooltip>}
                >
                  <Button variant="info mt-3 mr-2 ">Tooltip on Left</Button>
                </OverlayTrigger>{" "}
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Tooltips</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Hover over the buttons below to see the four tooltips
                  directions: top, right, bottom, and left Using Light
                  background colors
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Tooltip on top</Tooltip>}
                >
                  <Button variant="" className="iq-bg-primary mt-3">
                    Tooltip on top
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="right"
                  overlay={<Tooltip>Tooltip on Right</Tooltip>}
                >
                  <Button variant="" className="iq-bg-success mt-3 mr-2 ">
                    Tooltip on Right
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Tooltip on Bottom</Tooltip>}
                >
                  <Button variant="" className="iq-bg-danger mt-3 ">
                    Tooltip on Bottom
                  </Button>
                </OverlayTrigger>{" "}
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Tooltip on Left</Tooltip>}
                >
                  <Button variant="" className="iq-bg-info mt-3 mr-2 ">
                    Tooltip on Left
                  </Button>
                </OverlayTrigger>{" "}
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Hover elements</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>Hover over the buttons below to see the tooltip.</p>
                {/*  HTML to write  */}

                <OverlayTrigger
                  placement="top"
                  target={"hover"}
                  overlay={<Tooltip>Some tooltip text!</Tooltip>}
                >
                  <Link to={"#"}>Hover over me</Link>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiTooltips;
