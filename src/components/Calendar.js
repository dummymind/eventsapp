import React, { useEffect, useState } from 'react';
import './Calendar.css';

function Calendar({ date, openEventDates }) {
    const [calendarData, setCalendarData] = useState([]);

    // Function to generate calendar data
    const generateCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        const calendarArray = [];

        let dateCounter = 1;
        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < firstDay) || dateCounter > daysInMonth) {
                    week.push(null);
                } else {
                    week.push(dateCounter++);
                }
            }
            calendarArray.push(week);
            if (dateCounter > daysInMonth) break;
        }

        setCalendarData(calendarArray);
    };

    // useEffect to generate calendar data whenever the date changes
    useEffect(() => {
        generateCalendar();
    }, [date]);

    // Function to check if a date is in the open event dates
    const isOpenEventDate = (day) => {
        return openEventDates.some(openEventDate => {
            const eventDate = new Date(openEventDate);
            return (
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === day
            );
        });
    };

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
                                    <td 
                                        key={index} 
                                        className={`${day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear() ? 'today' : ''} ${isOpenEventDate(day) ? 'highlight' : ''}`}
                                    >
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
