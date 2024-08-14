import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-between">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand mb-0" href="#">
                            <img src={Logo} alt="Logo" width="100" height="35" className="d-inline-block align-text-top" />
                        </a>
                        <Link to="/event" className="buttonrequest btn btn-success ml-2">CREATE A NEW REQUEST</Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/administration-reports" className="btn btn-admin-reports">
                            <i className="fas fa-cog"></i> Administration & Reports
                        </Link>
                        <div className="profile-dropdown d-flex align-items-center">
                            <img src="https://via.placeholder.com/30" alt="User Avatar" className="avatar" />
                            <span className="user-name">Linda LISZKIEWICZ</span>
                            <i className="fa fa-chevron-down"></i>
                        </div>
                        <div className="notification">
                            <span className="badge">999</span>
                            <i className="fa fa-bell"></i>
                        </div>
                        <div className="info-icon">
                            <i className="fa fa-info-circle"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
