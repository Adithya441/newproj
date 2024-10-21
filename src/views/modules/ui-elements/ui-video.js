import React, { Fragment } from "react";
import { Col, Ratio, Row } from "react-bootstrap";

const UiVideo = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Embeds Video</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Wrap any embed like an{" "}
                  <code className="highlighter-rouge">&lt;iframe&gt;</code> in a
                  parent element with{" "}
                  <code className="highlighter-rouge">.embed-responsive</code> and
                  an aspect ratio. The{" "}
                  <code className="highlighter-rouge">.embed-responsive-item</code>{" "}
                  isn’t strictly required, but we encourage it.
                </p>
        
                  <Ratio aspectRatio="16x9">
                  <embed
                    type="image/svg+xml"
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  />
                </Ratio>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Responsive Aspect ratios 4:3</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Progress components are built with two HTML elements, some CSS
                  to set the width, and a few attributes.
                </p>

            
                <Ratio aspectRatio="4x3">
                  <embed
                    type="image/svg+xml"
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  />
                </Ratio>
              </div>
            </div>
          </Col>
          <Col sm='12' lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Responsive Aspect ratios 21:9</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                           
                           <Ratio aspectRatio="21x9">
                  <embed
                    type="image/svg+xml"
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  />
                </Ratio>
                        </div>
                     </div>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Responsive Aspect ratios 1:1</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                           <Ratio aspectRatio="1x1">
                  <embed
                    type="image/svg+xml"
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  />
                </Ratio>
                        </div>
                     </div>
                  </Col>
        </Row>
    </Fragment>
  );
};

export default UiVideo;
