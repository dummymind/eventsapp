import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReportsContainer.css";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";

const ReportsContainer = () => {
  const [reportsData, setReportsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const pagesToShow = 4;

  // Filters Values
  const [countryFilters, setCountryFilters] = useState([]);
  const [siteFilters, setSiteFilters] = useState([]);
  const [famMem, setFamMem] = useState([]);
  const [eventStatusFilters, setEventStatusFilters] = useState([]);
  const [eventTypeFilters, setEventTypeFilters] = useState([]);
  const [eventFormatFilters, setEventFormatFilters] = useState([]);
  const [reportsFilter, setReportsFilter] = useState({
    selectedCountry: "All",
    selectedSite: "All",
    selectedfamMem: "All",
    selectedStatus: "All",
    selectedEventType: "All",
    selectedEventFormat: "All",
    startDate: "",
    endDate: "",
  });
  const [eventCount, setEventCount] = useState(0); // all events count
  const [eventCountAssociates, setAssociatesEventCount] = useState(0); // associates number
  const [allEvents, setAllEvents] = useState([]);

  // API calls to fetch filter options
  useEffect(() => {
    const fetchSiteFilter = async () => {
      try {
        const response = await axios.get(
          `https://touchmarsapi2024.azurewebsites.net/api/EventDetails`
        );
        setAllEvents(response.data);
        setEventCount(response.data.length);
        let associateCount = 0;
        response.data.forEach((item) => {
          associateCount += item.associates ? item.associates.split(",").length : 0;
        });

        setAssociatesEventCount(associateCount);

        const groupedObjects = response.data.reduce((result, obj) => {
          (result[obj.siteCode] = result[obj.siteCode] || []).push(obj);
          return result;
        }, {});
        
        const groupedFamily = response.data.reduce((result, obj) => {
          (result[obj.nameOfMem] = result[obj.nameOfMem] || []).push(obj);
          return result;
        }, {});

        const siteName = Object.keys(groupedObjects);
        const FamilyMembers = new Set();
        Object.keys(groupedFamily).forEach((ele) => {
          if (ele) {
            ele.split(",").forEach((memFam) => FamilyMembers.add(memFam));
          }
        });

        setSiteFilters(siteName);
        setFamMem(Array.from(FamilyMembers));
      } catch (error) {
        console.error("Error fetching site filters:", error);
      }
    };

    fetchSiteFilter();
  }, []);

  useEffect(() => {
    const fetchCountryFilter = async () => {
      try {
        const response = await axios.get(
          `https://touchmarsapi2024.azurewebsites.net/Country`
        );
        setCountryFilters(response.data);
      } catch (error) {
        console.error("Error fetching country filters:", error);
      }
    };

    fetchCountryFilter();
  }, []);

  useEffect(() => {
    const fetchEventTypeFilter = async () => {
      try {
        const response = await axios.get(
          `https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventType`
        );
        setEventTypeFilters(response.data);
      } catch (error) {
        console.error("Error fetching event type filters:", error);
      }
    };

    fetchEventTypeFilter();
  }, []);

  useEffect(() => {
    const fetchEventStatusFilter = async () => {
      try {
        const response = await axios.get(
          `https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventStatus`
        );
        setEventStatusFilters(response.data);
      } catch (error) {
        console.error("Error fetching event status filters:", error);
      }
    };

    fetchEventStatusFilter();
  }, []);

  useEffect(() => {
    const fetchEventFormatFilter = async () => {
      try {
        const response = await axios.get(
          `https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventFormat`
        );
        setEventFormatFilters(response.data);
      } catch (error) {
        console.error("Error fetching event format filters:", error);
      }
    };

    fetchEventFormatFilter();
  }, []);

  // Function to fetch event details based on filters
  const handleApplyFilterClick = async () => {
    try {
      const {
        selectedCountry,
        selectedSite,
        selectedfamMem,
        selectedStatus,
        selectedEventType,
        selectedEventFormat,
        startDate,
        endDate,
      } = reportsFilter;

      const filterParams = new URLSearchParams();

      if (selectedCountry !== "All") filterParams.append("Country", selectedCountry);
      if (selectedSite !== "All") filterParams.append("Site", selectedSite);
      if (selectedStatus !== "All") filterParams.append("Status", selectedStatus);
      if (selectedEventType !== "All") filterParams.append("Type", selectedEventType);
      if (selectedEventFormat !== "All") filterParams.append("Format", selectedEventFormat);
      if (startDate) filterParams.append("StartDate", startDate);
      if (endDate) filterParams.append("EndDate", endDate);

      const response = await axios.get(
        `https://touchmarsapi2024.azurewebsites.net/api/EventDetails/GetFilteredEvents?${filterParams.toString()}`
      );

      setReportsData(response.data);
      setEventCount(response.data.length);
      
      let associateCount = 0;
      response.data.forEach((item) => {
        associateCount += item.associates ? item.associates.split(",").length : 0;
      });

      setAssociatesEventCount(associateCount);

    } catch (error) {
      console.error("Error fetching filtered event details:", error);
    }
  };

  // Function to clear all filters
  const handleClearAllFilters = () => {
    setReportsFilter({
      selectedCountry: "All",
      selectedSite: "All",
      selectedfamMem: "All",
      selectedStatus: "All",
      selectedEventType: "All",
      selectedEventFormat: "All",
      startDate: "",
      endDate: "",
    });
    setReportsData([]);
    setEventCount(0);
    setAssociatesEventCount(0);
  };

  // Pagination logic
  const totalPages = Math.ceil(reportsData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reportsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    setCurrentPage(pageNumber);
  };

  const prevPagesBlock = () => {
    paginate(currentPage - pagesToShow);
  };

  const nextPagesBlock = () => {
    paginate(currentPage + pagesToShow);
  };

  const pageNumbers = [];
  for (
    let i = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    i <= Math.min(totalPages, currentPage + Math.floor(pagesToShow / 2));
    i++
  ) {
    pageNumbers.push(i);
  }

  const exportToCSV = () => {
    // Logic to export the reportsData to CSV
  };
  // grid-container-filters
  return (
    <div>
      <div className="single-card-container">
        <div className="cards">
          {/* Filter UI for Country */}
          <div className="card-header">FILTERS</div>
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="country">
                Country
              </label>
              <select
                className="form-control-custom rounded form-select"
                aria-label="Country"
                id="country"
                value={reportsFilter.selectedCountry}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    selectedCountry: e.target.value,
                  });
                }}
              >
                <option value="All">All</option>
                {countryFilters.length > 0 &&
                  countryFilters.map((countryName, index) => (
                    <option key={index} value={countryName}>
                      {countryName}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Filter UI for Site */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="site">
                Site
              </label>
              <select
                className="form-control-custom rounded form-select"
                aria-label="Site"
                id="site"
                value={reportsFilter.selectedSite}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    selectedSite: e.target.value,
                  });
                }}
              >
                <option value="All">All</option>
                {siteFilters.length > 0 &&
                  siteFilters.map((siteName, index) => (
                    <option key={index} value={siteName}>
                      {siteName}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Filter UI for Family Member */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="famMem">
                Family Member
              </label>
              <select
                className="form-control-custom rounded form-select"
                aria-label="famMem"
                id="famMem"
                value={reportsFilter.selectedfamMem}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    selectedfamMem: e.target.value,
                  });
                }}
              >
                <option value="All">All</option>
                {famMem.length > 0 &&
                  famMem.map((memName, index) => (
                    <option key={index} value={memName}>
                      {memName}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Filter UI for Event Status */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="status">
                Status
              </label>
              <select
                className="form-control-custom rounded form-select"
                aria-label="Status"
                id="status"
                value={reportsFilter.selectedStatus}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    selectedStatus: e.target.value,
                  });
                }}
              >
                <option value="All">All</option>
                {eventStatusFilters.length > 0 &&
                  eventStatusFilters.map((statusName, index) => (
                    <option key={index} value={statusName}>
                      {statusName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <br/>

          {/* Filter UI for Event Type */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="eventType">
                Event Type
              </label>
              <select
                className="form-control-custom rounded form-select"
                aria-label="Event Type"
                id="eventType"
                value={reportsFilter.selectedEventType}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    selectedEventType: e.target.value,
                  });
                }}
              >
                <option value="All">All</option>
                {eventTypeFilters.length > 0 &&
                  eventTypeFilters.map((eventName, index) => (
                    <option key={index} value={eventName}>
                      {eventName}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Filter UI for Event Format */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="eventFormat">
                Event Format
              </label>
              <select
                className="form-control-custom rounded form-select"
                aria-label="Event Format"
                id="eventFormat"
                value={reportsFilter.selectedEventFormat}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    selectedEventFormat: e.target.value,
                  });
                }}
              >
                <option value="All">All</option>
                {eventFormatFilters.length > 0 &&
                  eventFormatFilters.map((formatName, index) => (
                    <option key={index} value={formatName}>
                      {formatName}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Filter UI for Date Range */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                className="form-control-custom rounded form-select"
                id="startDate"
                value={reportsFilter.startDate}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    startDate: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <label className="input-group-text input-group-text-custom" htmlFor="endDate">
                End Date
              </label>
              <input
                type="date"
                className="form-control-custom rounded form-select"
                id="endDate"
                value={reportsFilter.endDate}  // Bind value to state
                onChange={(e) => {
                  setReportsFilter({
                    ...reportsFilter,
                    endDate: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          {/* Apply Filters and Clear All Buttons */}
          <div className="grid-container-filter-item">
            <div className="input-group mb-0">
              <button
                className="btn btn-primary-custom"
                onClick={handleApplyFilterClick}
              >
                Apply Filters
              </button>
              <button
                className="btn btn-secondary-custom"
                onClick={handleClearAllFilters}
                style={{ marginLeft: "10px" }}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display filtered results, charts, pagination, etc. */}

      <div className="card-container">
        <div className="cards"><div className="card-header">Total Events in Selection:  <br/> {eventCount}</div></div> 
        <div className="cards"><div className="card-header">Estimate number of associate in selection: <br/> {eventCountAssociates}</div></div> 
      </div>
      <div className="card-container">
        {/* Donut Chart */}
        <div className="cards">
          <div className="card-header">EVENT BY TYPE</div>
          <DonutChart
            title="Event Participation"
            data={reportsData}
             // Adjusted size
          />
        </div>

        {/* Bar Chart */}
        <div className="cards">
        <div className="card-header">EVENT DATA</div>

          <BarChart
            title="Event Types"
            data={reportsData}
             // Adjusted size
          />
        </div>
      </div>

      {/* Table for displaying report data */}
      <div className="single-card-container">
        <div className="cards">
          <div className="custom-container">
            <div className="grid-container">     
                    <div className="grid-header-first">Event Name</div>
                    <div className="grid-header">Event Type</div>
                    <div className="grid-header">Event Format</div>
                    <div className="grid-header">Event Status</div>
                    <div className="grid-header">Country</div>
                    <div className="grid-header">Site</div>
                    <div className="grid-header">Family Member</div>
                    <div className="grid-header-last">Event Date</div>
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <React.Fragment key={index}>                    
                        <div className="grid-item-first">{item.eventName}</div>
                        <div className="grid-item">{item.eventType}</div>
                        <div className="grid-item">{item.eventFormat}</div>
                        <div className="grid-item">{item.eventStatus}</div>
                        <div className="grid-item">{item.country}</div>
                        <div className="grid-item">{item.site}</div>
                        <div className="grid-item">{item.nameOfMem}</div>
                        <div className="grid-item-last">{new Date(item.eventDate).toLocaleDateString()}</div>
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No events found</td>
                    </tr>
                  )}
            </div>
          </div>
        </div>
      </div>

          {/* Pagination */}
          <dev className="cards-container">
            <dev className="cards">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={`page-item ${
                        number === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => paginate(number)}
                        className="page-link"
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(currentPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </dev>
          </dev>
    </div>
  );
};

export default ReportsContainer;
