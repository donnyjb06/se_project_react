import React, { useRef, useState } from 'react';
import exitIcon from "../../assets/images/exit-icon-light.svg"
import './ModalWithForm.css'

const ModalWithForm = ({ title, btnLabel, formId, children, onClose, onSubmit, isOpen }) => {
  const [isValid, setIsValid] = useState(false)
  const submitButton = useRef()

  const handleInputChange = (e) => {
    const form = document.forms[formId]
    setIsValid(form.checkValidity())
  }

  const handleSubmit = async (event) => {
    submitButton.current.disabled = true
    await onSubmit(event);
    submitButton.current.disabled = false;
    onClose(false)
  }

  return (
    <div className={`modal modal_type_${formId} ${isOpen ? 'modal_is-opened' : ''}`} role='dialog' aria-modal="true">
      <div className='modal__container'>
        <button className='modal__exit' onClick={() => onClose(false)}>
          <img src={exitIcon} alt="x icon for exit button" className='modal__exit-icon'/>
        </button>
        <h2 className='modal__title'>{title}</h2>
        <form className='form' id={formId} name={formId} onChange={handleInputChange} onSubmit={handleSubmit}>
          {children}
          <button className='form__submit' disabled={!isValid} ref={submitButton}>{btnLabel}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
