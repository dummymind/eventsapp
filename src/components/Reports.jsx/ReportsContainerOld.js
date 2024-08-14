import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Papa from 'papaparse';
import './ReportsContainer.css';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import { faL } from '@fortawesome/free-solid-svg-icons';
//import '@fortawesome/fontawesome-free/css/all.min.css';

const ReportsContainer = () => {
  const [reportsData, setReportsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const pagesToShow = 4;

  //Filters Values
  const [eventFormatFilters, setEventFormatFilters] = useState(1);
  const [eventStatusFilters, setEventStatusFilters] = useState(1);
  const [eventTypeFilters, setEventTypeFilters] = useState(1);
  const [countryFilters, setCountryFilters] = useState(1);
  const [siteFilters, setSiteFilters] = useState(1);
  const [selectedDate, setSelectedDate] = useState(1);
  const [familyMembers, setFamilyMembers] = useState(1);
  // const [eventStatusFilters, setEventStatusFilters] = useState(1);

  //const [selectedCountry, setSelectedCountry] = useState(1);
  const [reportsFilter, setReportsFilter] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState(1);
  const [eventCount, setEventCount] = useState(1);
  const [eventCountAssociates, setAssociatesEventCount] = useState(1);
  const [allEvents, setAllEvents] = useState(1);

  //API to call Site filter
  useEffect(() => {
    const fetchSiteFilter = async () => {
      try {
        const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/api/EventDetails`);
        setAllEvents(response.data);
        setEventCount(response.data.length);
        let familyName = [];
        let associateCount = 0;
        response.data.map((item, index) => {
          associateCount = associateCount + (item.associates != null ? item.associates.split(',').length : 0);
          if(item.nameOfMem.length > 0){
          let familyNameItem = item.nameOfMem.split(',');
          familyNameItem.map((e) => {
            familyName.push(e);
          });
        }
        });

        //console.log("name of mem: " +  familyName);
        setFamilyMembers(familyName);
        setAssociatesEventCount(associateCount);

        //to get unique site code/site name
        const groupedObjects = response.data.reduce((result, obj) => {
          [(result[obj.siteCode] = result[obj.siteCode] || []).push(obj)];
          return result;
        }, {});
        let siteName = [];
        Object.keys(groupedObjects).forEach((ele) => {
          siteName.push(ele);
        });
        setSiteFilters(siteName);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchSiteFilter();
  }, []);

  //API to call Country filter
  useEffect(() => {
    const fetchCountryFilter = async () => {
      try {
        const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/Country`);
        setCountryFilters(response.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchCountryFilter();
  }, []);

  //API to call Event Type filter
  useEffect(() => {
    const fetchEventTypeFilter = async () => {
      try {
        const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventType`);
        setEventTypeFilters(response.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchEventTypeFilter();
  }, []);

  //API to call Event Status filter
  useEffect(() => {
    const fetchEventStatusFilter = async () => {
      try {
        const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventStatus`);
        setEventStatusFilters(response.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchEventStatusFilter();
  }, []);

  //API to call Event Format filter
  useEffect(() => {
    const fetchEventFormatFilter = async () => {
      try {
        const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/api/EventDetails/EventFormat`);
        setEventFormatFilters(response.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchEventFormatFilter();
  }, []);

  useEffect(() => {
    const fetchReportsData = async () => {
      try {
        const response = await axios.get(`https://touchmarsapi2024.azurewebsites.net/api/SiteVisitdetails/details`);
        setReportsData(response.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };

    fetchReportsData();
  }, []);

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
  for (let i = Math.max(1, currentPage - Math.floor(pagesToShow / 2)); i <= Math.min(totalPages, currentPage + Math.floor(pagesToShow / 2)); i++) {
    pageNumbers.push(i);
  }


  const exportToCSV = () => {
    // const csv = Papa.unparse(reportsData);
    // const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    // const link = document.createElement('a');
    // const url = URL.createObjectURL(blob);
    // link.setAttribute('href', url);
    // link.setAttribute('download', 'reportsData.csv');
    // link.style.visibility = 'hidden';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const handleApplyFilterClick = () => {
    console.log(reportsFilter);
    const numEvent = allEvents.filter((item) => {
      if ((reportsFilter.selectedCountry != undefined  && reportsFilter.selectedCountry == item.countryName) 
      || (reportsFilter.selectedStatus != undefined && reportsFilter.eventStatus == item.eventStatus)
      || (reportsFilter.selectedSite != undefined && reportsFilter.selectedSite == item.siteCode)
      || (reportsFilter.selectedEventType != undefined && reportsFilter.selectedEventType == item.eventType)
      || (reportsFilter.selectedEventFormat != undefined && reportsFilter.selectedEventFormat == item.eventFormat)
      || (reportsFilter.selectedFamilyMember != undefined && item.nameOfMem.includes(reportsFilter.selectedFamilyMember)))
        return true;
      else
        return false;
    })
    setEventCount(numEvent.length);
  }

  return (
    <div className="card">
      <div className='grid-container-filters'>
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="segment">Segment</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="Segment"
              id="segment"
            >
              <option value="All">All</option>
              <option key='Chocolate' value='Chocolate' >Chocolate</option>
              <option key='Coporate' value='Coporate' >Coporate</option>
            </select>
          </div>
        </div>
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="country">Country</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="Country"
              id="country"
              onChange={(e) => { setReportsFilter({ ...reportsFilter, selectedCountry: e.target.value }) }}
            >
              <option value="All">All</option>
              {countryFilters.length > 0 && countryFilters.map((countryName, index) => (
                <option key={index} value={countryName}>{countryName}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="site">Site</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="site"
              id="site"
              onChange={(e) => { setReportsFilter({ ...reportsFilter, selectedSite: e.target.value }) }}
            >
              <option value="All">All</option>
              {siteFilters.length > 0 && siteFilters.map((siteName, index) => (
                <option key={index} value={siteName}>{siteName}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="FamilyMembers">Family Members</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="FamilyMembers"
              id="FamilyMembers"
              onChange={(e) => { setReportsFilter({ ...reportsFilter, selectedFamilyMember: e.target.value }) }}
            >
              <option value="All">All</option>
              {familyMembers.length > 0 && familyMembers.map((member, index) => (
                <option key={index} value={member}>{member}</option>
              ))}
            </select>
          </div>
        </div>
        {/* ====================== second Row ============================== */}
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="Status">Status</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="Status"
              id="Status"
              onChange={(e) => { setReportsFilter({ ...reportsFilter, selectedStatus: e.target.value }) }}
            >
              <option value="All">All</option>
              {eventStatusFilters.length > 0 && eventStatusFilters.map((eventStatus, index) => (
                <option key={index} value={eventStatus}>{eventStatus}</option>
              ))}

            </select>
          </div>
        </div>
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="EventType">Event Type</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="EventType"
              id="EventType"
              onChange={(e) => { setReportsFilter({ ...reportsFilter, selectedEventType: e.target.value }) }}
            >
              <option value="All">All</option>
              {eventTypeFilters.length > 0 && eventTypeFilters.map((eventType, index) => (
                <option key={index} value={eventType}>{eventType}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid-container-filter-item">
          <div className="input-group mb-0">
            <label className="input-group-text input-group-text-custom" htmlFor="EventFormat">Event Format</label>
            <select
              className="form-control-custom rounded form-select"
              aria-label="EventFormat"
              id="EventFormat"
              onChange={(e) => { setReportsFilter({ ...reportsFilter, selectedEventFormat: e.target.value }) }}
            >
              <option value="All">All</option>
              {eventFormatFilters.length > 0 && eventFormatFilters.map((eventFormat, index) => (
                <option key={index} value={eventFormat}>{eventFormat}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid-container-filter-item">
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
      </div>
      <button className="btn" onClick={() => handleApplyFilterClick()}>Apply Filters</button>
      <div className='grid-container-events'>
        <div>TOTAL EVENTS IN SELECTION : {eventCount}</div>
        <div>ESTIMATE NUMBER ASSOCIATES IN SELECTION : {eventCountAssociates}</div>
        <div>EVENTS BY SEGMENT IN SELECTION : </div>
      </div>
      <div className='grid-container-charts'>
        <div><DonutChart></DonutChart></div>
        <div className='grid-item-barchart'><BarChart></BarChart></div>
      </div>
      <div className="card-body">
        <button onClick={exportToCSV} className="export-button">
          Export to CSV
        </button>
        <div className="custom-container">
          <div className="grid-container">
            <div className="grid-header-first">SiteCode</div>
            <div className="grid-header">LastVisit</div>
            <div className="grid-header">Location</div>
            <div className="grid-header">Event</div>
            <div className="grid-header">FamilyMembers</div>
            <div className="grid-header">Associate Head count</div>
            <div className="grid-header-last">See Events</div>
            {currentItems.map((report, index) => (
              <React.Fragment key={index}>
                <div className="grid-item-first">{report.siteCode}</div>
                <div className="grid-item">{report.formattedEventDate}</div>
                <div className="grid-item">{report.countryName}</div>
                <div className="grid-item">{report.event}</div>
                <div className="grid-item">{report.familyNum}</div>
                <div className="grid-item">{report.associateHeadCount}</div>
                <div className="grid-item-last">
                  <i className="fas fa-eye"></i>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => prevPagesBlock()} disabled={currentPage <= 1}>
              Prev
            </button>
            {pageNumbers.map((number) => (
              <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                {number}
              </button>
            ))}
            <button onClick={() => nextPagesBlock()} disabled={currentPage >= totalPages}>
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReportsContainer;
