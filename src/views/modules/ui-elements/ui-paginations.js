import React, { Fragment } from "react";

// react-bootstap
import { Col, Pagination, Row } from "react-bootstrap";

// react-router
import {Link} from 'react-router-dom'

const UiPaginations = () => {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Pagination Examples</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                In addition, as pages likely have more than one such navigation
                section, it’s advisable to provide a descriptive{" "}
                <code>aria-label</code> for the <code>&lt;nav&gt;</code> to
                reflect its purpose. For example, if the pagination component is
                used to navigate between a set of search results, an appropriate
                label could be <code>aria-label="Search results pages"</code>.
              </p>
              <nav aria-label="Page navigation example">
                <Pagination className="pagination mb-0">
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </nav>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Disabled and active states</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Pagination links are customizable for different circumstances.
                Use <code>.disabled</code> for links that appear un-clickable
                and <code>.active</code> to indicate the current page.
              </p>
              <p>
                While the <code>.disabled</code> className uses{" "}
                <code>pointer-events: none</code> to <em>try</em> to disable the
                link functionality of <code>&lt;a&gt;</code>s, that CSS property
                is not yet standardized and doesn’t account for keyboard
                navigation. As such, you should always add{" "}
                <code>tabindex="-1"</code> on disabled links and use custom
                JavaScript to fully disable their functionality.
              </p>
              <nav aria-label="...">
                <Pagination>
                  <Pagination.Item disabled>Previous</Pagination.Item>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item active aria-current="page">
                    2 <span className="sr-only">(current)</span>
                  </Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </nav>
              <p>
                You can optionally swap out active or disabled anchors for{" "}
                <code>&lt;span&gt;</code>, or omit the anchor in the case of the
                prev/next arrows, to remove click functionality and prevent
                keyboard focus while retaining intended styles.
              </p>
              <nav aria-label="...">
                <Pagination>
                  <Pagination.Item disabled>Previous</Pagination.Item>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item active aria-current="page">
                    2<span className="sr-only">(current)</span>
                  </Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </nav>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Pagination With Color</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                In addition, as pages likely have more than one such navigation
                section, it’s advisable to provide a descriptive{" "}
                <code>aria-label</code> for the <code>&lt;nav&gt;</code> to
                reflect its purpose. For example, if the pagination component is
                used to navigate between a set of search results, an appropriate
                label could be <code>aria-label="Search results pages"</code>.
              </p>
              <nav aria-label="Page navigation example">
                <Pagination className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                </Pagination>
              </nav>
              <nav aria-label="Page navigation example">
                <Pagination>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                </Pagination>
              </nav>
              <nav aria-label="Page navigation example">
                <Pagination className="pagination mb-0 ">
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                </Pagination>
              </nav>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Working with icons</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Looking to use an icon or symbol in place of text for some
                pagination links? Be sure to provide proper screen reader
                support with <code>aria</code> attributes.
              </p>
              <nav aria-label="Page navigation example">
                <Pagination className="pagination mb-0">
                  <Pagination.First />
                  <Pagination.Item className="page-item">1</Pagination.Item>
                  <Pagination.Item className="page-item">2</Pagination.Item>
                  <Pagination.Item className="page-item">3</Pagination.Item>
                  <Pagination.Last />
                </Pagination>
              </nav>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Pagination Sizing</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>
                Fancy larger or smaller pagination? Add{" "}
                <code>.pagination-lg</code> or <code>.pagination-sm</code> for
                additional sizes.
              </p>
              <nav aria-label="...">
                <Pagination size="lg">
                  <Pagination.Item
                    active
                    aria-current="page"
                    activeLabel="current"
                  >
                    1
                  </Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                </Pagination>
              </nav>
              <nav aria-label="...">
                <Pagination>
                  <Pagination.Item active activeLabel="current">
                    1
                  </Pagination.Item>
                  <Pagination.Item className="page-item">2</Pagination.Item>
                  <Pagination.Item className="page-item">3</Pagination.Item>
                </Pagination>
              </nav>
              <nav aria-label="...">
                <Pagination size="sm">
                  <Pagination.Item active activeLabel="current">
                    1
                  </Pagination.Item>
                  <Pagination.Item className="page-item">2</Pagination.Item>
                  <Pagination.Item className="page-item">3</Pagination.Item>
                </Pagination>
              </nav>
            </div>
          </div>
          <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Alignment</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <p>
                Change the alignment of pagination components with{" "}
                <Link to="/docs/4.3/utilities/flex/">flexbox utilities</Link>.
              </p>
              <h6>left</h6>
              <nav aria-label="Page navigation example">
                <Pagination>
                  <Pagination.Item disabled>Previous</Pagination.Item>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </nav>
              <h6 class="text-center">Center</h6>
              <nav aria-label="Page navigation example">
                <Pagination className="justify-content-center">
                  <Pagination.Item disabled>Previous</Pagination.Item>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </nav>
              <h6 class="text-end">Right</h6>
              <nav aria-label="Page navigation example">
                <Pagination className="justify-content-end">
                  <Pagination.Item disabled>Previous</Pagination.Item>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </nav>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UiPaginations;
