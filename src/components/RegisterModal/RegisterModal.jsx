import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';
import { useUserData } from '../../hooks/useUserData';

const RegisterModal = ({ isOpen, onCloseModal, openLoginModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { handleRegister } = useUserData();

  const handleModalSwitch = () => {
    onCloseModal(false);
    setEmail('');
    setName('');
    setPassword('');
    setUrl('');
    openLoginModal(true);
  };

  const handleSubmit = async () => {
    try {
      await handleRegister(name, email, url, password);
    } catch (error) {
      throw error;
    }
  };

  return (
    <ModalWithForm
      type='register'
      title='Sign up'
      btnLabel='Register'
      isOpen={isOpen}
      onClose={onCloseModal}
      formId='register-form'
      onSubmit={handleSubmit}
      switchModal={handleModalSwitch}>
      <label className='form__label form__label_for_text'>
        Email*
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
        Password*
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          className='form__input'
          placeholder='Password'
          value={password || ''}
          required
        />
      </label>
      <label className='form__label form__label_for_text'>
        Name
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          className='form__input'
          placeholder='Name'
          value={name || ''}
        />
      </label>
      <label className='form__label form__label_for_text'>
        Avatar URL
        <input
          type='url'
          onChange={(e) => setUrl(e.target.value)}
          className='form__input'
          placeholder='Avatar URL'
          value={url || ''}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
