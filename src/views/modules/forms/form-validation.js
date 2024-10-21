import React, { Fragment, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

const FormValidation = () => {
  //form validation
  const [validated, setValidated] = useState(false);
  const [validated1, setValidated1] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
//   Form2
const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated1(true);
  };
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title"> Default Validation</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form>
                  <Row>
                    <Col md="6" className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefault01">
                        First name
                      </FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                      />
                    </Col>
                    <Col md="6" className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefault02">
                        Last name
                      </FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        required
                      />
                    </Col>
                    <Col md="6" className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefaultUsername">
                        Username
                      </FormLabel>
                      <div className="input-group">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend1"
                        >
                          @
                        </span>
                        <FormControl
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          aria-describedby="inputGroupPrepend1"
                          required
                        />
                      </div>
                    </Col>
                    <Col md="6" className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefault03">City</FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationDefault03"
                        required
                      />
                    </Col>
                    <Col md="6" className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefault04">State</FormLabel>
                      <select
                        className="form-control"
                        id="validationDefault04"
                        required
                      >
                        <option defaultValue disabled>
                          Choose...
                        </option>
                        <option>...</option>
                      </select>
                    </Col>
                    <Col md="6" className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefault05">Zip</FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationDefault05"
                        required
                      />
                    </Col>
                  </Row>
                  <FormGroup className="form-group">
                    <Form.Check className="form-check">
                      <Form.Check.Input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck2"
                        required
                      />
                      <FormLabel
                        className="form-check-label mb-0"
                        htmlFor="invalidCheck2"
                      >
                        Agree to terms and conditions
                      </FormLabel>
                    </Form.Check>
                  </FormGroup>
                  <FormGroup className="form-group">
                    <Button
                      variant="primary"
                      className="btn btn-primary"
                      type="submit"
                    >
                      Submit form
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title"> Supported elements</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form className="was-validated">
                  <div className="mb-3">
                    <div className="mb-3">
                      <FormLabel className="mb-0" htmlFor="validationTextarea">
                        Textarea
                      </FormLabel>
                      <textarea
                        className="form-control px-2"
                        id="validationTextarea"
                        rows="3"
                        placeholder="Required example textarea"
                        required
                      ></textarea>
                    </div>
                    <Form.Control.Feedback className="invalid-feedback">
                      Please enter a message in the textarea.
                    </Form.Control.Feedback>
                  </div>
                  <Form.Check className="custom-control custom-checkbox mb-3">
                    <Form.Check.Input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlValidation1"
                      required
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customControlValidation1"
                    >
                      Check this custom checkbox
                    </FormLabel>
                    <Form.Control.Feedback className="invalid-feedback">
                      Example invalid feedback text
                    </Form.Control.Feedback>
                  </Form.Check>
                  <Form.Check className="custom-control custom-radio">
                    <Form.Check.Input
                      type="radio"
                      className="custom-control-input"
                      id="customControlValidation2"
                      name="radio-stacked"
                      required
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customControlValidation2"
                    >
                      Toggle this custom radio
                    </FormLabel>
                  </Form.Check>
                  <Form.Check className="custom-control custom-radio mb-3">
                    <Form.Check.Input
                      type="radio"
                      className="custom-control-input"
                      id="customControlValidation3"
                      name="radio-stacked"
                      required
                    />
                    <FormLabel
                      className="custom-control-label"
                      htmlFor="customControlValidation3"
                    >
                      Or toggle this other custom radio
                    </FormLabel>
                    <Form.Control.Feedback className="invalid-feedback">
                      More example invalid feedback text
                    </Form.Control.Feedback>
                  </Form.Check>
                  <div className="form-group">
                    <FormSelect className="form-select" required>
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </FormSelect>
                    <Form.Control.Feedback className="invalid-feedback">
                      Example invalid custom select feedback
                    </Form.Control.Feedback>
                  </div>
                  <div className="input-group">
                    <FormControl
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                      required
                    />
                    <Form.Control.Feedback className="invalid-feedback">
                      Example invalid custom file feedback
                    </Form.Control.Feedback>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Custom Validation</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <Form
                  className="needs-validation"
                  noValidate
                  validated={validated}
                  onClick={handleSubmit}
                >
                  <Row>
                    <Col md="6" className=" mb-3">
                      <FormLabel className="mb-0" htmlFor="validationCustom01">
                        First name
                      </FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </Col>
                    <Col md="6" className=" mb-3">
                      <FormLabel className="mb-0" htmlFor="validationCustom02">
                        Last name
                      </FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </Col>

                    <Col md="6" className=" mb-3">
                      <FormLabel className="mb-0" htmlFor="validationDefaultUsername">
                        Username
                      </FormLabel>
                      <div className="input-group">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend2"
                        >
                          @
                        </span>
                        <FormControl
                          type="text"
                          className="form-control"
                          id="validationDefaultUsername"
                          aria-describedby="inputGroupPrepend2"
                          required
                        />
                      </div>
                    </Col>
                    <Col md="6" className=" mb-3">
                      <FormLabel className="mb-0" htmlFor="validationCustom03">City</FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        required
                      />
                      <Form.Control.Feedback className="invalid-feedback">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Col>
                    <Col md="6" className=" mb-3">
                      <FormLabel className="mb-0" htmlFor="validationCustom04">State</FormLabel>
                      <FormSelect
                        className="form-control"
                        id="validationCustom04"
                        required
                      >
                        <option defaultValue disabled value="">
                          Choose...
                        </option>
                        <option>...</option>
                      </FormSelect>
                      <Form.Control.Feedback className="invalid-feedback">
                        Please select a valid state.
                      </Form.Control.Feedback>
                    </Col>
                    <Col md="6" className=" mb-3">
                      <FormLabel className="mb-0" htmlFor="validationCustom05">Zip</FormLabel>
                      <FormControl
                        type="text"
                        className="form-control"
                        id="validationCustom05"
                        required
                      />
                      <Form.Control.Feedback className="invalid-feedback">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <FormGroup className="form-group">
                    <Form.Check>
                      <Form.Check.Input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <Form.Check.Label
                        className="form-check-label"
                        htmlFor="invalidCheck"
                      >
                        Agree to terms and conditions
                      </Form.Check.Label>
                      <Form.Control.Feedback className="invalid-feedback">
                        You must agree before submitting.
                      </Form.Control.Feedback>
                    </Form.Check>
                  </FormGroup>
                  <Button
                    variant="primary"
                    className="btn btn-primary"
                    type="submit"
                  >
                    Submit form
                  </Button>
                </Form>
              </div>
            </div>

            <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Tooltips</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                           <Form className="needs-validation" noValidate validated={validated1}
                  onClick={handleSubmit1}>
                              <Row>
                                 <Col md='6' className="mb-3 position-relative">
                                    <FormLabel className="mb-0" htmlFor="validationTooltip01">First name</FormLabel>
                                    <FormControl type="text" className="form-control" id="validationTooltip01" defaultValue="Mark" required />
                                    <div className="valid-tooltip">
                                       Looks good!
                                    </div>
                                 </Col>
                                 <Col md='6' className="mb-3 position-relative">
                                    <FormLabel className="mb-0" htmlFor="validationTooltip02">Last name</FormLabel>
                                    <FormControl type="text" className="form-control" id="validationTooltip02" defaultValue="Jets" required />
                                    <div className="valid-tooltip">
                                       Looks good!
                                    </div>
                                 </Col>
                                 <Col md='6' className="mb-3 position-relative">
                                    <FormLabel className="mb-0" htmlFor="validationDefaultUsername">Username</FormLabel>
                                    <div className="input-group">
                                      <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                      <FormControl type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
                                       <div className="invalid-tooltip">
                                          Please choose a unique and valid username.
                                       </div>
                                    </div>
                                  </Col>
                                 <Col md='6' className="mb-3 position-relative">
                                    <FormLabel className="mb-0" htmlFor="validationTooltip03">City</FormLabel>
                                    <FormControl type="text" className="form-control" id="validationTooltip03" required />
                                    <div className="invalid-tooltip">
                                       Please provide a valid city.
                                    </div>
                                 </Col>
                                 <Col md='6' className="mb-3 position-relative">
                                    <FormLabel className="mb-0" htmlFor="validationTooltip04">State</FormLabel>
                                    <FormSelect className="form-control" id="validationTooltip04" required>
                                       <option defaultValue disabled>Choose...</option>
                                       <option>...</option>
                                    </FormSelect>
                                    <div className="invalid-tooltip">
                                       Please select a valid state.
                                    </div>
                                 </Col>
                                 <Col md='6' className="mb-3 position-relative">
                                    <FormLabel className="mb-0" htmlFor="validationTooltip05">Zip</FormLabel>
                                    <FormControl type="text" className="form-control" id="validationTooltip05" required />
                                    <div className="invalid-tooltip">
                                       Please provide a valid zip.
                                    </div>
                                 </Col>
                              </Row>
                              <Button className="btn btn-primary" type="submit">Submit form</Button>
                           </Form>
                        </div>
                     </div>
          </Col>
        </Row>
      
    </Fragment>
  );
};

export default FormValidation;
