import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useState } from 'react';
import { useUserData } from '../../hooks/useUserData';
import { useModal } from '../../hooks/useModal';

const RegisterModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const { handleRegister } = useUserData();
  const {modal, setModal} = useModal();
  const isOpen = modal === "register-modal";

  const handleModalSwitch = () => {
    setEmail('');
    setName('');
    setPassword('');
    setLink('');
    setModal("login-modal")
  };

  const handleSubmit = async () => {
    try {
      await handleRegister(name, email, link, password);
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
          type='link'
          onChange={(e) => setLink(e.target.value)}
          className='form__input'
          placeholder='Avatar URL'
          value={link || ''}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
