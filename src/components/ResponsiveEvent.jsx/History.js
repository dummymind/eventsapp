
import calendaricon from '../../images/vector_x2.svg'

import Cover from './Cover';
import EventSideBar from './EventSideBar';
function History()
{


    return (

        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    
          <div className='container-fluid-custom'>
            <Cover />
            <div className="container-fluid">
              <div className="row m-2 mb-5">
         <EventSideBar />
    
                <div className="col-md-9 mb-5">
               

             
                <div className=" bg-light rounded p-3 mt-3">
  <div className="form-group row mb-2 align-items-center">
    <label
      htmlFor="staticEmail"
      className="custom-font-lt col-sm-1 col-form-label"
    >
      04/04/2024
    </label>
    <div className="col-sm-2 ">
      <strong>
        <input
          type="text"
          className="custom-font-lt custom-font-lt-h  form-control-plaintext-cus form-control-plaintext"
          id="staticEmail"
          placeholder="Jason RIPPER"
        />
      </strong>
      <input
        type="text"
        className="custom-font-lt form-control-plaintext-cus form-control-plaintext "
        id="staticEmail"
        placeholder="Visit Requester"
      />
    </div>
  </div>
  <div className="form-group row mb-2">
    <div className="col-sm-12 ">
      <input
        type="text"
        readOnly=""
        className="custom-font-lt form-control"
        id="staticEmail"
        placeholder="Draft created"
      />
    </div>
  </div>
  <div className="form-group row mb-2 align-items-center">
    <div className="col-sm-10 pr-0">
      <input
        type="text"
        readOnly=""
        className="custom-font-lt form-control"
        id="staticEmail"
        placeholder="Leave a comment"
      />
    </div>
    <div className="col-sm-2 pl-0">
      <button type="button" className="buttonrequest btn btn-success ml-2">
        SEND YOUR MESSAGE{" "}
      </button>
    </div>
  </div>
</div>



</div>




                </div>


              </div>
            </div>
          </div>
    
    
      );
    




    }

export default History;