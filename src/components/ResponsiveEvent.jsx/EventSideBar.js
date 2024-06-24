function EventSideBar()
{

    return <div className="col-md-2">
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
}

export default EventSideBar;