import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route, Routes ,Navigate} from 'react-router-dom';
import RequesterApp from './MarsRequestor';
import AdminApp from './AppAdmin';
import AppReport from './AppReport';
import AppVip from './AppVip';
import AppVip2 from './AppVip2';
import Login from './components/Login';
import UserManagement from './components/UserManagement.jsx/UserManagement'
//import Vip from './components/MarsFamilyHome.jsx/MarsFamilyHome';
//import Vip2 from './components/MarsFamilyComplete.jsx/MarsFamilyComplete';
import './App.css';
import Create from './components/create.js';
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
import axios from 'axios';



function App() {
  const [isAdmin, setIsAdmin] = useState(false); // This can be based on some logic to determine if the user is admin

  return (<Router><div><link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />
    <Routes>    
          
          <Route path="/event" element={<Event />} />
          <Route path="/create" element={<Create />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/history" element={<History />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/event/:eventId" element={<GetEvent />} />
          <Route path="/scheduleunderReview" element={<ScheduleUnderReview/>} />
          <Route path="/guestsunderReview" element={<GuestsUnderReview/>} />
          <Route path="/historyunderReview" element={<HistoryUnderReview/>} />
          <Route path="/summaryunderReview" element={<SummaryUnderReview/>} />
       
     <Route path="/login" element={<Login />} />
     <Route path="/AppAdmin" element={<RequesterApp/>} />
     <Route path="/AppRequester" element={<RequesterApp/>} />
     <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </div></Router>
  );
}

export default App;