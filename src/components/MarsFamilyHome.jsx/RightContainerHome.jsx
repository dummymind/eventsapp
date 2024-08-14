import React from 'react';
import Calendar from './CalendarHome';

import FutureEvents from './FutureEventHome';
function RightContainer() {
    return (
        <div className="rightcontainer" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
            {/* start of calendar */}
            <div className="calendar-header row">
                <div className="col-1">
                    <button className="calendarbutton btn btn-success">&lt;</button>
                </div>
                <div className="col-3 text-center">
                    <h6>MARCH</h6>
                </div>
                <div className="col-1">
                    <button className="calendarbutton btn btn-success">&gt;</button>
                </div>
                <div className="col-1">
                    <button className="calendarbutton btn btn-success">&lt;</button>
                </div>
                <div className="col-3 text-center">
                    <h6>2024</h6>
                </div>
                <div className="col-2">
                    <button className="calendarbutton btn btn-success">&gt;</button>
                </div>
            </div>
<Calendar/>
<FutureEvents/>
        </div>
    );
}

export default RightContainer;
