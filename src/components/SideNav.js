// SideNav.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
const SideNav = ({ onReportsClick, onsiteReportsClick, onAnniverssaryReportsClick, onFamilyReportClick, onFamilyplannedReportClick,onCompletedTouchesReportClick,onFuturetouchesfamilyReportClick,onCompletedVisitsReportClick }) => {
  const handleReportsClick = () => {
    if (onReportsClick) {
      onReportsClick();
    }
  };

  const handleSiteReportsClick = (event) => {
    event.preventDefault(); // Prevent default navigation behavior
    if (onsiteReportsClick) {
      onsiteReportsClick();
    }
  };

  const handleAnniversaryReportsClick = () => {
    if (onAnniverssaryReportsClick) {
      onAnniverssaryReportsClick();
    }
  };

  const handleFamilyReportsClick = () => {
    if (onFamilyReportClick) {
      onFamilyReportClick();
    }
  };

  const handleplannedFamilyReportsClick = () => {
    if (onFamilyplannedReportClick) {
      onFamilyplannedReportClick();
    }
  };
  const handleFuturetouchesFamilyReportsClick = () => {
    if (onFuturetouchesfamilyReportClick) {
      onFuturetouchesfamilyReportClick();
    }
  };

    const handleCompletedVisitsReportsClick = () => {
      if (onCompletedVisitsReportClick) {
        onCompletedVisitsReportClick();
      }
    };

    const handleCompletedtouchesFamilyReportsClick = () => {
      if (onCompletedTouchesReportClick) {
        onCompletedTouchesReportClick();
      }
    };
  return (
    <div className="sidenav">
      <div className="card">
        <div className="card-header">
          <button className="nav-link btn btn-link" onClick={handleReportsClick}>
            Reports
          </button>
        </div>
        <div className="card-body">
          <ul className="nav flex-column sub-nav">
         
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={handleSiteReportsClick}>
                Site Visit Schedule
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports/site-anniversary-details" onClick={handleAnniversaryReportsClick}>
                Site Anniversary Milestone
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports/visit-completed-with-family-members" onClick={handleFamilyReportsClick}>
                Visit Completed with Family Member
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports/planned-visit-by-family-members" onClick={handleplannedFamilyReportsClick}>
                Planned visit by family member
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports/Completed-touches-by-family-members" onClick={handleCompletedtouchesFamilyReportsClick} >
                Completed Toches by Family Member
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports/Future-touches-by-family-members" onClick={handleFuturetouchesFamilyReportsClick}>
                Future Toches by Family Member
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/reports/Completed-Visits"  onClick={handleCompletedVisitsReportsClick}>
                Completed Visits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
