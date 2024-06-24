import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
import capture_decran from '../../images/capture_decran_20240315_a_11124.png'
import Cover from './Cover';
import EventSideBar from './EventSideBar';

function Guests()
{


    return (

        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    
          <div className='container-fluid-custom'>
            <Cover />
            <div className="container-fluid">
              <div className="row m-2 mb-5">
                <EventSideBar />
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

export default Guests;