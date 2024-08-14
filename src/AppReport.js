import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AppReport.css';
import Navbar from './components/Navbar.js';
import RightContainer from './components/RightContainer.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Event from './components/ResponsiveEvent.jsx/Event.js';
import GetEvent from './components/GetEvent.jsx/GetEvent.js';
import axios from 'axios';
import Guests from './components/ResponsiveEvent.jsx/Guests.js';
import Summary from './components/ResponsiveEvent.jsx/Summary.js';
import Schedule from './components/ResponsiveEvent.jsx/Schedule.js';
import History from './components/ResponsiveEvent.jsx/History.js';
import SideNav from './components/SideNav.js'
import ReportsContainer from './components/Reports.jsx/ReportsContainertouches.js';
import AnniversaryContainer from './components/Reports.jsx/AnniversaryContainer.js';
import FamilyMembers from './components/Reports.jsx/VisitCompletedFamilyMembers.js';
import PlannedFamilymember from './components/Reports.jsx/PlannedFamilymember.js';
import CompletedTouchesFamilyMember from './components/Reports.jsx/CompletedTouchesFamilyMember.js';
import FutureTouchesFamilyMember from './components/Reports.jsx/FutureTouchesFamilymember.js';
import CompletedVisits from './components/Reports.jsx/CompletedVisits.js';

function AppReport() {
  const [eventDates, setEventDates] = useState([]);
  const [activeComponent, setActiveComponent] = useState('Reports'); // State to track active component
  const [isAdmin, setIsAdmin] = useState(false); // This can be based on some logic to determine if the user is admin

  useEffect(() => {
    const fetchEventDates = async () => {
      try {
        const response = await axios.get("https://api.example.com/api/EventDetails"); // Replace with your actual API URL
        const dates = response.data.map(event => event.eventDate);
        setEventDates(dates);
        console.log("Dates fetched successfully:", dates);
      } catch (error) {
        console.error("Error fetching event dates:", error);
      }
    };

    fetchEventDates();
  }, []);

  const handleReportsClick = () => {
    setActiveComponent('Reports');
  };

  const handleSiteReportsClick = () => {
    setActiveComponent('SiteReports');
  };

  const handleAnniversaryReportsClick = () => {
    setActiveComponent('Anniversary');
  };

  const handleFamilyReportsClick = () => {
    setActiveComponent('FamilyMembers');
  };

  const handlePlannedFamilyReportsClick = () => {
    setActiveComponent('PlannedFamilyMembers');
  };

  const handleCompletedtouchesFamilyReportsClick = () => {
    setActiveComponent('CompletedTouchesFamilyMember');
  };

  const handleFuturetouchesFamilyReportsClick = () => {
    setActiveComponent('FutureTouchesFamilyMember');
  };

  const handleCompletedVisitsReportsClick = () => {
    setActiveComponent('CompletedVisits');
  };


  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div>
        <Header />
        <Main />
        <Navbar />
        <div className="container-fluid">
          <div className="row" style={{ backgroundColor: '#f5f5fb', height: '100%' }}>
            {/* <div className="col-md-3">
              <SideNav
                onReportsClick={handleReportsClick}
                onsiteReportsClick={handleSiteReportsClick}
                onAnniverssaryReportsClick={handleAnniversaryReportsClick}
                onFamilyReportClick={handleFamilyReportsClick}
                onFamilyplannedReportClick={handlePlannedFamilyReportsClick}
                onCompletedTouchesReportClick={handleCompletedtouchesFamilyReportsClick}
                onFuturetouchesfamilyReportClick={handleFuturetouchesFamilyReportsClick}
                onCompletedVisitsReportClick={handleCompletedVisitsReportsClick}
              />
            </div> */}
            <div className="">
              {/* Render active component based on state */}
              {activeComponent === 'Reports' && <ReportsContainer />}
              {activeComponent === 'SiteReports' && <ReportsContainer />}
              {activeComponent === 'Anniversary' && <AnniversaryContainer />}
              {activeComponent === 'FamilyMembers' && <FamilyMembers />}
              {activeComponent === 'PlannedFamilyMembers' && <PlannedFamilymember />}
              {activeComponent === 'CompletedTouchesFamilyMember' && <CompletedTouchesFamilyMember />}
              {activeComponent === 'FutureTouchesFamilyMember' && <FutureTouchesFamilyMember />}
              {activeComponent === 'CompletedVisits' && <CompletedVisits />}
            </div>
            {/* <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <RightContainer openEventDates={eventDates} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Routes>
          <Route path="/event" element={<Event />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/history" element={<History />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/event/:eventId" element={<GetEvent />} />
        </Routes>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </Router>
  );
}

export default AppReport;
