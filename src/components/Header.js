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
        <link
            href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css"
            rel="stylesheet"
        />





        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand mb-0" href="#">
                        <img src={Logo} alt="Logo" width="120" height="38" className="d-inline-block align-text-top" />
                    </a>
                    {/* <button type="button" className="buttonrequest btn btn-success ml-2">CREATE A NEW REQUEST</button> */}
                    <Link to="/schedule" className="buttonrequest btn btn-success ml-2">CREATE A NEW REQUEST</Link>
                </div>

                <form className="d-flex">
                    <span className="badge" style={{ fontSize: 'small',color:"darkblue" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg> Jason RIPPER
                    </span>
                    <span className="badge " style={{ fontSize: 'small', color: 'darkblue' }}>999
                        <svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                    </span>
                    <span className="badge" style={{ fontSize: 'small', color: 'darkblue' }}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 3.75c-4.55635 0-8.25 3.69365-8.25 8.25 0 4.5563 3.69365 8.25 8.25 8.25 4.5563 0 8.25-3.6937 8.25-8.25 0-4.55635-3.6937-8.25-8.25-8.25zm-9.75 8.25c0-5.38478 4.36522-9.75 9.75-9.75 5.3848 0 9.75 4.36522 9.75 9.75 0 5.3848-4.3652 9.75-9.75 9.75-5.38478 0-9.75-4.3652-9.75-9.75zm9.75-.75c.4142 0 .75.3358.75.75v3.5c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-3.5c0-.4142.3358-.75.75-.75zm0-3.25c-.5523 0-1 .44772-1 1s.4477 1 1 1h.01c.5523 0 1-.44772 1-1s-.4477-1-1-1z" fill="#000000" fill-rule="evenodd" /></svg>
                    </span>
                </form>
            </div>
        </nav></>
    );
}

export default Header;
