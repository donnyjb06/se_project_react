import { useClothingData } from '../../hooks/useClothingData';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './AddItemModal.css';
import { useState } from 'react';

const AddItemModal = ({ isOpen, onCloseModal }) => {
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const [tempRange, setTempRange] = useState('hot');

  const { handleAddItemSubmit } = useClothingData();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      name,
      imageUrl: link,
      weather: tempRange
    }

    await handleAddItemSubmit(newItem)
    setName("")
    setLink("")
    setTempRange("hot")
  };

  return (
      <ModalWithForm
        onSubmit={handleSubmit}
        title='New garment'
        btnLabel='Add garment'
        formId='add-garment-form'
        onClose={onCloseModal}
        isOpen={isOpen}>
        <label className='form__label form__label_for_text'>
          Name
          <input
            type='text'
            className='form__input'
            name='name'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={name || ''}
            required
          />
        </label>
        <label className='form__label form__label_for_text'>
          Image
          <input
            type='url'
            className='form__input'
            name='link'
            placeholder='Image URL'
            onChange={(e) => setLink(e.target.value)}
            value={link || ''}
            required
          />
        </label>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Select the weather type:</legend>

          <div className='form__group'>
            <input
              type='radio'
              value='hot'
              className='form__input form__input_type_radio'
              checked={tempRange === 'hot'}
              name='weather'
              onChange={(e) => setTempRange(e.target.value)}
              id='weather-hot'
              required
            />
            <label
              className='form__label form__label_for_weather'
              htmlFor='weather-hot'>
              Hot
            </label>
          </div>

          <div className='form__group'>
            <input
              type='radio'
              value='warm'
              className='form__input form__input_type_radio'
              checked={tempRange === 'warm'}
              name='weather'
              onChange={(e) => setTempRange(e.target.value)}
              id='weather-warm'
            />
            <label
              className='form__label form__label_for_weather'
              htmlFor='weather-warm'>
              Warm
            </label>
          </div>

          <div className='form__group'>
            <input
              type='radio'
              value='cold'
              className='form__input form__input_type_radio'
              checked={tempRange === 'cold'}
              name='weather'
              onChange={(e) => setTempRange(e.target.value)}
              id='weather-cold'
            />
            <label
              className='form__label form__label_for_weather'
              htmlFor='weather-cold'>
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
  );
};

export default AddItemModal;
