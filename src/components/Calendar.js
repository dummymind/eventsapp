import React, { useState, useEffect } from 'react';

function Calendar({ date, eventDates }) {
  const [calendarData, setCalendarData] = useState([]);

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

  useEffect(() => {
    generateCalendar();
  }, [date]);

  const isEventDate = (day) => {
    return eventDates.some(eventDate => {
      const event = new Date(eventDate);
      return event.getFullYear() === date.getFullYear() &&
             event.getMonth() === date.getMonth() &&
             event.getDate() === day;
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
                  <td key={index} className={isEventDate(day) ? 'highlight' : ''}>
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