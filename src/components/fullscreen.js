import React,{ useState,Fragment,memo } from 'react'

// react-bootstrap
import {Nav} from 'react-bootstrap'

const FullScreen = memo((props) =>{
   const fullscreen= () => {
        if (!document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }
    }
   const [chnage,setchange] = useState(true)
     return(
      <Fragment>
        <Nav.Item as="li" className="nav-icon dropdown full-screen" onClick={() => setchange(!chnage)}>
            <Nav.Item as="a" herf="#" className="nav-item nav-icon dropdown"  onClick={fullscreen}>
                <i className={`max ${chnage === false ? 'd-none' : '' }`}><svg className={`svg-icon  text-${props.color}`} id="d-3-max" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></i>
                <i className={`min ${chnage === true ? 'd-none' :'' }`}><svg className={`svg-icon  text-${props.color}`} id="d-3-min" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg></i>
            </Nav.Item>
        </Nav.Item>
      </Fragment>
     )
})

FullScreen.displayName = "FullScreen"
export default FullScreen;