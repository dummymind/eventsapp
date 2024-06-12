import React from 'react';

import rectangelimage from '../../images/capture_decran_20240313_a_16271.png'
import rectangelimage2 from '../../images/rectangle_1871.png'

function LeftContainer() {
    return (
        <div className="leftcontainer d-flex flex-column progress-bar bg-white rounded-end" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
            <div className="leftsearchbox">
                <div className="container-fluid d-flex align-items-center statuscontainer">
                    <h6 className="calendar-headerh6 mr-2">Status</h6>
                    <div className="selectboxcontainer input-group input-group-search">
                        <input type="text" className="form-control form-control-search" placeholder="" />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Draft X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Under review X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Open Event X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Family Attendance Confirmed X</button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid align-items-center">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="input-group mb-0">
                                <label htmlFor="searchInput" className="input-group-text input-group-text-custom" >Search</label>
                                <input type="text" className="form-control-custom rounded form-control" id="searchInput" placeholder="Type a keyword &#x1F50E;" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group mb-0">
                                <label htmlFor="dateInput" className="input-group-text input-group-text-custom">Date Interval</label>
                                <input type="date" className="form-control-custom rounded form-control" id="dateInput" placeholder="Date &#x1F4C5;" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group mb-0">
                                <label className="input-group-text input-group-text-custom" htmlFor="inputGroupFile01">Sort By</label>
                                <select className="form-control-custom rounded form-select" aria-label="Sort By">
                                    <option selected>Newest</option>
                                    <option value="older">Older</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="selectboxcontainer listitems">





            <div className="row card-group text-wrap text-start m-2">
            <div className='col-md-4 p-2'>  
  <div className="card rounded">
    <img className="card-img-top-custom card-img-top rounded" src={rectangelimage}   alt="Card image cap" />
    <div className="card-body-custom card-body">
      <h6 className='card-header-custom'>
      Lunch & Learn at Royal Canin’s St Charles site
                    </h6>
      <p className="card-text-custom card-text">
      with <b>Julian MARS, Justin MARS, Pamela MARS, Marijke MARS</b>
      <p>Still accepting Family members<div><b>14/03/2024 • ST CHARLES, MO, USA</b></div></p>
      <span>Created by Gina CALLEO on 09/04/2024</span>
      </p>
    </div>
    <div className="card-footer-custom card-footer">
      <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
      <span className='float-right-custom'>
      <button className='card-footer-button-right btn '>X</button>
      <button className='card-footer-button-right btn '>✔️</button>
      </span>
    </div>
  </div>
  </div>



  <div className='col-md-4 p-2'>  
  <div className="card rounded">
    <img className="card-img-top-custom card-img-top rounded" src={rectangelimage2}   alt="Card image cap" />
    <div className="card-body-custom card-body">
      <h6 className='card-header-custom'>
      Annual visit of alsace’s sites
                    </h6>
      <p className="card-text-custom card-text">
      with <b>Julian MARS, Justin MARS, Pamela MARS, Marijke MARS</b>
      <p>Still accepting Family members<div><b>10/06/2024 • Haguenau, bas-rhin, france</b></div></p>
      <span>Created by Gina CALLEO on 13/04/2024</span>
      </p>
    </div>
    <div className="card-footer-custom card-footer">
      <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
      <span className='float-right-custom'>
      <button className='card-footer-button-right btn '>X</button>
      <button className='card-footer-button-right btn '>✔️</button>
      </span>
    </div>

  </div>
  </div>



  

  

   <div className='col-md-4 p-2'>  
  <div className="card rounded">
    <img className="card-img-top-custom card-img-top rounded" src={rectangelimage}   alt="Card image cap" />
    <div className="card-body-custom card-body">
      <h6 className='card-header-custom'>
      Lunch & Learn at Royal Canin’s St Charles site
                    </h6>
      <p className="card-text-custom card-text">
      with <b>Julian MARS, Justin MARS, Pamela MARS, Marijke MARS</b>
      <p>Still accepting Family members<div><b>14/03/2024 • ST CHARLES, MO, USA</b></div></p>
      <span>Created by Gina CALLEO on 09/04/2024</span>
      </p>
    </div>
    <div className="card-footer-custom card-footer">
      <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
    </div>
  </div>
  </div>


  <div className='col-md-4 p-2'>  
  <div className="card rounded">
    <img className="card-img-top-custom card-img-top rounded" src={rectangelimage}   alt="Card image cap" />
    <div className="card-body-custom card-body">
      <h6 className='card-header-custom'>
      Lunch & Learn at Royal Canin’s St Charles site
                    </h6>
      <p className="card-text-custom card-text">
      with <b>Julian MARS, Justin MARS, Pamela MARS, Marijke MARS</b>
      <p>Still accepting Family members<div><b>14/03/2024 • ST CHARLES, MO, USA</b></div></p>
      <span>Created by Gina CALLEO on 09/04/2024</span>
      </p>
    </div>
    <div className="card-footer-custom card-footer">
      <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
      <span className='float-right-custom'>
      <button className='card-footer-button-right btn '>X</button>
      <button className='card-footer-button-right btn '>✔️</button>
      </span>
    </div>

  </div>
  </div>



  <div className='col-md-4 p-2'>  
  <div className="card rounded">
    <img className="card-img-top-custom card-img-top rounded" src={rectangelimage2}   alt="Card image cap" />
    <div className="card-body-custom card-body">
      <h6 className='card-header-custom'>
      Annual visit of alsace’s sites
                    </h6>
      <p className="card-text-custom card-text">
      with <b>Julian MARS, Justin MARS, Pamela MARS, Marijke MARS</b>
      <p>Still accepting Family members<div><b>10/06/2024 • Haguenau, bas-rhin, france</b></div></p>
      <span>Created by Gina CALLEO on 13/04/2024</span>
      </p>
    </div>
    <div className="card-footer-custom card-footer">
      <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
      <span className='float-right-custom'>
      <button className='card-footer-button-right btn '>X</button>
      <button className='card-footer-button-right btn '>✔️</button>
      </span>
    </div>

  </div>
  </div>



  

  

   



</div>




 
            </div>
            <div className="paging align-items-center">
                <span className="centered-text">1-1 OF 1 ELEMENTS</span>
            </div>
        </div>
    );
}

export default LeftContainer;
