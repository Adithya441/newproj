import React, { Fragment } from "react";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import FormRange from "react-bootstrap/esm/FormRange";
import { Form } from "react-router-dom";

const FormElements = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Basic Form</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="email">Email address:</FormLabel>
                    <FormControl
                      type="email"
                      className="form-control my-2"
                      id="email1"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="pwd">Password:</FormLabel>
                    <FormControl
                      type="password"
                      className="form-control my-2"
                      id="pwd"
                    />
                  </FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <FormCheckInput
                      type="checkbox"
                      className="custom-control-input"
                      id="basicformCheck"
                    />
                    <FormCheckLabel
                      className="custom-control-label"
                      htmlFor="basicformCheck"
                    >
                      Remember me
                    </FormCheckLabel>
                  </div>
                  <Button type="submit" className="btn btn-primary me-1 mt-2">
                    Submit
                  </Button>
                  <Button
                    type="submit"
                    variant=""
                    className="btn iq-bg-danger mt-2"
                  >
                    Cancel
                  </Button>
                </Form>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Form Grid</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <Row>
                    <Col>
                      <FormControl
                        className="form-control my-2"
                        placeholder="First name"
                      />
                    </Col>
                    <Col>
                      <FormControl
                        className="form-control my-2"
                        placeholder="Last name"
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Input</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputText1">
                      Input Text{" "}
                    </FormLabel>
                    <FormControl
                      className="form-control my-2"
                      id="exampleInputText1"
                      defaultValue="Mark Jets"
                      placeholder="Enter Name"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputEmail3">
                      Email Input
                    </FormLabel>
                    <FormControl
                      type="email"
                      className="form-control my-2"
                      id="exampleInputEmail3"
                      defaultValue="markJets@gmail.com"
                      placeholder="Enter Email"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputurl">Url Input</FormLabel>
                    <FormControl
                      type="url"
                      className="form-control my-2"
                      id="exampleInputurl"
                      defaultValue="https://getbootstrap.com"
                      placeholder="Enter Url"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputphone">
                      Teliphone Input
                    </FormLabel>
                    <FormControl
                      type="tel"
                      className="form-control my-2"
                      id="exampleInputphone"
                      defaultValue="1-(555)-555-5555"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputNumber1">
                      Number Input
                    </FormLabel>
                    <FormControl
                      type="number"
                      className="form-control my-2"
                      id="exampleInputNumber1"
                      defaultValue="2356"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputPassword3">
                      Password Input
                    </FormLabel>
                    <FormControl
                      type="password"
                      className="form-control my-2"
                      id="exampleInputPassword3"
                      defaultValue="markJets123"
                      placeholder="Enter Password"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputdate">Date Input</FormLabel>
                    <FormControl
                      type="date"
                      className="form-control my-2"
                      id="exampleInputdate"
                      defaultValue="2019-12-18"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputmonth">
                      Month Input
                    </FormLabel>
                    <FormControl
                      type="month"
                      className="form-control my-2"
                      id="exampleInputmonth"
                      defaultValue="2019-12"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputweek">Week Input</FormLabel>
                    <FormControl
                      type="week"
                      className="form-control my-2"
                      id="exampleInputweek"
                      defaultValue="2019-W46"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputtime">Time Input</FormLabel>
                    <FormControl
                      type="time"
                      className="form-control my-2"
                      id="exampleInputtime"
                      defaultValue="13:45"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                      Date and Time Input
                    </FormLabel>
                    <FormControl
                      type="datetime-local"
                      className="form-control my-2"
                      id="exampleInputdatetime"
                      defaultValue="2019-12-19T13:45:00"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                      Example textarea
                    </FormLabel>
                    <textarea
                      className="form-control my-2"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary me-1 mt-2">
                    Submit
                  </Button>
                  <Button
                    type="submit"
                    variant=""
                    className="btn iq-bg-danger mt-2"
                  >
                    cancel
                  </Button>
                </Form>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Input Size</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="colFormLabelSm">Small</FormLabel>
                    <FormControl
                    size="sm"
                      type="email"
                      className="form-control form-control-sm my-2"
                      id="colFormLabelSm"
                      placeholder="form-control-sm"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="colFormLabel">Default</FormLabel>
                    <FormControl
                      type="email"
                      className="form-control my-2"
                      id="colFormLabel"
                      placeholder="form-control my-2"
                    />
                  </FormGroup>
                  <div className="form-group mb-0">
                    <FormLabel  htmlFor="colFormLabelLg" className="pb-0 mb-0">
                      Large
                    </FormLabel>
                    <FormControl
                    size="lg"
                      type="email"
                      className="form-control form-control-lg my-2"
                      id="colFormLabelLg"
                      placeholder="form-control-lg"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Horizontal Form</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form className="form-horizontal" action="#">
                  <FormGroup className="form-group row">
                    <FormLabel
                      className="control-label col-sm-2 align-self-center mb-0"
                      htmlFor="email"
                    >
                      Email:
                    </FormLabel>
                    <Col sm="10">
                      <FormControl
                        type="email"
                        className="form-control my-2"
                        id="email"
                        placeholder="Enter Your  email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="form-group row">
                    <FormLabel
                      className="control-label col-sm-2 align-self-center mb-0"
                      htmlFor="pwd1"
                    >
                      Password:
                    </FormLabel>
                    <Col sm="10">
                      <FormControl
                        type="password"
                        className="form-control my-2"
                        id="pwd1"
                        placeholder="Enter Your password"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <div className="custom-control custom-checkbox">
                      <FormControl
                        type="checkbox"
                        className="custom-control-input"
                        id="horizontalformCheck"
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="horizontalformCheck"
                      >
                        Remember me
                      </FormLabel>
                    </div>
                  </FormGroup>
                  <div className="form-group">
                    <Button type="submit" className="btn btn-primary me-1 mt-2">
                      Submit
                    </Button>
                    <Button
                      type="submit"
                      variant=""
                      className="btn iq-bg-danger mt-2"
                    >
                      cancel
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Form row</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <Row>
                    <Col className="mb-4">
                      <FormControl
                        type="text"
                        className="form-control my-2"
                        placeholder="First name"
                      />
                    </Col>
                    <Col>
                      <FormControl
                        type="text"
                        className="form-control my-2"
                        placeholder="Last name"
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Input</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputDisabled1">
                      Disabled Input
                    </FormLabel>
                    <FormControl
                      type="text"
                      className="form-control my-2"
                      id="exampleInputDisabled1"
                      disabled
                      defaultValue="Mark Jets"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputPlaceholder">
                      Placeholder
                    </FormLabel>
                    <FormControl
                      type="text"
                      className="form-control my-2"
                      id="exampleInputPlaceholder"
                      placeholder="This is Placeholder"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputReadonly">
                      Readonly
                    </FormLabel>
                    <FormControl
                      type="text"
                      className="form-control my-2"
                      id="exampleInputReadonly"
                      readOnly
                      defaultValue="Mark Jets"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputcolor">
                      Input Color{" "}
                    </FormLabel>
                    <input
                      type="color"
                      className="form-control my-2"
                      id="exampleInputcolor"
                      defaultValue="#089bab"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleFormControlSelect1">
                      Select Input
                    </FormLabel>
                    <FormSelect
                      className="form-select my-2"
                      id="exampleFormControlSelect1"
                    >
                      <option defaultValue disabled>
                        Select your age
                      </option>
                      <option>0-18</option>
                      <option>18-26</option>
                      <option>26-46</option>
                      <option>46-60</option>
                      <option>Above 60</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleFormControlSelect2">
                      Example multiple select
                    </FormLabel>
                    <FormSelect
                      multiple
                      className="form-select my-2"
                      id="exampleFormControlSelect2"
                    >
                      <option>select-1</option>
                      <option>select-2</option>
                      <option>select-3</option>
                      <option>select-4</option>
                      <option>select-5</option>
                      <option>select-6</option>
                      <option>select-7</option>
                      <option>select-8</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="customRange1">Range Input</FormLabel>
                    <FormRange
                      type="range"
                      className="form-range"
                      id="customRange1"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <div className="custom-control custom-checkbox">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <FormLabel 
                        className="custom-control-label mb-0"
                        htmlFor="customCheck1"
                      >
                        Default checkbox
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                        defaultChecked
                      />
                      <FormLabel 
                        className="custom-control-label mb-0"
                        htmlFor="customCheck2"
                      >
                        Checked
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck3"
                        disabled
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customCheck3"
                      >
                        Disabled checkbox
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck4"
                        defaultChecked
                        disabled
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customCheck4"
                      >
                        Disabled checkbox
                      </FormLabel>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck5"
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customCheck5"
                      >
                        Default checkbox
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck6"
                        defaultChecked
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customCheck6"
                      >
                        Checked
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck7"
                        disabled
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customCheck7"
                      >
                        Disabled checkbox
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck8"
                        defaultChecked
                        disabled
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customCheck8"
                      >
                        Disabled checkbox
                      </FormLabel>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <div className="form-check ps-0">
                      <div className="custom-control custom-radio">
                        <FormCheckInput
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                          className="custom-control-input"
                        />
                        <FormLabel
                          className="custom-control-label mb-0"
                          htmlFor="customRadio1"
                        >
                          {" "}
                          Default radio
                        </FormLabel>
                      </div>
                      <div className="custom-control custom-radio">
                        <FormCheckInput
                          type="radio"
                          id="customRadio3"
                          name="customRadio3"
                          className="custom-control-input"
                          defaultChecked
                        />
                        <FormLabel
                          className="custom-control-label mb-0"
                          htmlFor="customRadio3"
                        >
                          {" "}
                          Selected radio
                        </FormLabel>
                      </div>
                      <div className="custom-control custom-radio">
                        <FormCheckInput
                          type="radio"
                          id="customRadio4"
                          name="customRadio4"
                          className="custom-control-input"
                          disabled
                        />
                        <FormLabel
                          className="custom-control-label mb-0"
                          htmlFor="customRadio4"
                        >
                          {" "}
                          disabled radio
                        </FormLabel>
                      </div>
                      <div className="custom-control custom-radio">
                        <FormCheckInput
                          type="radio"
                          id="customRadio5"
                          name="customRadio5"
                          className="custom-control-input"
                          disabled
                          defaultChecked
                        />
                        <FormLabel
                          className="custom-control-label mb-0"
                          htmlFor="customRadio5"
                        >
                          {" "}
                          Selected and disabled radio
                        </FormLabel>
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <div className="custom-control custom-switch">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customSwitch1"
                      >
                        Toggle this switch element
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-switch">
                      <FormCheckInput
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch2"
                        defaultChecked
                      />
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customSwitch2"
                      >
                        Toggle this switch element
                      </FormLabel>
                    </div>
                    <div className="custom-control custom-switch">
                      {/* <FormCheckInput
                        type="checkbox"
                        disabled
                        id="customSwitch3"
                      /> */}
                      <FormLabel
                        className="custom-control-label mb-0"
                        htmlFor="customSwitch3"
                      >
                        Disabled switch element
                      </FormLabel>
                    </div>
                  </FormGroup>
                  <FormGroup className="form-group mb-0">
                    <FormLabel
                      htmlFor="exampleFormControlFile1"
                      className="float-label mb-0"
                    >
                      Example file input
                    </FormLabel>
                    <FormControl
                      type="file"
                      className="form-control mb-2"
                      id="exampleFormControlFile1"
                    />
                  </FormGroup>
                  <FormGroup className="form-group mb-0" >
                    <div className="">
                      <FormLabel className="mb-0" htmlFor="customFile">Choose file</FormLabel>
                      <FormControl
                        type="file"
                        className="form-control mb-2"
                        id="customFile"
                      />
                    </div>
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary me-1 mt-2">
                    Submit
                  </Button>
                  <Button
                    type="submit"
                    variant=""
                    className="btn iq-bg-danger mt-2"
                  >
                    cancel
                  </Button>
                </Form>
              </div>
            </div>
            <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Select Size</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <FormGroup className="form-group">
                              <FormLabel className="mb-0">Small</FormLabel>
                              <FormSelect size="sm" className="form-control form-control-sm my-2">
                                 <option defaultValue>Open this select menu</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </FormSelect>
                           </FormGroup>
                           <FormGroup className="form-group">
                              <FormLabel className="mb-0">Default</FormLabel>
                              <FormSelect className="form-control my-2">
                                 <option defaultValue>Open this select menu</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </FormSelect>
                           </FormGroup>
                           <FormGroup className="form-group">
                              <FormLabel className="mb-0">Large</FormLabel>
                              <FormSelect size="lg" className="form-control form-control-lg mt-2">
                                 <option defaultValue>Open this select menu</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </FormSelect>
                           </FormGroup>
                        </div>
                     </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default FormElements;
