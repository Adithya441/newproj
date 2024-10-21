import React, { Fragment } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import user1 from "../../../assets/images/user/05.jpg";
import user2 from "../../../assets/images/user/01.jpg";
import user3 from "../../../assets/images/user/06.jpg";
import user4 from "../../../assets/images/user/07.jpg";
import user5 from "../../../assets/images/user/08.jpg"
import user6 from "../../../assets/images/user/09.jpg"
import user7 from "../../../assets/images/user/10.jpg"
import user8 from '../../../assets/images/user/1.jpg'

const Chat = () => {
  return (
    <Fragment>
        <Tab.Container defaultActiveKey={"default-block"}>
          <Row>
            <Col lg="3" className="col-lg-3 chat-data-left scroller">
              <div className="chat-sidebar-channel scroller ps-3">
                <h5 className="">Public Channels</h5>
                <Nav className="iq-chat-ui nav flex-column nav-pills">
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="default-block-1">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user1}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-success"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Team Discussions</h6>
                          <span>Lorem Ipsum is</span>
                        </div>
                        <div className="chat-meta float-end text-center mt-2">
                          <div className="chat-msg-counter bg-primary text-white">
                            20
                          </div>
                          <span className="text-nowrap">05 min</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox2">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user3}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-success"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Announcement</h6>
                          <span>This Sunday we</span>
                        </div>
                        <div className="chat-meta float-end text-center mt-2">
                          <div className="chat-msg-counter bg-primary text-white">
                            10
                          </div>
                          <span className="text-nowrap">05 min</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <h5 className="mt-3">Private Channels</h5>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox3">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user4}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-warning"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Doctors</h6>
                          <span>There are many </span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox4">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user5}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-success"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Nurses</h6>
                          <span>passages of Lorem</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox5">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user6}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-info"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">OT Special</h6>
                          <span>Lorem Ipsum used</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <h5 className="mt-3">Direct Message</h5>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox6">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user7}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-dark"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Paul Molive</h6>
                          <span>translation by</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox7">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user2}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-success"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Paige Turner</h6>
                          <span>Lorem Ipsum which</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox8">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user3}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-primary"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Barb Ackue</h6>
                          <span>simply random text</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox9">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user4}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-danger"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Maya Didas</h6>
                          <span> but also the leap</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link data-bs-toggle="pill" eventKey="chatbox10">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user5}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-warning"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">Monty Carlo</h6>
                          <span>Contrary to popular</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col lg="9" className="mb-4">
              <div className="chat-data chat-data-right">
                <Tab.Content>
                  <Tab.Pane
                    className="tab-pane fade show"
                    eventKey="default-block"
                    role="tabpanel"
                  >
                    <div className="chat-start">
                      <span className="iq-start-icon text-primary">
                        <i className="ri-message-3-line"></i>
                      </span>
                      <Button id="chat-start" className="btn bg-primary mt-3">
                        Start Conversation!
                      </Button>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey={"default-block-1"}
                    role="tabpanel"
                  >
                    <div className="chat-head">
                      <header className="d-flex justify-content-between align-items-center pt-3 pe-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div className="sidebar-toggle">
                            <i className="ri-menu-3-line"></i>
                          </div>
                          <div className="avatar chat-user-profile m-0 me-3">
                            <img
                              src={user1}
                              alt="avatar"
                              className="avatar-50 rounded"
                            />
                            <span className="avatar-status">
                              <i className="ri-checkbox-blank-circle-fill text-success"></i>
                            </span>
                          </div>
                          <h5 className="mb-0">Team Discussions</h5>
                        </div>
                        <div className="chat-user-detail-popup scroller">
                          <div className="user-profile text-center">
                            <Button type="submit" className="close-popup p-3">
                              <i className="ri-close-fill"></i>
                            </Button>
                            <div className="user mb-4">
                              <Link className="avatar m-0">
                                <img src={user1} alt="avatar" />
                              </Link>
                              <div className="user-name mt-4">
                                <h4>Bini Jordan</h4>
                              </div>
                              <div className="user-desc">
                                <p>Cape Town, RSA</p>
                              </div>
                            </div>
                            <hr />
                            <div className="chatuser-detail text-start mt-4">
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Bini Name:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Bini
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">Tel:</div>
                                <div className="col-6 col-md-6 text-end">
                                  072 143 9920
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Date Of Birth:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  July 12, 1989
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Gender:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Male
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Language:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Engliah
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-header-icons d-flex">
                          <Link
                            to="#"
                            className="chat-icon-phone iq-bg-primary ms-3"
                          >
                            <i className="ri-phone-line"></i>
                          </Link>
                          <Link
                            to="#"
                            className="chat-icon-video iq-bg-primary"
                          >
                            <i className="ri-vidicon-line"></i>
                          </Link>
                          <Link
                            to="#"
                            className="chat-icon-delete iq-bg-primary"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                          <Dropdown className="dropdown iq-bg-primary rounded">
                            <Dropdown.Toggle
                              bsPrefix="text-body d-inline-flex iq-bg-primary"
                              style={{ border: "none" }}
                            >
                              <i
                                className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer pe-0"
                                id="dropdownMenuButton02"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              ></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdownMenuButton02"
                            >
                              <Dropdown.Item className="dropdown-item">
                                <i
                                  className="fa fa-thumb-tack"
                                
                                ></i>{" "}
                                Pin to top
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item">
                                <i
                                  className="fa fa-trash-o"
                                
                                ></i>{" "}
                                Delete chat
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item">
                                <i className="fa fa-ban"></i>{" "}
                                Block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </header>
                    </div>
                    <div className="chat-content scroller">
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:45</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>How can we help? We're here for you! 😄</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user1}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:48</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>
                              Hey John, I am looking for the best admin
                              template.
                            </p>
                            <p>Could you please help me to find it out? 🤔</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:49</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Absolutely!</p>
                            <p>
                              XRay Dashboard is the responsive bootstrap 4 admin
                              template.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user1}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:52</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Looks clean and fresh UI.</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:53</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Thanks, from ThemeForest.</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user1}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:54</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>I will purchase it for sure. 👍</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:56</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Okay Thanks..</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-footer p-3 bg-white">
                      <form className="d-flex align-items-center" action="#">
                        <div className="chat-attagement d-flex">
                          <Link to="#">
                            <i
                              className="fa fa-smile-o pe-3"
                            
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              className="fa fa-paperclip pe-3"
                            
                            ></i>
                          </Link>
                        </div>
                        <input
                          type="text"
                          className="form-control me-3"
                          placeholder="Type your message"
                        />
                        <Button
                          type="submit"
                          className="btn btn-primary d-flex align-items-center p-2"
                        >
                          <i
                            className="fa fa-paper-plane-o"
                          
                          ></i>
                          <span className="d-none d-lg-block ms-1">Send</span>
                        </Button>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="chatbox2"
                    role="tabpanel"
                  >
                    <div className="chat-head">
                      <header className="d-flex justify-content-between align-items-center pt-3  ps-3 pe-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div className="sidebar-toggle">
                            <i className="ri-menu-3-line"></i>
                          </div>
                          <div className="avatar chat-user-profile m-0 me-3">
                            <img
                              src={user3}
                              alt="avatar"
                              className="avatar-50 rounded"
                            />
                            <span className="avatar-status">
                              <i className="ri-checkbox-blank-circle-fill text-success"></i>
                            </span>
                          </div>
                          <h5 className="mb-0">Announcement</h5>
                        </div>
                        <div className="chat-user-detail-popup scroller">
                          <div className="user-profile text-center">
                            <Button type="submit" className="close-popup p-3">
                              <i className="ri-close-fill"></i>
                            </Button>
                            <div className="user mb-4">
                              <Link className="avatar m-0">
                                <img src={user3} alt="avatar" />
                              </Link>
                              <div className="user-name mt-4">
                                <h4>Mark Jordan</h4>
                              </div>
                              <div className="user-desc">
                                <p>Atlanta, USA</p>
                              </div>
                            </div>
                            <hr />
                            <div className="chatuser-detail text-start mt-4">
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Bini Name:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Mark
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">Tel:</div>
                                <div className="col-6 col-md-6 text-end">
                                  072 143 9920
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Date Of Birth:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  July 12, 1989
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Gender:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Female
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Language:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Engliah
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-header-icons d-flex">
                          <Link
                            to="#"
                            className="chat-icon-phone iq-bg-primary ms-3"
                          >
                            <i className="ri-phone-line"></i>
                          </Link>
                          <Link
                            to="#"
                            className="chat-icon-video iq-bg-primary"
                          >
                            <i className="ri-vidicon-line"></i>
                          </Link>
                          <Link
                            to="#"
                            className="chat-icon-delete iq-bg-primary"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                          <span className="dropdown iq-bg-primary">
                            <i
                              className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                              id="dropdownMenuButton01"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></i>
                            <span
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdownMenuButton01"
                            >
                              <Link className="dropdown-item" to="#">
                                <i
                                  className="fa fa-thumb-tack"
                                
                                ></i>{" "}
                                Pin to top
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i
                                  className="fa fa-trash-o"
                                
                                ></i>{" "}
                                Delete chat
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i className="fa fa-ban"></i>{" "}
                                Block
                              </Link>
                            </span>
                          </span>
                        </div>
                      </header>
                    </div>
                    <div className="chat-content scroller">
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:45</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>How can we help? We're here for you! 😄</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user3}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:48</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>
                              Hey John, I am looking for the best admin
                              template.
                            </p>
                            <p>Could you please help me to find it out? 🤔</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:49</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Absolutely!</p>
                            <p>
                              XRay Dashboard is the responsive bootstrap 4 admin
                              template.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user3}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:52</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Looks clean and fresh UI.</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:53</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Thanks, from ThemeForest.</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user3}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:54</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>I will purchase it for sure. 👍</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:56</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Okay Thanks..</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-footer p-3 bg-white">
                      <Form className="d-flex align-items-center">
                        <div className="chat-attagement d-flex">
                          <Link to="#">
                            <i
                              className="fa fa-smile-o pe-3"
                            
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              className="fa fa-paperclip pe-3"
                            
                            ></i>
                          </Link>
                        </div>
                        <Form.Control
                          type="text"
                          className="form-control me-3"
                          placeholder="Type your message"
                        />
                        <Button
                          type="submit"
                          className="btn btn-primary d-flex align-items-center p-2"
                        >
                          <i
                            className="fa fa-paper-plane-o"
                          
                          ></i>
                          <span className="d-none d-lg-block ms-1">Send</span>
                        </Button>
                      </Form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    eventKey="chatbox3"
                    role="tabpanel"
                  >
                    <div className="chat-head">
                      <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div className="sidebar-toggle">
                            <i className="ri-menu-3-line"></i>
                          </div>
                          <div className="avatar chat-user-profile m-0 me-3">
                            <img
                              src={user4}
                              alt="avatar"
                              className="avatar-50 rounded"
                            />
                            <span className="avatar-status">
                              <i className="ri-checkbox-blank-circle-fill text-success"></i>
                            </span>
                          </div>
                          <h5 className="mb-0">Designer</h5>
                        </div>
                        <div className="chat-user-detail-popup scroller">
                          <div className="user-profile text-center">
                            <Button type="submit" className="close-popup p-3">
                              <i className="ri-close-fill"></i>
                            </Button>
                            <div className="user mb-4">
                              <Link className="avatar m-0">
                                <img src={user4} alt="avatar" />
                              </Link>
                              <div className="user-name mt-4">
                                <h4>Paige Turner</h4>
                              </div>
                              <div className="user-desc">
                                <p>Cape Town, RSA</p>
                              </div>
                            </div>
                            <hr />
                            <div className="chatuser-detail text-start mt-4">
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Bini Name:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  pai
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">Tel:</div>
                                <div className="col-6 col-md-6 text-end">
                                  072 143 9920
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Date Of Birth:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  July 12, 1989
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Gender:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Male
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-6 col-md-6 title">
                                  Language:
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                  Engliah
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-header-icons d-flex">
                          <Link
                            to="#"
                            className="chat-icon-phone iq-bg-primary ms-3"
                          >
                            <i className="ri-phone-line"></i>
                          </Link>
                          <Link
                            to="#"
                            className="chat-icon-video iq-bg-primary"
                          >
                            <i className="ri-vidicon-line"></i>
                          </Link>
                          <Link
                            to="#"
                            className="chat-icon-delete iq-bg-primary"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                          <span className="dropdown iq-bg-primary">
                            <i
                              className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></i>
                            <span
                              className="dropdown-menu dropdown-menu-right"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <Link className="dropdown-item" to="#">
                                <i
                                  className="fa fa-thumb-tack"
                                
                                ></i>{" "}
                                Pin to top
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i
                                  className="fa fa-trash-o"
                                
                                ></i>{" "}
                                Delete chat
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i className="fa fa-ban"></i>{" "}
                                Block
                              </Link>
                            </span>
                          </span>
                        </div>
                      </header>
                    </div>
                    <div className="chat-content scroller">
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:45</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>How can we help? We're here for you! 😄</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user4}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:48</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>
                              Hey John, I am looking for the best admin
                              template.
                            </p>
                            <p>Could you please help me to find it out? 🤔</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:49</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Absolutely!</p>
                            <p>
                              XRay Dashboard is the responsive bootstrap 4 admin
                              template.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user4}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:52</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Looks clean and fresh UI.</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:53</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Thanks, from ThemeForest.</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat chat-left">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user4}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:54</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>I will purchase it for sure. 👍</p>
                          </div>
                        </div>
                      </div>
                      <div className="chat">
                        <div className="chat-user">
                          <Link className="avatar m-0">
                            <img
                              src={user8}
                              alt="avatar"
                              className="avatar-35 rounded "
                            />
                          </Link>
                          <span className="chat-time mt-1">6:56</span>
                        </div>
                        <div className="chat-detail">
                          <div className="chat-message">
                            <p>Okay Thanks..</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-footer p-3 bg-white">
                      <Form className="d-flex align-items-center">
                        <div className="chat-attagement d-flex">
                          <Link to="#">
                            <i
                              className="fa fa-smile-o pe-3"
                            
                            ></i>
                          </Link>
                          <Link to="#">
                            <i
                              className="fa fa-paperclip pe-3"
                            
                            ></i>
                          </Link>
                        </div>
                        <Form.Control
                          type="text"
                          className="form-control me-3"
                          placeholder="Type your message"
                        />
                        <Button
                          type="submit"
                          className="btn btn-primary d-flex align-items-center p-2"
                        >
                          <i
                            className="fa fa-paper-plane-o"
                          
                          ></i>
                          <span className="d-none d-lg-block ms-1">Send</span>
                        </Button>
                      </Form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="chatbox4" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user5} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Developer</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <Button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></Button>
                          <div className="user mb-4">
                            <Link className="avatar m-0">
                              <img src={user5} alt="avatar" />
                            </Link>
                            <div className="user-name mt-4">
                              <h4>Barb Ackue</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Babe</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Feale</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton2" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user5} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user5} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user5} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <Form className="d-flex align-items-center" >
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <Form.Control type="text" className="form-control me-3" placeholder="Type your message" />
                      <Button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></Button>
                    </Form>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="chatbox5" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user6} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Testing Team</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <Button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></Button>
                          <div className="user mb-4">
                            <Link className="avatar m-0">
                              <img src={user6} alt="avatar" />
                            </Link>
                            <div className="user-name mt-4">
                              <h4>Peta Saireya</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Pet</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Female</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton3" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton3">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded" />
                        </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user6} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user6} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user6} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                        <Link className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                        </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <Form className="d-flex align-items-center" >
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <Form.Control type="text" className="form-control me-3" placeholder="Type your message" />
                      <Button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></Button>
                    </Form>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="chatbox6" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user7} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Paul Molive</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></button>
                          <div className="user mb-4">
                            <Link to="#" className="avatar m-0">
                              <img src={user7} alt="avatar" />
                            </Link>
                            <div className="user-name mt-4">
                              <h4>Paul Molive</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Pau</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Male</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton4" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user7} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user7} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user7} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <form className="d-flex align-items-center" action="#">
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <input type="text" className="form-control me-3" placeholder="Type your message" />
                      <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></button>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="chatbox7" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user2} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Paige Turner</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></button>
                          <div className="user mb-4">
                                       <Link to="#" className="avatar m-0">
                              <img src={user2} alt="avatar" />
                                       </Link>
                            <div className="user-name mt-4">
                              <h4>Paige Turner</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Pai</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Feale</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton5" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user2} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user2} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user2} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <form className="d-flex align-items-center" action="#">
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <input type="text" className="form-control me-3" placeholder="Type your message" />
                      <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></button>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="chatbox8" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user3} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Barb Ackue</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></button>
                          <div className="user mb-4">
                                       <Link to="#" className="avatar m-0">
                              <img src={user3} alt="avatar" />
                                       </Link>
                            <div className="user-name mt-4">
                              <h4>Barb Ackue</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Babe</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Female</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton6" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user3} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user3} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user3} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <form className="d-flex align-items-center" action="#">
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <input type="text" className="form-control me-3" placeholder="Type your message" />
                      <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></button>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="chatbox9" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user4} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Maya Didas</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></button>
                          <div className="user mb-4">
                                       <Link to="#" className="avatar m-0">
                              <img src={user4} alt="avatar" />
                                       </Link>
                            <div className="user-name mt-4">
                              <h4>Maya Didas</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Babe</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Male</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton7" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton7">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user4} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user4} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user4} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <form className="d-flex align-items-center" action="#">
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <input type="text" className="form-control me-3" placeholder="Type your message" />
                      <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></button>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="chatbox10" role="tabpanel">
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 ps-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img src={user5} alt="avatar" className="avatar-50 rounded" />
                          <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success"></i></span>
                        </div>
                        <h5 className="mb-0">Monty Carlo</h5>
                      </div>
                      <div className="chat-user-detail-popup scroller">
                        <div className="user-profile text-center">
                          <button type="submit" className="close-popup p-3"><i className="ri-close-fill"></i></button>
                          <div className="user mb-4">
                                       <Link to="#" className="avatar m-0">
                              <img src={user4} alt="avatar" />
                                       </Link>
                            <div className="user-name mt-4">
                              <h4>Monty Carlo</h4>
                            </div>
                            <div className="user-desc">
                              <p>Cape Town, RSA</p>
                            </div>
                          </div>
                          <hr />
                          <div className="chatuser-detail text-start mt-4">
                            <div className="row">
                              <div className="col-6 col-md-6 title">Bini Name:</div>
                              <div className="col-6 col-md-6 text-end">Babe</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Tel:</div>
                              <div className="col-6 col-md-6 text-end">072 143 9920</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Date Of Birth:</div>
                              <div className="col-6 col-md-6 text-end">July 12, 1989</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Gender:</div>
                              <div className="col-6 col-md-6 text-end">Female</div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-6 col-md-6 title">Language:</div>
                              <div className="col-6 col-md-6 text-end">Engliah</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-header-icons d-flex">
                        <Link to="#" className="chat-icon-phone iq-bg-primary ms-3">
                          <i className="ri-phone-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-video iq-bg-primary">
                          <i className="ri-vidicon-line"></i>
                        </Link>
                        <Link to="#" className="chat-icon-delete iq-bg-primary">
                          <i className="ri-delete-bin-line"></i>
                        </Link>
                        <span className="dropdown iq-bg-primary">
                          <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer"
                            id="dropdownMenuButton8" data-bs-toggle="dropdown"
                            role="menu"></i>
                          <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton8">
                            <Link className="dropdown-item" to="#"><i className="fa fa-thumb-tack"
                              ></i> Pin to top</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-trash-o"
                              ></i> Delete chat</Link>
                            <Link className="dropdown-item" to="#"><i className="fa fa-ban"
                              ></i> Block</Link>
                          </span>
                        </span>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:45</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>How can we help? We're here for you! 😄</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user5} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:48</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Hey John, I am looking for the best admin template.</p>
                          <p>Could you please help me to find it out? 🤔</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:49</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Absolutely!</p>
                          <p>XRay Dashboard is the responsive bootstrap 4 admin template.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user5} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:52</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Looks clean and fresh UI.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:53</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Thanks, from ThemeForest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat chat-left">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user5} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:54</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>I will purchase it for sure. 👍</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat">
                      <div className="chat-user">
                                   <Link to="#" className="avatar m-0">
                          <img src={user8} alt="avatar" className="avatar-35 rounded " />
                                   </Link>
                        <span className="chat-time mt-1">6:56</span>
                      </div>
                      <div className="chat-detail">
                        <div className="chat-message">
                          <p>Okay Thanks..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <form className="d-flex align-items-center" action="#">
                      <div className="chat-attagement d-flex">
                        <Link to="#"><i className="fa fa-smile-o pe-3"></i></Link>
                        <Link to="#"><i className="fa fa-paperclip pe-3"></i></Link>
                      </div>
                      <input type="text" className="form-control me-3" placeholder="Type your message" />
                      <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i
                          className="fa fa-paper-plane-o"></i><span
                          className="d-none d-lg-block ms-1">Send</span></button>
                    </form>
                  </div>
                </Tab.Pane>
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
    </Fragment>
  );
};

export default Chat;
