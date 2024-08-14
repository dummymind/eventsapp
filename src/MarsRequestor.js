import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

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
     
            
              <div>
                <Header />
                <Main />
                <Navbar />
                <div className="container-fluid">
                  <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
                    <div className="row">
                      <div className="col-md-8">
                        <LeftContainer setFilteredEventDates={setFilteredEventDates} />
                      </div>
                      <div className="col-md-4">
                        <RightContainer eventDates={filteredEventDates} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
        
        
    );
  }
  
  export default RequesterApp;