import React, { useState } from 'react';
import Calendar from './Calendar';
import './Calendar.css'

function RightContainer({ eventDates }) {
    const [date, setDate] = useState(new Date());

    const handleMonthChange = (direction) => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + direction);
        setDate(newDate);
    };

    const handleYearChange = (direction) => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() + direction);
        setDate(newDate);
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <div className="rightcontainer" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
                {/* start of calendar */}
                <div className="calendar-header row">
                    <div className="col-1">
                        <button className="calendarbutton btn btn-success" onClick={() => handleMonthChange(-1)}>&lt;</button>
                    </div>
                    <div className="col-3 text-center">
                        <h6>{monthNames[date.getMonth()]}</h6>
                    </div>
                    
                    <div className="col-1">
                        <button className="calendarbutton btn btn-success" onClick={() => handleMonthChange(1)}>&gt;</button>
                    </div>
                    <div className="col-1">
                        <button className="calendarbutton btn btn-success" onClick={() => handleYearChange(-1)}>&lt;</button>
                    </div>
                    <div className="col-3 text-center">
                        <h6>{date.getFullYear()}</h6>
                    </div>
                    <div className="col-2">
                        <button className="calendarbutton btn btn-success" onClick={() => handleYearChange(1)}>&gt;</button>
                    </div>
                </div>
                <Calendar date={date} eventDates={eventDates} />
            </div>
        </>
    );
}

export default RightContainer;
