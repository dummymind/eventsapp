import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
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