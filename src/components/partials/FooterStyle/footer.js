import React,{Fragment,memo} from 'react'

// react-router
import { Link} from 'react-router-dom'

// react-bootstrap
import {Row, Col, Container} from 'react-bootstrap'

const Footer = memo(() => {
    return (
            <Fragment>
               <footer className="bg-white iq-footer">
                  <Container fluid>
                     <Row>
                        <Col lg="6" >
                           <ul className="list-inline mb-0">
                              <li className="list-inline-item"><Link to="privacy-policy.html">Privacy Policy</Link></li>
                              <li className="list-inline-item"><Link to="terms-of-service.html">Terms of Use</Link></li>
                           </ul>
                        </Col>
                        <Col lg="6" className="text-end">
                           Copyright 2020 <Link to="#">FluentGrid</Link> All Rights Reserved.
                        </Col>
                     </Row>
                  </Container>
               </footer>
            </Fragment>
        )
})

Footer.displayName = "Footer"
export default Footer
