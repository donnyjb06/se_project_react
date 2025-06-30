import './App.css';
import { useState, useCallback, useEffect } from 'react';
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
import { addNewItem, getInitialItems } from '../utils/api';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [itemModalIsOpen, setItemModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [clothingItems, setClothingItems] = useState([]);

  useModalClose(addModalIsOpen, setAddModalIsOpen);
  useModalClose(itemModalIsOpen, setItemModalIsOpen);

  useEffect(() => {
    const getClothingItems = async () => {
      try {
        const items = await getInitialItems();
        setClothingItems(items)
      } catch (error) {
        console.error(error)
      }
    }

    getClothingItems()
  }, [])

  const handleAddItemSubmit = async (newItem) => {
    try {
      const addedItem = await addNewItem(newItem)
      setClothingItems(prevItems => ({addedItem, ...prevItems}))
    } catch (error) {
      console.error(error)
    }
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
              element={<Main handleCardClick={handleCardClick} items={clothingItems} />}
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
