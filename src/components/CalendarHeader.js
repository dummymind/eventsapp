import React from 'react';
 
function CalendarHeader() {
    return (
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
    );
}
 
export default CalendarHeader;