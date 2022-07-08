import { useState } from 'react';
import Modal from 'react-modal';
import "./CalendarModal.css"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)

    const onCloseModal = () => {
        setIsOpen(false)
    }

  return (
    <Modal
        isOpen={isOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
    >
        <h1>VentanaModal</h1>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam sequi ad a enim reiciendis excepturi.</p>
    </Modal>
  )
}
