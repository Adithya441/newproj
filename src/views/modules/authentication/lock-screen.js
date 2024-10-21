import React, { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image
import logo from "../../../assets/images/logo-white.png";
import img from "../../../assets/images/login/1.png";
import img1 from "../../../assets/images/login/2.png";
import img2 from "../../../assets/images/login/3.png";
import user1 from "../../../assets/images/user/1.jpg"
import { Link } from 'react-router-dom';

const LockScreen = () => {
  return (
    <Fragment>
      <section className="sign-in-page">
            <Container className="sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
                <Row className="no-gutters">
                    <Col md='6' className="text-center">
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
                    <Col md='6' className="position-relative">
                        <div className="sign-in-from">
                            <img src={user1} alt="user-images" className="rounded-circle" />
                                    <h4 className="mt-3 mb-0">Hi ! Michael Smith</h4>
                                    <p>Enter your password to access the admin.</p>
                            <Form className="mt-4">

                                <div className="form-group">
                                    <Form.Label htmlFor="exampleInputEmail1" className="mb-2">Password</Form.Label>
                                    <Form.Control type="Password" className="form-control mb-0" id="exampleInputEmail1"  placeholder="Password" />
                                </div>

                                <div className="d-inline-block w-100">
                                    <Button variant='primary' type="submit" className="btn btn-primary float-end mt-3">Log In</Button>
                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Fragment>
  )
}

export default LockScreen
