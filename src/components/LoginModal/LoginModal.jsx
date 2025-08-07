import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';

const LoginModal = ({isOpen, onCloseModal, openRegisterModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleModalSwitch = () => {
    onCloseModal(false)
    openRegisterModal(true)
  }

  return (
    <ModalWithForm
      type='login'
      title='Log in'
      btnLabel='Log in'
      isOpen={isOpen}
      onClose={onCloseModal}
      formId="login-form"
      switchModal={handleModalSwitch}>
      <label className='form__label form__label_for_text'>
        Email
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          className='form__input'
          placeholder='Email'
          value={email || ""}
          required
        />
      </label>
      <label className='form__label form__label_for_text'>
        Password
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          className='form__input'
          placeholder='Password'
          value={password || ""}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
