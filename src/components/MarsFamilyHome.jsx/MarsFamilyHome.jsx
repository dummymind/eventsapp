import React, { useState } from 'react';
import map from '../../images/map.jpg';
import LeftContainer from './LeftContainerHome';
import RightContainer from './RightContainerHome';

export default function Vip() {
  const [eventDates, setEventDates] = useState([]);
  const [filteredEventDates, setFilteredEventDates] = useState([]);
  const [pointsOfInterest, setPointsOfInterest] = useState({
    showHideAll: true,
    pendingValidation: true,
    upcomingEvents: true,
    newComments: false,
  });

  const [unvisitedSites, setUnvisitedSites] = useState('');
  const [region, setRegion] = useState('North America');

  const eventType = [
    "0-5 years",
    "6-10 years",
    "more than 10 years",
    "no family member",
    "not sure"
  ];

  const regions = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Australia",
    "Antarctica"
  ];

  const handlePointsOfInterestChange = (event) => {
    const { name, checked } = event.target;
    setPointsOfInterest((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleUnvisitedSitesChange = (event) => {
    setUnvisitedSites(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row m-2">
        <div className="col-md-3 mt-5 mb-3 bg-light rounded ">
          <div className="p-2 text-blue bg-light">
            <div className="font-700" style={{ fontSize: 18 }}>
              <span style={{ color: "rgba(0, 215, 185, 1)" }}>Welcome</span>
              <br />
              Frank Mars
            </div>
            
            <div className="mt-3 font-800 text-uppercase" style={{ fontSize: 14 }}>
              My Points of Interests
            </div>
            <div className="mt-2 d-flex flex-column text-blue2" style={{ fontSize: 11 }}>
              <div className="align-items-center mb-2">
                <input
                  className="form-check-input-custom2 form-check-input"
                  type="checkbox"
                  name="showHideAll"
                  checked={pointsOfInterest.showHideAll}
                  onChange={handlePointsOfInterestChange}
                />
                <span className="font-mars-centra">Show/Hide all points</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <input
                  className="form-check-input-custom2 form-check-input"
                  type="checkbox"
                  name="pendingValidation"
                  checked={pointsOfInterest.pendingValidation}
                  onChange={handlePointsOfInterestChange}
                />
                <span className="ml-2 font-mars-centra">Pending for validation</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <input
                  className="form-check-input-custom2 form-check-input"
                  type="checkbox"
                  name="upcomingEvents"
                  checked={pointsOfInterest.upcomingEvents}
                  onChange={handlePointsOfInterestChange}
                />
                <span className="ml-2 font-mars-centra">Upcoming events</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <input
                  className="form-check-input-custom2 form-check-input"
                  type="checkbox"
                  name="newComments"
                  checked={pointsOfInterest.newComments}
                  onChange={handlePointsOfInterestChange}
                />
                <span className="ml-2 font-mars-centra">Events with new comments</span>
              </div>
            </div>
            <div className="mt-2 font-800 text-uppercase" style={{ fontSize: 14 }}>
              Unvisited Sites
            </div>
            <div className="mt-2 text-blue2" style={{ fontSize: 12 }}>
              Show all unvisited sites since
            </div>
            <div className="d-flex justify-content-between p-1 mt-2 text-secondary" style={{ fontSize: 9 }}>
              <select
                className="custom-select rounded-pill form-select rounded form-select"
                value={unvisitedSites}
                onChange={handleUnvisitedSitesChange}
              >
                <option value="">Select a Type</option>
                {eventType.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <button type="button" className="buttonrequest btn btn-success mt-2 ml-2">View suggested visit</button>
          </div>
        </div>
        <div className="col-md-9 mt-5 mb-3 rounded">
          <div className="image-container">
            <img src={map} className="img-fluid" alt="Map" />
            <div className="circle circle1">1</div>
            <div className="circle circle2">2</div>
            <div className="circle circle3">3</div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="circle circle6"></div>
            <div className="circle circle7"></div>
            <div className="zoom-buttons">
              <button className="" id="zoom-in">+</button>
              <button className="" id="zoom-out">-</button>
            </div>
            <select
              className="dropdown-top-right rounded-pill form-select rounded form-select"
              value={region}
              onChange={handleRegionChange}
            >
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
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
  );
}
