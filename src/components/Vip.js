import React from 'react';
// import '../vip.module.css'
import map from '../images/map.png';
import LeftContainer from './forfrontend/LeftContainer2';
import RightContainer from './forfrontend/RightContainer2';
export default function Vip(){

    return (
      <div className="container-fluid">

<div className="row">
  <div className="col-md-3 m-3 mt-5 mb-4 bg-light rounded ">
    <div className="p-2 text-blue bg-light">
      <div className="font-700" style={{ fontSize: 20 }}>
        <span style={{ color: "rgba(0, 215, 185, 1)" }}>Welcome</span>
        <br />
        Frank Mars
      </div>
      <div className="mt-4 font-800 text-uppercase" style={{ fontSize: 14 }}>
        my points of interests
      </div>
      <div
        className="mt-2 d-flex flex-column text-blue2"
        style={{ fontSize: 12 }}
      >
        <div className="align-items-center mb-2 ">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className=" font-mars-centra">Show/Hide all points</span>
        </div>
        <div className="d-flex align-items-center mb-2">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className="ml-2 font-mars-centra">Pending for validation</span>
        </div>
        <div className="d-flex align-items-center mb-2">
        <input
  className="form-check-input-custom2 form-check-input"
  type="checkbox"
  defaultValue=""
  id="flexCheckDefault"
  defaultChecked="checked"
/>
          <span className="ml-2 font-mars-centra">Upcoming events</span>
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
            Events with new comments
          </span>
        </div>
      </div>
      <div className="mt-4 font-800 text-uppercase" style={{ fontSize: 14 }}>
        unvisited sites
      </div>
      <div className="mt-2 text-blue2" style={{ fontSize: 12 }}>
        Show all unvisited sites since
      </div>
      <div
        className="d-flex justify-content-between p-1 mt-2 text-secondary"
        style={{ fontSize: 9 }}
      >
        <select className="custom-select rounded-pill form-select rounded form-select">
                                    <option selected>Select</option>
                                    <option value="older">Older</option>
                                </select>
      </div>
      
        
      <button type="button" className="buttonrequest btn btn-success mt-2 ml-2">View suggested visit</button>
    </div>
  </div>
  <div className="col-md-8 mt-5 mb-4 rounded">
      <img
        src={map}
        className="img-fluid"
      />
   
     </div>
</div>



        <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
          <div className="row">
            <div className="col-md-7">
              <LeftContainer />
            </div>
            <div className="col-md-4">
              <RightContainer />
            </div>
          </div>
        </div>


</div>

    )
}