import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
import capture_decran from '../../images/capture_decran_20240315_a_11124.png'
import { NavLink } from 'react-router-dom';


function Schedule()
{


    return (

        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    
          <div className='container-fluid-custom'>
            <div className="container-fluid">
              <div className="bd-placeholder-img custom-jumbotron jumbotron p-6 mt-3 p-md-3 text-white rounded mb-2 d-flex flex-column justify-content-end m-4">
                <div className="row bottom-row ml-2 mr-2">
                  <div className="col-12 col-md-8 p-2 px-0 bg-light rounded mb-5 mb-md-0 ">
                    <div className="content">
                      <h6>
                        <strong>Click here to modify the event</strong>
                      </h6>
                      <p>
                        <strong>
                          <img src={calendaricon} />
                          Event date: TBD
                        </strong>
                      </p>
                      <p>Status</p>
                      <div className="breadcrumb btn-group btn-breadcrumb rounded">
                        <a
                          href="#"
                          className="btn-custom btn btn-default selectbreadcrumb"
                        >
                          Draft
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Under Review
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Open Event
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Attendance confirmed
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Pending documentation
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Completed
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 px-0 position-relative">
                    <div className=" p-3 position-relative" style={{ height: "100%" }}>
                      <div className="bg-white rounded p-3 position-absolute bottom-0 end-0">
                        <button
                          type="button"
                          className="btn-custom btn btn-outline-primary "
                        >
                          <strong>UPLOAD COVER IMAGE</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row m-2 mb-5">
                <div className="col-md-3">
                  <ul className="nav nav-custom flex-column">
                    <li className="nav-item">
                        <NavLink to="/event" className="nav-custom nav-link">EVENT DETAILS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/scheduleunderReview" className="nav-custom nav-link">SCHEDULE & ITINERARY</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/guestsunderReview" className="nav-custom nav-link">GUESTS</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/historyunderReview" className="nav-custom nav-link">HISTORY & COMMENTS</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/summaryunderReview" className="nav-custom nav-link">POST EVENT SUMMARY</NavLink>
                    </li>
                  </ul>
                </div>
    
                <div className="col-md-9">
              

                
  <div className=" bg-light rounded my-4 p-4 mt-3 visit-summary">
    <div className="visit-title">Visit Summary</div>
    <div className="visit-content">
      <span className="section-title">What to expect ?</span>
      <br />
      <br />
      <span className="text-content">
        Hello, we are looking to schedule a Lunch and Learn with a Mars family
        member before year-end 2023 for our Associate Ressource Group, BEAM.
        This Lunch &amp; Learn could be on a variety of topics, depending on the
        family member. Totally open to be flexible on time, date, topic, etc.
        The duration would be one hour.
      </span>
      <br />
      <br />
      <span className="subsection-title">What is BEAM ?</span>
      <br />
      <span className="text-content">BEAM stands for</span>
      <span className="font-weight-bold">
        Business Acumen, Education, Associate Engagement and Mentorship
      </span>
      <span className="text-content">.</span>
      <br />
      <br />
      <span className="text-content">
        This program is designed to support Associates with the critical
        transition into Senior Leader roles by :
      </span>
      <ul>
        <li className="text-content">introducing unique expectations,</li>
        <li className="text-content">
          developing an entreprise-wide perspective,
        </li>
        <li className="text-content">building a global network.</li>
      </ul>
      <br />
      <span className="font-weight-bold">Target audience :</span>
      <br />
      <span className="text-content">
        New to the business or new to SL role (P3/T4/GM1/GL1+)
      </span>
      <br />
      <br />
      <span className="font-weight-bold">Leader Expectations :</span>
      <br />
      <span className="text-content">
        Share your perspective on what makes Mars culture unique and vital to
        the family, your experience as a leader in the firm, and your
        perspective on inclusive and diversity at Mars.
      </span>
      <br />
      <br />
      <span className="font-weight-bold">Total time commitment :</span>
      <span className="text-content">1.5 hours</span>
      <br />
      <span className="text-content">30 minute Prep with HBP Moderator</span>
      <br />
      <span className="text-content">
        60 minutes to participate in a face-to-face event
      </span>
    </div>
  </div>
  <div className=" bg-light my-4 p-4 rounded p-3 ">
    <div className="itinerary-title">draft itinerary</div>
    <div className="itinerary-content">
      <span className="start-day">Start of the day : 9am</span>
      <br />
      <br />
      <span className="subsection-title">
        9:30am Global presentation to site
      </span>
      <ul>
        <li>Chat &amp; Coffee with site management team</li>
        <li>Reminder of briefing for the day</li>
      </ul>
      <br />
      <span className="subsection-title">10:30am conference @ auditorium</span>
      <ul>
        <li>Presentation about MARS business expectations for 2024</li>
        <li>
          Actions taken around environment, social equity and safety measures
        </li>
      </ul>
      <br />
      <span className="subsection-title">12:15pm lunch &amp; learn : beam</span>
      <ul>
        <li>
          Attendees: Management site leaders, Comm &amp; marketing team, and
          associates
        </li>
      </ul>
      <br />
      <span className="subsection-title">2:30pm factory tour</span>
      <br />
      <br />
      <span className="subsection-title">4pm : end of the day</span>
    </div>
  </div>
  <div className=" bg-light rounded p-4 mt-3">
    <label htmlFor="staticEmail" className="custom-font col-form-label">
      BRIEF
    </label>
    <div className="m-3">
      <button
        type="button"
        className="btn-custom-schedule btn "
      >
        DOWNLOAD THIS BRIEF FILE
      </button>
      <button
        type="button"
        className="btn-custom-schedule btn "
      >
        UPLOAD THIS BRIEF FILE
      </button>
      <button
        type="button"
        className="btn-custom-schedule-warning btn btn-outline-warning"
      >
        DELETE THIS BREIF FILE
      </button>
    </div>
    <div className="card-group">
      <div className="card m-2 rounded">
        <img
          className="card-img-top"
          src={capture_decran}
          alt="Card image cap"
        />
      </div>
      <div className="card m-2 rounded">
        <img
          className="card-img-top"
          src={capture_decran}
          alt="Card image cap"
        />
      </div>
      <div className="card m-2 rounded">
        <img
          className="card-img-top"
          src={capture_decran}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-light rounded p-4 mt-3 mb-5">
    <label htmlFor="staticEmail" className="custom-font col-form-label">
      ATTACHMENTS
    </label>
    <div className="m-2">
      <button
        type="button"
        className="btn-custom-schedule btn btn-outline-danger"
      >
        UPLOAD NEW ATTACHMENT
      </button>
    </div>
    <ul className="list-group">
      <li className="list-group-item-custom list-group-item m-1 d-flex justify-content-between align-items-center">
        <span>
          <u>Attachmentfile.pdf</u>
          <span> 28 Mo</span> <span> PDF</span>
        </span>
        <span className="">
          <i className="fa-regular fa-trash-can" />
        </span>
      </li>
      <li className="list-group-item-custom list-group-item m-1 d-flex justify-content-between align-items-center">
        <span>
          <u>Attachmentfile.docx</u>
          <span> 28 Mo</span> <span> Doc</span>
        </span>
        <span className="">
          <i className="fa-regular fa-trash-can" />
        </span>
      </li>
      <li className="list-group-item-custom list-group-item m-1 d-flex justify-content-between align-items-center">
        <span>
          <u>Link to Mars Drive file</u>
          <span> 28 Mo</span> <span> URL link</span>
        </span>
        <span className="">
          <i className="fa-regular fa-trash-can" />
        </span>
      </li>
    </ul>
  </div>





                </div>


              </div>
            </div>
          </div>
        </div >
    
      );
    




    }

export default Schedule;