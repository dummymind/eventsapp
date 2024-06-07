import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import Header from './components/Header';
import Main from './components/Main';
import Event from './components/ResponsiveEvent.jsx/Event';
import axios from 'axios';

function App() {
  const [eventDates, setEventDates] = useState([]);

  useEffect(() => {
    const fetchEventDates = async () => {
      try {
        const response = await axios.get("https://localhost:44311/api/EventDetails");
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
              <div className="container-fluid">
                <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
                  <div className="row">
                    <div className="col-md-8">
                      <LeftContainer />
                    </div>
                    <div className="col-md-4">
                      <RightContainer openEventDates={eventDates} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/event" element={<Event />} />
        </Routes>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </div>
    </Router>
  );
}

export default App;
