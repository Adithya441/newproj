import React, { Fragment } from "react";
import { Breadcrumb, Col,  Row } from "react-bootstrap";

const UiBreadcrumb = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Breadcrumb</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Use the items in order to programatically generate the
                  breadcrumb links.use class <code>.breadcrumb to ol</code>
                </p>
                <Breadcrumb aria-label="breadcrumb">
                  <Breadcrumb.Item className=" active" aria-current="page">
                    Home
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb aria-label="breadcrumb">
                  <Breadcrumb.Item className="">Home</Breadcrumb.Item>

                  <Breadcrumb.Item active aria-current="page">
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                  <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Breadcrumb With Icon</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Use the items in order to programatically generate the
                  breadcrumb links.use class <code>.breadcrumb to ol</code> with
                  Icon
                </p>

                <Breadcrumb>
                  <Breadcrumb.Item active aria-current="page">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb>
                  <Breadcrumb.Item className="">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active aria-current="page">
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb>
                  <Breadcrumb.Item className="">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="">Library</Breadcrumb.Item>
                  <Breadcrumb.Item active aria-current="page">
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Breadcrumb</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  use class <code>.breadcrumb .bg-primary</code>
                </p>

                <Breadcrumb className="breadcrumb bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item
                  active 
                    className="text-white"
                    aria-current="page"
                  >
                    Home
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active className="text-white">Home</Breadcrumb.Item>
                  <Breadcrumb.Item
                   active
                    className=" text-white"
                    aria-current="page"
                  >
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active className=" text-white">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active className=" text-white">Library</Breadcrumb.Item>
                  <Breadcrumb.Item
                   active
                    className=" text-white"
                    aria-current="page"
                  >
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Breadcrumb With Icon</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  use class <code>.breadcrumb .bg-primary </code> With Icon.
                </p>

                <Breadcrumb className="breadcrumb bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item
                  active
                    className="  text-white"
                    aria-current="page"
                  >
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active className="text-white">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                  active
                    className=" text-white"
                    aria-current="page"
                  >
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb bg-primary p-3 rounded-2 mb-0 pb-0">
                  <Breadcrumb.Item active className="text-white">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="text-white">Library</Breadcrumb.Item>
                  <Breadcrumb.Item
                  active
                    className=" text-white"
                    aria-current="page"
                  >
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Col>
          <div className="col-sm-12 col-lg-6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Breadcrumb With Icon</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  use class <code>.breadcrumb .iq-bg-primary</code>
                </p>

                <Breadcrumb className="breadcrumb iq-bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active className="" aria-current="page">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb iq-bg-primary p-3 rounded-2 pb-0">
                  <Breadcrumb.Item className="">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="" aria-current="page">
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb
                  className="breadcrumb iq-bg-primary p-3 rounded-2 p-1 rounded-2 pb-0"
                >
                  <Breadcrumb.Item className="">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="">Library</Breadcrumb.Item>
                  <Breadcrumb.Item active className="" aria-current="page">
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Breadcrumb With Icon</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  use class <code>.breadcrumb .iq-bg-danger</code>
                </p>

                <Breadcrumb className="breadcrumb iq-bg-danger p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active aria-current="page">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb iq-bg-danger p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active className="text-danger">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className=" active" aria-current="page">
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb iq-bg-danger p-3 rounded-2 pb-0">
                  <Breadcrumb.Item active className="text-danger">
                    <i className="ri-home-4-line me-1 float-start"></i>Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="text-danger">Library</Breadcrumb.Item>
                  <Breadcrumb.Item className=" active" aria-current="page">
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiBreadcrumb;
