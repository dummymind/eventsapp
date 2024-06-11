import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'


function Guests()
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
                      <a
                        className=" nav-custom nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        EVENT DETAILS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        SCHEDULE &amp; ITINERARY
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        GUESTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        HISTORY &amp; COMMENTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        POST EVENT SUMMARY
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div className="col-md-9">
                <div className=" bg-light rounded p-3 mt-3">
  <div className="form-group row mb-2 align-items-center">
    <label
      htmlFor="staticEmail"
      className="custom-font col-sm-3 col-form-label"
    >
      IS THERE A MAX NUMBER OF FAMILY MEMBERS WHO CAN ATTEND?
    </label>
    <div className="col-sm-5  ">
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="switch1"
          name="example"
        />
        <label className="custom-control-label" htmlFor="switch1" />
      </div>
    </div>
  </div>
  <div className="form-group row mb-2">
    <label
      htmlFor="staticEmail"
      className="custom-font col-sm-3 col-form-label"
    >
      HOW MANY CAN YOU ACCOMODATE?
    </label>
    <div className="col-sm-5 ">
      <input
        type="text"
        className="custom-font-lt form-control"
        id="staticEmail"
        placeholder="Type a number"
      />
    </div>
  </div>
  <div className="form-group row mb-2 align-items-center">
    <label
      htmlFor="staticEmail"
      className="custom-font col-sm-3 col-form-label"
    >
      SPECIFIC FAMILY MEMBERS?
    </label>
    <div className="col-sm-5  ">
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="switch1"
          name="example"
        />
        <label className="custom-control-label" htmlFor="switch1" />
      </div>
    </div>
  </div>
  <div className="form-group row mb-2">
    <label
      htmlFor="staticEmail"
      className="custom-font col-sm-3 col-form-label"
    >
      SPECIFIC FAMILY MEMBERS NAMES
    </label>
    <div className="col-sm-5 ">
      <input
        type="text"
        className="custom-font-lt form-control"
        id="staticEmail"
        placeholder="Type a number"
      />
    </div>
  </div>
</div>


                </div>


              </div>
            </div>
          </div>
        </div >
    
      );
    




    }

export default Guests;