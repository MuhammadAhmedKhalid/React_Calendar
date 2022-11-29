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

  const[eventTitle, setEventTitle] = useState('')
  const[startDate, setStartDate] = useState()
  const[endDate, setEndDate] = useState()
  const[startTime, setStartTime] = useState()
  const[endTime, setEndTime] = useState()
  
  const[startDateModal, setStartDateModal] = useState(format(new Date(), 'MMMM dd, yyyy'))
  const[endDateModal, setEndDateModal] = useState(format(new Date(), 'MMMM dd, yyyy'))

  const change = (slotInfo) => {
      setStartDateModal(slotInfo.start.toDateString())
      setEndDateModal(slotInfo.start.toDateString())
      setOpenModal(true)
    }

  const showDetails =(event) => {
    setEventTitle(event.title)
    setStartDate(event.startDate)
    setEndDate(event.endDate)
    setStartTime(event.startTime)
    setEndTime(event.endTime)
    setDetailModal(true)
  } 
  
  return (
    <div>
      <Calendar
        style={{ height: 800, margin: "50px" }}
        localizer={localizer}
        events={events}
        views={['month']}
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
        <ShowEvent setDetailModal={setDetailModal} detailModal={detailModal} eventTitle={eventTitle} 
                  startDate={startDate} endDate={endDate} startTime={startTime} endTime={endTime} />
      </div>
      </div>
  );
}

export default FullCalendar