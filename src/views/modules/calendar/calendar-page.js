import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

//full calender
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <Fragment>
        <Row className="">
          <Col md="3">
            <div className="iq-card calender-small">
              <div className="iq-card-body">
                <Flatpickr className="d-none" options={{ inline: true }} />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title ">Classification</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Link to="#">
                    <i className="fa fa-plus  me-0" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="m-0 p-0 job-classification">
                  <li className="">
                    <i className="ri-check-line bg-danger"></i>Meeting
                  </li>
                  <li className="">
                    <i className="ri-check-line bg-success"></i>Business travel
                  </li>
                  <li className="">
                    <i className="ri-check-line bg-warning"></i>Personal Work
                  </li>
                  <li className="">
                    <i className="ri-check-line bg-info"></i>Team Project
                  </li>
                </ul>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Today's Schedule</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="m-0 p-0 today-schedule">
                  <li className="d-flex">
                    <div className="schedule-icon">
                      <i className="ri-checkbox-blank-circle-fill text-primary"></i>
                    </div>
                    <div className="schedule-text">
                      {" "}
                      <span>Web Design</span>
                      <span>09:00 to 12:00</span>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="schedule-icon">
                      <i className="ri-checkbox-blank-circle-fill text-success"></i>
                    </div>
                    <div className="schedule-text">
                      {" "}
                      <span>Participate in Design</span>
                      <span>09:00 to 12:00</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md="9">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Book Appointment</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Link to="#" className="btn btn-primary">
                    <i className="ri-add-line me-2"></i>Book Appointment
                  </Link>
                </div>
              </div>
              <div className="iq-card-body fc-unthemed">
                <FullCalendar
                  plugins={[dayGridPlugin, listPlugin, bootstrapPlugin]}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                  }}
                  events={[
                    {
                      title: "5:30a Click for Google",
                      url: "http://google.com/",
                      date: "2021-08-05",
                      textColor: "rgba(58,87,232,1)",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "5:30a All Day Event",
                      date: "2021-08-07",
                      textColor: "rgba(108,117,125,1)",
                      backgroundColor: "rgba(108,117,125,0.2)",
                      borderColor: "rgba(108,117,125,1)",
                    },
                    {
                      title: "5:30a Long Event",
                      date: "2021-08-09",
                      end: "2021-08-12",
                      textColor: "rgba(8,130,12,1)",
                      backgroundColor: "rgba(8,130,12,0.2)",
                      borderColor: "rgba(8,130,12,1)",
                    },
                    {
                      title: "5:30a Repeating Event",
                      date: "2021-08-11",
                      textColor: "rgba(4,118,133,1)",
                      backgroundColor: "rgba(4,118,133,0.2)",
                      borderColor: "rgba(4,118,133,1)",
                    },
                    {
                      title: "5:30a Repeating Event",
                      date: "2021-08-13",
                      textColor: "rgba(235,153,27,1)",
                      backgroundColor: "rgba(235,153,27,0.2)",
                      borderColor: "rgba(235,153,27,1)",
                    },
                    {
                      title: "5:30a Repeating Event",
                      date: "2021-08-15",
                      textColor: "rgba(206,32,20,1)",
                      backgroundColor: "rgba(206,32,20,0.2)",
                      borderColor: "rgba(206,32,20,1)",
                    },
                    {
                      title: "Birthday Party",
                      date: "2021-08-17",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "Meeting",
                      date: "2021-08-19",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "Birthday Party",
                      date: "2021-08-20",
                      backgroundColor: "rgba(235,153,27,0.2)",
                      textColor: "rgba(235,153,27,1)",
                      borderColor: "rgba(235,153,27,1)",
                    },
                    {
                      title: "Birthday Party",
                      date: "2021-08-23",
                      backgroundColor: "rgba(235,153,27,0.2)",
                      textColor: "rgba(235,153,27,1)",
                      borderColor: "rgba(235,153,27,1)",
                    },
                    {
                      title: "Birthday Party",
                      date: "2021-08-25",
                      backgroundColor: "rgba(235,153,27,0.2)",
                      textColor: "rgba(235,153,27,1)",
                      borderColor: "rgba(235,153,27,1)",
                    },
                    {
                      title: "Meeting",
                      date: "2021-08-25",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "Click for Google",
                      url: "http://google.com/",
                      date: "2021-08-25",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "5:30a All Day Event",
                      date: "2021-08-26",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "5:30a Repeating Event",
                      date: "2021-09-01",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                    {
                      title: "5:30a Repeating Event",
                      date: "2021-09-04",
                      backgroundColor: "rgba(58,87,232,0.2)",
                      textColor: "rgba(58,87,232,1)",
                      borderColor: "rgba(58,87,232,1)",
                    },
                  ]}
                />
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default Calendar;
