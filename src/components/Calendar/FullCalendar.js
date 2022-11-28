import React, { useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events'
import AddEvent from '../../form/AddEvent';
import { format } from 'date-fns';

const localizer = momentLocalizer(moment)

function FullCalendar() {
  const[openModal, setOpenModal] = useState(false)
  const[startDate, setStartDate] = useState(format(new Date(), 'MMMM dd, yyyy'))
  const[endDate, setEndDate] = useState(format(new Date(), 'MMMM dd, yyyy'))
  const change = (slotInfo) => {
      setStartDate(slotInfo.start.toDateString())
      setEndDate(slotInfo.start.toDateString())
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
            `Event: ${event.title} \nStart time: ${ format(new Date(event.startDate), 'MMMM dd, yyyy kk:mm:ss')} \nEnd time: ${ format(new Date(event.endDate), 'MMMM dd, yyyy kk:mm:ss')}`
          )
        }
        onSelectSlot={
          slotInfo => change(slotInfo)
        } 
      />
      <div>
          <AddEvent setOpenModal={setOpenModal} openModal={openModal} 
                    startDate={startDate} endDate={endDate}
                    setStartDate={setStartDate} setEndDate={setEndDate} /></div>
      </div>
  );
}

export default FullCalendar