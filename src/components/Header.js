import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (<>
          <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
   


      
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand mb-0" href="#">
                        <img src={Logo} alt="Logo" width="100" height="35" className="d-inline-block align-text-top" />
                    </a>
                    {/* <button type="button" className="buttonrequest btn btn-success ml-2">CREATE A NEW REQUEST</button> */}
                    <Link to="/schedule" className="buttonrequest btn btn-success ml-2">CREATE A NEW REQUEST</Link>
                </div>

                <form className="d-flex">
                    <span className="badge text-bg-light" style={{ fontSize: 'small' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg> Jason RIPPER
                    </span>
                    <span className="badge text-bg-light" style={{ fontSize: 'small' }}>999 <i className="fa-regular fa-bell"></i></span>
                </form>
            </div>
        </nav></>
    );
}

export default Header;
