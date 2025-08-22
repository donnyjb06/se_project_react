import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useModal } from '../../hooks/useModal';
import { useEffect, useState } from 'react';
import { useUserData } from '../../hooks/useUserData';

const EditProfileModal = () => {
  const { handleEditProfile, userData } = useUserData();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { modal } = useModal();
  
  const isOpen = modal === "edit-profile-modal";

  useEffect(() => {
    if (!isOpen) return

    setName(userData?.name ?? '')
    setUrl(userData?.avatar ?? '')
  }, [userData, isOpen])

  const handleSubmit = async () => {
      await handleEditProfile(name, url);
  };

  return (
    <ModalWithForm
      title='Change profile data'
      btnLabel='Save changes'
      formId='edit-profile'
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <label className='form__label form__label_for_text'>
        Name*
        <input
          type='text'
          className='form__input'
          placeholder='Name'
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className='form__label form__label_for_text'>
        Avatar
        <input
          type='url'
          className='form__input'
          placeholder='Avatar'
          value={url || ''}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
