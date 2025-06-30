import './App.css';
import { useState, useCallback } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ItemModal from './ItemModal/ItemModal';
import { useModalClose } from '../hooks/useModalClose';
import CurrentTemperatureUnitProvider from '../contexts/CurrentTemperatureUnit/CurrentTemperatureUnit.provider';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import AddItemModal from './AddItemModal/AddItemModal';
import WeatherDataProvider from '../contexts/WeatherData/WeatherData.provider';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [itemModalIsOpen, setItemModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [clothingItems, setClothingItems] = useState([]);

  useModalClose(addModalIsOpen, setAddModalIsOpen);
  useModalClose(itemModalIsOpen, setItemModalIsOpen);

  const handleAddItemSubmit = (item) => {
    setClothingItems((prevItems) => [item, ...prevItems]);
  };

  const handleCardClick = useCallback(
    (item) => {
      setSelectedItem(item);
      setItemModalIsOpen(true);
    },
    [setSelectedItem, setItemModalIsOpen],
  );

  return (
    <>
      <CurrentTemperatureUnitProvider>
        <WeatherDataProvider>
          <Header openModal={setAddModalIsOpen} />
          <Routes>
            <Route
              path='/'
              element={<Main handleCardClick={handleCardClick} />}
            />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <Footer />
        </WeatherDataProvider>

        {itemModalIsOpen && (
          <ItemModal
            name={selectedItem.name}
            link={selectedItem.link}
            condition={selectedItem.condition}
            onClose={setItemModalIsOpen}
          />
        )}

        <AddItemModal
          isOpen={addModalIsOpen}
          onAddItem={handleAddItemSubmit}
          onCloseModal={setAddModalIsOpen}
        />
      </CurrentTemperatureUnitProvider>
    </>
  );
}

export default App;
