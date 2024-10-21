import React, { useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/user/05.jpg"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const EmailCompose = (props) => {
  const [show1, setShow1] = useState("use-1");
  return (
    <div>
      <div
        className={`email-app-details ${
          props.show === "use-1" && show1 === "use-1" ? "show" : ""
        }`}
      >
        <div className="iq-card">
          <div className="iq-card-body p-0">
            <div className="">
              <div className="iq-email-to-list p-3">
                <div className="d-flex justify-content-between">
                  <ul>
                    <li className="me-3">
                      <Link to="#" onClick={() => setShow1('')}>
                        <h4 className="m-0">
                          <i className="ri-arrow-left-line"></i>
                        </h4>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                      <OverlayTrigger placement="top" overlay={<Tooltip>Mail</Tooltip>}>
                        <i className="ri-mail-open-line"></i>
                      </OverlayTrigger>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                      <OverlayTrigger placement="top" overlay={<Tooltip>Info</Tooltip>}>
                        <i className="ri-information-line"></i>
                      </OverlayTrigger>
                      </Link>
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <Link to="#">
                      <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                        <i className="ri-delete-bin-line"></i>
                      </OverlayTrigger>
                      </Link>
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Unread"
                    >
                      <Link to="#">
                      <OverlayTrigger placement="top" overlay={<Tooltip>Unread</Tooltip>}>
                        <i className="ri-mail-unread-line"></i>
                      </OverlayTrigger>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                      <OverlayTrigger placement="top" overlay={<Tooltip>Transfer</Tooltip>}>
                        <i className="ri-folder-transfer-line"></i>
                      </OverlayTrigger>
                      </Link>
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Bookmark"
                    >
                      <Link to="#">
                      <OverlayTrigger placement="top" overlay={<Tooltip>Bookmark</Tooltip>}>
                        <i className="ri-bookmark-line"></i>
                      </OverlayTrigger>
                      </Link>
                    </li>
                  </ul>
                  <div className="iq-email-search d-flex">
                    <ul>
                      <li className="me-3">
                        <Link className="font-size-14" to="#">
                          1 of 505
                        </Link>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Previous"
                      >
                        <Link to="#">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Previous</Tooltip>}>                    
                          <i className="ri-arrow-left-s-line transform-arrow"></i>
                        </OverlayTrigger>
                        </Link>
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Next"
                      >
                        <Link to="#">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Next</Tooltip>}>
                          <i className="ri-arrow-right-s-line transform-arrow"></i>
                        </OverlayTrigger>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="iq-inbox-subject p-3">
                <h5 className="mt-0">
                  Your elite author Graphic Optimization reward is ready!
                </h5>
                <div className="iq-inbox-subject-info">
                  <div className="iq-subject-info d-flex align-items-start gap-3 flex-wrap">
                    <img
                      src={img1}
                      className="img-fluid rounded-circle"
                      alt="#"
                    />
                    <div className="iq-subject-status align-self-center ms-0">
                      <h6 className="mb-0">
                        XRay team{" "}
                        <Link to="dummy@XRay.com">{"<dummy@XRay.com>"}</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          className="dropdown-toggle"
                          to="#"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          to Me
                        </Link>
                        <div
                          className="dropdown-menu font-size-12"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <table className="iq-inbox-details">
                            <tbody>
                              <tr>
                                <td>from:</td>
                                <td>Medium Daily Digest</td>
                              </tr>
                              <tr>
                                <td>reply-to:</td>
                                <td>noreply@gmail.com</td>
                              </tr>
                              <tr>
                                <td>to:</td>
                                <td>iqonicdesigns@gmail.com</td>
                              </tr>
                              <tr>
                                <td>date:</td>
                                <td>13 Dec 2019, 08:30</td>
                              </tr>
                              <tr>
                                <td>subject:</td>
                                <td>The Golden Rule</td>
                              </tr>
                              <tr>
                                <td>security:</td>
                                <td>Standard encryption</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <span className="float-end align-self-center">
                      Jan 15, 2029, 10:20AM
                    </span>
                  </div>
                  <div className="iq-inbox-body mt-5">
                    <p>Hi Jopour Xiong,</p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy.{" "}
                    </p>
                    <p>
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                    <p className="mt-5 mb-0">
                      Regards,<span className="d-inline-block w-100">John Deo</span>
                    </p>
                  </div>
                  <hr />
                  <div className="attegement">
                    <h6 className="mb-2">ATTACHED FILES:</h6>
                    <ul>
                      <li className="icon icon-attegment">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>{" "}
                        <span className="ms-1">mydoc.doc</span>
                      </li>
                      <li className="icon icon-attegment">
                        <i className="fa fa-file-text-o" aria-hidden="true"></i>{" "}
                        <span className="ms-1">mydoc.pdf</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCompose;
