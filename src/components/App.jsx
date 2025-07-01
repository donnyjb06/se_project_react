import './App.css';
import { useState } from 'react';
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
import ClothingDataProvider from '../contexts/ClothingData/ClothingData.provider';
import DeleteConfirmationModal from './DeleteConfirmationModal/DeleteConfirmationModal';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [itemModalIsOpen, setItemModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  useModalClose(addModalIsOpen, setAddModalIsOpen);
  useModalClose(itemModalIsOpen, setItemModalIsOpen);
  useModalClose(deleteModalIsOpen, setDeleteModalIsOpen);

  return (
    <>
      <ClothingDataProvider onItemModalOpen={setItemModalIsOpen}>
        <CurrentTemperatureUnitProvider>
          <WeatherDataProvider>
            <Header openModal={setAddModalIsOpen} />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route
                path='/profile'
                element={<Profile handleOpenFormModal={setAddModalIsOpen} />}
              />
            </Routes>
            <Footer />
          </WeatherDataProvider>

          <ItemModal
            onClose={setItemModalIsOpen}
            onDelete={setDeleteModalIsOpen}
            isOpen={itemModalIsOpen}
          />

          <DeleteConfirmationModal
            onClose={setDeleteModalIsOpen}
            isOpen={deleteModalIsOpen}
          />

          <AddItemModal
            isOpen={addModalIsOpen}
            onCloseModal={setAddModalIsOpen}
          />
        </CurrentTemperatureUnitProvider>
      </ClothingDataProvider>
    </>
  );
}

export default App;
