import React, { Fragment } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'

const FormRadio = () => {
  return (
    <Fragment>
        <Row>
        <Col sm='12' lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Default Radio Buttons</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="radio d-inline-block me-3">
                              <Form.Check.Input type="radio" name="bsradio" id="radio1" defaultChecked />
                              <FormLabel className='mb-0' htmlFor="radio1">Active</FormLabel>
                           </div>
                           <div className="radio d-inline-block me-3">
                              <Form.Check.Input type="radio" name="bsradio" id="radio2" />
                              <FormLabel className='mb-0' htmlFor="radio2">Inactive</FormLabel>
                           </div>
                           <div className="radio d-inline-block me-3">
                              <Form.Check.Input type="radio" name="bsradio1" id="radio3" disabled defaultChecked />
                              <FormLabel className='mb-0' htmlFor="radio3">Active - Disabled</FormLabel>
                           </div>
                           <div className="radio d-inline-block me-3">
                              <Form.Check.Input type="radio" name="bsradio1" id="radio4" disabled />
                              <FormLabel className='mb-0' htmlFor="radio3">Inactive - Disabled</FormLabel>
                           </div>
                        </div>
                     </div>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Colored Radio Buttons</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="d-flex gap-2 flex-wrap">
                              <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio01" name="customRadio-11" className="custom-control-input bg-primary me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio01"> Primary </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio02" name="customRadio-11" className="custom-control-input bg-success me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio02"> Success </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio03" name="customRadio-11" className="custom-control-input bg-danger me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio03"> Danger </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio04" name="customRadio-11" className="custom-control-input bg-warning me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio04"> Warning </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio05" name="customRadio-11" className="custom-control-input bg-dark me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio05"> Dark </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio06" name="customRadio-11" className="custom-control-input bg-info me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio06"> Info </FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col sm='12' lg='6'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Custom Radio Buttons</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="d-flex gap-2 flex-wrap">
                              <div className="custom-control custom-radio custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio6" name="customRadio-1" className="custom-control-input" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio6"> One </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio7" name="customRadio-1" className="custom-control-input" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio7"> Two </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio8" name="customRadio-1" className="custom-control-input" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio8"> Three </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-8" name="customRadio-2" className="custom-control-input" defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-8"> Four Checked </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio9" name="customRadio-3" className="custom-control-input" disabled />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio9"> Five disabled</FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio10" name="customRadio-4" className="custom-control-input" disabled defaultChecked />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio10"> Six Selected and  disabled</FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Colored Radio Buttons</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <div className="d-flex gap-2 flex-wrap">
                              <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-1" name="customRadio-10" className="custom-control-input bg-primary me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-1"> Primary </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-2" name="customRadio-10" className="custom-control-input bg-success me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-2"> Success </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-3" name="customRadio-10" className="custom-control-input bg-danger me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-3"> Danger </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-4" name="customRadio-10" className="custom-control-input bg-warning me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-4"> Warning </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-5" name="customRadio-10" className="custom-control-input bg-dark me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-5"> Dark </FormLabel>
                              </div>
                              <div className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                 <Form.Check.Input type="radio" id="customRadio-6" name="customRadio-10" className="custom-control-input bg-info me-1" />
                                 <FormLabel className="custom-control-label" htmlFor="customRadio-6"> Info </FormLabel>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Col>
        </Row>
    </Fragment>
  )
}

export default FormRadio
