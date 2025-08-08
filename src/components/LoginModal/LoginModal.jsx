import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';
import { useUserData } from '../../hooks/useUserData';

const LoginModal = ({ isOpen, onCloseModal, openRegisterModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useUserData();

  const handleModalSwitch = () => {
    onCloseModal(false);
    setEmail('');
    setPassword('');
    openRegisterModal(true);
  };

  const handleSubmit = async () => {
    try {
      await handleLogin(email, password);
    } catch (error) {
      throw error;
    }
  };

  return (
    <ModalWithForm
      type='login'
      title='Log in'
      btnLabel='Log in'
      isOpen={isOpen}
      onClose={onCloseModal}
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
