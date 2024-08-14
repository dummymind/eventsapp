import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import useFormContext from "./ResponsiveEvent.jsx/useFormContext"
import { useNavigate } from "react-router-dom";

//const [eventFormData, seteventFormData] = useState({});




export default function Footer() {
  const { title,   eventFormData, setEventFormData, canSubmit, handleSubmit ,setErrors,
    errors,handleDeleteDraft,handleNonEditable,handleSendForValidation } = useFormContext()
    const navigate = useNavigate();
    return     (<footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          
          <button type="button" className="btn btn-outline-light left-button"
          onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <div className="col-md-6 text-end">
          <button type="button" id="deleteDraft" className="btn btn-outline-light right-buttons" onClick={handleDeleteDraft}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.7377 2.56289C6.66895 1.94414 6.15332 1.46289 5.5002 1.46289C4.84707 1.46289 4.33145 1.94414 4.2627 2.56289L1.68457 2.56289L1.68457 3.31914H2.44082L2.44082 10.1941C2.44082 10.4004 2.6127 10.5723 2.81895 10.5723L8.18145 10.5723C8.3877 10.5723 8.55957 10.4004 8.55957 10.1941L8.55957 3.31914L9.31582 3.31914V2.56289L6.7377 2.56289ZM5.5002 2.15039C5.74082 2.15039 5.98145 2.32227 6.0502 2.56289L4.98457 2.56289C5.01895 2.32227 5.25957 2.15039 5.5002 2.15039ZM7.80332 9.81602L3.19707 9.81602L3.19707 3.31914L7.76895 3.31914L7.76895 9.81602H7.80332Z" fill="white"/>
<path d="M5.12148 4.0752H4.36523L4.36523 9.0252H5.12148L5.12148 4.0752Z" fill="white"/>
<path d="M6.63418 4.0752H5.87793L5.87793 9.0252H6.63418L6.63418 4.0752Z" fill="white"/>
          </svg>
            DELETE DRAFT
          </button>
          <button type="button" id="closeEdit" className="btn btn-outline-light right-buttons" onClick={handleNonEditable}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.61565 6.78325C4.39239 6.57552 4.26696 6.29377 4.26696 6C4.26696 5.79873 4.32583 5.60311 4.43471 5.43307L3.68811 5.43316C3.62236 5.61085 3.58666 5.80155 3.58666 6C3.58666 6.49703 3.81058 6.94541 4.16967 7.26259C4.5051 7.55886 4.95848 7.74064 5.45748 7.74064C5.95648 7.74064 6.40986 7.55886 6.74529 7.26259C7.10438 6.94541 7.3283 6.49703 7.3283 6C7.3283 5.80139 7.29254 5.61054 7.2267 5.43274L6.4801 5.43282C6.58907 5.60292 6.648 5.79864 6.648 6C6.648 6.29377 6.52257 6.57552 6.2993 6.78325C6.07604 6.99098 5.77322 7.10768 5.45748 7.10768C5.14173 7.10768 4.83892 6.99098 4.61565 6.78325Z" fill="white"/>
<path d="M2.72882 3.16583C1.93528 3.63722 1.35549 4.39112 0.823922 5.4335L1.60256 5.43341C2.55839 3.7143 3.56913 3.25 5.5 3.25C7.42982 3.25 8.44146 3.71428 9.39738 5.43248L10.176 5.43238C9.64435 4.39035 9.06425 3.6368 8.27064 3.16562C7.47955 2.69594 6.56894 2.5625 5.5 2.5625C4.43059 2.5625 3.51987 2.69592 2.72882 3.16583Z" fill="white"/>
<path d="M4.61565 5.21675C4.83892 5.00902 5.14173 4.89232 5.45748 4.89232C5.77322 4.89232 6.07604 5.00902 6.2993 5.21675C6.36953 5.2821 6.43009 5.35476 6.4801 5.43282L7.2267 5.43274C7.12776 5.16558 6.96089 4.92785 6.74529 4.73742C6.40986 4.44114 5.95648 4.25936 5.45748 4.25936C4.95848 4.25936 4.5051 4.44114 4.16967 4.73742C3.95396 4.92795 3.78702 5.16583 3.68811 5.43316L4.43471 5.43307C4.48475 5.35491 4.54535 5.28216 4.61565 5.21675Z" fill="white"/>
<path d="M10.176 6.56672C10.359 6.20834 10.3563 5.79188 10.1781 5.43661L10.176 6.56672Z" fill="white"/>
<path d="M8.27117 8.83417C9.0646 8.36285 9.64445 7.60887 10.176 6.56672L8.27117 8.83417Z" fill="white"/>
<path d="M10.176 6.56672L10.1781 5.43661L10.176 5.43238L9.39738 5.43248C9.45292 5.53231 9.50828 5.63638 9.56361 5.74484C9.64546 5.90802 9.64546 6.09396 9.56361 6.25417C8.55592 8.23019 7.54302 8.75 5.5 8.75C3.45804 8.75 2.44407 8.23019 1.43638 6.25516C1.39596 6.17553 1.375 6.08856 1.375 6.00049C1.375 5.91243 1.39596 5.82546 1.43638 5.74583C1.4917 5.63735 1.54704 5.53326 1.60256 5.43341L0.823922 5.4335L0.823331 5.43466L0.823985 6.56762L2.72936 8.83438L5.5 9.4375L8.27117 8.83417L10.176 6.56672Z" fill="white"/>
<path d="M5.5 9.4375C6.56941 9.4375 7.48012 9.30408 8.27117 8.83417L5.5 9.4375Z" fill="white"/>
<path d="M2.72936 8.83438C3.52045 9.30406 4.43105 9.4375 5.5 9.4375L2.72936 8.83438Z" fill="white"/>
<path d="M0.823985 6.56762C1.35564 7.60965 1.93575 8.3632 2.72936 8.83438L0.823985 6.56762Z" fill="white"/>
<path d="M0.82333 6.56633L0.823985 6.56762L0.823331 5.43466C0.734684 5.60931 0.6875 5.80273 0.6875 6.00049C0.6875 6.19826 0.734685 6.39168 0.82333 6.56633Z" fill="white"/>
</svg>
            CLOSE EDITOR MODE
          </button>
          <button  id="saveChanges" className="btn btn-outline-light right-buttons" onClick={handleSubmit}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83254 1.53125L1.83254 7.63341L9.16746 7.63341L9.16746 3.45388L8.04612 2.33254H6.57866L6.57866 4.36659L2.72629 4.36659L2.72629 2.33254H1.83254L1.83254 1.53125ZM1.83254 1.53125L8.37802 1.53125L9.96875 3.12198L9.96875 9.66746C9.96875 10.11 9.61 10.4688 9.16746 10.4688L1.83254 10.4688C1.39 10.4688 1.03125 10.11 1.03125 9.66746L1.03125 2.33254C1.03125 1.89 1.39 1.53125 1.83254 1.53125ZM3.52759 2.33254L3.52759 3.5653L5.77737 3.5653V2.33254L3.52759 2.33254ZM9.16746 8.4347H1.83254L1.83254 9.66746L9.16746 9.66746V8.4347Z" fill="white"/>
</svg>
            SAVE CHANGES
            </button>
          <button type="button" id="sendValidation" className="buttonrequest btn btn-outline-light right-buttons" onclick={handleSendForValidation}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.16523 3.72227L0.615234 4.27227L2.16211 5.81914C2.33398 5.99102 2.64336 5.99102 2.84961 5.81914L8.31524 0.353516L7.24961 0.353516L2.54023 5.06289L1.16523 3.72227Z" fill="currentColor"/>
</svg>
            SEND FOR VALIDATION
          </button>
        </div>
      </div>
    </div>
  </footer>
  );

}