import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LeftContainer from './components/MarsFamilyHome.jsx/LeftContainerHome';
import RightContainer from './components/MarsFamilyHome.jsx/RightContainerHome';
import Header from './components/Header';
import Main from './components/Main';
import Event from './components/ResponsiveEvent.jsx/Event';
import Guests from './components/ResponsiveEvent.jsx/Guests'
import Summary from './components/ResponsiveEvent.jsx/Summary';
import History from './components/ResponsiveEvent.jsx/History';
 import Schedule from './components/ResponsiveEvent.jsx/Schedule';
 import GetEvent from './components/GetEvent.jsx/GetEvent';
import ScheduleUnderReview from './components/GetEvent.jsx/ScheduleUnderReview.js';
import GuestsUnderReview from './components/GetEvent.jsx/GuestsUnderReview.js';
import HistoryUnderReview from './components/GetEvent.jsx/HistoryUnderReview.js';
import SummaryUnderReview from './components/GetEvent.jsx/SummaryUnderReview.js';
import Vip2 from './components/MarsFamilyComplete.jsx/MarsFamilyComplete.jsx';
import axios from 'axios';
function App() {
  const [eventDates, setEventDates] = useState([]);
 
 
  useEffect(() => {
    const fetchEventDates = async () => {
      try {
        const response = await axios.get("https://touchmarsapi2024.azurewebsites.net/api/EventDetails");
        const dates = response.data.map(event => event.eventDate);
        setEventDates(dates);
        console.log("dates is",dates);
      } catch (error) {
        console.error("Error fetching event dates:", error);
      }
    };
 
    fetchEventDates();
  }, []);
 
  return (
    <Router>
      <div>
        <Header />
 
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
 
        <Routes>
          <Route path="/" element={
            <div>
              <Main />
              <Navbar />
              <Vip2/>
            </div>
          } />
          <Route path="/event" element={<Event />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/history" element={<History />} />
          <Route path="/event/:eventId" element={<GetEvent />} />
          <Route path="/scheduleunderReview" element={<ScheduleUnderReview/>} />
          <Route path="/guestsunderReview" element={<GuestsUnderReview/>} />
          <Route path="/historyunderReview" element={<HistoryUnderReview/>} />
          <Route path="/summaryunderReview" element={<SummaryUnderReview/>} />
         <Route path="/vip2" element={<Vip2 />} /> 
          {/* <Route path="/adminreports" element={<AdminReports />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
 
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </div>
    </Router>
  );
}
 
export default App;