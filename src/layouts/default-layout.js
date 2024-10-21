import React,{useEffect,Fragment,memo, useState} from 'react'

// router-dom
import { Outlet } from 'react-router-dom'

// react-bootstrap
import { Container } from 'react-bootstrap'

//header
import Header from '../components/partials/HeaderStyle/header'

//sidebar
import Sidebar from '../components/partials/SidebarStyle/sidebar'

// footer
import Footer from '../components/partials/FooterStyle/footer'

const DefaultLayout = memo(() => {
  useEffect(() => {
    //scroll up pages go
 window.scrollTo({top: 0, behavior: 'smooth'});
})
 
  return (
    <Fragment>
        <div className="wrapper">
        <Sidebar />
          <div id="content-page" className="content-page">
        <Header/>
            <Container fluid>
              {/* <h1>DefaultLayout.</h1> */}
              <Outlet></Outlet>
            </Container>
            <Footer />
          </div>
        </div>
    </Fragment>
  )
})

DefaultLayout.displayName = "DefaultLayout"
export default DefaultLayout