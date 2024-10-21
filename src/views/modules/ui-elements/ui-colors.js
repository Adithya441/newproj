import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'

// Redux Selector / Action
import {  useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";
import { Link } from 'react-router-dom';


const UiColors = () => {
   const appName = useSelector(SettingSelector.app_name)
  return (
    <Fragment>
               <Row>
                  <Col lg='12'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">{appName} Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Similar to the contextual text color classNamees, easily set the background of an element to any contextual className. Anchor components will darken on hover, just like the text classNamees. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>
                           <div className="row mt-4">
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="bg-primary pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Primary</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="bg-secondary pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Secondary</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="bg-success pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Success</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="bg-danger pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Danger</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="bg-warning pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Warning</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="bg-info pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Info</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center mt-4">
                                 <p className="bg-light pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Light</h6>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center mt-4">
                                 <p className="bg-dark pt-5 pb-5 text-center rounded-4"></p>
                                 <h6>Dark</h6>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">{appName} Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Similar to the contextual text color classNamees, easily set the background of an element to any contextual className. Anchor components will darken on hover, just like the text classNamees. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>
                           <div className="row mt-4">
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="iq-bg-primary pt-5 pb-5 text-center rounded-4 font-size-18">Primary</p>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="iq-bg-secondary pt-5 pb-5 text-center rounded-4 font-size-18">Secondary</p>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="iq-bg-success pt-5 pb-5 text-center rounded-4 font-size-18">Success</p>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="iq-bg-danger pt-5 pb-5 text-center rounded-4 font-size-18">Danger</p>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="iq-bg-warning pt-5 pb-5 text-center rounded-4 font-size-18">Warning</p>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center">
                                 <p className="iq-bg-info pt-5 pb-5 text-center rounded-4 font-size-18">Info</p>
                              </div>
                              <div className="col-lg-2 col-md-6 text-center mt-4">
                                 <p className="iq-bg-dark pt-5 pb-5 text-center rounded-4 font-size-18">Dark</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">{appName} Text Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Contextual text classNamees also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> className has no additional link styling beyond underline.</strong></p>
                           <p className="text-primary">.text-primary</p>
                           <p className="text-secondary">.text-secondary</p>
                           <p className="text-success">.text-success</p>
                           <p className="text-danger">.text-danger</p>
                           <p className="text-warning">.text-warning</p>
                           <p className="text-info">.text-info</p>
                           <p className="text-light bg-dark">.text-light</p>
                           <p className="text-dark">.text-dark</p>
                           <p className="text-muted">.text-muted</p>
                           <p className="text-white bg-dark">.text-white</p>
                           <p className="text-black-50">.text-black-50</p>
                           <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">{appName} Text Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Contextual text classNamees also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> className has no additional link styling beyond underline.</strong></p>
                           <p><Link to="#" className="text-primary">Primary link</Link></p>
                           <p><Link to="#" className="text-secondary">Secondary link</Link></p>
                           <p><Link to="#" className="text-success">Success link</Link></p>
                           <p><Link to="#" className="text-danger">Danger link</Link></p>
                           <p><Link to="#" className="text-warning">Warning link</Link></p>
                           <p><Link to="#" className="text-info">Info link</Link></p>
                           <p><Link to="#" className="text-light bg-dark">Light link</Link></p>
                           <p><Link to="#" className="text-dark">Dark link</Link></p>
                           <p><Link to="#" className="text-muted">Muted link</Link></p>
                           <p className="mb-0"><Link to="#" className="text-white bg-dark">White link</Link></p>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">{appName} Text Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Contextual text classNamees also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> className has no additional link styling beyond underline.</strong></p>
                           <p className="iq-bg-primary ps-3 pe-3 pt-2 pb-2 rounded-5">Primary link</p>
                           <p className="iq-bg-secondary ps-3 pe-3 pt-2 pb-2 rounded-5">Secondary link</p>
                           <p className="iq-bg-success ps-3 pe-3 pt-2 pb-2 rounded-5">Success link</p>
                           <p className="iq-bg-danger ps-3 pe-3 pt-2 pb-2 rounded-5">Danger link</p>
                           <p className="iq-bg-warning ps-3 pe-3 pt-2 pb-2 rounded-5">Warning link</p>
                           <p className="iq-bg-info ps-3 pe-3 pt-2 pb-2 rounded-5">Info link</p>
                           <p className="iq-bg-dark ps-3 pe-3 pt-2 pb-2 rounded-5 mb-0">Dark link</p>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">{appName} Text Color</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Contextual text classNamees also work well on anchors with the provided hover and focus states. <strong>Note that the <code>.text-white</code> and <code>.text-muted</code> className has no additional link styling beyond underline.</strong></p>
                           <p><Link to="#" className="iq-bg-primary ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Primary link</Link></p>
                           <p><Link to="#" className="iq-bg-secondary ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Secondary link</Link></p>
                           <p><Link to="#" className="iq-bg-success ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Success link</Link></p>
                           <p><Link to="#" className="iq-bg-danger ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Danger link</Link></p>
                           <p><Link to="#" className="iq-bg-warning ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Warning link</Link></p>
                           <p><Link to="#" className="iq-bg-info ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Info link</Link></p>
                           <p className="mb-0"><Link to="#" className="iq-bg-dark ps-3 pe-3 pt-2 pb-2 rounded-5 d-inline-block">Dark link</Link></p>
                        </div>
                     </div>
                  </Col>
               </Row>
    </Fragment>
  )
}

export default UiColors