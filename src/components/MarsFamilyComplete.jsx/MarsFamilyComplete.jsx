import React from 'react';
import { useState } from 'react';
// import '../vip.module.css'
import map from '../../images/map.jpg';
import LeftContainer from '../../components/MarsFamilyHome.jsx/LeftContainerHome';
import RightContainer from '../../components/MarsFamilyHome.jsx/RightContainerHome';
import ListModal from '../../components/ListModal';
export default function Vip2(){

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

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
                       
                            <div className="input-group mt-2">
                                <label htmlFor="searchInput" className="p-0 font-700 input-group-text-custom-search  input-group-text input-group-text-custom" >Search</label>
                                <input type="text" className="form-control-custom-search form-control-custom rounded form-control" id="searchInput" placeholder="Type a keyword" />
                            </div>
                       
      


      <div className="mt-3 font-800 text-uppercase" style={{ fontSize: 14 }}>
        FILTERS
      </div>
      <div className='input-group'>
      <label htmlFor="searchInput" className="p-0 font-700 input-group-text-custom-search  input-group-text input-group-text-custom" >Select Region</label> 
       <select className="custom-select-form custom-select2 rounded-pill form-select rounded form-select">
                                    <option selected>North America</option>
                                    <option value="older">Older</option>
                                </select>
                               
      </div>
      <div
        className="mt-2 d-flex flex-column text-blue2"
        style={{ fontSize: 12 }}
      >
        <div className="align-items-center mb-2 d-flex ">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className=" font-mars-centra">My Events </span>
          <div class="circle-container ms-auto">
      <span class="circle8"></span>
    </div>
  
        </div>
        <div className="d-flex align-items-center mb-2">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className="ml-2 font-mars-centra">Other Family Events</span>
          <div class="circle-container ms-auto">
      <span class="circle9"></span>
    </div>
        </div>
        <div className="d-flex align-items-center mb-2">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className="ml-2 font-mars-centra">Needs family members</span>
          <div class="circle-container ms-auto">
      <span class="circle10"></span>
    </div>
        </div>
        <div className="d-flex align-items-center mb-2">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className="ml-2 font-mars-centra">
          Suggested Visits
          </span>
          <div class="circle-container ms-auto">
      <span class="circle11"></span>
    </div>
        </div>
      </div>
      
      <div className='input-group'>
      <label htmlFor="searchInput" className="p-0 font-700 input-group-text-custom-search  input-group-text input-group-text-custom" >Select date interval</label> 
       <select className="custom-select-form custom-select2 rounded-pill form-select rounded form-select">
                                    <option selected>2014 to 2024 </option>
                                    <option value="older">Older</option>
                                </select>
                               
      </div>
      
        <div className='mt-3 text-center'>
      <button onClick={toggleModal} type="button" className="col-6 buttonrequest btn btn-success mt-2 ml-2">View suggested visit</button>
      </div>
    </div>
  </div>
  <div className="col-md-9 mt-5 mb-3 rounded">
      {/* <img
        src={map}
        className="img-fluid"
      /> */}
   
   <div className="image-container">
  <img src={map} className="img-fluid" />
  <div className="circle circle1" >1</div>
  <div className="circle circle2" >2</div>
  <div className="circle circle3" >3</div>
  <div className="circle circle4" />
  <div className="circle circle5" />
  <div className="circle circle6" />
  <div className="circle circle7" />

  <div class="zoom-buttons">
        <button class=" " id="zoom-in">+</button>
        <button class=" " id="zoom-out">-</button>
      </div>
<select className="dropdown-top-right rounded-pill form-select rounded form-select">
                                    <option selected>North America</option>
                                    <option value="older">Older</option>
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

        <ListModal showModal={showModal} toggleModal={toggleModal}/>
</div>

    )
}