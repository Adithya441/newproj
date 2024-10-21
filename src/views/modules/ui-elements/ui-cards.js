import React, { Fragment } from 'react'
import { Card, CardGroup, Col, ListGroup, Row } from 'react-bootstrap'

// Images
import img1 from "../../../assets/images/page-img/07.jpg"
import img2 from "../../../assets/images/page-img/08.jpg"
import img3 from "../../../assets/images/page-img/09.jpg"


import { Link } from 'react-router-dom'

const UiCards = () => {
  return (
    <Fragment>
        <Row>
        <Col sm='3'>
                  <Card className="iq-mb-3">
                     <Card.Img variant='top' src={img1} alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. </Card.Text>
                        <Link to="#" className="btn btn-primary">Button</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm='3'>
                  <Card className="iq-mb-3">
                     <Card.Img variant='top' src={img1} className="card-img-top" alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. </Card.Text>
                        <Card.Text>It is a long established fact that a the readable content of a page when looking at its
                           layout.</Card.Text>
                           <Link className='card-link' to="#" >Card link</Link>
                        <Link className='card-link' to="#" >Another link</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm='3'>
                  <Card className="iq-mb-3">
                     <Card.Img variant='top' src={img1} 
                     alt="#" />
                     <Card.Body >
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. </Card.Text>
                        <ListGroup variant='flush'>
                           <ListGroup.Item>Cras justo odio</ListGroup.Item>
                           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm='3'>
                  <Card className="iq-mb-3">
                     <Card.Img src={img1} variant='top' alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of
                           the card's content.</Card.Text>
                     </Card.Body>
                     <ListGroup variant='flush'>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                     </ListGroup>
                     <Card.Body>
                        <Link className='card-link' to="#" >Card link</Link>
                        <Link className='card-link' to="#" >Another link</Link>
                     </Card.Body>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col sm='6'>
                  <Card className="iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. </Card.Text>
                        <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm='6'>
                  <Card className="iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. </Card.Text>
                        <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                     </Card.Body>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col lg='4'>
                  <Card className="iq-mb-3">
                     <Card.Header>
                        Featured
                     </Card.Header>
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3">
                     <Card.Header>
                        Quote
                     </Card.Header>
                     <Card.Body>
                        <blockquote className="blockquote">
                           <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                              a ante.</p>
                           <footer className="blockquote-footer mt-1">Someone famous in <cite title="Source Title">Source
                                 Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3">
                     <Card.Header>
                        Featured
                     </Card.Header>
                     <Card.Body>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                     </Card.Body>
                     <Card.Footer className="text-muted">
                        2 days ago
                     </Card.Footer>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col lg='4'>
                  <Card className="iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text >With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4' className=" text-center">
                  <Card className="iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4' className="text-end">
                  <Card className="iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Link to="#" className="btn btn-primary w-100">Go somewhere</Link>
                     </Card.Body>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col lg='4'>
                  <Card className="iq-mb-3">
                     <Card.Img variant='top' src={img1}  alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text >This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer.</Card.Text>
                        <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer.</Card.Text>
                        <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                     </Card.Body>
                     <Card.Img variant='top' src={img1}  alt="#" />
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="bg-dark text-white iq-mb-3">
                     <Card.Img src={img1} className="card-img" alt="#" />
                     <Card.ImgOverlay>
                        <Card.Title as="h4" className="text-white">Card title</Card.Title>
                        <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer.</Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                     </Card.ImgOverlay>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col sm='12'>
                  <h3 className="mt-4 mb-3">Horizontal Card</h3>
               </Col>
               <Col lg='6'>
                  <Card className="iq-mb-3">
                     <Row className="no-gutters">
                        <Col md='4'>
                           <Card.Img src={img2} alt="#" /> 
                        </Col>
                        <Col md='8'>
                           <Card.Body>
                              <Card.Title as="h4">Card title</Card.Title>
                              <Card.Text >This is a wider card with supporting text below as a natural lead-in.
                                 a little bit longer.</Card.Text>
                              <Card.Text ><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </Col>
                     </Row>
                  </Card>
               </Col>
               <Col lg='6'>
                  <Card className="iq-mb-3">
                     <Row className="no-gutters flex-row-reverse">
                        <Col md='4'>
                           <Card.Img src={img3} alt="#" />
                        </Col>
                        <Col md='8'>
                           <Card.Body className="text-end">
                              <Card.Title as="h4">Card title</Card.Title>
                              <Card.Text>This is a wider card with supporting text below as a natural lead-in.
                                 a little bit longer.</Card.Text>
                              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </Col>
                     </Row>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col sm='12'>
                  <h3 className="mt-4 mb-3">Card Colored Styles</h3>
               </Col>
               <Col lg='4'>
                  <Card className=" text-white bg-primary iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4" className=" text-white">Primary card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite
                                 title="Source Title" className="text-white">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className=" iq-mb-3 text-white bg-secondary">
                     <Card.Body>
                        <Card.Title as="h4" className=" text-white">Secondary card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite
                                 title="Source Title" className="text-white">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 text-white bg-success">
                     <Card.Body>
                        <Card.Title as="h4" className=" text-white">Success card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite
                                 title="Source Title" className="text-white">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className=" iq-mb-3 text-white bg-danger">
                     <Card.Body>
                        <Card.Title as="h4" className=" text-white">Danger card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite
                                 title="Source Title" className="text-white">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 text-white bg-warning">
                     <Card.Body>
                        <Card.Title as="h4" className=" text-white">Warning card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite
                                 title="Source Title" className="text-white">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 text-white bg-info">
                     <Card.Body>
                        <Card.Title as="h4" className=" text-white">Info card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite
                                 title="Source Title" className="text-white">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col sm='12'>
                  <h3 className="mt-4 mb-3">Border Card</h3>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 border-primary">
                     <Card.Body className=" text-primary">
                        <Card.Title as="h4" className=" text-primary">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title text to build on the
                           card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 border-secondary">
                     <Card.Body className=" text-secondary">
                        <Card.Title as="h4" className=" text-secondary">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title text to build on the
                           card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 border-success">
                     <Card.Body className=" text-success">
                        <Card.Title as="h4" className=" text-success">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title text to build on the
                           card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 border-danger">
                     <Card.Body className=" text-danger">
                        <Card.Title as="h4" className=" text-danger">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title text to build on the
                           card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 border-warning">
                     <Card.Body className=" text-warning">
                        <Card.Title as="h4" className=" text-warning">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title text to build on the
                           card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg='4'>
                  <Card className="iq-mb-3 border-info">
                     <Card.Body className=" text-info">
                        <Card.Title as="h4" className=" text-info">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title text to build on the
                           card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
        </Row>
        <Row>
        <Col sm='12'>
                  <h3 className="mt-4 mb-3">Card groups</h3>
               </Col>
               <Col sm='12'>
                  <CardGroup className="iq-mb-3">
                     <Card>
                        <Card.Img variant='top' src={img1} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Img variant='top' src={img1} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This card has supporting text below as a natural lead-in to additional
                              content.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Img variant='top' src={img1} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to show that equal
                              height action.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                  </CardGroup>
               </Col>
               <Col sm='12'>
                  <div className="card-group iq-mb-3">
                     <Card>
                        <Card.Img variant='top' src={img1} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     </Card>
                     <Card>
                        <Card.Img variant='top' src={img1} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This card has supporting text below as a natural lead-in to additional
                              content.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     </Card>
                     <Card>
                        <Card.Img variant='top' src={img1} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to show that equal
                              height action.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     </Card>
                  </div>
               </Col>
               <Col sm='12'>
                  <h3 className="mb-3">Card Masonry Columns</h3>
                  <div className="row">
                     <Col md='4' sm='6'>
                        <Card className="iq-mb-3">
                           <Card.Img variant='top' src={img1} alt="#" />
                           <Card.Body>
                              <Card.Title as="h4">Card title that wraps to a new line</Card.Title>
                              <Card.Text>This is a longer card with supporting text below as a natural lead-in
                                 to additional content. This content is a little bit longer.</Card.Text>
                           </Card.Body>
                        </Card>
                        <Card className="iq-mb-3">
                           <blockquote className="blockquote mb-0 card-body">
                              <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                 posuere erat a ante.</p>
                              <footer className="blockquote-footer">
                                 <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                 </small>
                              </footer>
                           </blockquote>
                        </Card>
                     </Col>
                     <Col md='4' sm='6'>
                        <Card className="iq-mb-3">
                           <Card.Img variant='top' src={img1} alt="#" />
                           <Card.Body>
                              <Card.Title as="h4">Card title</Card.Title>
                              <Card.Text>This card has supporting text below as a natural lead-in to
                                 additional content.</Card.Text>
                              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </Card>
                        <div className="card bg-primary text-white text-center iq-mb-3">
                           <blockquote className="blockquote mb-0 card-body text-white">
                              <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                 posuere erat a ante.</p>
                              <footer className="blockquote-footer">
                                 <small className="text-white">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                 </small>
                              </footer>
                           </blockquote>
                        </div>
                        <div className="card text-center iq-mb-3">
                           <Card.Body>
                              <Card.Title as="h4">Card title</Card.Title>
                              <Card.Text>This card has a regular title and short paragraphy of text below it.
                              </Card.Text>
                              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </div>
                     </Col>
                     <Col md='4' sm='6'>
                        <Card className="iq-mb-3">
                           <Card.Img variant='top' src={img1} alt="#" />
                        </Card>
                        <div className="card text-end iq-mb-3">
                           <blockquote className="blockquote card-body mb-0">
                              <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                 posuere erat a ante.</p>
                              <footer className="blockquote-footer">
                                 <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                 </small>
                              </footer>
                           </blockquote>
                        </div>
                        <Card className="iq-mb-3">
                           <Card.Body>
                              <Card.Title>Card title</Card.Title>
                              <Card.Text>This is another card with title and supporting text below. This card
                                 has some additional content to make it slightly taller overall.</Card.Text>
                              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                  </div>
               </Col>
        </Row>
    </Fragment>
  )
}

export default UiCards
