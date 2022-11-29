import React, { useState } from 'react'
import Modal from 'react-modal'
import { format } from 'date-fns';
import axios from 'axios'

function AddEvent(props) {
    const{openModal,setOpenModal, setRefresh
      // startDateModal, endDateModal
    }=props

    const change = () => {
        setOpenModal(false)
        setEvent({...event, allDay: false})
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

    const[event, setEvent] = useState({
      title: '',
      startDate: format(new Date(), 'yyyy-MM-dd'),
      endDate: format(new Date(), 'yyyy-MM-dd'),
      startTime: format(new Date(), 'hh:mm:ss'),
      endTime: format(new Date(), 'hh:mm:ss'),
      allDay: false,
    })

    const saveEvent = (e) => {
      e.preventDefault();
      setOpenModal(false)
      axios.post(`http://localhost:8080/addEvent`, event)
      setRefresh(true)
    }
  return (
    <div>
        <Modal
        style={customStyles}
        isOpen={openModal}
        onRequestClose={()=>
          {setOpenModal(false) 
            setEvent({...event, allDay: false})
          }
        }>
          <h2>Add Event</h2>
          <form onSubmit={saveEvent}>
            <label>Event: </label>
            <input type='text' 
                    value={event.title} 
                    onChange={e => setEvent({...event,title: e.target.value})} 
                    placeholder='Enter Event...'/>
            <div></div>
            <label>Start Date: </label>
            <input type="date" 
                    value={event.startDate} 
                    onChange={e => setEvent({...event, startDate: e.target.value})}/>
            <div></div>
            <label>End Date: </label>
            <input type="date" 
                    disabled={event.allDay} 
                    value={event.endDate} 
                    onChange={e => setEvent({...event, endDate: e.target.value})}/>
            <div></div>
            <label>Start Time: </label>
            <input type="time" 
                    disabled={event.allDay} 
                    value={event.startTime} 
                    onChange={e => setEvent({...event,startTime: e.target.value})}/>
            <div></div>
            <label>End Time: </label>
            <input type="time" 
                    disabled={event.allDay} 
                    value={event.endTime} 
                    onChange={e => setEvent({...event,endTime: e.target.value})}/>
            <div></div>
            <input type="checkbox" 
                    value={event.allDay} 
                    onChange={e => setEvent({...event, allDay: e.target.checked})}/>
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