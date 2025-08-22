import { useRef, useState } from 'react';
import exitIcon from '../../assets/images/exit-icon-light.svg';
import './ModalWithForm.css';
import { useModal } from '../../hooks/useModal';

const ModalWithForm = ({
  title,
  btnLabel,
  formId,
  children,
  onSubmit,
  isOpen,
  switchModal,
}) => {
  const [isValid, setIsValid] = useState(false);
  const submitButton = useRef();
  const { closeModal, modal } = useModal();
  const isAuthFormModal = modal === 'register-modal' || modal === 'login-modal';

  const handleInputChange = () => {
    const form = document.forms[formId];
    setIsValid(form.checkValidity());
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      submitButton.current.disabled = true;
      await onSubmit();
      closeModal();
    } catch (error) {
      console.error(error.message);
    } finally {
      submitButton.current.disabled = false;
    }
  };

  return (
    <div
      className={`modal modal_type_${formId} ${
        isOpen ? 'modal_is-opened' : ''
      }`}
      role='dialog'
      aria-modal='true'>
      <div className='modal__container'>
        <button className='modal__exit' onClick={closeModal}>
          <img
            src={exitIcon}
            alt='x icon for exit button'
            className='modal__exit-icon'
          />
        </button>
        <h2 className='modal__title'>{title}</h2>
        <form
          className='form'
          id={formId}
          name={formId}
          onChange={handleInputChange}
          onSubmit={handleSubmit}>
          {children}
          <div className='form__submit-group'>
            <button
              className='form__submit'
              disabled={!isValid}
              ref={submitButton}>
              {btnLabel}
            </button>
            {isAuthFormModal && (
              <button
                className='modal__auth-redirect'
                onClick={switchModal}
                type='button'>
                {modal === 'register-modal' ? 'or Log in' : 'or Register'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
