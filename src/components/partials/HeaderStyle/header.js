import React, { Fragment, memo, useEffect, useState } from "react";

// react-router
import { Link, useLocation,useNavigate } from "react-router-dom";

// react-bootstrap
import { Navbar, Dropdown, Form } from "react-bootstrap";

// components
import CustomToggle from "../../dropdowns";
import Fullscreen from "../../fullscreen";

// img
import flag1 from "../../../assets/images/small/flag-01.png";
import flag2 from "../../../assets/images/small/flag-02.png";
import flag3 from "../../../assets/images/small/flag-03.png";
import flag4 from "../../../assets/images/small/flag-04.png";
import flag5 from "../../../assets/images/small/flag-05.png";
import flag6 from "../../../assets/images/small/flag-06.png";
import user1 from "../../../assets/images/user/1.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user4 from "../../../assets/images/user/04.jpg";
import user5 from "../../../assets/images/user/05.jpg";

import { useSelector, useDispatch } from "react-redux";
import * as SettingSelector from "../../../store/setting/selectors";
import * as SettingAction from "../../../store/setting/actions";

const Header = memo(() => {
  // Fixed Header
  const [loggeduser,setloggeduser]=useState();
  const navigator=useNavigate();
  const username = localStorage.getItem('username');
  

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 75) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const appName = useSelector(SettingSelector.app_name);
  const themeSchemeDirection = useSelector(
    SettingSelector.theme_scheme_direction
  );
  const dispatch = useDispatch();
  const changeThemeSchemeDir = (e) => {
    let value = "ltr";
    if (themeSchemeDirection === "ltr") {
      value = "rtl";
    }
    dispatch(SettingAction.theme_scheme_direction(value));
  };
  const [isClicked, setIsClicked] = useState(false);
  const minisidebar = () => {
    setIsClicked(isClicked);
    document.body.classList.toggle('sidebar-main');
  };
  const userLogout=()=>{
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    navigator("/"); 
  };
  return (
    <Fragment>
      <div className={`iq-top-navbar ${isFixed ? "fixed-header" : ""}`}>
        <div className="iq-navbar-custom">
          <div className="iq-sidebar-logo">
            <div className="top-logo">
              <Link to="index.html" className="logo">
                <img src="images/logo.png" className="img-fluid" alt="" />
                <span>{appName}</span>
              </Link>
            </div>
          </div>
          <Navbar expand="lg" variant="light" className="p-0">
            <div className="iq-search-bar">
              <form action="#" className="searchbox">
                <input
                  type="text"
                  className="text search-input"
                  placeholder="Type here to search..."
                />
                <Link className="search-link" to="#">
                  <i className="ri-search-line"></i>
                </Link>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line"></i>
            </button>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="ri-more-fill"></i>
                </div>
                <div className="hover-circle">
                  <i className="ri-more-2-fill" onClick={minisidebar}></i>
                </div>
              </div>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-list">
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle
                    as={CustomToggle}
                    className="search-toggle iq-waves-effect language-title"

                  >
                    <img
                      src={flag1}
                      alt="img-flaf"
                      className="img-fluid mr-1"
                      style={{ height: "16px", width: "16px" }}
                    />{" "}
                    English <i className="ri-arrow-down-s-line"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="iq-sub-dropdown iq-show">
                    <Dropdown.Item className="iq-sub-card" >
                      <img
                        src={flag2}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                       <span className="ms-2">French</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="iq-sub-card" >
                      <img
                        src={flag3}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      <span className="ms-2">Spanish</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="iq-sub-card" >
                      <img
                        src={flag4}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      <span className="ms-2">Italian</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="iq-sub-card" >
                      <img
                        src={flag5}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      <span className="ms-2">German</span>
                    </Dropdown.Item>
                    <Dropdown.Item className="iq-sub-card" >
                      <img
                        src={flag6}
                        alt="img-flaf"
                        className="img-fluid mr-2"
                      />
                      <span className="ms-2">Japanese</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* RTL & LTR Mode start */}
                <li className="nav-item">
                 {/* eslint-disable-next-line */}
                  <a className="rtl-switch-toogle">
                    <span className="form-check form-switch">
                      <Form.Check.Input
                        className="form-check-input rtl-switch"
                        type="checkbox"
                        role="switch"
                        id="rtl-switch"
                        defaultChecked={themeSchemeDirection}
                        value="ltr"
                        onChange={changeThemeSchemeDir}
                      />
                      <span className="rtl-toggle-tooltip ltr-tooltip">
                        Ltr
                      </span>
                      <span className="rtl-toggle-tooltip rtl-tooltip">
                        Rtl
                      </span>
                    </span>
                  </a>
                </li>
                {/* RTL & LTR Mode end */}

                {/* <li className="nav-item iq-full-screen"> */}
                <div to="#" className="iq-waves-effect" id="btnFullscreen">
                  <Fullscreen />
                </div>
                {/* </li> */}
                <Dropdown as="li" className="nav-item">
                  <Dropdown.Toggle
                    as={CustomToggle}

                    className="search-toggle iq-waves-effect"
                  >
                    <i className="ri-notification-3-fill"></i>
                    <span className="bg-danger dots"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white d-flex justify-content-between">
                            All Notifications
                            <small className="badge  badge-dark float-right pt-1">
                              4
                            </small>
                          </h5>
                        </div>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user1}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Emma Watson Bini</h6>
                              <small className="float-end font-size-12">
                                Just Now
                              </small>
                              <p className="mb-0">95 MB</p>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user2}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">New customer is join</h6>
                              <small className="float-end font-size-12">
                                5 days ago
                              </small>
                              <p className="mb-0">Jond Bini</p>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user3}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Two customer is left</h6>
                              <small className="float-end font-size-12">
                                2 days ago
                              </small>
                              <p className="mb-0">Jond Bini</p>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user4}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">New Mail from Fenny</h6>
                              <small className="float-end font-size-12">
                                3 days ago
                              </small>
                              <p className="mb-0">Jond Bini</p>
                            </div>
                          </div>
                        </Dropdown.Item>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="nav-item ">
                  <Dropdown.Toggle
                    as={CustomToggle}

                    className="search-toggle iq-waves-effect"
                  >
                    <i className="ri-mail-open-fill"></i>
                    <span className="bg-primary count-mail"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white d-flex justify-content-between">
                            All Messages
                            <small className="badge  badge-dark float-right pt-1">
                              5
                            </small>
                          </h5>
                        </div>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user1}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Bini Emma Watson</h6>
                              <small className="float-left font-size-12">
                                13 Jun
                              </small>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user2}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                              <small className="float-left font-size-12">
                                20 Apr
                              </small>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user3}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Why do we use it?</h6>
                              <small className="float-left font-size-12">
                                30 Jun
                              </small>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user4}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Variations Passages</h6>
                              <small className="float-left font-size-12">
                                12 Sep
                              </small>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item  className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className="">
                              <img
                                className="avatar-40 rounded"
                                src={user5}
                                alt=""
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                              <small className="float-left font-size-12">
                                5 Dec
                              </small>
                            </div>
                          </div>
                        </Dropdown.Item>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>

            <ul className="navbar-list">
              <Dropdown as="li">
                <Dropdown.Toggle

                  as={CustomToggle}
                  variant="search-toggle iq-waves-effect d-flex align-items-center"
                >
                  <img
                    src={user1}
                    className="img-fluid rounded mr-3"
                    alt="user"
                  />
                  {username?(
                  <div className="caption">
                    <h6 className="mb-0 line-height">{username}</h6>
                    <span className="font-size-12" onClick={userLogout}>Sign-Out</span>
                  </div>) :(<p>Sign-In</p>)}
                </Dropdown.Toggle>
                <Dropdown.Menu className="iq-sub-dropdown iq-user-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white line-height">
                          Hello Bini Jets
                        </h5>
                        <span className="text-white font-size-12">
                          Available
                        </span>
                      </div>
                      <Dropdown.Item
                        href="/doctors-profile"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-file-user-line"></i>
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">My Profile</h6>
                            <p className="mb-0 font-size-12">
                              View personal profile details.
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/edit-doctors"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-profile-line"></i>
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">Edit Profile</h6>
                            <p className="mb-0 font-size-12">
                              Modify your personal details.
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/account-setting"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-account-box-line"></i>
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">Account settings</h6>
                            <p className="mb-0 font-size-12">
                              Manage your account parameters.
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/privacy-setting"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-lock-line"></i>
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">Privacy Settings</h6>
                            <p className="mb-0 font-size-12">
                              Control your privacy parameters.
                            </p>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <div className="d-inline-block w-100 text-center p-3">
                        <Link
                          className="bg-primary iq-sign-btn"
                          to="/sign-in"
                          role="button"
                        >
                          Sign out<i className="ri-login-box-line ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </Navbar>
        </div>
      </div>
    </Fragment>
  );
});

Header.displayName = "Header";
export default Header;