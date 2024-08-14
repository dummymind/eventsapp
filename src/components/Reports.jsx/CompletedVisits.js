import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompletedVisits.css';
import ReactPaginate from 'react-paginate';
import Papa from 'papaparse';

const CompletedVisits = () => {
  const [displayData, setDisplayData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get('https://touchmarsapi2024.azurewebsites.net/api/SiteVisitdetails/CompletedVisitsfamilymemdetails')
      .then(response => {
        const currentDate = new Date();
        const filteredData = response.data.filter(item => new Date(item.eventDate) <= currentDate);

       
        const touchesMap = {};
        filteredData.forEach(item => {
          if (touchesMap[item.familymemName]) {
            touchesMap[item.familymemName]++;
          } else {
            touchesMap[item.familymemName] = 1;
          }
        });

        const enrichedData = filteredData.map(item => ({
          ...item,
          touches: touchesMap[item.familymemName]
        }));

        setDisplayData(enrichedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const griddata = displayData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const exportToCSV = () => {
    const csvData = griddata.map(item => ({
      'Site Code': item.siteCode,
      'Location': item.countryName,
      'Date': item.eventDate,
      'Visitor': item.familyMemberName,
      'Touches': item.touches, 
      'Status': item.eventStatus,
    }));
    
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'CompletedVisits.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="family-members-grid">
      <h4>Completed Visits</h4>
      <div className="export-container">
        <button onClick={exportToCSV} className="export-button">
          Export to CSV
        </button>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Site Code</th>
            <th>Location</th>
            <th>Date</th>
            <th>Visitor</th>
            <th>Touches</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {griddata.map((item, index) => (
            <tr key={index}>
              <td>{item.siteCode}</td>
              <td>{item.countryName}</td>
              <td>{item.eventDate}</td>
              <td>{item.familyMemberName}</td>
              <td>{item.touches}</td>
              <td>{item.eventStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(displayData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default CompletedVisits;
