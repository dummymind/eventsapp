import React from 'react';


export default function Footer() {
    return     (<footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <button type="button" className="btn btn-outline-light left-button">
            Back
          </button>
        </div>
        <div className="col-md-6 text-end">
          <button type="button" className="btn btn-outline-light right-buttons">
            DELETE DRAFT
          </button>
          <button type="button" className="btn btn-outline-light right-buttons">
            CLOSE EDITOR MODE
          </button>
          <button type="button" className="btn btn-outline-light right-buttons">
            SAVE CHANGES
          </button>
          <button type="button" className="btn btn-outline-light right-buttons">
            SEND FOR VALIDATION
          </button>
        </div>
      </div>
    </div>
  </footer>
  );

}