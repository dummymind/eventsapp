import React, { useState, useEffect } from 'react';
import './RequestHeader.css';
import calendaricon from '../../images/vector_x2.svg'
import axios from 'axios';
import './RequestHeader.css';
import useFormContext from "./useFormContext"
//const [eventFormData, seteventFormData] = useState({});


export default function RequestHeader() {
    const { title, eventFormData, setEventFormData, handleChange, canSubmit, 
        handleSubmit, setErrors, errors,
        handleUploadImageClick,hiddenUploadImageFileInput } = useFormContext()
    return (<requestHeader className="requestHeader">
        <div className="container-fluid">
            <div id='hdrDiv' className="bd-placeholder-img custom-jumbotron jumbotron p-6 mt-3 p-md-3 text-white rounded mb-2 d-flex flex-column justify-content-end m-4">
                <div className="row bottom-row ml-2 mr-2">
                    <div className="col-12 col-md-8 p-2 px-0 bg-light rounded mb-5 mb-md-0 ">
                        <div className="content">
                            <h6>
                                <input
                                    type="text"
                                    readOnly=""
                                    className="custom-title form-control-plaintext disabled"
                                    id="staticEmail"
                                    name="eventTitle"
                                    value={eventFormData.eventTitle}
                                    onChange={handleChange}
                                    placeholder="Click here to modify the event"
                                    style={{ backgroundColor: 'white !important', fontWeight: 'bold !important', fontSize: '60% !important' }}
                                />
                            </h6>
                            <p>
                                <strong>
                                    <img src={calendaricon} height='12px' />
                                </strong>
                                <span className='m-1'> <strong>Event date:  </strong> {eventFormData.eventDate}</span>

                            </p>
                            <span>Status</span>
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
                                    id="coverImageUpload"
                                    className="btn-custom btn btn-outline-primary " onClick={handleUploadImageClick}
                                >
                                    <strong>UPLOAD COVER IMAGE</strong>
                                </button>
                                <input type="file" name="imageFile" onChange={handleChange} ref={hiddenUploadImageFileInput}
                                    style={{ display: 'none' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </requestHeader>
    );

}