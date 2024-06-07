import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rectangelimage from '../images/capture_decran_20240313_a_16272.jpg';
import rectangelimage2 from '../images/rectangle_1871.jpg';

function LeftContainer({ setOpenEventDates }) {
  const [statuses, setStatuses] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]); // Initialize with empty array
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("Newer");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://localhost:44311/api/EventDetails");
        setEvents(response.data);

        const uniqueStatuses = Array.from(new Set(response.data.map(event => event.eventStatus)));
        setStatuses(uniqueStatuses);

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

  const filteredEvents = events.filter(event =>
    (selectedStatuses.length === 0 || selectedStatuses.includes(event.eventStatus)) &&
    (searchQuery === "" ||
      event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.eventVenueName.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedDate === "" || isSameDate(event.eventDate, selectedDate))
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "Newer") {
      return new Date(b.eventDate) - new Date(a.eventDate);
    } else if (sortBy === "Older") {
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

  const handleStatusClick = (status) => {
    setSelectedStatuses(prevStatuses =>
      prevStatuses.includes(status) ? prevStatuses.filter(s => s !== status) : [...prevStatuses, status]
    );
  };

  const handleRemoveStatus = (statusToRemove) => {
    setSelectedStatuses(prevStatuses => {
      // Remove the status to be removed
      const updatedStatuses = prevStatuses.filter(status => status !== statusToRemove);
      // If no statuses are selected, initialize selectedStatuses with all available statuses
      if (updatedStatuses.length === 0) {
        return statuses;
      } else {
        return updatedStatuses;
      }
    });
    setSearchQuery(""); // Clear search query
  };

  return (
    <div className="leftcontainer d-flex flex-column progress-bar bg-white rounded-end" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
      <div className="leftsearchbox">
        <div className="container-fluid d-flex align-items-center statuscontainer">
          <h6 className="calendar-headerh6 mr-2">Status</h6>
          <div className={`status-buttons-container ${selectedStatuses.length > 0 ? '' : 'initial-load'}`}>
            {statuses.map(status => (
              <div key={status} className={`status-button ${selectedStatuses.includes(status) ? 'selected' : ''}`} onClick={() => handleStatusClick(status)}>
                {status}
                {selectedStatuses.includes(status) && (
                  <span className="remove-icon" onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveStatus(status);
                  }}>✖️</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid align-items-center">
          <div className="row">
            <div className="col-md-5">
              <div className="input-group mb-0">
                <label htmlFor="searchInput" className="input-group-text input-group-text-custom">Search</label>
                <input
                  type="text"
                  className={`form-control-custom rounded form-control ${selectedStatuses.length === 0 ? 'input-field-removed' : ''}`}
                  id="searchInput"
                  placeholder="Type a keyword                            &#x1F50E;"
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
                  placeholder="Select &#x1F4C5;"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="input-group mb-0">
                <label className="input-group-text input-group-text-custom" htmlFor="sortBy">Sort By</label>
                <select
                  className="form-control-custom rounded form-select"
                  aria-label="Sort By"
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Newer">Newest</option>
                  <option value="Older">Oldest</option>
                  <option value="A to Z">A to Z</option>
                  <option value="Z to A">Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listitems">
        <div className="row card-group text-wrap text-start m-2">
          
          {currentEvents.map(event => (
            <div className='col-md-4 p-2' key={event.id}>
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
                    <span>Created by Gina CALLEO on {new Date(event.createdDate).toLocaleDateString()}</span>
                  </p>
                </div>
                <div className="card-footer-custom card-footer">
                  <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
                  <span className='float-right-custom'>
                    <button className='card-footer-button-right btn'>X</button>
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


export default LeftContainer;

