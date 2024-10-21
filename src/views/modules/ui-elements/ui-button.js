import React, { Fragment } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  Row,
} from "react-bootstrap";

const UiButton = () => {
  return (
    <Fragment>
      
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Default Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" className="me-1 mb-3">
                  Primary
                </Button>
                <Button variant="secondary" className="me-1  mb-3">
                  Secondary
                </Button>
                <Button variant="success" className="me-1 mb-3">
                  Success
                </Button>
                <Button variant="danger" className="me-1  mb-3">
                  Danger
                </Button>
                <Button variant="warning" className="me-1  mb-3">
                  Warning
                </Button>
                <Button variant="info" className="me-1  mb-3">
                  Info
                </Button>
                <Button variant="light" className="me-1  mb-3">
                  Light
                </Button>
                <Button variant="dark" className="me-1  mb-3">
                  Dark
                </Button>
                <Button variant="link" className="me-1  mb-3">
                  Link
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Default Buttons Rounded Shape</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button
                  variant="primary"
                  className=" me-1 rounded-pill mb-3"
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  className=" me-1 rounded-pill mb-3"
                >
                  Secondary
                </Button>
                <Button
                  variant="success"
                  className="me-1 rounded-pill mb-3"
                >
                  Success
                </Button>
                <Button
                  variant="danger"
                  className=" me-1 rounded-pill mb-3"
                >
                  Danger
                </Button>
                <Button
                  variant="warning"
                  className="me-1 rounded-pill mb-3"
                >
                  Warning
                </Button>
                <Button variant="info" className=" me-1 rounded-pill mb-3">
                  Info
                </Button>
                <Button variant="light" className=" me-1 rounded-pill mb-3">
                  Light
                </Button>
                <Button variant="dark" className=" me-1 rounded-pill mb-3">
                  Dark
                </Button>
                <Button variant="link" className=" me-1 rounded-pill mb-3">
                  Link
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Outline Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="outline-primary" className="me-1 mb-3">
                  Primary
                </Button>
                <Button variant="outline-secondary" className="me-1 mb-3">
                  Secondary
                </Button>
                <Button variant="outline-success" className="me-1 mb-3">
                  Success
                </Button>
                <Button variant="outline-danger" className="me-1 mb-3">
                  Danger
                </Button>
                <Button variant="outline-warning" className="me-1 mb-3">
                  Warning
                </Button>
                <Button variant="outline-info" className="me-1 mb-3">
                  Info
                </Button>
                <Button variant="outline-dark" className="me-1 mb-3">
                  Dark
                </Button>
                <Button variant="outline-link" className="mb-3 me-1">
                  Link
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Rounded Outline Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button
                  variant="outline-primary"
                  className="me-1  rounded-pill mb-3"
                >
                  Primary
                </Button>
                <Button
                  variant="outline-secondary"
                  className="me-1  rounded-pill mb-3"
                >
                  Secondary
                </Button>
                <Button
                  variant="outline-success"
                  className="me-1  rounded-pill mb-3"
                >
                  Success
                </Button>
                <Button
                  variant="outline-danger"
                  className="me-1  rounded-pill mb-3"
                >
                  Danger
                </Button>
                <Button
                  variant="outline-warning"
                  className="me-1  rounded-pill mb-3"
                >
                  Warning
                </Button>
                <Button
                  variant="outline-info"
                  className="me-1  rounded-pill mb-3"
                >
                  Info
                </Button>
                <Button
                  variant="outline-dark"
                  className="me-1  rounded-pill mb-3"
                >
                  Dark
                </Button>
                <Button
                  variant="outline-link"
                  className="me-1  rounded-pill mb-3"
                >
                  Link
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Default Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" className="me-1 mb-3 ">
                  <i className="ri-bill-fill"></i>Primary
                </Button>
                <Button variant="secondary" className="me-1 mb-3 ">
                  <i className="ri-heart-fill"></i>Secondary
                </Button>
                <Button variant="success" className="me-1 mb-3 ">
                  <i className="ri-bill-fill"></i>Success
                </Button>
                <Button variant="danger" className="me-1 mb-3 ">
                  <i className="ri-heart-fill"></i>Danger
                </Button>
                <Button variant="warning" className="me-1 mb-3 ">
                  <i className="ri-bill-fill"></i>Warning
                </Button>
                <Button variant="info" className="me-1 mb-3 ">
                  <i className="ri-heart-fill"></i>Info
                </Button>
                <Button variant="light" className="me-1 mb-3 ">
                  <i className="ri-bill-fill"></i>Light
                </Button>
                <Button variant="dark" className="me-1 mb-3 ">
                  <i className="ri-heart-fill"></i>Dark
                </Button>
                <Button variant="link" className="me-1 mb-3 ">
                  <i className="ri-bill-fill"></i>Link
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Default Buttons Rounded Shape</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button
                  variant="primary"
                  className="me-1 mb-3  rounded-pill"
                >
                  <i className="ri-bill-fill"></i>Primary
                </Button>
                <Button
                  variant="secondary"
                  className="me-1 mb-3  rounded-pill"
                >
                  <i className="ri-heart-fill"></i>Secondary
                </Button>
                <Button
                  variant="success"
                  className="me-1 mb-3  rounded-pill"
                >
                  <i className="ri-bill-fill"></i>Success
                </Button>
                <Button
                  variant="danger"
                  className="me-1 mb-3  rounded-pill"
                >
                  <i className="ri-heart-fill"></i>Danger
                </Button>
                <Button
                  variant="warning"
                  className="me-1 mb-3  rounded-pill"
                >
                  <i className="ri-bill-fill"></i>Warning
                </Button>
                <Button variant="info" className="me-1 mb-3  rounded-pill">
                  <i className="ri-heart-fill"></i>Info
                </Button>
                <Button variant="light" className="me-1 mb-3  rounded-pill">
                  <i className="ri-bill-fill"></i>Light
                </Button>
                <Button variant="dark" className="me-1 mb-3  rounded-pill">
                  <i className="ri-heart-fill"></i>Dark
                </Button>
                <Button variant="light" className="me-1 mb-3 rounded-pill">
                  <i className="ri-bill-fill"></i>Link
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Outline Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="outline-primary" className="me-1 mb-3">
                  <i className="ri-heart-line"></i>Primary
                </Button>
                <Button variant="outline-secondary" className="me-1 mb-3">
                  <i className="ri-alert-fill"></i>Secondary
                </Button>
                <Button variant="outline-success" className="me-1 mb-3">
                  <i className="ri-heart-line"></i>Success
                </Button>
                <Button variant="outline-danger" className="me-1 mb-3">
                  <i className="ri-alert-fill"></i>Danger
                </Button>
                <Button variant="outline-warning" className="me-1 mb-3">
                  <i className="ri-heart-line"></i>Warning
                </Button>
                <Button variant="outline-info" className="me-1 mb-3">
                  <i className="ri-alert-fill"></i>Info
                </Button>
                <Button variant="outline-dark" className="me-1 mb-3">
                  <i className="ri-alert-fill"></i>Dark
                </Button>
                <Button variant="outline-link" className="me-1 mb-3">
                  <i className="ri-heart-line"></i>Link
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Rounded Outline Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button
                  variant="outline-primary"
                  className="me-1 rounded-pill mb-3"
                >
                  <i className="ri-heart-line"></i>Primary
                </Button>
                <Button
                  variant="outline-secondary"
                  className=" me-1 rounded-pill mb-3"
                >
                  <i className="ri-alert-fill"></i>Secondary
                </Button>
                <Button
                  variant="outline-success"
                  className=" me-1 rounded-pill mb-3"
                >
                  <i className="ri-heart-line"></i>Success
                </Button>
                <Button
                  variant="outline-danger"
                  className="me-1 rounded-pill mb-3"
                >
                  <i className="ri-alert-fill"></i>Danger
                </Button>
                <Button
                  variant="outline-warning"
                  className="me-1 rounded-pill mb-3"
                >
                  <i className="ri-heart-line"></i>Warning
                </Button>
                <Button
                  variant="outline-info"
                  className=" me-1 rounded-pill mb-3"
                >
                  <i className="ri-alert-fill"></i>Info
                </Button>
                <Button
                  variant="outline-dark"
                  className=" me-1 rounded-pill mb-3"
                >
                  <i className="ri-alert-fill"></i>Dark
                </Button>
                <Button
                  variant="outline-link"
                  className=" me-1 rounded-pill mb-3"
                >
                  <i className="ri-heart-line"></i>Link
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Button Tags</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" className="me-1" as="a" href="#">
                  Link
                </Button>
                <Button variant="success" className="me-1" type="submit">
                  Button
                </Button>
                <Button
                  variant="danger"
                  className="me-1"
                  type="button"
                  as={"input"}
                  value={"Input"}
                />
                <Button
                  variant="warning"
                  className="btn-warning me-1"
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  variant="info"
                  as={"button"}
                  className="btn-info me-1"
                  type="reset"
                >
                  Reset
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Buttons Sizes</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" size="sm" className=" me-2">
                  Small Button
                </Button>
                <Button variant="success" className="me-2">
                  Button
                </Button>
                <Button variant="info" size="lg" className="text-white">
                  Large Button
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Block Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="" className="btn-primary btn-block me-1">
                  Block level button
                </Button>
                <Button variant="" className="btn-success btn-block">
                  Block level button
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Icons Buttons</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" className="me-1  mb-3">
                  <i className="ri-heart-fill pe-0"></i>
                </Button>
                <Button variant="secondary" className="me-1  mb-3">
                  <i className="ri-star-fill pe-0"></i>
                </Button>
                <Button variant="success" className="me-1  mb-3">
                  <i className="ri-settings-4-fill pe-0"></i>
                </Button>
                <Button variant="danger" className="me-1  mb-3">
                  <i className="ri-radio-button-fill pe-0"></i>
                </Button>
                <Button variant="warning" className="me-1  mb-3">
                  <i className="ri-delete-bin-2-fill pe-0"></i>
                </Button>
                <Button variant="info" className="me-1  mb-3">
                  <i className="ri-lock-fill pe-0"></i>
                </Button>
                <Button variant="light" className="me-1  mb-3">
                  <i className="ri-time-fill pe-0"></i>
                </Button>
                <Button variant="dark" className="me-1  mb-3">
                  <i className="ri-sun-fill pe-0"></i>
                </Button>
                <Button variant="link" className="me-1  mb-3">
                  <i className="ri-moon-fill pe-0"></i>
                </Button>
                <div className="d-inline-block w-100 mt-3">
                  <Button variant="primary" className="me-1  mb-3">
                    <i className="ri-heart-fill"></i>Buttons
                  </Button>
                  <Button variant="secondary" className="me-1  mb-3">
                    <i className="ri-star-fill"></i>Buttons
                  </Button>
                  <Button variant="success" className="me-1  mb-3">
                    <i className="ri-settings-4-fill"></i>Buttons
                  </Button>
                  <Button variant="danger" className="me-1  mb-3">
                    <i className="ri-radio-button-fill"></i>Buttons
                  </Button>
                  <Button variant="info" className="me-1  mb-3">
                    <i className="ri-lock-fill"></i>Buttons
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Social Disabled State</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" className="me-1" disabled>
                  Primary button
                </Button>
                <Button variant="success" className="me-1" disabled>
                  Button
                </Button>
                <Button variant="outline-primary" className="me-1" disabled>
                  Button
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Buttons Toggle States</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button
                  variant="primary"
                  className="btn"
                  data-bs-toggle="button"
                  aria-pressed="false"
                >
                  Single toggle
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Default Buttons Active</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <Button variant="primary" active className="me-1  mb-3">
                  Active
                </Button>
                <Button variant="secondary" active className="me-1  mb-3">
                  Active
                </Button>
                <Button variant="warning" active className="me-1 mb-3">
                  Active
                </Button>
                <Button
                  variant="accent"
                  active
                  className="me-1  mb-3"
                  disabled
                >
                  Disabled
                </Button>
                <Button
                  variant="primary"
                  active
                  className="me-1  mb-3"
                  disabled
                >
                  Disabled
                </Button>
                <Button
                  variant="outline-primary"
                  active
                  className="me-1  mb-3"
                  disabled
                >
                  Disabled
                </Button>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Button Group Sizing</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <div className="d-block">
                  <ButtonGroup
                    size="lg"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button variant="primary" className="btn">
                      Left
                    </Button>
                    <Button variant="primary" className="btn">
                      Middle
                    </Button>
                    <Button variant="primary" className="btn">
                      Right
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="d-block">
                  <ButtonGroup
                    className=" mt-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button variant="primary" className="btn">
                      Left
                    </Button>
                    <Button variant="primary" className="btn">
                      Middle
                    </Button>
                    <Button variant="primary" className="btn">
                      Right
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="d-block">
                  <ButtonGroup
                    size="sm"
                    className="mt-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Button variant="primary" className="btn">
                      Left
                    </Button>
                    <Button variant="primary" className="btn">
                      Middle
                    </Button>
                    <Button variant="primary" className="btn">
                      Right
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Button Group</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <ButtonGroup role="group" aria-label="Basic example">
                  <Button variant="primary" className="btn">
                    Left
                  </Button>
                  <Button variant="primary" className="btn">
                    Middle
                  </Button>
                  <Button variant="primary" className="btn">
                    Right
                  </Button>
                </ButtonGroup>
                <div
                  className="btn-toolbar mt-3"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <Button variant="secondary" className="btn">
                      1
                    </Button>
                    <Button variant="secondary" className="btn">
                      2
                    </Button>
                    <Button variant="secondary" className="btn">
                      3
                    </Button>
                    <Button variant="secondary" className="btn">
                      4
                    </Button>
                  </div>
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <Button variant="secondary" className="btn">
                      5
                    </Button>
                    <Button variant="secondary" className="btn">
                      6
                    </Button>
                    <Button variant="secondary" className="btn">
                      7
                    </Button>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Third group"
                  >
                    <Button variant="secondary" className="btn">
                      8
                    </Button>
                  </div>
                </div>
              </div>
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Button Dropdown</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p className="mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <ButtonGroup
                    role="group"
                    className="btn-group"
                    aria-label="Button group with nested dropdown"
                  >
                    <Button variant="primary" className="">
                      1
                    </Button>
                    <Button variant="primary" className="">
                      2
                    </Button>
                    <Dropdown role="group">
                      <Dropdown.Toggle
                        id="btnGroupDrop1"
                        type="button"
                        className="btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        <Dropdown.Item className="dropdown-item" href="#">
                          Dropdown link
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Dropdown link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <div className="d-block mt-3">
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Button group with nested dropdown"
                    >
                      <Button variant="primary" className="btn">
                        1
                      </Button>
                      <Button variant="primary" className="btn">
                        2
                      </Button>
                      <Dropdown className="btn-group" role="group">
                        <Dropdown.Toggle
                          id="btnGroupDrop2"
                          type="button"
                          className="btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu"
                          aria-labelledby="btnGroupDrop2"
                        >
                          <Dropdown.Item className="dropdown-item" href="#">
                            Dropdown link
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Dropdown link
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
     
    </Fragment>
  );
};

export default UiButton;
