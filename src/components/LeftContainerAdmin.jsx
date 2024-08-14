import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rectangelimage from '../images/capture_decran_20240313_a_16272.jpg';
import rectangelimage2 from '../images/rectangle_1871.jpg';
import { Link } from 'react-router-dom';
import {GET_ALL_URL} from './ApiDetails.js'

function LeftContainerAdmin({ setOpenEventDates }) {
  const [statuses, setStatuses] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [requesters, setRequesters] = useState([]); // State for requesters
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(GET_ALL_URL);
        setEvents(response.data);

        const uniqueStatuses = Array.from(new Set(response.data.map(event => event.eventStatus)));
        setStatuses(uniqueStatuses);

        const uniqueRequesters = Array.from(new Set(response.data.map(event => event.requester))); // Fetch unique requesters
        setRequesters(uniqueRequesters);

        const openEventDates = response.data
          .filter(event => event.eventStatus === "Open Event")
          .map(event => new Date(event.eventDate));
        setOpenEventDates(openEventDates);

        // Initialize selectedStatuses with all available statuses
        setSelectedStatuses(uniqueStatuses);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvents();
  }, [setOpenEventDates]);

  const isSameDate = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const handleStatusClick = (status) => {
    setSelectedStatuses(prevStatuses =>
      prevStatuses.includes(status)
        ? prevStatuses.filter(s => s !== status)
        : [...prevStatuses, status]
    );
  };

  const handleRemoveStatus = (statusToRemove) => {
    setSelectedStatuses(prevStatuses => prevStatuses.filter(status => status !== statusToRemove));
    setEvents(prevEvents => prevEvents.filter(event => event.eventStatus !== statusToRemove));
  };

  const handleRemoveEvent = (eventId) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  const filteredEvents = events.filter(event =>
    (selectedStatuses.length === 0 || selectedStatuses.includes(event.eventStatus)) &&
    (searchQuery === "" ||
      event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.eventVenueName.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedDate === "" || isSameDate(event.eventDate, selectedDate))
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "Newest") {
      return new Date(b.eventDate) - new Date(a.eventDate);
    } else if (sortBy === "Oldest") {
      return new Date(a.eventDate) - new Date(b.eventDate);
    } else if (sortBy === "A to Z") {
      return a.eventTitle.localeCompare(b.eventTitle);
    } else if (sortBy === "Z to A") {
      return b.eventTitle.localeCompare(a.eventTitle);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedEvents.length / itemsPerPage);
  const currentEvents = sortedEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="leftcontainer d-flex flex-column progress-bar bg-white rounded-end" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
      <div className="leftsearchbox">
        <div className="container-fluid d-flex align-items-center statuscontainer">
          <h6 className="calendar-headerh6 mr-2">Status</h6>
          <div className="status-buttons-container">
            {statuses.map(status => (
              <div key={status} className={`status-button ${selectedStatuses.includes(status) ? 'selected' : ''}`}>
                <span onClick={() => handleStatusClick(status)}>{status}</span>
                <span className="remove-icon" onClick={() => handleRemoveStatus(status)}>✖️</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid align-items-center">
          <div className="row">
            <div className="col-md-4">
              <div className="input-group mb-0">
                <label htmlFor="searchInput" className="input-group-text input-group-text-custom">Search</label>
                <input
                  type="text"
                  className={`form-control-custom rounded form-control`}
                  id="searchInput"
                  placeholder="Type a keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-0">
                <label htmlFor="dateInput" className="input-group-text input-group-text-custom">Date Interval</label>
                <input
                  type="date"
                  className="form-control-custom rounded form-control"
                  id="dateInput"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-0">
                <label className="input-group-text input-group-text-custom" htmlFor="sortBy">Sort By</label>
                <select
                  className="form-control-custom rounded form-select"
                  aria-label="Sort By"
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="A to Z">A to Z</option>
                  <option value="Z to A">Z to A</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3 align-items-center">
            <div className="col-md-4">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="onlyNotTakenVisit" />
                <label className="form-check-label" htmlFor="onlyNotTakenVisit">
                  Only not taken visit
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-0">
                <label className="input-group-text input-group-text-custom" htmlFor="requester">Requester</label>
                <select
                  className="form-control-custom rounded form-select"
                  aria-label="Requester"
                  id="requester"
                >
                  <option value="All">All</option>
                  {requesters.map((requester, index) => (
                    <option key={index} value={requester}>{requester}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-0">
                <label className="input-group-text input-group-text-custom" htmlFor="familyMember">Family Member</label>
                <select
                  className="form-control-custom rounded form-select"
                  aria-label="Family Member"
                  id="familyMember"
                >
                  <option value="All">All</option>
                  {/* Add other family member options here */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listitems">
        <div className="row card-group text-wrap text-start m-2">
          {currentEvents.map(event => (
            <div className='col-md-6 p-2' key={event.id}>
              <div className="card rounded">
                <img
                  className="card-img-top-custom card-img-top rounded"
                  src={event.eventImage || rectangelimage}
                  alt={event.eventTitle}
                  onError={(e) => { e.target.onerror = null; e.target.src = rectangelimage2; }}
                />
                <div className="card-body-custom card-body">
                  <h6 className='card-header-custom'>{event.eventTitle}</h6>
                  <p className="card-text-custom card-text">
                    with <b>Julian MARS, Justin MARS, Pamela MARS, Marijke MARS</b>
                    <p>Still accepting Family members<div><b>{new Date(event.eventDate).toLocaleDateString()} • {event.cityName}, {event.stateName}, {event.countryName}</b></div></p>
                    <span>Created by {event.requester} on {new Date(event.createdDate).toLocaleDateString()}</span>
                  </p>
                </div>
                <div className="card-footer-custom card-footer">
                  <Link to={`/event/${event.eventId}`} className="card-footer-button btn rounded-pill">OPEN EVENT</Link>
                  <span className='float-right-custom'>
                    <button className='card-footer-button-right btn' onClick={() => handleRemoveEvent(event.id)}>X</button>
                    <button className='card-footer-button-right btn'>✔️</button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="paging align-items-center">
        <span className="centered-text">
          {((currentPage - 1) * itemsPerPage + 1)}-{Math.min(currentPage * itemsPerPage, sortedEvents.length)} of {sortedEvents.length} elements
        </span>
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageClick(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default LeftContainerAdmin;
