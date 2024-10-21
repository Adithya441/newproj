import React, { Fragment, useEffect } from 'react'
import { Button, Col, Form, FormControl, FormGroup, Row } from 'react-bootstrap'

import img from "../../../assets/images/logo-full2.png"
import { Link } from 'react-router-dom'
const ComingSoon = () => {
   useEffect(
      () =>{
        //count down plugin js
          function getTimeRemaining(endtime) {
              const total = Date.parse(endtime) - Date.parse(new Date());
              const seconds = Math.floor((total / 1000) % 60);
              const minutes = Math.floor((total / 1000 / 60) % 60);
              const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
              const days = Math.floor(total / (1000 * 60 * 60 * 24));
          
              return {
              total,
              days,
              hours,
              minutes,
              seconds
              };
          }
        
          function initializeClock(elem, endtime) {
              const clock =  document.querySelector(elem)
              const daysSpan = clock.querySelector('[data-days]')
              const hoursSpan = clock.querySelector('[data-hours]')
              const minutesSpan = clock.querySelector('[data-minutes]')
              const secondsSpan = clock.querySelector('[data-seconds]')
          
              function updateClock() {
                  const t = getTimeRemaining(endtime)
                  const timeinterval = setInterval(updateClock, 1000)
          
                  daysSpan.innerHTML = t.days
                  hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
                  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
                  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
                  
                  if (t.total <= 0) {
                      clearInterval(timeinterval)
                  }
              }
          
              updateClock()
          }
          
          let time = document.querySelector('.countdown').getAttribute('data-date')
          if (time === undefined) {
              time = Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000
          }
          const deadline = new Date(time)
          initializeClock('.countdown', deadline)
          
          }
  )
  return (
    <Fragment>
      <div className="iq-comingsoon pt-5">
            <div className="container-fluid">
               <div className="row justify-content-center">
                  <div className="col-md-8 col-sm-11 text-center">
                     <div className="iq-comingsoon-info">
                        <Link to="/">
                        <img src={img} className="img-fluid w-25" alt="" />
                        </Link>
                        <h2 className="mt-4 mb-1">Stay tunned, we're launching very soon</h2>
                        <p>We are working very hard to give you the best experience possible!</p>
                        <ul className="countdown d-md-flex" data-date="Nov 01 2023 20:20:22">
                           <li><span data-days>0</span>Days</li>
                           <li><span data-hours>0</span>Hours</li>
                           <li><span data-minutes>0</span>Minutes</li>
                           <li><span data-seconds>0</span>Seconds</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <Row className="justify-content-center">
                  <Col lg='4'>
                     <Form className="iq-comingsoon-form mt-5">
                        <FormGroup className="form-group">
                           <FormControl type="email" className="form-control mb-0" id="exampleInputEmail1"  placeholder="Enter email address" />
                           <Button variant='primary' type="submit" className="btn btn-primary">Subscribe</Button>
                        </FormGroup>
                     </Form>
                  </Col>
               </Row>
            </div>
         </div>
    </Fragment>
  )
}

export default ComingSoon
