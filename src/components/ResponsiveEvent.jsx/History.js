import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg';
import { NavLink } from 'react-router-dom';
import useFormContext from "./useFormContext.js"

const History = () => {

  const { eventFormData, handleChange, HistoryComment,setHistoryComment,handleCommentText,addComments } = useFormContext()

  const content = (

    <>

      <div className="col-md-10 mb-5">
        <div className=" bg-light rounded p-3 mt-3 ">
          <div id="History">
            
          </div>
          <div className="form-group row mb-2 align-items-center">
            <div className="col-sm-9 pr-0">
              <input
                type="text"
                readOnly=""
                className="custom-font-lt form-control"
                id="staticEmail"
                placeholder="Leave a comment"
                value={HistoryComment}
                onChange={handleCommentText}
              />
            </div>
            <div className="col-sm-3 pl-0">
              <button type="button" className="buttonrequest btn btn-success ml-2"
              onClick={addComments}
              >
                SEND YOUR MESSAGE{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return content
}


export default History;