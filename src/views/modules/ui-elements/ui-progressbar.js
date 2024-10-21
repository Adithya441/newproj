import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'

const UiProgressbar = () => {
  return (
    <Fragment>
      
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Examples</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Progress components are built with two HTML elements, some CSS
                  to set the width, and a few attributes. We don’t use{" "}
                  <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">
                    the HTML5 <code>&lt;progress&gt;</code> element
                  </Link>
                  , ensuring you can stack progress bars, animate them, and
                  place text labels over them.
                </p>
                <ul>
                  <li>
                    We use the <code>.progress</code> as a wrapper to indicate
                    the max value of the progress bar.
                  </li>
                  <li>
                    We use the inner <code>.progress-bar</code> to indicate the
                    progress so far.
                  </li>
                  <li>
                    The <code>.progress-bar</code> requires an inline style,
                    utility class, or custom CSS to set their width.
                  </li>
                  <li>
                    The <code>.progress-bar</code> also requires some{" "}
                    <code>role</code> and <code>aria</code> attributes to make
                    it accessible.
                  </li>
                </ul>
                <p>
                  Put that all together, and you have the following examples.
                </p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Height</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  We only set a <code>height</code> value on the{" "}
                  <code>.progress</code>, so if you change that value the inner{" "}
                  <code>.progress-bar</code> will automatically resize
                  accordingly.
                </p>
                <div className="progress mb-3" style={{ height: " 3px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <div className="progress mb-3" style={{ height: " 10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
                <div className="progress mb-3" style={{ height: " 15px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
                <div className="progress" style={{ height: " 20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="99"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    99%
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Animated stripes</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  The striped gradient can also be animated. Add{" "}
                  <code>.progress-bar-animated</code> to{" "}
                  <code>.progress-bar</code> to animate the stripes right to
                  left via CSS3 animations.
                </p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Labels</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Add labels to your progress bars by placing text within the{" "}
                  <code>.progress-bar</code>.
                </p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    25%
                  </div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow="99"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    99%
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Backgrounds</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Use background utility classes to change the appearance of
                  individual progress bars.
                </p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress bg-danger">
                  <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "100" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Multiple bars</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Include multiple progress bars in a progress component if you
                  need.
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "15%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Striped</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Add <code>.progress-bar-striped</code> to any{" "}
                  <code>.progress-bar</code> to apply a stripe via CSS gradient
                  over the progress bar’s background color.
                </p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress mb-3">
                  <div
                    className="progress-bar progress-bar-striped bg-warning"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress bg-danger">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "100" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      
    </Fragment>
  );
};

export default UiProgressbar;
