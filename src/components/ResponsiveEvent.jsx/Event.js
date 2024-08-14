import useFormContext from "./useFormContext.js"
import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg'
import globeimage from '../../images/capture_decran_20240318_a_14532.jpg';
import '../ResponsiveEvent.jsx/Event.css';
import { NavLink } from 'react-router-dom';
import MapComponent from '../GetEvent.jsx/MapComponent.js';
import './RequestHeader.css';
import axios from 'axios';


const Event = () => {
  const { title, eventFormData, setEventFormData, canSubmit, handleChange, handlepageChange, setErrors, errors,
    fetchEventTypes, fetchEventFormat, fetchLastVisit, fetchAssociateAtEvent, fetchPhonecode, fetchCountry, fetchState, fetchCity,
    eventTypeList, eventFormatList, lastVisitList, associateAtEvent, phoneCode, country, state, city, nonEditable,
    handleNonEditableUI, fetchUsers, users, suggestion, selectSuggestionValue, selectSuggestionValueCoHost, suggestionCoHost,
    otherEventType,otherEventFormat,  selectedAssociates,toggleAssociatesCheckbox,associateAtEventChecked,
    checkBoxSelected
  } = useFormContext()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchEventTypes();
    fetchEventFormat();
    fetchLastVisit();
    fetchUsers();
    fetchAssociateAtEvent();
    fetchPhonecode();
    fetchCountry();
    if (nonEditable) {
      handleNonEditableUI()
    }
    if(checkBoxSelected)
    {
      associateAtEventChecked.forEach(element => {
        if(element.checked)
          document.getElementById(element.value).checked = true;
      });

    }
  }, [eventFormData]);
  // Empty dependency array to run only once on component mount





  const content = (

  <>
         <div className="col-md-6">
        <div className=" bg-light rounded p-3 ">


          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              REQUESTED BY
            </label>
            <div className="col-sm-8 ">

              <input
                type="text"
                readOnly=""
                className="custom-font-lt form-control-plaintext disabled"
                id="staticEmail"
                name="requestedBy"
                value={eventFormData.requestedBy}
                onChange={handleChange}
                placeholder="name"
                autocomplete="off"
              />
              {
                suggestion?.length > 0 ? (
                  <div className='suggestion-wrapper'>
                    {
                      suggestion.map(item => {
                        return (
                          <div className='custom-font-lt form-control-plaintext suggestions' key={item} onClick={() => selectSuggestionValue(item)}>
                            {item}
                          </div>
                        )
                      })
                    }
                  </div>
                ) : null
              }
              {errors.requestedBy && <div style={{ color: 'red', fontSize: "13px" }}>{errors.requestedBy}</div>}

            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              TITLE
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                readOnly=""
                className="custom-font-lt form-control-plaintext disabled"
                id="staticEmail"
                name="eventTitle"
                value={eventFormData.eventTitle}
                onChange={handleChange}
                placeholder="Title"
              />
              {errors.eventTitle && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventTitle}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              ASSOCIATE'S SEGMENT
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                readOnly=""
                className="custom-font-lt form-control disabled"
                id="staticEmail"
                name="associateSegment"
                value={eventFormData.associateSegment}
                onChange={handleChange}
                placeholder="Mars Global Services"
              />
              {errors.associateSegment && <div style={{ color: 'red', fontSize: "13px" }}>{errors.associateSegment}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label disabled"
            >
              E-MAIL
            </label>
            <div className="col-sm-8 ">
              <u>
                <input
                  type="text"
                  readOnly=""
                  className="custom-font-lt form-control-plaintext"
                  id="staticEmail"
                  name="email"
                  value={eventFormData.email}
                  onChange={handleChange}
                  placeholder="jason.ripper@effem.com"
                />
              </u>
              {errors.email && <div style={{ color: 'red', fontSize: "13px" }}>{errors.email}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              PHONE
            </label>
            <div className="col-sm-8 ">
              <div className="row">
                <div className="col-3">
                  <select className="custom-font-lt form-control">
                    <option aria-placeholder={+91}>+91</option>
                    {phoneCode.map((phoneCode, index) => (
                      <option key={index} value={phoneCode}>
                        {phoneCode}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="custom-font-lt form-control"
                    id="staticEmail"
                    name="phone"
                    value={eventFormData.phone}
                    onChange={handleChange}
                    placeholder="Insert Phone Number"

                  />
                  {errors.phone && <div style={{ color: 'red', fontSize: "13px" }}>{errors.phone}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT CO-HOST NAME <embed />
              Optional
              <embed />
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control"
                id="staticEmail"
                name="eventCoHost"
                value={eventFormData.eventCoHost}
                paceholder="Insert an name"
                onChange={handleChange}
                autocomplete="off"

              />
              {
                suggestionCoHost?.length > 0 ? (
                  <div className='suggestion-wrapper'>
                    {
                      suggestionCoHost.map(item => {
                        return (
                          <div className='custom-font-lt form-control-plaintext suggestions' key={item} onClick={() => selectSuggestionValueCoHost(item)}>
                            {item}
                          </div>
                        )
                      })
                    }
                  </div>
                ) : null
              }
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT CO-HOST EMAIL <embed />
              Optional
              <embed />
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control disabled"
                id="staticEmail"
                name="coHostEmail"
                value={eventFormData.coHostEmail}
                paceholder="Insert an email"
                onChange={handleChange}
              />
            </div>
          </div>

        </div>
        <div className=" bg-light rounded p-3 mt-3">

          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT DATE
            </label>
            <div className="col-sm-8 ">

              <input
                type="date"
                className="form-control-custom rounded form-control"
                id="staticEmail"
                name="eventDate"
                placeholder="Pick event dates"
                value={eventFormData.eventDate}
                onChange={handleChange}
              />
              {errors.eventDate && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventDate}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              IS THE EVENT DATE FLEXIBLE?
            </label>
            <div className="col-sm-8 ">
              <div className="custom-control custom-switch">
                <input
                  type="hidden"
                  className="custom-control-input"
                  id="switch1"
                  name="isDateFlexible"
                  checked={eventFormData.isDateFlexible}
                  onChange={handleChange}

                />
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="slider round" />
                </label>
                {errors.isDateFlexible && <div style={{ color: 'red', fontSize: "13px" }}>{errors.isDateFlexible}</div>}
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-light rounded p-3 mt-3">

          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              AFFILIATED SITE CODE
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control"
                id="staticSiteCode"
                name="siteCode"
                value={eventFormData.siteCode}
                onChange={handleChange}
                placeholder="Enter site Code"
              />
              {errors.siteCode && <div style={{ color: 'red', fontSize: "13px" }}>{errors.siteCode}</div>}
            </div>
          </div>
          <div className="form-group row mb-2" hidden>
            <label
              htmlFor="staticEmail"
              className="border-custom-strip custom-font col-sm-4 col-form-label"
            >
              <div className=""> PLEASE SPECIFY</div>
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control"
                id="staticEmail"
                placeholder="Type something"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              COUNTRY
            </label>
            <div className="col-sm-8 ">
              <select
                className="custom-font-lt form-control form-select form-select-sm"
                aria-label="Small select example"
                name="countryName"
                value={eventFormData.countryName}
                onChange={handleChange}
              >

                <option value="" selected="selected" disabled="" hidden="">
                  Select a country
                </option>
                {country.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {errors.countryName && <div style={{ color: 'red', fontSize: "13px" }}>{errors.countryName}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              CITY
            </label>
            <div className="col-sm-8 ">
              <div className="row">
                <div className="col-sm-6">
                  <select
                    className="custom-font-lt form-control form-select form-select-sm"
                    aria-label="Small select example"
                    name="stateName"
                    value={eventFormData.stateName}
                    onChange={handleChange}
                  >
                    <option value="" selected="" disabled="" hidden="">
                      Select a state
                    </option>
                    {state.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.stateName && <div style={{ color: 'red', fontSize: "13px" }}>{errors.stateName}</div>}
                </div>
                <div className="col-sm-6">
                  <select
                    className="custom-font-lt form-control form-select form-select-sm"
                    aria-label="Small select example"
                    name="cityName"
                    value={eventFormData.cityName}
                    onChange={handleChange}
                  >
                    <option value="" selected="" disabled="" hidden="">
                      Select a city
                    </option>
                    {city.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.cityName && <div style={{ color: 'red', fontSize: "13px" }}>{errors.cityName}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT VENUE NAME
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control"
                id="staticEmail"

                name="eventVenueName"
                value={eventFormData.eventVenueName}
                onChange={handleChange}
              />
              {errors.eventVenueName && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventVenueName}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT VENUE ADDRESS
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control disabled"
                id="staticEmail"
                name="eventAddress"
                value={eventFormData.eventAddress}
                onChange={handleChange}
              />
              {errors.eventAddress && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventAddress}</div>}
            </div>
          </div>

        </div>
        <div className=" bg-light rounded p-3 mt-3">

          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT TYPE
            </label>
            <div className="col-sm-8 " >
              <select
                className="custom-font-lt form-control form-select form-select-sm"
                aria-label="Small select example"
                name="eventType"
                value={eventFormData.eventType}
                onChange={handleChange}
              >
                <option value="">Select a Type</option>
                {eventTypeList.map((eventType, index) => (
                  <option key={index} value={eventType}>
                    {eventType}
                  </option>
                ))}
              </select>
              {errors.eventType && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventType}</div>}
            </div>
          </div>
          <div className="form-group row mb-2" id="otherEventTypeDiv" hidden>
            <label
              htmlFor="staticEmail"
              className="border-custom-strip custom-font col-sm-4 col-form-label"
            >
              <div className="" />
              PLEASE SPECIFY
            </label>
            <div className="col-sm-8  ">
              <input
                readOnly=""
                type="text"
                className="custom-font-lt form-control disabled"
                id="staticEmail"
                name="otherEventType"
                value={otherEventType}
                onChange={handleChange}
                
                
              />
              {errors.otherEventType && <div style={{ color: 'red', fontSize: "13px" }}>{errors.otherEventType}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              EVENT FORMAT
            </label>
            <div className="col-sm-8 ">
              <select
                className="custom-font-lt form-control form-select form-select-sm"
                aria-label="Small select example"
                name="eventFormat"
                value={eventFormData.eventFormat}
                onChange={handleChange}
              >
                <option value="">Select a Format</option>
                {eventFormatList.map((eventFormat, index) => (
                  <option key={index} value={eventFormat}>
                    {eventFormat}
                  </option>
                ))}

              </select>
              {errors.eventFormat && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventFormat}</div>}
            </div>
          </div>
          <div className="form-group row mb-2" id="otherEventFormatDiv" hidden>
            <label
              htmlFor="staticEmail"
              className="border-custom-strip custom-font col-sm-4 col-form-label"
            >
              <div className="" />
              PLEASE SPECIFY
            </label>
            <div className="col-sm-8  ">
              <input
                readOnly=""
                type="text"
                className="custom-font-lt form-control disabled"
                id="staticEmail"
                name="otherEventFormat"
                value={otherEventFormat}
                onChange={handleChange}
                

              />
              {errors.otherEventFormat && <div style={{ color: 'red', fontSize: "13px" }}>{errors.otherEventFormat}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              LAST FAMILY MEMBER VISIT
            </label>
            <div className="col-sm-8 ">
              <select
                className="custom-font-lt form-control form-select form-select-sm"
                aria-label="Small select example"
                name="lastVisit"
                value={eventFormData.lastVisit}
                onChange={handleChange}
              >

                <option value="">Select a Range</option>
                {lastVisitList.map((lastVisit, index) => (
                  <option key={index} value={lastVisit}>
                    {lastVisit}
                  </option>
                ))}
              </select>
              {errors.lastVisit && <div style={{ color: 'red', fontSize: "13px" }}>{errors.lastVisit}</div>}
            </div>
          </div>

        </div>
        <div className=" bg-light rounded p-3 mt-3 mb-3">

          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              ASSOCIATE(S) EXPECTED AT EVENT
            </label>
            
            <div className="col-sm-8">
              <div className="form-check form-check-custom rounded">
                <div className="p-3">
                  {associateAtEvent.map((associateAtEvent, index) => (
                    <div>
                      <label key={index} className="form-check-label-custom form-check-label">
                        <input type="checkbox" value={associateAtEvent} id={associateAtEvent} className="form-check-input" name="associateAtEvent" onChange={toggleAssociatesCheckbox} />
                        {associateAtEvent}
                        {errors.associateAtEvent && <div style={{ color: 'red', fontSize: "13px" }}>{errors.associateAtEvent}</div>}
                      </label> <br /></div>

                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              ESTIMATED TOTAL NUMBER OF ATTENDEES
            </label>
            <div className="col-sm-8 ">
              <input
                readOnly=""
                type="text"
                className="custom-font-lt form-control disabled"
                id="staticEmail"
                name="totalAttendees"
                value={eventFormData.totalAttendees}
                onChange={handleChange}

              />
              {errors.totalAttendees && <div style={{ color: 'red', fontSize: "13px" }}>{errors.totalAttendees}</div>}
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              htmlFor="staticEmail"
              className="custom-font col-sm-4 col-form-label"
            >
              ESTIMATED MARS PETCARE ATTENDEES
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="custom-font-lt form-control "
                id="staticEmail"
                name="petcareAttendess"
                value={eventFormData.petcareAttendess}
                onChange={handleChange}
                placeholder="Type an estimation"

              />
            </div>

          </div>
        </div>
    
</div>
                    <div className="col-md-4 rounded " >
                                <MapComponent style={{ height: "100vh", width: "100%" }} />
                            </div>
     

      </>
       


    
    



  );

  return content
}
export default Event