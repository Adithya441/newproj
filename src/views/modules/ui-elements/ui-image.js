import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/page-img/15.jpg";
import img3 from "../../../assets/images/page-img/16.jpg";
import img4 from "../../../assets/images/page-img/17.jpg";
import img5 from "../../../assets/images/page-img/18.jpg";
import img6 from "../../../assets/images/page-img/19.jpg";
import img7 from "../../../assets/images/page-img/20.jpg";
import img8 from "../../../assets/images/page-img/10.jpg";
import img9 from "../../../assets/images/page-img/11.jpg";
import img10 from "../../../assets/images/page-img/12.jpg";
import img11 from "../../../assets/images/page-img/13.jpg";
import img12 from "../../../assets/images/page-img/14.jpg";
import img13 from "../../../assets/images/page-img/21.jpg";
import img14 from "../../../assets/images/page-img/22.jpg";
import img15 from "../../../assets/images/page-img/23.jpg";
import img16 from "../../../assets/images/page-img/24.jpg";

const UiImage = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Responsive imagess</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Images in Bootstrap are made responsive with{" "}
                  <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                  <code>height: auto;</code> are applied to the image so that it
                  scales with the parent element.
                </p>
                <img
                  src={img1}
                  className="img-fluid"
                  alt="Responsive imagess"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Equal-width multi-row</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Create equal-width columns that span multiple rows by
                  inserting a <code>.w-100</code> where you want the columns to
                  break to a new line. Make the breaks responsive by mixing the{" "}
                  <code>.w-100</code> with some{" "}
                  <Link to="/docs/4.3/utilities/display/">
                    responsive display utilities
                  </Link>
                  .
                </p>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img src={img2} className="me-3" alt="#" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img src={img3} className="me-3" alt="#" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                    <div className="media mt-3 d-flex">
                      <div className="flex-shrink-0">
                        <img src={img4} className="me-3" alt="#" />
                      </div>
                      <div className="media-body flex-grow-1">
                        <h5 className="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Order</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Change the order of content in media objects by modifying the
                  HTML itself, or by adding some custom flexbox CSS to set the{" "}
                  <code>order</code> property (to an integer of your choosing).
                </p>
                <div className="d-flex mb-5">
                  <div className="flex-grow-1">
                    <h5 className="mt-0 mb-1">Media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                  <div className="flex-shrink-0">
                    <img src={img5} className="ms-3" alt="#" />
                  </div>
                </div>
                <div className="d-flex mb-5">
                  <div className="flex-grow-1">
                    <h5 className="mt-0 mb-1">Center-aligned media</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                  <div className="flex-shrink-0 align-self-center">
                    <img src={img6} className="me-3" alt="#" />
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div className="flex-grow-1">
                    <h5 className="mt-0 mb-1">Bottom-aligned media</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                  <div className="flex-shrink-0 align-self-end">
                    <img src={img7} className="me-3" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Image thumbnails</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  In addition to our{" "}
                  <Link to="https://getbootstrap.com/docs/5.3/utilities/borders/">
                    border-radius utilities
                  </Link>
                  , you can use <code>.img-thumbnail</code> to give an image a
                  rounded 1px border appearance.
                </p>
                <img
                  src={img8}
                  className="img-thumbnail"
                  alt="Responsive images"
                />
                <img
                  src={img9}
                  className="rounded ms-3"
                  alt="Responsive images"
                />
                <img
                  src={img10}
                  className="rounded-circle ms-3"
                  alt="Responsive images"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Image thumbnails</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  In addition to our{" "}
                  <Link to="https://getbootstrap.com/docs/5.3/utilities/borders/">
                    border-radius utilities
                  </Link>
                  , you can use <code>.img-thumbnail</code> to give an image a
                  rounded 1px border appearance.
                </p>
                <img src={img11} className="" alt="Responsive images" />
                <img
                  src={img12}
                  className="float-sm-end"
                  alt="Responsive images"
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Media object</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  The images or other media can be aligned top, middle, or
                  bottom. The default is top aligned.
                </p>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0 align-self-start">
                    <img src={img13} className="me-3" alt="#" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Top-aligned media</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="flex-shrink-0 align-self-center">
                    <img src={img14} className="me-3" alt="#" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Center-aligned media</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0 align-self-end">
                    <img src={img15} className="me-3" alt="#" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mt-0">Bottom-aligned media</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Media list</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Because the media object has so few structural requirements,
                  you can also use these classes on list HTML elements. On your{" "}
                  <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the{" "}
                  <code>.list-unstyled</code> to remove any browser default list
                  styles, and then apply <code>.media</code> to your{" "}
                  <code>&lt;li&gt;</code>s. As always, use spacing utilities
                  wherever needed to fine tune.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex">
                    <div className="flex-shrink-0">
                      <img src={img16} className="me-3" alt="#" />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                  <li className="d-flex my-4">
                    <div className="flex-shrink-0">
                      <img src={img2} className="me-3" alt="#" />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="flex-shrink-0">
                      <img src={img3} className="me-3" alt="#" />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiImage;
