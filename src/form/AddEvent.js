import React from 'react'
import Modal from 'react-modal'

function AddEvent(props) {
    const{openModal,setOpenModal}=props
    const change = () => {
        setOpenModal(false)
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
        zIndex: 1000
      },
    };
  return (
    <div>
        <Modal
        style={customStyles}
        isOpen={openModal}
        onRequestClose={()=>setOpenModal(false)}>
            <h1>Add Event</h1>
            <h3>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
            <div><button onClick={change}>Close Modal</button></div>
        </Modal>
    </div>
  )
}

export default AddEvent