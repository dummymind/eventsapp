
import calendaricon from '../../images/vector_x2.svg'
import Cover from './Cover';

function Summary()
{


    return (

        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
    
          <div className='container-fluid-custom'>
            <Cover />
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
               

             
  <div class=" bg-light rounded p-3 mt-3">
  <div className="file-drop-area">
    <span className="choose-file-button">+</span>
    <span className="file-message col-md-6">
      Click here to upload files or drag &amp; drop files in this zone
    </span>
    <input className="file-input" type="file" multiple="" />
  </div>
  </div>


</div>




                </div>


              </div>
            </div>
          </div>
    
    
      );
    




    }

export default Summary;