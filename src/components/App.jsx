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
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import UserDataProvider from '../contexts/UserData/UserData.provider';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useModalClose();
  const [itemModalIsOpen, setItemModalIsOpen] = useModalClose();
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useModalClose();
  const [registerModalIsOpen, setRegisterModalIsOpen] = useModalClose();
  const [loginModalIsOpen, setLoginModalIsOpen] = useModalClose();

  return (
    <UserDataProvider>
      <ClothingDataProvider onItemModalOpen={setItemModalIsOpen}>
        <CurrentTemperatureUnitProvider>
          <WeatherDataProvider>
            <Header openModal={setAddModalIsOpen} />
            <Routes>
              <Route
                path='/'
                element={
                  <ProtectedRoute anonymous>
                    <Main />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/profile'
                element={
                  <ProtectedRoute>
                    <Profile handleOpenFormModal={setAddModalIsOpen} />
                  </ProtectedRoute>
                }
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
    </UserDataProvider>
  );
}

export default App;
