import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
import Cover from './Cover';
import EventSideBar from './EventSideBar';
import './Guests.css'


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
    <label className="switch">
  <input type="checkbox" defaultChecked="" />
  <span className="slider round" />
</label>
    </div>
  </div>
  <div className="form-group row mb-2">
    <label
      htmlFor="staticEmail"
      className="custom-font col-sm-3 col-form-label"
    >
      HOW MANY CAN YOU ACCOMODATE?
      <span className="" style={{ fontSize: 'small', color: 'darkblue',marginLeft:'5px' }}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 3.75c-4.55635 0-8.25 3.69365-8.25 8.25 0 4.5563 3.69365 8.25 8.25 8.25 4.5563 0 8.25-3.6937 8.25-8.25 0-4.55635-3.6937-8.25-8.25-8.25zm-9.75 8.25c0-5.38478 4.36522-9.75 9.75-9.75 5.3848 0 9.75 4.36522 9.75 9.75 0 5.3848-4.3652 9.75-9.75 9.75-5.38478 0-9.75-4.3652-9.75-9.75zm9.75-.75c.4142 0 .75.3358.75.75v3.5c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-3.5c0-.4142.3358-.75.75-.75zm0-3.25c-.5523 0-1 .44772-1 1s.4477 1 1 1h.01c.5523 0 1-.44772 1-1s-.4477-1-1-1z" fill="#000000" fill-rule="evenodd" /></svg>
                    </span>
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
      
    <label className="switch">
  <input type="checkbox" defaultChecked="" />
  <span className="slider round" />
</label>
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