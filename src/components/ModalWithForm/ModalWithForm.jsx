import React, { useEffect, useState } from 'react';
import exitIcon from "../../assets/images/exit-icon-light.svg"
import './ModalWithForm.css'

const ModalWithForm = ({ title, btnLabel, formId, children, onClose }) => {
  const [isValid, setIsValid] = useState(false)

  const handleInputChange = (e) => {
    const form = document.forms[formId]
    setIsValid(form.checkValidity())
  }

  return (
    <div className={`modal modal_type_${formId}`} role='dialog' aria-modal="true">
      <div className='modal__container'>
        <button className='modal__exit' onClick={() => onClose(false)}>
          <img src={exitIcon} alt="x icon for exit button" className='modal__exit-icon'/>
        </button>
        <h2 className='modal__title'>{title}</h2>
        <form className='form' id={formId} name={formId} onChange={handleInputChange}>
          {children}
          <button className='form__submit' disabled={!isValid}>{btnLabel}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
