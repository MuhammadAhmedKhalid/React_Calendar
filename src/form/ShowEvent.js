import React, { useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'

function ShowEvent(props) {
  const { setDetailModal, detailModal, eventTitle, startDate, endDate, startTime, endTime, allDay, setRefresh, id } = props

  useEffect(() => {
    setRefresh(false)
  })

  const deleteEvent = () => {
    axios.delete(`http://localhost:8080/deleteEvent/${id}`)
    setRefresh(true)
    setDetailModal(false)
  }

  const closeModal = () => {
    setDetailModal(false)
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

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={detailModal}
        onRequestClose={() => setDetailModal(false)}>
        <h2>Event Details</h2>
        <p><b>Event:</b> {eventTitle}</p>
        {
          allDay ?
            <div>
              <p><b>Date:</b> {startDate}</p>
              <p>All Day</p>
            </div> :
            <div>
              <p><b>Start Date:</b> {startDate}</p>
              <p><b>End Date:</b> {endDate}</p>
              <p><b>Start Time:</b> {startTime}</p>
              <p><b>End Time:</b> {endTime}</p>
            </div>
        }
        <div><button onClick={deleteEvent}>Delete Event</button></div>
        <div><p></p></div>
        <div><button onClick={closeModal}>Close</button></div>
      </Modal>
    </div>
  )
}

export default ShowEvent