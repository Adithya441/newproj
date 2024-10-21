import React, { Fragment } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

//Image
import img1 from "../../../assets/images/small/img-1.jpg";

const UiCarousel = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Slides only</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="#" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="#" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="#" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Slides With Controls</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <Carousel indicators={false}>
                  <Carousel.Item className=" active">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Slides With Indicators</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <Carousel indicators={true}>
                  <Carousel.Item className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Slides With Captions</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <div className="bd-example">
                  <Carousel indicators={true}>
                    <Carousel.Item className=" active">
                      <img src={img1} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className="">
                      <img src={img1} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Some representative placeholder content for the second
                          slide.
                        </p>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className="">
                      <img src={img1} className="d-block w-100" alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Slides With Crossfade</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Here’s a carousel with slides only. Note the presence of the{" "}
                  <code>.d-block</code> and <code>.img-fluid</code> on carousel
                  images to prevent browser default image alignment.
                </p>
                <Carousel fade>
                  <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="..." />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiCarousel;
