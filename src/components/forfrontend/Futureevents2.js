
import React from 'react';  
import rectangelimage2 from '../../images/rectangle_1871.png'
import rectangelimage from '../../images/capture_decran_20240313_a_16271.png'

export default function FutureEvents() {
    return (
        <div className="futureevents bg-light p-3 rounded">
            <p>
           <h6 className="card-header-custom card-title">MY FUTURE EVENTS</h6></p>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={rectangelimage} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body  p-2">
        <h6 className="card-header-custom2 card-title">ANIVERSARY OF FERGUSON'S OFFICE</h6>
        <p className="card-text-custom card-text">
          Event Date Tie Club Event location
        </p>
        
      <button className='card-footer-button-confirmed btn rounded-pill'>CONFIRMED</button>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={rectangelimage} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-2">
        <h6 className="card-header-custom2 card-title">ANIVERSARY OF FERGUSON'S OFFICE</h6>
        <p className="card-text-custom card-text">
          Event Date Tie Club Event location
        </p>
        
      <button className='card-footer-button-confirmed btn rounded-pill'>CONFIRMED</button>
      </div>
    </div>
  </div>
</div>

<div className="card mb-0" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={rectangelimage} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body p-2">
        <h6 className="card-header-custom2 card-title">ANIVERSARY OF FERGUSON'S OFFICE</h6>
        <p className="card-text-custom card-text">
          Event Date Tie Club Event location
        </p>
        
      <button className='card-footer-button-confirmed btn rounded-pill'>CONFIRMED</button>
      </div>
    </div>
  </div>
</div>




        </div>
    );
}