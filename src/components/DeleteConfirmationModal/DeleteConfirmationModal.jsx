import { useRef } from 'react';
import { useClothingData } from '../../hooks/useClothingData';
import './DeleteConfirmationModal.css';
import exitIcon from '../../assets/images/exit-icon-light.svg';

const DeleteConfirmationModal = ({ onClose, isOpen }) => {
  const { handleDeleteItem } = useClothingData();
  const deleteButtonRef = useRef();

  const onDelete = async () => {
    deleteButtonRef.current.disabled = true;
    await handleDeleteItem();
    deleteButtonRef.current.disabled = false;
    onClose(false);
  };

  return (
    <div className={`modal modal__type_delete ${isOpen ? 'modal_is-opened' : ''}`}>
      <div className='modal__container'>
        <button className='modal__exit' onClick={() => onClose(false)}>
          <img
            src={exitIcon}
            alt='x icon for exit button'
            className='modal__exit-icon'
          />
        </button>
        <h2 className='modal__title'>
          Are you sure to want to delete this item? This action is irreversible.
        </h2>
        <div className='modal__controls'>
          <button
            className='modal__button modal__button_type_delete'
            ref={deleteButtonRef}
            onClick={onDelete}>
            Yes, delete item
          </button>
          <button
            className='modal__button modal__button_type_cancel'
            onClick={() => onClose(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
