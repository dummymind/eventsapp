import React, { useState, useEffect } from 'react';
import calendaricon from '../../images/vector_x2.svg';
import { NavLink, useParams } from 'react-router-dom';
import MapComponent from './MapComponent.js';
import axios from 'axios';
import '../GetEvent.jsx/Event.css';

function Event() {
  const { eventId } = useParams();
  const [eventFormData, setEventFormData] = useState({});
  const [requestedBy, setTextValue] = useState('');
  const [eventTitle, settitleValue] = useState('');
  const [associateSegment, setassociateSegment] = useState('');
  const [phone, setphoneNumberValue] = useState('');
  const [email, setemail] = useState('');
  const [errors, setErrors] = useState({});
  const [eventCoHost, setcohostname] = useState('');
  const [coHostEmail, setcohostemail] = useState('');
  const [eventDate, seteventdate] = useState('');
  const [siteCode, setaffiliatedSiteCode] = useState('');
  const [countryName, setcountry] = useState([]);
  const [stateName, setstate] = useState([]);
  const [cityName, setcity] = useState([]);
  const [eventVenueName, seteventVenueName] = useState('');
  const [eventAddress, seteventVenueAddress] = useState('');
  const [eventType, setEventTypes] = useState([]);
  const [eventFormat, setEventFormat] = useState([]);
  const [lastVisit, setlastVisit] = useState([]);
  const [totalAttendees, settotalAttendes] = useState('');
  const [associateAtEvent, setassociateAtEvent] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [phoneCode, setphoneCode] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (eventId) {
      console.log("Inside EventId");
      fetchData(eventId);
    }
    fetchEventTypes();
    fetchEventFormat();
    fetchLastVisit();
    fetchAssociateAtEvent();
    fetchPhonecode();
    fetchCountry();
  }, [eventId]); // Depend on eventId to trigger useEffect when it changes

  const fetchData = async (eventId) => {
    console.log("Inside fetchData method");
    try {
      console.log("Inside try");
      const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/api/EventDetails/${eventId}`);
      console.log("Response is", response);
      const eventFormData = response.data;
      console.log("the value of event data is", eventFormData);
      setEventFormData(eventFormData);
      console.log("Event form data after fetch:", eventFormData);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const fetchEventTypes = async () => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventType');
      console.log("Response of EventType is", response);
      setEventTypes(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchEventFormat = async () => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventFormat');
      console.log("Response of EventFormat is", response);
      setEventFormat(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchLastVisit = async () => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/api/EventDetails/IntervalBetweenLastVisit');
      console.log("Response of Interval Between Last Visit is", response);
      setlastVisit(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchAssociateAtEvent = async () => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/api/EventDetails/AssociateAtEvent');
      console.log("Response of Associate at Event is", response);
      setassociateAtEvent(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchPhonecode = async () => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/CountryCode');
      console.log("Response of Phone code is", response);
      setphoneCode(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/Country');
      console.log("Response of Country is", response);
      setcountry(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchState = async (countryName) => {
    try {
      const response = await axios.get('https://touchmarsapi2024.azurewebsites.net/State/' + countryName);
      console.log("Response of state is", response);
      setstate(response.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  const fetchCity = async (stateName) => {
    try {
      const responseCity = await axios.get('https://touchmarsapi2024.azurewebsites.net/City/' + stateName);
      console.log("Response of city is", responseCity);
      setcity(responseCity.data);
    } catch (error) {
      console.error('Error fetching event types:', error);
    }
  };

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
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
                      <img src={calendaricon} alt="calendar" />
                      Event date: TBD
                    </strong>
                  </p>
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
                <div className="p-3 position-relative" style={{ height: "100%" }}>
                  <div className="bg-white rounded p-3 position-absolute bottom-0 end-0">
                    <button type="button" className="btn-custom btn btn-outline-primary ">
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
                  <NavLink to="/event" className="nav-custom nav-link">EVENT DETAILS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/scheduleunderReview" className="nav-custom nav-link">SCHEDULE & ITINERARY</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/guestsunderReview" className="nav-custom nav-link">GUESTS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/historyunderReview" className="nav-custom nav-link">HISTORY & COMMENTS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/summaryunderReview" className="nav-custom nav-link">POST EVENT SUMMARY</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <form>
                <div className="bg-light rounded p-3 ">
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">REQUESTED BY</label>
                    <div className="col-sm-8">
                      <input type="text" readOnly className="custom-font-lt form-control-plaintext disabled" id="staticEmail" name="requestedBy" value={eventFormData.requestedBy || ''} placeholder="name" />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">TITLE</label>
                    <div className="col-sm-8">
                      <input type="text" readOnly className="custom-font-lt form-control-plaintext disabled" id="staticEmail" name="eventTitle" value={eventFormData.eventTitle || ''} placeholder="Title" />
                      {errors.eventTitle && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventTitle}</div>}
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">ASSOCIATE'S SEGMENT</label>
                    <div className="col-sm-8">
                      <input type="text" readOnly className="custom-font-lt form-control disabled" id="staticEmail" name="associateSegment" value={eventFormData.associateSegment || ''} placeholder="Mars Global Services" />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label disabled">E-MAIL</label>
                    <div className="col-sm-8">
                      <u>
                        <input type="text" readOnly className="custom-font-lt form-control-plaintext" id="staticEmail" name="email" value={eventFormData.email || ''} placeholder="jason.ripper@effem.com" />
                      </u>
                      {errors.email && <div style={{ color: 'red', fontSize: "13px" }}>{errors.email}</div>}
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">PHONE</label>
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-3">
                          <select className="custom-font-lt form-control">
                            <option aria-placeholder={+91}>+91</option>
                            {phoneCode.map((phoneCode, index) => (
                              <option key={index} value={phoneCode}>{phoneCode}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-9">
                          <input type="text" className="custom-font-lt form-control" id="staticEmail" name="phone" value={eventFormData.phone || ''} placeholder="Insert Phone Number" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT CO-HOST NAME <embed />Optional<embed /></label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control" id="staticEmail" name="eventCoHost" value={eventFormData.eventCoHost || ''} placeholder="Insert a name" />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT CO-HOST EMAIL <embed />Optional<embed /></label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control disabled" id="staticEmail" name="coHostEmail" value={coHostEmail || ''} placeholder="Insert an email" />
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded p-3 mt-3">
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT DATE</label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control" id="staticEmail" name="eventDate" placeholder="Pick event dates" value={eventFormData.eventDate || ''} />
                      {errors.eventDate && <div style={{ color: 'red', fontSize: "13px" }}>{errors.eventDate}</div>}
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">IS THE EVENT DATE FLEXIBLE</label>
                    <div className="col-sm-8">
                      <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switch1" name="isDateFlexible" checked={eventFormData.isDateFlexible || false} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded p-3 mt-3">
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">AFFILIATED SITE CODE</label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control" id="staticSiteCode" name="siteCode" value={eventFormData.siteCode || ''} placeholder="Enter site Code" />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label"><div className="vr-custom vr" /> PLEASE SPECIFY</label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control" id="staticEmail" placeholder="Type something" />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">COUNTRY</label>
                    <div className="col-sm-8">
                      <select className="custom-font-lt form-control form-select form-select-sm" aria-label="Small select example" name="countryName" value={eventFormData.countryName || ''}>
                        <option value="">Select a country</option>
                        {countryName.map((countryName, index) => (
                          <option key={index} value={countryName}>{countryName}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">STATE</label>
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-6">
                          <select className="custom-font-lt form-control form-select form-select-sm" aria-label="Small select example" name="stateName" value={eventFormData.stateName || ''}>
                            <option value="" selected disabled hidden>Select a state</option>
                            {stateName.map((stateName, index) => (
                              <option key={index} value={stateName}>{stateName}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-6">
                          <select className="custom-font-lt form-control form-select form-select-sm" aria-label="Small select example" name="cityName" value={eventFormData.cityName || ''}>
                            <option value="" selected disabled hidden>Select a city</option>
                            {cityName.map((cityName, index) => (
                              <option key={index} value={cityName}>{cityName}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT VENUE NAME</label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control" id="staticEmail" name="eventVenueName" value={eventFormData.eventVenueName || ''} />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT VENUE ADDRESS</label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control disabled" id="staticEmail" name="eventAddress" value={eventFormData.eventAddress || ''} />
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded p-3 mt-3">
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT TYPE</label>
                    <div className="col-sm-8">
                      <select className="custom-font-lt form-control form-select form-select-sm" aria-label="Small select example" name="eventType" value={eventFormData.eventType || ''}>
                        <option value="">Select a Type</option>
                        {eventType.map((eventType, index) => (
                          <option key={index} value={eventType}>{eventType}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">EVENT FORMAT</label>
                    <div className="col-sm-8">
                      <select className="custom-font-lt form-control form-select form-select-sm" aria-label="Small select example" name="eventFormat" value={eventFormData.eventFormat || ''}>
                        <option value="">Select a Format</option>
                        {eventFormat.map((eventFormat, index) => (
                          <option key={index} value={eventFormat}>{eventFormat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label"><div className="vr-custom vr" /> PLEASE SPECIFY</label>
                    <div className="col-sm-8">
                      <input readOnly type="text" className="custom-font-lt form-control disabled" id="staticEmail" name="nameOfMem" value={eventFormData.nameOfMem || ''} />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">LAST FAMILY MEMBER VISIT</label>
                    <div className="col-sm-8">
                      <select className="custom-font-lt form-control form-select form-select-sm" aria-label="Small select example" name="lastVisit" value={eventFormData.lastVisit || ''}>
                        <option value="">Select a Range</option>
                        {lastVisit.map((lastVisit, index) => (
                          <option key={index} value={lastVisit}>{lastVisit}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded p-3 mt-3 mb-3">
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">ASSOCIATE(S) EXPECTED AT EVENT</label>
                    <div className="col-sm-8">
                      <div className="form-check form-check-custom rounded">
                        <div className="p-3">
                          {associateAtEvent.map((associateAtEvent, index) => (
                            <div key={index}>
                              <label className="form-check-label-custom form-check-label">
                                <input type="checkbox" value={eventFormData.associates} className="form-check-input" name="associateAtEvent" />
                                {associateAtEvent}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">ESTIMATED TOTAL NUMBER OF ATTENDEES</label>
                    <div className="col-sm-8">
                      <input type="text" className="custom-font-lt form-control disabled" id="staticEmail" name="totalAttendees" value={eventFormData.totalAttendees || ''} />
                    </div>
                  </div>
                  <div className="form-group row mb-2">
                    <label htmlFor="staticEmail" className="custom-font col-sm-4 col-form-label">ESTIMATED MARS PETCARE ATTENDEES</label>
                    <div className="col-sm-8">
                      <input readOnly type="text" className="custom-font-lt form-control disabled" id="staticEmail" name="estimatedMars" placeholder="Type an estimation" />
                    </div>
                  </div>
                  <button type="submit" className="btn-custom btn btn-outline-primary">
                    <strong>Send Comment</strong>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 rounded">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
