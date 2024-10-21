import React, { Fragment } from "react";
import { Badge, Button, Col,  Row } from "react-bootstrap";

const UiBadges = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Badge</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Badges scale to match the size of the immediate parent element
                  by using relative font sizing and <code>em</code> units.
                </p>
                <h1 className="mb-3">
                  Example heading{" "}
                  <Badge className="badge  badge-primary">New</Badge>
                </h1>
                <h2 className="mb-3">
                  Example heading{" "}
                  <Badge bg="secondary" className="badge badge-secondary">New</Badge>
                </h2>
                <h3 className="mb-3">
                  Example heading{" "}
                  <Button variant="success" className="btn btn-success">
                    Notifications{" "}
                    <Badge bg="light" className="badge badge-light ms-2 text-black">
                      4
                    </Badge>
                  </Button>
                </h3>
                <h4 className="mb-3">
                  Example heading{" "}
                  <Badge bg="danger" className="badge badge-danger">New</Badge>
                </h4>
                <h5 className="mb-3">
                  Example heading{" "}
                  <Badge bg="warning" className="badge badge-warning">New</Badge>
                </h5>
                <h6 className="mb-0">
                  Example heading{" "}
                  <Badge bg="info" className="badge badge-info">New</Badge>
                </h6>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Button Badges</h4>
                </div>
              </div>
              <div className="iq-card-body gap-2">
                <p>
                  Badges can be used as part of buttons to provide a counter.
                </p>
                <Button variant="primary" className="btn mb-1 me-1 btn-primary">
                  Notifications{" "}
                  <Badge bg="light" className="badge  ms-2 text-black">
                    4
                  </Badge>
                </Button>
                <Button variant="success" className="btn mb-1 me-1 btn-success">
                  Notifications{" "}
                  <Badge bg="light" className="badge  ms-2 text-black">
                    4
                  </Badge>
                </Button>
                <Button variant="danger" className="btn mb-1 me-1 btn-danger">
                  Notifications{" "}
                  <Badge bg="light" className="badge  ms-2 text-black">
                    4
                  </Badge>
                </Button>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Button Light background Badges</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Badges can be used as part of buttons to provide a counter.
                </p>
                <Button
                  variant=""
                  className="btn mb-1 me-1 btn-outline-primary"
                >
                  Notifications{" "}
                  <Badge bg='primary' className="badge  ms-2 ">4</Badge>
                </Button>
                <Button
                  variant=""
                  className="btn mb-1 me-1 btn-outline-success"
                >
                  Notifications{" "}
                  <Badge bg='success' className="badge ms-2">4</Badge>
                </Button>
                <Button variant="" className="btn mb-1 me-1 btn-outline-danger">
                  Notifications{" "}
                  <Badge bg='danger' className="badge ms-2">4</Badge>
                </Button>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Button Border Badges</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Badges can be used as part of buttons to provide a counter.
                </p>
                <Button variant="" className="btn mb-1 me-1 iq-bg-primary">
                  Notifications{" "}
                  <Badge className="badge badge-primary ms-2">4</Badge>
                </Button>
                <Button variant="" className="btn mb-1 me-1 iq-bg-success">
                  Notifications{" "}
                  <Badge className="badge badge-success ms-2">4</Badge>
                </Button>
                <Button variant="" className="btn mb-1 me-1 iq-bg-danger">
                  Notifications{" "}
                  <Badge className="badge badge-danger ms-2">4</Badge>
                </Button>
              </div>
            </div>
          </Col>

          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Contextual variations</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Add any of the below mentioned modifier classes to change the
                  appearance of a badge.
                </p>
                <Badge bg="primary" className="me-1">
                  Primary
                </Badge>
                <Badge bg="secondary" className="me-1 ">
                  Secondary
                </Badge>
                <Badge bg="success" className="me-1">
                  Success
                </Badge>
                <Badge bg="danger" className="me-1 ">
                  Danger
                </Badge>
                <Badge bg="warning" className="me-1 ">
                  Warning
                </Badge>
                <Badge bg="info" className="me-1 ">
                  Info
                </Badge>
                <Badge bg="light" text="dark" className="me-1 ">
                  Light
                </Badge>
                <Badge bg="dark" className="me-1 ">
                  Dark
                </Badge>
                <h5 className="card-title mt-4">Pill badges</h5>
                <p>
                  Use the <code>.badge-pill</code> modifier class to make badges
                  more rounded (with a larger <code>border-radius</code> and
                  additional horizontal <code>padding</code>). Useful if you
                  miss the badges from v3.
                </p>
                <Badge bg="primary"  className="badge-pill me-1 ">
                  Primary
                </Badge>
                <Badge bg="secondary"  className="badge-pill me-1 ">
                  Secondary
                </Badge>
                <Badge bg="success"  className="badge-pill me-1 ">
                  Success
                </Badge>
                <Badge bg="danger"  className="badge-pill me-1 ">
                  Danger
                </Badge>
                <Badge bg="warning"  className="badge-pill me-1">
                  Warning
                </Badge>
                <Badge bg="info"  className="badge-pill me-1 ">
                  Info
                </Badge>
                <Badge bg="light" text="dark"  className="badge-pill me-1 ">
                  Light
                </Badge>
                <Badge bg="dark"  className="badge-pill me-1 ">
                  Dark
                </Badge>
                <h5 className="card-title mt-4">Links</h5>
                <p>
                  Using the contextual <code>.badge-*</code> classes on an{" "}
                  <code>&lt;a&gt;</code> element quickly provide{" "}
                  <em>actionable</em> badges with hover and focus states.
                </p>
                <Badge
                  as={"a"}
                  href="#"
                  pill
                  bg="primary"
                  className="badge me-1"
                >
                  Primary
                </Badge>
                <Badge
                  as={"a"}
                  href="#"
                  pill
                  bg="secondary"
                  className="badge me-1 "
                >
                  Secondary
                </Badge>
                <Badge
                  as={"a"}
                  href="#"
                  pill
                  bg="success"
                  className="badge me-1 "
                >
                  Success
                </Badge>
                <Badge
                  as={"a"}
                  href="#"
                  pill
                  bg="danger"
                  className="badge me-1 "
                >
                  Danger
                </Badge>
                <Badge
                  as={"a"}
                  href="#"
                  pill
                  bg="warning"
                  className="badge me-1 "
                >
                  Warning
                </Badge>
                <Badge as={"a"} href="#" pill bg="info" className="badge me-1 ">
                  Info
                </Badge>
                <Badge
                  as={"a"}
                  href="#"
                  pill
                  bg="light"
                  text="dark"
                  className="badge me-1 "
                >
                  Light
                </Badge>
                <Badge as={"a"} href="#" pill bg="dark" className="badge me-1 ">
                  Dark
                </Badge>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Contextual variations Border</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Add any of the below mentioned modifier classes to change the
                  appearance of a badge.
                </p>
                <Badge
                  text="primary"
                  bg=""
                  className="badge me-1 border border-primary "
                >
                  Primary
                </Badge>
                <Badge
                  text="secondary"
                  bg=""
                  className="badge me-1 border border-secondary "
                >
                  Secondary
                </Badge>
                <Badge
                  text="success"
                  bg=""
                  className="badge me-1 border border-success "
                >
                  Success
                </Badge>
                <Badge
                  text="danger"
                  bg=""
                  className="badge me-1 border border-danger "
                >
                  Danger
                </Badge>
                <Badge
                  text="warning"
                  bg=""
                  className="badge me-1 border border-warning "
                >
                  Warning
                </Badge>
                <Badge
                  text="info"
                  bg=""
                  className="badge me-1 border border-info "
                >
                  Info
                </Badge>
                <Badge
                  text="secondary"
                  bg=""
                  className="badge me-1 border border-light"
                >
                  Light
                </Badge>
                <Badge
                  text="dark"
                  bg=""
                  className="badge me-1 border border-dark "
                >
                  Dark
                </Badge>
                <h5 className="card-title mt-4">Pill badges</h5>
                <p>
                  Use the <code>.badge-pill</code> modifier class to make badges
                  more rounded (with a larger <code>border-radius</code> and
                  additional horizontal <code>padding</code>). Useful if you
                  miss the badges from v3.
                </p>
                <Badge
                  bg=""
                  text="primary"
                  
                  className="badge badge-pill me-1  border border-primary "
                >
                  Primary
                </Badge>
                <Badge
                  bg=""
                  text="secondary"
                  
                  className="badge badge-pill me-1  border border-secondary "
                >
                  Secondary
                </Badge>
                <Badge
                  bg=""
                  text="success"
                  
                  className="badge badge-pill me-1  border border-success "
                >
                  Success
                </Badge>
                <Badge
                  bg=""
                  text="danger"
                  
                  className="badge badge-pill me-1  border border-danger"
                >
                  Danger
                </Badge>
                <Badge
                  bg=""
                  text="warning"
                  
                  className="badge badge-pill me-1  border border-warning "
                >
                  Warning
                </Badge>
                <Badge
                  bg=""
                  text="info"
                  
                  className="badge badge-pill me-1  border border-info "
                >
                  Info
                </Badge>
                <Badge
                  bg=""
                  text="secondary"
                  
                  className="badge badge-pill me-1  border border-light "
                >
                  Light
                </Badge>
                <Badge
                  bg=""
                  as={"a"}
                  text="dark"
                  
                  className="badge badge-pill me-1  border border-dark "
                >
                  Dark
                </Badge>
                <h5 className="card-title mt-4">Links</h5>
                <p>
                  Using the contextual <code>.badge-*</code> classes on an{" "}
                  <code>&lt;a&gt;</code> element quickly provide{" "}
                  <em>actionable</em> badges with hover and focus states.
                </p>
                <Badge
                  as="a"
                  bg=""
                  text="primary"
                  href="#"
                  className="badge me-1 border border-primary"
                >
                  Primary
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="secondary"
                  href="#"
                  className="badge me-1 border border-secondary"
                >
                  Secondary
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="success"
                  href="#"
                  className="badge me-1 border border-success "
                >
                  Success
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="danger"
                  href="#"
                  className="badge me-1 border border-danger"
                >
                  Danger
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="warning"
                  href="#"
                  className="badge me-1 border border-warning "
                >
                  Warning
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="info"
                  href="#"
                  className="badge me-1 border border-info "
                >
                  Info
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="secondary"
                  href="#"
                  className="badge me-1 border border-light "
                >
                  Light
                </Badge>
                <Badge
                  as="a"
                  bg=""
                  text="dark"
                  href="#"
                  className="badge me-1 border border-dark "
                >
                  Dark
                </Badge>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiBadges;
