import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
import { NavLink } from 'react-router-dom';
import useFormContext from "./useFormContext.js"

const Guests = () => {

  const { title, eventFormData, setEventFormData, canSubmit, handleChange, nonEditable,handleNonEditable } = useFormContext()

  useEffect(() => {
    
    if(nonEditable)
    {
        handleNonEditable()
    }

  }, []);
  const content = (
    <>

      <div className="col-md-10">
        <div className=" bg-light rounded p-3 mt-3">
          <div className="form-group row mb-2 align-items-center">
          <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              IS THERE A MAX NUMBER OF FAMILY MEMBERS WHO CAN ATTEND?
            </label>
            <div className="col-sm-8 ">
              <div className="custom-control custom-switch">
                <input
                  type="hidden"
                  className="custom-control-input"
                  id="switch1"
                />
                <label className="switch">
                  <input type="checkbox" defaultChecked="" 
                  name="maxFamilyNum"
                  checked={eventFormData.maxFamilyNum}
                  onChange={handleChange}/>
                  <span className="slider round" />
                </label>
                {/* {errors.isDateFlexible && <div style={{ color: 'red', fontSize: "13px" }}>{errors.isDateFlexible}</div>} */}
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
                id="familyNum"
                name="familyNum"
                value={eventFormData.familyNum}
                onChange={handleChange}
                placeholder="Type a number"
                hidden 
              />
            </div>
          </div>
          <div className="form-group row mb-2 align-items-center">
          <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
               SPECIFIC FAMILY MEMBERS?
            </label>
            <div className="col-sm-8 ">
              <div className="custom-control custom-switch">
                <input
                  type="hidden"
                  className="custom-control-input"
                  id="switch1"
                  

                />
                <label className="switch">
                  <input type="checkbox" defaultChecked="" 
                  name="specificFamilyMem"
                  checked={eventFormData.specificFamilyMem}
                  onChange={handleChange}
                 />
                  <span className="slider round" />
                </label>
                {/* {errors.isDateFlexible && <div style={{ color: 'red', fontSize: "13px" }}>{errors.isDateFlexible}</div>} */}
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
                id="nameOfMem"
                name="nameOfMem"
                value={eventFormData.nameOfMem}
                placeholder="Type the family numbers"
                onChange={handleChange}
                hidden
              />
            </div>
          </div>
        </div>


      </div>


    </>
  )
  return content
}


export default Guests;