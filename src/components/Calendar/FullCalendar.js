import React, { useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events'
import AddEvent from '../../form/AddEvent';
import { format } from 'date-fns';
import ShowEvent from '../../form/ShowEvent';

const localizer = momentLocalizer(moment)

function FullCalendar() {
  const[openModal, setOpenModal] = useState(false)
  const[detailModal, setDetailModal] = useState(false)

  const[eventTitle, setEventTitle] = useState('')
  const[eventStartDateTime, setEventStartDateTime] = useState(new Date())
  const[eventEndDateTime, setEventEndDateTime] = useState(new Date())
  
  const[startDate, setStartDate] = useState(format(new Date(), 'MMMM dd, yyyy'))
  const[endDate, setEndDate] = useState(format(new Date(), 'MMMM dd, yyyy'))

  const change = (slotInfo) => {
      setStartDate(slotInfo.start.toDateString())
      setEndDate(slotInfo.start.toDateString())
      setOpenModal(true)
    }

  const showDetails =(event) => {
    setEventTitle(event.title)
    setEventStartDateTime(event.startDate)
    setEventEndDateTime(event.endDate)
    setDetailModal(true)
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
        onSelectEvent={
          event => showDetails(event)
        }
        onSelectSlot={
          slotInfo => change(slotInfo)
        } 
      />
      <div>
          <AddEvent setOpenModal={setOpenModal} openModal={openModal} 
                    startDate={startDate} endDate={endDate}
                    setStartDate={setStartDate} setEndDate={setEndDate} />
      </div>
      <div>
        <ShowEvent setDetailModal={setDetailModal} detailModal={detailModal} 
                   eventTitle={eventTitle} eventStartDateTime={eventStartDateTime} eventEndDateTime={eventEndDateTime}/>
      </div>
      </div>
  );
}

export default FullCalendar