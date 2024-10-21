

import React,{memo,Fragment} from 'react'

//Router
import { Link, useLocation } from 'react-router-dom'

//React-bootstrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const SidebarMenu = memo((props) => {
    //location
    let location = useLocation();
  return (
    <Fragment>
      {props.isTag === 'true' &&
        <li className={`${location.pathname === `${props.pathname}` ? 'active main-active' : ''}`}>
          <Link className={`${location.pathname === `${props.pathname}` ? 'iq-waves-effect' : ''}`} aria-current="page" to={props.pathname}>
              <OverlayTrigger placement="right" overlay={<Tooltip>{props.title}</Tooltip>}>
                {props.children}
              </OverlayTrigger>
              <span className="item-name">{props.title} </span>{props.isNew === 'true' ? <span className="badge badge-danger">New</span>: ""}
          </Link>
      </li>
      }
      {
        props.isTag === 'false' &&
        <li className={`${location.pathname === `${props.pathname}` ? 'active' : ''}`}>
          <Link to={props.pathname} onClick={props.modalopen} target={props.target}>
              { props.staticIcon === 'true' &&
                <i className={props.iconClass}>
                  {/* <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                      <g>
                          <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                      </g>
                  </svg> */}
                </i>
              }
              {props.children}
              
              <span className="item-name"> {props.title} </span>{props.isNew === 'true' ? <span className="badge badge-danger">New</span>: ""}
          </Link>
        </li>
      }
    </Fragment>
  )
})

SidebarMenu.displayName = "SidebarMenu"
export default SidebarMenu       