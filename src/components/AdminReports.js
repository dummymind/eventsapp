import React from 'react';
import HomeIcon from '../images/homeicon.svg';
import { Link } from 'react-router-dom';
import './AdminReports.css';
import pencil from '../images/pencil.svg';

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
      width={16}
      height={17}
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

<div className='m-2 bg-light rounded p-0'>
    
    <div className="m-3">

    <div className="input-group align-items-center">
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
  <div className="container-fluid listitemsadmin listitems p-3">
  <div className="table-responsive">
    <div className="table">
      {/* Header Row */}
      <div className="row custom-table-font-header bg-light p-3 rounded m-3">
        <div className="col-12 col-md-2">FIRST NAME</div>
        <div className="col-12 col-md-2">LAST NAME</div>
        <div className="col-12 col-md-2">E-MAIL</div>
        <div className="col-12 col-md-2">TITLE</div>
        <div className="col-12 col-md-2">LOCATION</div>
        <div className="col-12 col-md-2">PROFILE</div>
      </div>
     
      {/* Data Row 1 */}
        
        <div className="row custom-table-tr bg-light p-3 rounded m-3 align-items-center" >
        <div className="col-12 col-md-2">Gina</div>
        <div className="col-12 col-md-2">CALLEO</div>
        <div className="col-12 col-md-2">johndeo@effem.com</div>
        <div className="col-12 col-md-2">Current Job Position</div>
        <div className="col-12 col-md-2">United States of America</div>
        <div className="col-12 col-md-2 d-flex justify-content-between align-items-center">
    Admin
    <img className="custom-pencil ml-auto" style={{ backgroundColor: 'transparent' }} src={pencil} alt="Pencil Icon" />
  </div>
      </div>

      {/* Data Row 2 */}
        
        <div className="row custom-table-tr bg-light p-3 rounded m-3 align-items-center" >
        <div className="col-12 col-md-2">Gina</div>
        <div className="col-12 col-md-2">CALLEO</div>
        <div className="col-12 col-md-2">johndeo@effem.com</div>
        <div className="col-12 col-md-2">Current Job Position</div>
        <div className="col-12 col-md-2">United States of America</div>
        <div className="col-12 col-md-2 d-flex justify-content-between align-items-center">
    Admin
    <img className="custom-pencil ml-auto" style={{ backgroundColor: 'transparent' }} src={pencil} alt="Pencil Icon" />
  </div>
      </div>
      {/* Data Row 3 */}
      <div className="row custom-table-tr bg-light p-3 rounded m-3 align-items-center" >
        <div className="col-12 col-md-2">Gina</div>
        <div className="col-12 col-md-2">CALLEO</div>
        <div className="col-12 col-md-2">johndeo@effem.com</div>
        <div className="col-12 col-md-2">Current Job Position</div>
        <div className="col-12 col-md-2">United States of America</div>
        <div className="col-12 col-md-2 d-flex justify-content-between align-items-center">
    Admin
    <img className="custom-pencil ml-auto" style={{ backgroundColor: 'transparent' }} src={pencil} alt="Pencil Icon" />
  </div>
      </div>
     
    </div>
  </div>
</div>


   
<div className=" paging align-items-center">
                <span className="centered-text">1-1 OF 1 ELEMENTS</span>
            </div>
       

    </div>

</div>

</div>

        </>
    );
}

export default AdminReports;
