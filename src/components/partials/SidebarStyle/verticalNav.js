import React, { useState, useContext, memo, Fragment } from "react";
import 'remixicon/fonts/remixicon.css';
//Router
import { Link } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

//Components
import SidebarMenu from "./sidebar-menu";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");


  return (
    <Fragment>
      {/* <div id="sidebar-scrollbar"> */}
      <nav className="iq-sidebar-menu">
        <Accordion as="ul" className="iq-menu">
          <li className="iq-menu-title">
            <i className="ri-subtract-line"></i>
            <span>Dashboard</span>
          </li>
          {/* Doctors menu Start */}
          <Accordion.Item
            as="li"
            eventKey="Admin-menu"
            bsPrefix={`nav-item ${active === "Admin" ? "active" : ""} `}
            onClick={() => setActive("Admin")}
          >
            <CustomToggle
              eventKey="Admin-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Admin</Tooltip>}
              >
                <i className="ri-home-8-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Dashboards</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="Admin-menu">
              <ul className="iq-submenu collapse menu-open">
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-user-3-fill"
                  pathname="/index"
                  title="Dashboard"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-user-3-fill"
                  pathname="/comm"
                  title="Communication Status"
                ></SidebarMenu>
                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-user-add-fill"
                  pathname="/12345"
                  title="Data Availability 30days"
                ></SidebarMenu>
                <SidebarMenu 
                isTag="false"
                staticIcon="true"
                iconClass='ri-user-add-fill'
                pathname="/datagrid"
                title="Ag Grid"></SidebarMenu>
              </ul>
            </Accordion.Collapse>
          </Accordion.Item>
          {/* Dashboard End */}

           {/* start configuration section */}
           <Accordion.Item
            as="li"
            eventKey="nurse-menu"
            bsPrefix={`nav-item ${active === "nurse" ? "active" : ""} `}
            onClick={() => setActive("nurse")}
          >
            <CustomToggle
              eventKey="nurse-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Configurations</Tooltip>}
              >
                <i className="ri-user-3-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Configurations</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="nurse-menu">
              <ul className="iq-submenu collapse menu-open">

                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-profile-fill"
                  pathname="/12345"
                  title="Configuration1"
                ></SidebarMenu>

              </ul>
            </Accordion.Collapse>
          </Accordion.Item>

         {/* end configuration section */}
       {/* start doctor section */}
           <Accordion.Item
            as="li"
            eventKey="doctor-menu1"
            bsPrefix={`nav-item ${active === "doctor1" ? "active" : ""} `}
            onClick={() => setActive("doctor1")}
          >
            <CustomToggle
              eventKey="doctor1-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Meters Details</Tooltip>}
              >
                <i className="ri-dashboard-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Meters Details</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="doctor1-menu">
              <ul className="iq-submenu collapse menu-open">

                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-profile-fill"
                  pathname="/"
                  title="Meters Details1"
                ></SidebarMenu>

              </ul>
            </Accordion.Collapse>
          </Accordion.Item>

         {/* end Meters Details section */}

       {/* start Others section */}
           <Accordion.Item
            as="li"
            eventKey="Reports-menu"
            bsPrefix={`nav-item ${active === "Reports" ? "active" : ""} `}
            onClick={() => setActive("Reports")}
          >
            <CustomToggle
              eventKey="Reports-menu"
              onClick={(activeKey) => setActiveMenu(activeKey)}
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Others</Tooltip>}
              >
                <i className="ri-briefcase-4-fill"></i>
              </OverlayTrigger>
              <span className="item-name">Others</span>
              <i className="ri-arrow-right-s-line iq-arrow-right"></i>
            </CustomToggle>
            <Accordion.Collapse eventKey="Reports-menu">
              <ul className="iq-submenu collapse menu-open">

                <SidebarMenu
                  isTag="false"
                  staticIcon="true"
                  iconClass="ri-profile-fill"
                  pathname="/"
                  title="Option1"
                ></SidebarMenu>

              </ul>
            </Accordion.Collapse>
          </Accordion.Item>

         {/* end Others section */}
</Accordion>
      </nav>
      <div className="p-3"></div>
      {/* </div> */}
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
