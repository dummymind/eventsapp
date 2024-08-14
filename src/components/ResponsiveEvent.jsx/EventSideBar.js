import { NavLink } from "react-router-dom";
import "./EventSideBar.css";
 
function EventSideBar()
{
 
    return <div className="col-md-2 p-0">
    <ul className="nav nav-custom flex-column">
      <li className="nav-item">
        <NavLink to="/event"
          className=" nav-custom nav-link active"
          aria-current="page"
          href="#"
        >
         EVENT DETAILS <span className="circle-cus circle1-cus" ></span>
        </NavLink>
      </li>
      <li className="nav-item">
        < NavLink to ="/schedule" className=" nav-custom nav-link" href="#">
          SCHEDULE &amp; ITINERARY    
          </NavLink>
       
      </li>
      <li className="nav-item">
        <NavLink to="/guests" className=" nav-custom nav-link">
          GUESTS     
          </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/history" className=" nav-custom nav-link" href="#">
          HISTORY &amp; COMMENTS
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/summary" className=" nav-custom nav-link" href="#">
          POST EVENT SUMMARY
        </NavLink>
      </li>
    </ul>
  </div>
}
 
export default EventSideBar;