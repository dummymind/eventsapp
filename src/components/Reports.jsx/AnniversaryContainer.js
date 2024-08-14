import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './AnniversaryContainer.css';
import Papa from 'papaparse';

function AnniversaryContainer() {
  const [startRangeDate, setStartRangeDate] = useState('');
  const [endRangeDate, setEndRangeDate] = useState('');
  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://touchmarsapi2024.azurewebsites.net/api/SiteVisitdetails/anniversarydetails');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGridData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleStartDateChange = (e) => {
    setStartRangeDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndRangeDate(e.target.value);
  };

  const filterDataByDateRange = () => {
    return gridData.filter(item => {
      const eventDate = new Date(item.eventDate);
      if (startRangeDate && endRangeDate) {
        const startDate = new Date(startRangeDate);
        const endDate = new Date(endRangeDate);
        return eventDate >= startDate && eventDate <= endDate;
      }
      return true;
    });
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const renderFilteredData = filterDataByDateRange();

  const offset = currentPage * itemsPerPage;
  const currentPageData = renderFilteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(renderFilteredData.length / itemsPerPage);

  const exportToCSV = () => {
    const csv = Papa.unparse(renderFilteredData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'reportsData.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="anniversary-container">
      <h4>Site Anniversary Milestone</h4>
      <div className="card-body2">
      <button onClick={exportToCSV} className="export-button">
            Export to CSV
          </button>
          </div>
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <div className="form-inline">
              <label htmlFor="dateRange" className="mr-2">Date Range:</label>
              <div className="date-range-section">
                <span className="mx-2">from</span>
                <div className="date-picker">
                  <input
                    type="date"
                    id="startDate"
                    value={startRangeDate}
                    onChange={handleStartDateChange}
                    className="form-control"
                  />
                </div>
                <span className="mx-2">to</span>
                <div className="date-picker">
                  <input
                    type="date"
                    id="endDate"
                    value={endRangeDate}
                    onChange={handleEndDateChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container mt-3">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Site Code</th>
              <th scope="col">Event Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <tr key={index}>
                <td>{item.siteCode}</td>
                <td>{new Date(item.eventDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default AnniversaryContainer;
