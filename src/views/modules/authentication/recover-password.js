import React, { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image
import logo from "../../../assets/images/logo-white.png";
import img from "../../../assets/images/login/1.png";
import img1 from "../../../assets/images/login/2.png";
import img2 from "../../../assets/images/login/3.png";

const RecoverPassword = () => {
  return (
    <Fragment>
      <section className="sign-in-page">
        <Container className=" sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
          <Row className="no-gutters">
            <Col md="6" className="text-center">
              <div className="sign-in-detail text-white">
                <Link className="sign-in-logo mb-5" to="/">
                  <img src={logo} className="img-fluid" alt="logo" />
                </Link>
                <Swiper
                  className="owl-carousel"
                  autoplay={{ delay: 3000 }}
                  loop="true"
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                >
                  <SwiperSlide className="item">
                    <img src={img} className="img-fluid mb-4" alt="logo" />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <img src={img1} className="img-fluid mb-4" alt="logo" />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <img src={img2} className="img-fluid mb-4" alt="logo" />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col md="6" className="position-relative">
              <div className="sign-in-from">
                <h1 className="mb-0">Reset Password</h1>
                <p>
                  Enter your email address and we'll send you an email with
                  instructions to reset your password.
                </p>
                <Form className="mt-4">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1" className="mb-2">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <div className="d-inline-block w-100">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn btn-primary float-end mt-3"
                    >
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RecoverPassword;
