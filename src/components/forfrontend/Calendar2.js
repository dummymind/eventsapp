import React, { useState, useEffect } from 'react';

function Calendar() {
    const [calendarData, setCalendarData] = useState([]);
    const d = new Date();
    const month = d.getMonth(); // Define month here

    // Function to generate calendar data
    const generateCalendar = () => {
        const year = d.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        const calendarArray = [];

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDay) || date > daysInMonth) {
                    week.push(null);
                } else {
                    week.push(date++);
                }
            }
            calendarArray.push(week);
            if (date > daysInMonth) break;
        }

        setCalendarData(calendarArray);
    };

    // useEffect to generate calendar data on component mount
    useEffect(() => {
        generateCalendar();
    }, []);

    return (
        <div className="calendar">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendarData.map((week, index) => (
                            <tr key={index}>
                                {week.map((day, index) => (
                                    <td key={index} className={day === new Date().getDate() && month === new Date().getMonth() ? 'today' : ''}>
                                        {day}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;
