import React from 'react';

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <a className="navbar-brand mb-0" href="#">
                  <img src="logo.png" alt="Logo" width={100} height={35} className="d-inline-block align-text-top" />
                </a>
                <button type="button" className="buttonrequest btn btn-success ml-2">CREATE A NEW REQUEST </button>
              </div>
              <form className="d-flex">
                <span className="badge text-bg-light" style={{fontSize: 'small'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg> Jason RIPPER
                </span>
                <span className="badge text-bg-light" style={{fontSize: 'small'}}>999 <i className="fa-regular fa-bell" /></span>
              </form>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="bd-placeholder-img custom-jumbotron jumbotron p-6 mt-3 p-md-3 text-white rounded mb-2 d-flex flex-column justify-content-end m-4">
              <div className="row bottom-row ml-2 mr-2">
                <div className="col-12 col-md-8 p-2 px-0 bg-light rounded mb-5 mb-md-0 ">
                  <div className="content">
                    <h6><strong>Click here to modify the event</strong></h6>
                    <p><strong> 
                        <img src="../assets/vectors/vector_x2.svg" />
                        Event date: TBD</strong></p>
                    <p>Status</p>
                    <div className="breadcrumb btn-group btn-breadcrumb rounded">
                      <a href="#" className="btn-custom btn btn-default selectbreadcrumb">Draft</a>
                      <a href="#" className="btn-custom btn btn-default">Under Review</a>
                      <a href="#" className="btn-custom btn btn-default">Open Event</a>
                      <a href="#" className="btn-custom btn btn-default">Attendance confirmed</a>
                      <a href="#" className="btn-custom btn btn-default">Pending documentation</a>
                      <a href="#" className="btn-custom btn btn-default">Completed</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 px-0 position-relative">
                  <div className=" p-3 position-relative" style={{height: '100%'}}>
                    <div className="bg-white rounded p-3 position-absolute bottom-0 end-0">
                      <button type="button" className="btn-custom btn btn-outline-primary "><strong>UPLOAD COVER IMAGE</strong></button>
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
                    <a href="eventdetails.html" className=" nav-custom nav-link active" aria-current="page">EVENT DETAILS</a>
                  </li>
                  <li className="nav-item">
                    <a href="schedule.html" className=" nav-custom nav-link">SCHEDULE &amp; ITINERARY</a>
                  </li>
                  <li className="nav-item">
                    <a href="guests.html" className=" nav-custom nav-link">GUESTS</a>
                  </li>
                  <li className="nav-item">
                    <a href="history.html" className=" nav-custom nav-link">HISTORY &amp; COMMENTS</a>
                  </li>
                  <li className="nav-item">
                    <a href="summary.html" className=" nav-custom nav-link">POST EVENT SUMMARY</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <div className=" bg-light rounded my-4 p-4 mt-3 visit-summary">
                  <div className="visit-title">
                    Visit Summary
                  </div>
                  <div className="visit-content">
                    <span className="section-title">
                      What to expect ?
                    </span>
                    <br /><br />
                    <span className="text-content">
                      Hello, we are looking to schedule a Lunch and Learn with a Mars family
                      member before year-end 2023 for our Associate Ressource Group, BEAM. This
                      Lunch &amp; Learn could be on a variety of topics, depending on the family
                      member. Totally open to be flexible on time, date, topic, etc. The
                      duration would be one hour.
                    </span>
                    <br /><br />
                    <span className="subsection-title">
                      What is BEAM ?
                    </span>
                    <br />
                    <span className="text-content">BEAM stands for</span>
                    <span className="font-weight-bold">Business Acumen, Education, Associate Engagement and Mentorship</span>
                    <span className="text-content">.</span>
                    <br /><br />
                    <span className="text-content">
                      This program is designed to support Associates with the critical
                      transition into Senior Leader roles by :
                    </span>
                    <ul>
                      <li className="text-content">introducing unique expectations,</li>
                      <li className="text-content">developing an entreprise-wide perspective,</li>
                      <li className="text-content">building a global network.</li>
                    </ul>
                    <br />
                    <span className="font-weight-bold">
                      Target audience :
                    </span>
                    <br />
                    <span className="text-content">
                      New to the business or new to SL role (P3/T4/GM1/GL1+)
                    </span>
                    <br /><br />
                    <span className="font-weight-bold">
                      Leader Expectations :
                    </span>
                    <br />
                    <span className="text-content">
                      Share your perspective on what makes Mars culture unique and vital to the
                      family, your experience as a leader in the firm, and your perspective on
                      inclusive and diversity at Mars.
                    </span>
                    <br /><br />
                    <span className="font-weight-bold">
                      Total time commitment :
                    </span>
                    <span className="text-content">
                      1.5 hours
                    </span>
                    <br />
                    <span className="text-content">
                      30 minute Prep with HBP Moderator
                    </span>
                    <br />
                    <span className="text-content">
                      60 minutes to participate in a face-to-face event
                    </span>
                  </div>
                </div>
                <div className=" bg-light my-4 p-4 rounded p-3 ">
                  <div className="itinerary-title">
                    draft itinerary
                  </div>
                  <div className="itinerary-content">
                    <span className="start-day">
                      Start of the day : 9am
                    </span>
                    <br /><br />
                    <span className="subsection-title">
                      9:30am Global presentation to site
                    </span>
                    <ul>
                      <li>Chat &amp; Coffee with site management team</li>
                      <li>Reminder of briefing for the day</li>
                    </ul>
                    <br />
                    <span className="subsection-title">
                      10:30am conference @ auditorium
                    </span>
                    <ul>
                      <li>Presentation about MARS business expectations for 2024</li>
                      <li>Actions taken around environment, social equity and safety measures</li>
                    </ul>
                    <br />
                    <span className="subsection-title">
                      12:15pm lunch &amp; learn : beam
                    </span>
                    <ul>
                      <li>Attendees: Management site leaders, Comm &amp; marketing team, and associates</li>
                    </ul>
                    <br />
                    <span className="subsection-title">
                      2:30pm factory tour
                    </span>
                    <br /><br />
                    <span className="subsection-title">
                      4pm : end of the day
                    </span>
                  </div>
                </div>
              </div></div></div></div>
      );
    }
  });