import React from 'react';

function CalendarHeader({ month, year, onMonthChange, onYearChange }) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="calendar-header row">
            <div className="col-1">
                <button className="calendar-button btn btn-success" onClick={() => onMonthChange(-1)}>&lt;</button>
            </div>
            <div className="col-3 text-center">
                <h6>{monthNames[month]}</h6>
            </div>
            <div className="col-1">
                <button className="calendar-button btn btn-success" onClick={() => onMonthChange(1)}>&gt;</button>
            </div>
            <div className="col-1">
                <button className="calendar-button btn btn-success" onClick={() => onYearChange(-1)}>&lt;</button>
            </div>
            <div className="col-3 text-center">
                <h6>{year}</h6>
            </div>
            <div className="col-2">
                <button className="calendar-button btn btn-success" onClick={() => onYearChange(1)}>&gt;</button>
            </div>
        </div>
    );
}

export default CalendarHeader;
