import React from 'react';
import HomeIcon from '../images/homeicon.svg';
import { Link } from 'react-router-dom';
import './AdminReports.css';

function AdminReports() {
    return (<>
          <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
   
<div className="container-fluid">
<div className='row m-4'>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <a className="navbar-custom-home navbar-brand rounded p-2" href="#">
    <img
      src={HomeIcon}
      width={37}
      height={30}
      className="d-inline-block align-top"
      alt=""
    />
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className=" nav-item">
          <a className="nav-item-custom nav-link" aria-current="page" href="#">
            DASHBOARD
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-custom nav-link" href="#">
            REPORTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item-custom nav-link active" href="#">
            USER MANAGEMENT
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item-custom nav-link" href="#">
            SITE MANAGEMENT
          </a>
        </li>
        
      </ul>
      </div>
  </div>
</nav>

<div className='m-2 bg-light rounded p-4'><div className="large-custom-font">User Management</div></div>

<div className='mt-2 bg-light rounded p-0'>
    
    <div className="m-3">

    <div className="input-group">
  <input
    type="text"
    className="custom-input-group form-control p-2"
    placeholder="Search"
    aria-label=""
    aria-describedby="basic-addon2"
  />
  <span className="" id="basic-addon2">
  <button type="button" className="buttonrequest btn btn-success ml-2">+ADD USERS</button>
  </span>
</div>
    </div>
    <div class="listitems p-5">

    <table className="table">
  <thead>
    <tr class="p-5 m-5">
      <th scope="col" className='custom-table-font-header'>FIRST NAME</th>
      <th scope="col" className='custom-table-font-header'>LAST NAME</th>
      <th scope="col" className='custom-table-font-header'>E-MAIL</th>
      <th scope="col" className='custom-table-font-header'>TITLE</th>
      <th scope="col" className='custom-table-font-header'>LOCATION</th>
      <th scope="col" className='custom-table-font-header'>PROFILE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


    </div>
    
    </div>

</div>
</div>

        </>
    );
}

export default AdminReports;
