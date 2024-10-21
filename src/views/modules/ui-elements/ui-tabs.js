import React, { Fragment } from "react";
import { Col,  Nav, Row, Tab } from "react-bootstrap";

const UiTabs = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"home"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Basic Tabs</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p className="">
                    The base <code>.nav</code> component does not include any{" "}
                    <code>.active</code> state. The following examples include
                    the class, mainly to demonstrate that this particular class
                    does not trigger any special styling.
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-tabs"
                    id="myTab-1"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="home-tab"
                        data-bs-toggle="tab"
                        eventKey="home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="profile-tab"
                        data-bs-toggle="tab"
                        eventKey="profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="contact-tab"
                        data-bs-toggle="tab"
                        eventKey="contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="myTabContent-2">
                    <Tab.Pane
                      className="tab-pane fade show"
                      eventKey="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"home-three"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Basic Tabs Style 3</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Takes the basic nav from above and adds the{" "}
                    <code>.nav-tabs</code> class to generate a tabbed interface.
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-tabs"
                    id="myTab-three"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="home-tab-three"
                        data-bs-toggle="tab"
                        eventKey="home-three"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="profile-tab-three"
                        data-bs-toggle="tab"
                        eventKey="profile-three"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="contact-tab-three"
                        data-bs-toggle="tab"
                        eventKey="contact-three"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="myTabContent-4">
                    <Tab.Pane
                      className="fade show"
                      eventKey="home-three"
                      role="tabpanel"
                      aria-labelledby="home-tab-three"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="fade"
                      eventKey="profile-three"
                      role="tabpanel"
                      aria-labelledby="profile-tab-three"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="fade"
                      eventKey="contact-three"
                      role="tabpanel"
                      aria-labelledby="contact-tab-three"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"v-pills-home"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Tabs Vertical Pills</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Stack your navigation by changing the flex item direction
                    with the <code>.flex-column</code> utility.
                  </p>
                  <Row>
                    <Col sm="3">
                      <Nav
                        className="nav flex-column nav-pills text-center"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <Nav.Link
                          data-bs-toggle="pill"
                          eventKey="v-pills-home"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          Home
                        </Nav.Link>
                        <Nav.Link
                          data-bs-toggle="pill"
                          eventKey="v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Profile
                        </Nav.Link>
                        <Nav.Link
                          data-bs-toggle="pill"
                          eventKey="v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Messages
                        </Nav.Link>
                        <Nav.Link
                          data-bs-toggle="pill"
                          eventKey="v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Settings
                        </Nav.Link>
                      </Nav>
                    </Col>
                    <Col sm="9">
                      <Tab.Content className="" id="v-pills-tabContent">
                        <Tab.Pane
                          className="fade show"
                          eventKey="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          className="fade"
                          eventKey="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          className="fade"
                          eventKey="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          className="fade"
                          eventKey="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </div>
              </Tab.Container>
            </div>
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"home-justify"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Tabs Justify Center</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Centered with <code>.justify-content-center</code>
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-tabs justify-content-center"
                    id="myTab-2"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="home-tab-justify"
                        data-bs-toggle="tab"
                        eventKey="home-justify"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="profile-tab-justify"
                        data-bs-toggle="tab"
                        eventKey="profile-justify"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="contact-tab-justify"
                        data-bs-toggle="tab"
                        eventKey="contact-justify"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="myTabContent-3">
                    <Tab.Pane
                      className="tab-pane fade show"
                      eventKey="home-justify"
                      role="tabpanel"
                      aria-labelledby="home-tab-justify"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="profile-justify"
                      role="tabpanel"
                      aria-labelledby="profile-tab-justify"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="contact-justify"
                      role="tabpanel"
                      aria-labelledby="contact-tab-justify"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"pills-home"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Basic Tabs Style 2</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Take that same HTML, but use <code>.nav-pills</code>{" "}
                    instead:
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        eventKey="pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        eventKey="pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        eventKey="pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="pills-tabContent-2">
                    <Tab.Pane
                      className=" fade show"
                      eventKey="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className=" fade"
                      eventKey="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className=" fade"
                      eventKey="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"home-four"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Basic Tabs Style 4</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Takes the basic nav from above and adds the{" "}
                    <code>.nav-tabs</code> class to generate a tabbed interface.
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-tabs"
                    id="myTab-three"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="home-tab-three"
                        data-bs-toggle="tab"
                        eventKey="home-four"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="profile-tab-three"
                        data-bs-toggle="tab"
                        eventKey="profile-four"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="contact-tab-three"
                        data-bs-toggle="tab"
                        eventKey="contact-four"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="myTabContent-4">
                    <Tab.Pane
                      className="fade show"
                      eventKey="home-four"
                      role="tabpanel"
                      aria-labelledby="home-tab-three"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="fade"
                      eventKey="profile-four"
                      role="tabpanel"
                      aria-labelledby="profile-tab-three"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="fade"
                      eventKey="contact-four"
                      role="tabpanel"
                      aria-labelledby="contact-tab-three"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"pills-home-fill"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Tabs Fill and justify</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Force your <code>.nav</code>’s contents to extend the full
                    available width one of two modifier classes. To
                    proportionately fill all available space with your{" "}
                    <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice
                    that all horizontal space is occupied, but not every nav
                    item has the same width.
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-pills mb-3 nav-fill"
                    id="pills-tab-1"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="pills-home-tab-fill"
                        data-bs-toggle="pill"
                        eventKey="pills-home-fill"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="pills-profile-tab-fill"
                        data-bs-toggle="pill"
                        eventKey="pills-profile-fill"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="pills-contact-tab-fill"
                        data-bs-toggle="pill"
                        eventKey="pills-contact-fill"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="pills-tabContent-1">
                    <Tab.Pane
                      className="tab-pane fade show"
                      eventKey="pills-home-fill"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab-fill"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="pills-profile-fill"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab-fill"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="pills-contact-fill"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab-fill"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
            <div className="iq-card">
              <Tab.Container defaultActiveKey={"home-end"}>
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Tabs Justify Right</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>
                    Right-aligned with <code>.justify-content-end</code>.
                  </p>
                  <Nav
                    as={"ul"}
                    className="nav nav-tabs justify-content-end"
                    id="myTab-4"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="home-tab-end"
                        data-bs-toggle="tab"
                        eventKey="home-end"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="profile-tab-end"
                        data-bs-toggle="tab"
                        eventKey="profile-end"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link
                        id="contact-tab-end"
                        data-bs-toggle="tab"
                        eventKey="contact-end"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="myTabContent-5">
                    <Tab.Pane
                      className="tab-pane fade show"
                      eventKey="home-end"
                      role="tabpanel"
                      aria-labelledby="home-tab-end"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="profile-end"
                      role="tabpanel"
                      aria-labelledby="profile-tab-end"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade"
                      eventKey="contact-end"
                      role="tabpanel"
                      aria-labelledby="contact-tab-end"
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default UiTabs;
