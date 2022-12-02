import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEvent from '../../form/AddEvent';
import { format } from 'date-fns';
import ShowEvent from '../../form/ShowEvent';
import axios from 'axios';

const localizer = momentLocalizer(moment)

function FullCalendar() {

  const[events, setEvents] = useState()
  const[refresh, setRefresh] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8080/getEvents')
    .then(response => {setEvents(response.data)})
    .catch(error => {console.log(error)})
  },[refresh])

  const[openModal, setOpenModal] = useState(false)
  const[detailModal, setDetailModal] = useState(false)

  const[id, setId] = useState()
  const[eventTitle, setEventTitle] = useState('')
  const[startDate, setStartDate] = useState()
  const[endDate, setEndDate] = useState()
  const[startTime, setStartTime] = useState()
  const[endTime, setEndTime] = useState()
  const[allDay, setAllDay] = useState()
  
  const[startDateModal, setStartDateModal] = useState(format(new Date(), 'MMMM dd, yyyy'))
  const[endDateModal, setEndDateModal] = useState(format(new Date(), 'MMMM dd, yyyy'))

  const change = (slotInfo) => {
      setStartDateModal(slotInfo.start.toDateString())
      setEndDateModal(slotInfo.start.toDateString())
      setOpenModal(true)
    }

  const showDetails =(event) => {
    setId(event.id)
    setEventTitle(event.title)
    setStartDate(event.startDate)
    setEndDate(event.endDate)
    setStartTime(event.startTime)
    setEndTime(event.endTime)
    setAllDay(event.allDay)
    setDetailModal(true)
  } 
  
  return (
    <div>
      <Calendar
        style={{ height: 840, margin: "50px"}}
        messages={{today: 'Current'}}
        localizer={localizer}
        events={events}
        views={['month', 'day']}
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
          <AddEvent setRefresh={setRefresh} setOpenModal={setOpenModal} openModal={openModal} 
                    startDateModal={startDateModal} endDateModal={endDateModal} />
      </div>
      <div>
        <ShowEvent setDetailModal={setDetailModal} detailModal={detailModal} eventTitle={eventTitle} setRefresh={setRefresh} id={id}
                  startDate={startDate} endDate={endDate} startTime={startTime} endTime={endTime} allDay={allDay}/>
      </div>
      </div>
  );
}

export default FullCalendar