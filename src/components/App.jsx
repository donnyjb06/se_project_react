import './App.css';
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
import RegisterModal from './RegisterModal/RegisterModal';
import LoginModal from './LoginModal/LoginModal';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useModalClose();
  const [itemModalIsOpen, setItemModalIsOpen] = useModalClose();
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useModalClose();
  const [registerModalIsOpen, setRegisterModalIsOpen] = useModalClose();
  const [loginModalIsOpen, setLoginModalIsOpen] = useModalClose();

  return (
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
        <RegisterModal
          onCloseModal={setRegisterModalIsOpen}
          isOpen={registerModalIsOpen}
          openLoginModal={setLoginModalIsOpen}
        />
        <LoginModal
                    onCloseModal={setLoginModalIsOpen}
                    isOpen={loginModalIsOpen}
                    openRegisterModal={setRegisterModalIsOpen}
                  />
      </CurrentTemperatureUnitProvider>
    </ClothingDataProvider>
  );
}

export default App;
