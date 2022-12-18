import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { format } from 'date-fns';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getEventsRequest } from '../redux/events/actions';

function AddEvent(props) {
  const { openModal, setOpenModal, setRefresh, startDateModal, endDateModal } = props

  useEffect(() => {
    let sDate = format(new Date(startDateModal), 'yyyy-MM-dd')
    let eDate = format(new Date(startDateModal), 'yyyy-MM-dd')
    setEvent({ ...event, startDate: sDate, endDate: eDate })
  }, [startDateModal, endDateModal])

  useEffect(() => {
    setRefresh(false)
  })

  const change = () => {
    setOpenModal(false)
    setEvent({ ...event, allDay: false, weekly: false, everyday: false })
  }

  const customStyles = {
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '50px',
      zIndex: 1000
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    },
  };

  const [event, setEvent] = useState({
    title: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    startTime: format(new Date(), 'hh:mm:ss'),
    endTime: format(new Date(), 'hh:mm:ss'),
    weekday: 'Monday',
    allDay: false,
    weekly: false,
    everyday: false
  })

  const eventAllDay = {
    title: event.title,
    startDate: event.startDate,
    endDate: event.startDate,
    allDay: event.allDay,
    weekly: false,
    everyday: false
  }

  const normalEvent = {
    title: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    startTime: event.startTime,
    endTime: event.endTime,
    allDay: false,
    weekly: false,
    everyday: false
  }

  const weeklyEvent = {
    title: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    startTime: event.startTime,
    endTime: event.endTime,
    weekday: event.weekday,
    allDay: false,
    weekly: event.weekly,
    everyday: false
  }

  const everydayEvent = {
    title: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    startTime: event.startTime,
    endTime: event.endTime,
    allDay: false,
    weekly: false,
    everyday: event.everyday
  }

  const saveEvent = (e) => {
    e.preventDefault();
    setOpenModal(false)
    setEvent({ ...event, allDay: false, title: '', weekly: false, everyday: false })

    if (event.weekly === true) {
      axios.post(`http://localhost:8080/addEventWeekly`, weeklyEvent)
    } else if (event.everyday === true) {
      axios.post(`http://localhost:8080/addEventEveryday`, everydayEvent)
    } else if (event.allDay === true) {
      axios.post(`http://localhost:8080/addEvent`, eventAllDay)
    } else {
      axios.post(`http://localhost:8080/addEvent`, normalEvent)
    }
    setRefresh(true)
  }
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={openModal}
        onRequestClose={() => {
          setOpenModal(false)
          setEvent({ ...event, allDay: false, weekly: false, everyday: false })
        }
        }>
        <h2>Add Event</h2>
        <form onSubmit={saveEvent}>
          <label>Event: </label>
          <input type='text'
            value={event.title}
            onChange={e => setEvent({ ...event, title: e.target.value })}
            placeholder='Enter Event...' />
          <div></div>
          <label>Start Date: </label>
          <input type="date"
            value={event.startDate}
            onChange={e => setEvent({ ...event, startDate: e.target.value })} />
          <div></div>
          <label>End Date: </label>
          <input type="date"
            disabled={event.allDay}
            value={event.endDate}
            onChange={e => setEvent({ ...event, endDate: e.target.value })} />
          <div></div>
          <label>Start Time: </label>
          <input type="time"
            disabled={event.allDay}
            value={event.startTime}
            onChange={e => setEvent({ ...event, startTime: e.target.value })} />
          <div></div>
          <label>End Time: </label>
          <input type="time"
            disabled={event.allDay}
            value={event.endTime}
            onChange={e => setEvent({ ...event, endTime: e.target.value })} />
          <div></div>
          <input type="checkbox"
            disabled={event.weekly || event.everyday}
            value={event.allDay}
            onChange={e => setEvent({ ...event, allDay: e.target.checked })} />
          <label>All Day</label>
          <div></div>
          <input type="checkbox"
            disabled={event.everyday || event.allDay}
            value={event.weekly}
            onChange={e => setEvent({ ...event, weekly: e.target.checked })} />
          <label>Weekly</label>
          <div />
          <label>Weekday: </label>
          <select disabled={!event.weekly} value={event.weekday} onChange={(e) => setEvent({ ...event, weekday: e.target.value })}>
            <option value={"Monday"}>Monday</option>
            <option value={"Tuesday"}>Tuesday</option>
            <option value={"Wednesday"}>Wednesday</option>
            <option value={"Thursday"}>Thursday</option>
            <option value={"Friday"}>Friday</option>
            <option value={"Saturday"}>Saturday</option>
            <option value={"Sunday"}>Sunday</option>
          </select>
          <div />
          <input type="checkbox"
            value={event.everyday}
            disabled={event.weekly || event.allDay}
            onChange={e => setEvent({ ...event, everyday: e.target.checked })} />
          <label>Everyday</label>
          <div></div>
          <button type='submit'>ADD</button>
          <div><br /></div>
          <div><button onClick={change}>Close</button></div>
        </form>
      </Modal>
    </div>
  )
}

export default AddEvent