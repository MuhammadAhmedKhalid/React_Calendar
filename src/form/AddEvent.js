import React, { useState } from 'react'
import Modal from 'react-modal'
import { format } from 'date-fns';

function AddEvent(props) {
    const{openModal,setOpenModal, startDate, endDate, setStartDate, setEndDate}=props

    const change = () => {
        setOpenModal(false)
        setAllDay(false)
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
        backgroundColor:'rgba(0, 0, 0, .7)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
      },
    };  

    const[event, setEvent] = useState('')
    const[startTime, setStartTime] = useState(format(new Date(), 'kk:mm:ss'))
    const[endTime, setEndTime] = useState(format(new Date(), 'kk:mm:ss'))
    const[allDay, setAllDay] = useState(false)
    
    const saveEvent = (e) => {
      e.preventDefault();
      setOpenModal(false)

      console.log('Event Added!')
      console.log('Event:',event)
      switch(allDay){
        case true:
          console.log('Date:',startDate)
          break
        case false:
          console.log('Start time:',startTime)
          console.log('Start date:',startDate)
          console.log('End time:',endTime)
          console.log('End date:',endDate)
          break
        default:
          break
      }
    }
  return (
    <div>
        <Modal
        style={customStyles}
        isOpen={openModal}
        onRequestClose={()=>
          {setOpenModal(false) 
            setAllDay(false)}
        }>
          <h2>Add Event</h2>
          <form onSubmit={saveEvent}>
            <label>Event: </label>
            <input type='text' value={event} onChange={e => setEvent(e.target.value)} placeholder='Enter Event...'/>
            <div></div>
            <label>Start Date: </label>
            <input type="date" value={format(new Date(startDate), 'yyyy-MM-dd')} onChange={e => setStartDate(e.target.value)}/>
            <div></div>
            <label>End Date: </label>
            <input type="date" disabled={allDay} id="eDate" value={format(new Date(endDate), 'yyyy-MM-dd')} onChange={e => setEndDate(e.target.value)}/>
            <div></div>
            <label>Start Time: </label>
            <input type="time" disabled={allDay} value={startTime} onChange={e => setStartTime(e.target.value)}/>
            <div></div>
            <label>End Time: </label>
            <input type="time" disabled={allDay} value={endTime} onChange={e => setEndTime(e.target.value)}/>
            <div></div>
            <input type="checkbox" id="cBox" value={allDay} onChange={e => setAllDay(e.target.checked)}/>
            <label>All Day</label>
            <div></div>
            <button type='submit'>ADD</button>
            <div><br/></div>
            <div><button onClick={change}>Close</button></div>
          </form>
        </Modal>
    </div>
  )
}

export default AddEvent