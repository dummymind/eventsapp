import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
import capture_decran from '../../images/capture_decran_20240315_a_11124.png'
import './Schedule.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { NavLink } from 'react-router-dom';
import useFormContext from "./useFormContext.js"



  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'align',
    'link', 'image'
  ];
  const Schedule = () => {

    const { title,   eventFormData, setEventFormData, canSubmit, 
      handleScheduleAgendaChange,handleScheduleItenaryChange ,setErrors,errors,
      handleBriefUpload,handleUploadBriefFileClick,hiddenUploadBriefFileInput,
      handleDownloadBrief,hiddenAttachmentFileInput,handleUploadAttachmentClick,
      handleAttachmentsUpload,handleBriefDelete,handleAttachmentDelete,nonEditable,
      handleNonEditable
    } = useFormContext()
    useEffect(() => {
    
      if(nonEditable)
      {
          handleNonEditable()
      }
  
    }, []);

    const content = (
      <>

        <div className="col-md-10">

          <div className=" bg-light rounded my-4 p-4 mt-3 visit-summary">
            <div className="visit-title">Visit Summary</div>
            <div className="guidance">
              <strong>Guidances :</strong> Please share here what you expect to be on the agenda for this visit
            </div>
            <ReactQuill
              theme="snow"
              value={eventFormData.schedule.visitSummary}
              name="visitSummary"
              onChange={handleScheduleAgendaChange}
              modules={modules}
              formats={formats}
              placeholder="Please share here what you expect to be on the agenda for this visit"
            />
          </div>

          <div className=" bg-light my-4 p-4 rounded p-3 ">
            <div className="itinerary-title">draft itinerary</div>
            <div className="guidance">
              <strong>Guidances :</strong> Please share here what you expect to be the itenary for this visit
            </div>
            <ReactQuill
              theme="snow"
              name="draftItinerary"
              value={eventFormData.schedule.draftItinerary}
              onChange={handleScheduleItenaryChange}
              modules={modules}
              formats={formats}
              placeholder="Please share here what you expect to be the itenary for this visit"
            />
          </div>

          <div className=" bg-light rounded p-4 mt-3">
            <label htmlFor="staticEmail" className="custom-font col-form-label">
              BRIEF
            </label>
            <div className="m-3">
              <button
                type="button"
                className="btn-custom-schedule-warning btn btn-outline-warning "
                onClick={handleDownloadBrief}
              >
                DOWNLOAD THIS BRIEF FILE
              </button>
              <button
                type="button"
                id="uploadBrief"
                className="btn-custom-schedule-warning btn btn-outline-warning "
                onClick={handleUploadBriefFileClick}
              >
                UPLOAD THIS BRIEF FILE
              </button>
              <input type="file" name="briefFile" onChange={handleBriefUpload} ref={hiddenUploadBriefFileInput}
               style={{ display: 'none' }} />
              <button
                type="button"
                id="deleteBrief"
                className="btn-custom-schedule-warning btn btn-outline-warning"
                onClick={handleBriefDelete}
              >
                DELETE THIS BREIF FILE
              </button>
            </div>

          </div>
          <div className="bg-light rounded p-4 mt-3 mb-5">
            <label htmlFor="staticEmail" className="custom-font col-form-label">
              ATTACHMENTS
            </label>
            <div className="m-2">
              <button
                type="button"
                id="uploadAttachment"
                className="btn-custom-schedule btn btn-outline-danger"
                onClick={handleUploadAttachmentClick}
              >
                UPLOAD NEW ATTACHMENT
              </button>
              <input type="file" name="attachments" onChange={handleAttachmentsUpload} ref={hiddenAttachmentFileInput}
               style={{ display: 'none' }} />
            </div>
            <ul className="list-group" id="SchAttList">
            
            </ul>
          </div>
        </div>
      </>
    )
    return content
  }

export default Schedule;