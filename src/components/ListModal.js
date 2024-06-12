import React, { useState } from 'react';
import './Modal.css'; // Import your CSS for modal styling
import rectangelimage from '../images/capture_decran_20240313_a_16271.png'
import rectangelimage2 from '../images/rectangle_1871.png'


const ListModal = ({ showModal, toggleModal }) => {
  

  return (
    <>
      {showModal && (
        // <div className="modal-background bg-light rounded">
        //   <div className="modal-content">
        //     <span className="close-btn" onClick={toggleModal}>&times;</span>
        //     <h2>Example Modal</h2>
        //     <p>Modal body content goes here...</p>
        //     <button className="btn btn-secondary" onClick={toggleModal}>
        //       Close
        //     </button>
        //     <button className="btn btn-primary">Save Changes</button>
        //   </div>
        // </div>
<div className='modal-example '>
        <div className="modal-background ">
        <div className="modal-content bg-light rounded">
       
        

        <div className="calendar-header row">
            <div className="col-1">
                <button className="calendarbutton btn btn-success">&lt;</button>
            </div>
            <div className="col-3 text-center">
                <h6>TOP 3</h6>
            </div>
            <div className="col-1">
                <button className="calendarbutton btn btn-success">&gt;</button>
            </div>
            
        </div>


        
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
<div className='mt-3 text-center'>Near by event 'event name'</div>
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
<p></p>
<div className="card-footer-custom card-footer">
  <button className='card-footer-button btn rounded-pill'>OPEN EVENT</button>
  <span className='float-right-custom'>
  <button className='card-footer-button-right btn '>X</button>
  <button className='card-footer-button-right btn '>✔️</button>
  </span>
</div>

</div>
<div className='mt-3 text-center'>Family hasn't visted in 7 years</div>

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
  <button className='card-footer-button-confirmed btn rounded-pill'>CONFIRMED</button>
  <span className='float-right-custom'>
  <button className='card-footer-button-right btn '>X</button>
  <button className='card-footer-button-right btn '>✔️</button>
  </span>
</div>
</div>
<div className='mt-3 text-center'>Family hasn't visted in 8 years</div>

</div>


<div className='mt-3 text-center'>
      <button onClick={toggleModal} type="button" className="buttonrequest btn btn-success mt-2 ml-2">CLOSE</button>
      </div>





















</div>
     
     
     
</div>
</div>
      </div> )}
    </>
  );
};

export default ListModal;
