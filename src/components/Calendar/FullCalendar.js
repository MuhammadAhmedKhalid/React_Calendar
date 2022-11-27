import React, { useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events'
import AddEvent from '../../form/AddEvent';

const localizer = momentLocalizer(moment)

function FullCalendar() {
  const[openModal, setOpenModal] = useState(false)
  const change = () => {
      setOpenModal(true)
    }
  return (
    <div>
      <Calendar
        style={{ height: 800, margin: "50px" }}
        localizer={localizer}
        events={events}
        startAccessor="startDate"
        endAccessor="endDate"
        selectable
        
        onSelectEvent={event => 
          alert(
            `Event: ${event.title} \nStart time: ${event.startDate} \nEnd time: ${event.endDate}`
          )
        }
        // onSelectSlot={slotInfo =>
        //   alert(
        //     `\nStart: ${slotInfo.start.toLocaleString()}` +
        //     `\nEnd: ${slotInfo.end.toLocaleString()}`
        //   )
        // }
        onSelectSlot={change}
      />
      <div>
          <AddEvent setOpenModal={setOpenModal} openModal={openModal}/></div>
      </div>
  );
}

export default FullCalendar