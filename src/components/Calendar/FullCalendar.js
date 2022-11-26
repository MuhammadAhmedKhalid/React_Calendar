import React, { Component } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './FullCalendar.css';
// import events from './events';


const localizer = momentLocalizer(moment)
// BigCalendar.momentLocalizer(moment);


class FullCalendar extends Component {
  render() {
    // console.log({events})
    const views = ['month', 'week', 'day'];
    const messages = {
      previous: 'back',
      next: 'next'
    };
    const events = [
      
      {
        title: 'DTS STARTS ef',
        startDate: new Date('November 25, 2022 11:13:00'),
        endDate: new Date('November 25, 2022 12:13:00')
      },
      {
        title: 'All Day Event very long title',
        allDay: true,
        startDate: new Date('November 26, 2022'),
        endDate: new Date('November 27, 2022')
      },
      {
        title: 'DTS STARTS',
        startDate: new Date('November 30, 2022 21:13:00'),
        endDate: new Date('November 30, 2022 23:13:00')
      },
      {
        title: 'DTS STARTS e',
        startDate: new Date('November 29, 2022 07:13:00'),
        endDate: new Date('November 29, 2022 08:13:00')
      }
    ];

    return (
      <div className="full-calendar-wrapper">
        <Calendar
          style={{ height: 800, margin: "50px" }}
          localizer={localizer}
          events={events}
          startAccessor="startDate"
          endAccessor="endDate"
          views={views}
          defaultView="month"
          messages={messages}
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
        />
      </div>
    );
  }
}

export default FullCalendar;
