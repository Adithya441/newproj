import React, { Fragment, useState } from "react";
import { Col, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmailCompose from "./email-compose";

const Email = () => {
  const [show, setShow] = useState("");
  return (
    <Fragment>
      <Row>
        <Tab.Container defaultActiveKey={"inbox"}>
          <Col lg="3">
            <div className="iq-card">
              <div className="iq-card-body">
                <div className="">
                  <div className="iq-email-list">
                    <Link
                      to="email-compose.html"
                      className="btn btn-primary btn-lg btn-block mb-3 font-size-16 p-3 w-100"
                    >
                      <i className="ri-send-plane-line me-2"></i>New Message
                    </Link>
                    <Nav
                      as={"ul"}
                      className="iq-email-ui iq-email-ui flex-column nav-pills"
                    >
                      <Nav.Link as={"li"} eventKey={"inbox"}>
                        <i className="ri-mail-line"></i>Inbox
                        <span className="badge badge-primary ms-2">4</span>
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"starred"}>
                        <i className="ri-star-line"></i>Starred
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"snoozed"}>
                        <i className="ri-time-line"></i>Snoozed
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"draft"}>
                        <i className="ri-file-list-2-line"></i>Draft
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"sentMail"}>
                        <i className="ri-mail-send-line"></i>Sent Mail
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"trash"}>
                        <i className="ri-delete-bin-line"></i>Trash
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"important"}>
                        <i className="ri-bookmark-line"></i>Important
                      </Nav.Link>
                      <Nav.Link as={"li"} eventKey={"spam"}>
                        <i className="ri-spam-line"></i>Spam
                      </Nav.Link>
                    </Nav>
                    <h6 className="mt-4 mb-3">Labels</h6>
                    <ul className="iq-email-ui iq-email-label">
                      <li>
                        <i className="ri-focus-fill text-primary"></i>
                        Personal
                      </li>
                      <li>
                        <i className="ri-focus-fill text-danger"></i>Company
                      </li>
                      <li>
                        <i className="ri-focus-fill text-success"></i>
                        Important
                      </li>
                      <li>
                        <i className="ri-focus-fill text-info"></i>Private
                      </li>
                      <li>
                        <i className="ri-focus-fill text-warning"></i>
                        Private
                      </li>
                      <li>
                        <i className="ri-add-circle-line"></i>Add New Labels
                      </li>
                    </ul>
                    <div className="iq-progress-bar-linear d-inline-block w-100">
                      <h6 className="mt-4 mb-1">Storage</h6>
                      <div className="iq-progress-bar">
                        <span className="bg-danger" data-percent="90"></span>
                      </div>
                      <span className="mt-1 d-inline-block w-100">
                        7.02 GB (46%) of 15 GB used
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="9" className="mail-box-detail">
            <div className="iq-card position-relative">
              <div className="iq-card-body p-0">
                <div className="">
                  <div className="iq-email-to-list p-3">
                    <div className="d-flex justify-content-between">
                      <ul>
                        <li>
                          <Link
                            to="#"
                            id="navbarDropdown"
                            data-bs-toggle="dropdown"
                          >
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <i className="ri-arrow-down-s-line"></i>
                              </label>
                            </div>
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link className="dropdown-item" to="#">
                              Action
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Another action
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">
                              Something else here
                            </Link>
                          </div>
                        </li>
                        <li>
                          <Link to="#">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Reload</Tooltip>}>
                            <i className="ri-restart-line"></i>
                          </OverlayTrigger>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Archive</Tooltip>}>
                            <i className="ri-mail-open-line"></i>
                            </OverlayTrigger>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Spam</Tooltip>}>
                            <i className="ri-information-line"></i>
                          </OverlayTrigger>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                            <i className="ri-delete-bin-line"></i>
                          </OverlayTrigger>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Inbox</Tooltip>}>
                            <i className="ri-mail-unread-line"></i>
                          </OverlayTrigger>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Zoom</Tooltip>}>
                            <i className="ri-drag-move-2-line"></i>
                          </OverlayTrigger>
                          </Link>
                        </li>
                      </ul>
                      <div className="iq-email-search d-flex">
                        <form className="me-3 position-relative">
                          <div className="form-group mb-0">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Search"
                            />
                            <Link className="search-link" to="#">
                              <i className="ri-search-line"></i>
                            </Link>
                          </div>
                        </form>
                        <ul>
                          <li className="me-3">
                            <Link
                              className="font-size-14"
                              to="#"
                              id="navbarDropdown"
                              data-bs-toggle="dropdown"
                            >
                              1 - 50 of 505
                            </Link>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <Link className="dropdown-item" to="#">
                                20 per page
                              </Link>
                              <Link className="dropdown-item" to="#">
                                50 per page
                              </Link>
                              <Link className="dropdown-item" to="#">
                                100 per page
                              </Link>
                            </div>
                          </li>
                          <li>
                            <Link to="#">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Previous</Tooltip>}>
                              <i className="ri-arrow-left-s-line transform-arrow"></i>
                            </OverlayTrigger>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Next</Tooltip>}>
                              <i className="ri-arrow-right-s-line transform-arrow"></i>
                            </OverlayTrigger>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Setting</Tooltip>}>
                              <i className="ri-list-settings-line"></i>
                            </OverlayTrigger>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="iq-email-listbox">
                    <Tab.Content>
                      <Tab.Pane
                        className="tab-pane fade show"
                        id="mail-inbox"
                        role="tabpanel"
                        eventKey={"inbox"}
                      >
                        <ul className="iq-email-sender-list">
                          <li
                            className="iq-unread"
                            onClick={() => setShow("use-1")}
                          >
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle text-warning"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@MackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @MackenzieBinio - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">08:00 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <EmailCompose
                              show={show}
                              onclick={() => setShow("")}
                              senderName={"Chiku"}
                            />
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk1"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Megan Allen (@meganallen) has sent you a
                                  direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">08:15 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk2"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk2"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Dixa Horton (@dixahorton) has sent you a
                                  direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk3"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk3"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk4"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre (@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="iq-unread">
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk5"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk5"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle text-warning"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk6"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk6"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk7"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk7"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="iq-unread">
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk8"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk8"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle text-warning"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre (@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk9"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk9"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk10"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk10"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk11"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk11"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk12"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk12"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk13"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk13"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg(@ebbegg) has sent you a direct message
                                  on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk14"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk14"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk15"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk15"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre(@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk16"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk16"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk17"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk17"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-starred"
                        role="tabpanel"
                        eventKey={"starred"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk2"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk2"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Dixa Horton (@dixahorton) has sent you a
                                  direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk3"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk3"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk4"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre (@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="iq-unread">
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk5"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk5"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle text-warning"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk6"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk6"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-snoozed"
                        role="tabpanel"
                        eventKey={"snoozed"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk4"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk4"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre (@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="iq-unread">
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk5"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk5"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle text-warning"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk6"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk6"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-draft"
                        role="tabpanel"
                        eventKey={"draft"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk9"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk9"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk10"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk10"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk11"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk11"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk12"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk12"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk13"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk13"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg(@ebbegg) has sent you a direct message
                                  on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-sent"
                        role="tabpanel"
                        eventKey={"sentMail"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk11"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk11"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk12"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk12"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk13"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk13"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg(@ebbegg) has sent you a direct message
                                  on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk14"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk14"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk15"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk15"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre(@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk16"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk16"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-trash"
                        role="tabpanel"
                        eventKey={"trash"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk14"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk14"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk15"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk15"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre(@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk16"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk16"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-important"
                        role="tabpanel"
                        eventKey={"important"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk6"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk6"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk7"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk7"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="iq-unread">
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk8"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk8"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle text-warning"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre (@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk9"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk9"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk10"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk10"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk11"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk11"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        id="mail-spam"
                        role="tabpanel"
                        eventKey={"spam"}
                      >
                        <ul className="iq-email-sender-list">
                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk12"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk12"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Jopour Xiong (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Mackenzie Binio (@mackenzieBinio) has sent you
                                  a direct message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk13"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk13"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Deray Billings (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg(@ebbegg) has sent you a direct message
                                  on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk14"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk14"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Lauren Drury (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk15"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk15"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Fabian Ros (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Let Hunre(@lethunre) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk16"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk16"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Dixa Horton (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Eb Begg (@ebbegg) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <div className="d-flex align-self-center">
                              <div className="iq-email-sender-info d-flex">
                                <div className="iq-checkbox-mail">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="mailk17"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="mailk17"
                                    ></label>
                                  </div>
                                </div>
                                <span className="ri-star-line iq-star-toggle"></span>
                                <Link to="#" className="iq-email-title">
                                  Megan Allen (Me)
                                </Link>
                              </div>
                              <div className="iq-email-content">
                                <Link to="#" className="iq-email-subject">
                                  Jecno Mac (@jecnomac) has sent you a direct
                                  message on Twitter! &nbsp;–&nbsp;
                                  <span>
                                    @LucasKriebel - Very cool :) Nicklas, You
                                    have a new direct message.
                                  </span>
                                </Link>
                                <div className="iq-email-date">11:49 am</div>
                              </div>
                              <ul className="iq-social-media">
                                <li>
                                  <Link to="#">
                                    <i className="ri-delete-bin-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-mail-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-file-list-2-line"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ri-time-line"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Tab.Container>
      </Row>
    </Fragment>
  );
};

export default Email;
