import React, { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image
import logo from "../../../assets/images/logo-white.png";
import img from "../../../assets/images/login/1.png";
import img1 from "../../../assets/images/login/2.png";
import img2 from "../../../assets/images/login/3.png";
import mailImg from "../../../assets/images/login/mail.png";

import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const ConfirmMail = () => {
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
                <img src={mailImg} width="80" alt="" />
                <h1 className="mt-3 mb-0">Success !</h1>
                <p>
                  A email has been send to youremail@domain.com. Please check
                  for an email from company and click on the included link to
                  reset your password.
                </p>
                <div className="d-inline-block w-100">
                  <Link to="/" className="btn btn-primary mt-3">
                    Back to Home
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ConfirmMail;
