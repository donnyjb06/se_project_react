import './App.css';
import Header from './Header/Header';
import { fetchWeatherData } from '../utils/weatherApi';
import { LOCATION } from '../utils/constants';
import { useEffect, useState } from 'react';
import Main from './Main/Main';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import Footer from './Footer/Footer';
import ItemModal from './ItemModal/ItemModal';
import { useModalClose } from '../hooks/useModalClose';
import CurrentTemperatureUnitProvider from '../contexts/CurrentTemperatureUnit/CurrentTemperatureUnit.provider';

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const [tempRange, setTempRange] = useState('hot');
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [itemModalIsOpen, setItemModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  useModalClose(addModalIsOpen, setAddModalIsOpen);
  useModalClose(itemModalIsOpen, setItemModalIsOpen);

  useEffect(() => {
    const setWeatherData = () => {
      fetchWeatherData(LOCATION)
        .then((res) => {
          const utcDate = new Date(res?.dt * 1000);
          const localTime = new Date(utcDate.getTime() + res?.timezone * 1000);
          const hour = localTime.getHours();

          setData({
            city: res?.name,
            temperature: Math.round(res?.main?.temp),
            isDay: hour <= 6 && hour < 18,
            condition: res?.weather[0]?.main,
          });
        })
        .catch((error) => console.error(error));
    };

    setWeatherData();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setItemModalIsOpen(true);
  };

  return (
    <>
      <CurrentTemperatureUnitProvider>
        <Header city={data?.city} openModal={setAddModalIsOpen} />
        <Main
          temperature={data?.temperature}
          isDay={data?.isDay}
          condition={data?.condition}
          handleCardClick={handleCardClick}
        />
        <Footer />

        {itemModalIsOpen && (
          <ItemModal
            name={selectedItem.name}
            link={selectedItem.link}
            condition={selectedItem.condition}
            onClose={setItemModalIsOpen}
          />
        )}

        {addModalIsOpen && (
          <ModalWithForm
            title='New garment'
            btnLabel='Add garment'
            formId='add-garment-form'
            onClose={setAddModalIsOpen}>
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
        )}
      </CurrentTemperatureUnitProvider>
    </>
  );
}

export default App;
