import React from 'react'
import Modal from 'react-modal'
import { format } from 'date-fns';

function ShowEvent(props) {
    const {setDetailModal, detailModal, eventTitle, eventStartDateTime, eventEndDateTime} = props

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
          backgroundColor:'rgba(0, 0, 0, .7)',
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
        onRequestClose={()=>setDetailModal(false)}>
             <h2>Event Details</h2>
             <p><b>Event:</b> {eventTitle}</p>
             <p><b>Start Date-Time:</b> {format(new Date(eventStartDateTime), 'MMMM dd, yyyy kk:mm:ss')}</p>
             <p><b>End Date-Time:</b> {format(new Date(eventEndDateTime), 'MMMM dd, yyyy kk:mm:ss')}</p>
             <div><button onClick={closeModal}>Close</button></div>
        </Modal>
    </div>
  )
}

export default ShowEvent