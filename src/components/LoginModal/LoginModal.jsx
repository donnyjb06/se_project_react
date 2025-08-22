import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';
import { useUserData } from '../../hooks/useUserData';
import { useModal } from '../../hooks/useModal';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useUserData();
  const {modal, setModal} = useModal();
  const isOpen = modal === "login-modal"

  const handleModalSwitch = () => {
    setEmail('');
    setPassword('');
    setModal("register-modal")
  };

  const handleSubmit = async () => {
      await handleLogin(email, password);
  };

  return (
    <ModalWithForm
      type='login'
      title='Log in'
      btnLabel='Log in'
      isOpen={isOpen}
      formId='login-form'
      onSubmit={handleSubmit}
      switchModal={handleModalSwitch}>
      <label className='form__label form__label_for_text'>
        Email
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          className='form__input'
          placeholder='Email'
          value={email || ''}
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
          value={password || ''}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
