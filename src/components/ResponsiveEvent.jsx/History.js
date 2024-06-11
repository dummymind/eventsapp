
import calendaricon from '../../images/vector_x2.svg'


function History()
{


    return (

        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    
          <div className='container-fluid-custom'>
            <div className="container-fluid">
              <div className="bd-placeholder-img custom-jumbotron jumbotron p-6 mt-3 p-md-3 text-white rounded mb-2 d-flex flex-column justify-content-end m-4">
                <div className="row bottom-row ml-2 mr-2">
                  <div className="col-12 col-md-8 p-2 px-0 bg-light rounded mb-5 mb-md-0 ">
                    <div className="content">
                      <h6>
                        <strong>Click here to modify the event</strong>
                      </h6>
                      <p>
                        <strong>
                          <img src={calendaricon} />
                          Event date: TBD
                        </strong>
                      </p>
                      <p>Status</p>
                      <div className="breadcrumb btn-group btn-breadcrumb rounded">
                        <a
                          href="#"
                          className="btn-custom btn btn-default selectbreadcrumb"
                        >
                          Draft
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Under Review
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Open Event
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Attendance confirmed
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Pending documentation
                        </a>
                        <a href="#" className="btn-custom btn btn-default">
                          Completed
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 px-0 position-relative">
                    <div className=" p-3 position-relative" style={{ height: "100%" }}>
                      <div className="bg-white rounded p-3 position-absolute bottom-0 end-0">
                        <button
                          type="button"
                          className="btn-custom btn btn-outline-primary "
                        >
                          <strong>UPLOAD COVER IMAGE</strong>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row m-2 mb-5">
                <div className="col-md-3">
                  <ul className="nav nav-custom flex-column">
                    <li className="nav-item">
                      <a
                        className=" nav-custom nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        EVENT DETAILS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        SCHEDULE &amp; ITINERARY
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        GUESTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        HISTORY &amp; COMMENTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-custom nav-link" href="#">
                        POST EVENT SUMMARY
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div className="col-md-9 mb-5">
               

             
                <div className=" bg-light rounded p-3 mt-3">
  <div className="form-group row mb-2 align-items-center">
    <label
      htmlFor="staticEmail"
      className="custom-font col-sm-2 col-form-label"
    >
      04/04/2024
    </label>
    <div className="col-sm-2 ">
      <strong>
        <input
          type="text"
          className="custom-font-lt form-control-plaintext-cus form-control-plaintext"
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
    <div className="col-sm-9 pr-0">
      <input
        type="text"
        readOnly=""
        className="custom-font-lt form-control"
        id="staticEmail"
        placeholder="Leave a comment"
      />
    </div>
    <div className="col-sm-3 pl-0">
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