
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useFormContext from "./useFormContext.js";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const { page,setPage,handlepageChange } = useFormContext()
   const location = useLocation();

    return (
        // <navigation className="navigation">
            // <div className="col-md-2 p-0">
            <>
                <ul className="nav nav-custom flex-column">
                    <li className="nav-item">
                        <NavLink onClick={(e) => { e.preventDefault(); handlepageChange(0); }}
                            className="nav-custom nav-link active"
                            aria-current="page"
                            href="#"
                        >
                            EVENT DETAILS <span className="circle red-dot"></span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={(e) => { e.preventDefault(); handlepageChange(1); }} className="nav-custom nav-link" href="#">
                            SCHEDULE &amp; ITINERARY <span className="circle red-dot"></span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={(e) => { e.preventDefault(); handlepageChange(2); }} className="nav-custom nav-link">
                            GUESTS <span className="circle red-dot"></span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={(e) => { e.preventDefault(); handlepageChange(3); }} className="nav-custom nav-link" href="#">
                            HISTORY &amp; COMMENTS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={(e) => { e.preventDefault(); handlepageChange(4); }} className="nav-custom nav-link" href="#">
                            POST EVENT SUMMARY
                        </NavLink>
                    </li>
                </ul>
        </>
      
    );
};
