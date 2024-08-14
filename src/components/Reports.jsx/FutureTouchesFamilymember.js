import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './VisitCompletedFamilyMembers.css'; 
import ReactPaginate from 'react-paginate';

const FutureTouchesFamilyMember= () => {
  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://touchmarsapi2024.azurewebsites.net/api/SiteVisitdetails/Visitcompletedfamilymemdetails'); 

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
    
      const aggregatedData = aggregateData(data);
      setGridData(aggregatedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const aggregateData = (data) => {
    const aggregatedData = {};
    data.forEach(item => {
      const key = item.familyMemberName;
      if (aggregatedData[key]) {
        aggregatedData[key][item.year] = item.count;
      } else {
        aggregatedData[key] = {
          familyMemberName: item.familyMemberName,
          [item.year]: item.count
        };
      }
    });

    return Object.values(aggregatedData);
  };

  const getLatestYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 5; i++) {
      years.push(currentYear + i);
    }
    return years;
  };

  const renderYearColumns = () => {
    const latestYears = getLatestYears();
    return latestYears.map(year => (
      <th key={year}>{year}</th>
    ));
  };

  const exportToCSV = () => {
    const latestYears = getLatestYears();
    const csvData = gridData.map(item => {
      const row = {
        Name: item.familyMemberName,
      };
      latestYears.forEach(year => {
        row[year] = item[year] || '';
      });
      return row;
    });

    const csv = Papa.unparse(csvData, {
      columns: ['Name', ...latestYears.map(year => year.toString())],
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'family_members_visits.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayData = gridData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="family-members-container">
      <h4>Future Touches by Family Member</h4>
      <button onClick={exportToCSV} className="export-button">
        Export to CSV
      </button>
      <div className="family-members-grid">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              {renderYearColumns()}
            </tr>
          </thead>
          <tbody>
            {displayData.map((item, index) => (
              <tr key={index}>
                <td>{item.familyMemberName}</td>
                {getLatestYears().map(year => (
                  <td key={year}>{item[year] || ''}</td>
                ))}
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
        pageCount={Math.ceil(gridData.length / itemsPerPage)}
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

export default FutureTouchesFamilyMember;
