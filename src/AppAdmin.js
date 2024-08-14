import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import Header from './components/Header';
import Main from './components/Main';
import Event from './components/ResponsiveEvent.jsx/Event.js';
import Schedule from './components/ResponsiveEvent.jsx/Schedule.js';
import Guests from './components/ResponsiveEvent.jsx/Guests.js';
import History from './components/ResponsiveEvent.jsx/History.js';
import Summary from './components/ResponsiveEvent.jsx/Summary.js';
import GetEvent from './components/GetEvent.jsx/GetEvent';
import ScheduleUnderReview from './components/GetEvent.jsx/ScheduleUnderReview.js';
import GuestsUnderReview from './components/GetEvent.jsx/GuestsUnderReview.js';
import HistoryUnderReview from './components/GetEvent.jsx/HistoryUnderReview.js';
import SummaryUnderReview from './components/GetEvent.jsx/SummaryUnderReview.js';
import './App.css';
import axios from 'axios';
import LeftContainerAdmin from './components/LeftContainerAdmin.jsx';

function RequesterApp() {
  const [eventDates, setEventDates] = useState([]);
  const [filteredEventDates, setFilteredEventDates] = useState([]);

  useEffect(() => {
    const fetchEventDates = async () => {
      try {
        const response = await axios.get("https://touchmarsapi2024.azurewebsites.net/api/EventDetails");
        const dates = response.data.map(event => event.eventDate);
        setEventDates(dates);
        setFilteredEventDates(dates); // Initially set all dates as filtered dates
        console.log("dates are", dates);
      } catch (error) {
        console.error("Error fetching event dates:", error);
      }
    };

    fetchEventDates();
  }, []);

  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <Main />
              <Navbar />
              <div className="container-fluid">
                <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
                  <div className="row">
                    <div className="col-md-8">
                      <LeftContainerAdmin setFilteredEventDates={setFilteredEventDates} />
                    </div>
                    <div className="col-md-4">
                      <RightContainer eventDates={filteredEventDates} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/event" element={<Event />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/history" element={<History />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/event/:eventId" element={<GetEvent />} />
          <Route path="/scheduleunderReview" element={<ScheduleUnderReview/>} />
          <Route path="/guestsunderReview" element={<GuestsUnderReview/>} />
          <Route path="/historyunderReview" element={<HistoryUnderReview/>} />
          <Route path="/summaryunderReview" element={<SummaryUnderReview/>} />
        </Routes>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </Router>
  );
}

export default RequesterApp;
