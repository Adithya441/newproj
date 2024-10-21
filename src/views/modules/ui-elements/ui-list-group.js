import React, { Fragment } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UiListGroup = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">List group</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                The most basic list group is an unordered list with list items
                and the proper classes. Build upon it with the options that
                follow, or with your own CSS as needed.
              </p>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Disabled items</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add <code>.disabled</code> to a <code>.list-group-item</code> to
                make it <em>appear</em> disabled. Note that some elements with{" "}
                <code>.disabled</code> will also require custom JavaScript to
                fully disable their click events (e.g., links).
              </p>
              <ListGroup>
                <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Flush</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add <code className="highlighter-rouge">.list-group-flush</code>{" "}
                to remove some borders and rounded corners to render list group
                items edge-to-edge in a parent container (e.g., cards).
              </p>
              <ul className="list-group list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ul>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Contextual classes</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Use contextual classes to style list items with a stateful
                background and color.
              </p>
              <ListGroup>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item variant="primary">
                  A simple primary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="secondary">
                  A simple secondary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  A simple success list group item
                </ListGroup.Item>
                <ListGroup.Item variant="danger">
                  A simple danger list group item
                </ListGroup.Item>
                <ListGroup.Item variant="warning">
                  A simple warning list group item
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                  A simple info list group item
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                  A simple light list group item
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  A simple dark list group item
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">With badges</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add badges to any list group item to show unread counts,
                activity, and more with the help of some{" "}
                <Link
                  to="https://getbootstrap.com/docs/5.3/utilities/flex/"
                  target="_blank"
                >
                  utilities
                </Link>
                .
              </p>
              <ListGroup>
                <ListGroup.Item className=" d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <Badge bg="primary" className="badge-pill">
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className=" d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <Badge bg="success" className="badge-pill">
                    2
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className=" d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <Badge bg="danger" className="badge-pill">
                    1
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">With badges</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add badges to any list group item to show unread counts,
                activity, and more with the help of some{" "}
                <Link
                  to="https://getbootstrap.com/docs/5.3/utilities/flex/"
                  target="_blank"
                >
                  utilities
                </Link>
                .
              </p>
              <ListGroup>
                <ListGroup.Item className=" d-flex justify-content-between align-items-center iq-bg-primary">
                  Cras justo odio
                  <Badge bg="primary" className="badge-pill">
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className=" d-flex justify-content-between align-items-center iq-bg-success">
                  Dapibus ac facilisis in
                  <Badge bg="success" className="badge-pill">
                    2
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className=" d-flex justify-content-between align-items-center iq-bg-danger">
                  Morbi leo risus
                  <Badge bg="danger" className="badge-pill">
                    1
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Col>
        <Col sm="12" lg="6">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">List Active</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add <code>.active</code> to a <code>.list-group-item</code> to
                indicate the current active selection.
              </p>
              <ListGroup>
                <ListGroup.Item active>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Links and buttons</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to
                create <em>actionable</em> list group items with hover,
                disabled, and active states by adding{" "}
                <code>.list-group-item-action</code>. We separate these
                pseudo-classes to ensure list groups made of non-interactive
                elements (like <code>&lt;li&gt;</code>s or{" "}
                <code>&lt;div&gt;</code>s) don’t provide a click or tap
                affordance.
              </p>
              <p>
                Be sure to{" "}
                <strong>
                  not use the standard <code>.btn</code> classes here
                </strong>
                .
              </p>
              <ListGroup>
                <ListGroup.Item className=" list-group-item-action active">
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item
                  action
                  disabled
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Vestibulum at eros
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Horizontal</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add <code>.list-group-horizontal</code> to change the layout of
                list group items from vertical to horizontal across all
                breakpoints. Alternatively, choose a responsive variant{" "}
                <code>.list-group-horizontal-{"sm|md|lg|xl"}</code> to make a
                list group horizontal starting at that breakpoint’s{" "}
                <code>min-width</code>. Currently{" "}
                <strong>
                  horizontal list groups cannot be combined with flush list
                  groups.
                </strong>
              </p>
              <p>
                <strong>ProTip:</strong> Want equal-width list group items when
                horizontal? Add <code>.flex-fill</code> to each list group item.
              </p>
              <ListGroup horizontal>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Contextual classes Action</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Use contextual classes to style list items with a stateful
                background and color.
              </p>
              <ListGroup>
                <ListGroup.Item className="list-group-item-action">
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item variant="primary" action>
                  A simple primary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action>
                  A simple secondary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="success" action>
                  A simple success list group item
                </ListGroup.Item>
                <ListGroup.Item variant="danger" action>
                  A simple danger list group item
                </ListGroup.Item>
                <ListGroup.Item variant="warning" action>
                  A simple warning list group item
                </ListGroup.Item>
                <ListGroup.Item variant="info" action>
                  A simple info list group item
                </ListGroup.Item>
                <ListGroup.Item variant="light" action>
                  A simple light list group item
                </ListGroup.Item>
                <ListGroup.Item variant="dark" action>
                  A simple dark list group item
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Custom content</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Add nearly any HTML within, even for linked list groups like the
                one below, with the help of{" "}
                <Link
                  to="https://getbootstrap.com/docs/5.3/utilities/flex/"
                  target="_blank"
                >
                  flexbox utilities
                </Link>
                .
              </p>
              <ListGroup>
                <ListGroup.Item action active>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 text-white">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small className="text-muted">
                    Donec id elit non mi porta.
                  </small>
                </ListGroup.Item>
                <ListGroup.Item action>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small className="text-muted">
                    Donec id elit non mi porta.
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UiListGroup;
