import React, { Fragment,useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Faq = () => {
  const [faq, setfaq] = useState("1");
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col lg="6">

            <div className="iq-accordion career-style faq-style  ">
                        <div className={`iq-card iq-accordion-block ${
                    faq === "1" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("1");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> It is a long established fact that a reader will be? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "1" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block 2  ${
                    faq === "2" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("2");
                  }}>
                           <div className="active-faq clearfix">
                              <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> Distracted by the readable content of a page whent? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "2" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "3" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("3");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> What is user interface kit? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "3" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "4" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("4");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> The readable content of a page when looking at its layout? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "4" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "5" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("5");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> The readable content of a page when looking at its layout? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "5" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "6" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("6");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> What is user interface kit? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "6" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        </div>
          </Col>
          <Col lg="6">
          <div className="iq-accordion career-style faq-style  ">
                        <div className={`iq-card iq-accordion-block ${
                    faq === "7" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("7");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> It is a long established fact that a reader will be? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "7" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block 2  ${
                    faq === "8" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("8");
                  }}>
                           <div className="active-faq clearfix">
                              <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> Distracted by the readable content of a page whent? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "8" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "9" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("9");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> What is user interface kit? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "9" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "10" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("10");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> The readable content of a page when looking at its layout? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "10" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "11" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("11");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> The readable content of a page when looking at its layout? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "11" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        <div className={`iq-card iq-accordion-block ${
                    faq === "12" ? "accordion-active" : ""
                  }`}
                  onClick={() => {
                    setfaq("12");
                  }}>
                           <div className="active-faq clearfix">
                           <Container>
                                 <Row>
                                    <Col sm="12" className="position-relative accordion-title"><span> What is user interface kit? </span></Col>
                                 </Row>
                              </Container>
                           </div>
                           <div className={`accordion-details ${
                      faq === "12" ? "d-block" : "d-none"
                    }`}>
                              <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur. </p>
                           </div>
                        </div>
                        </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Faq;
