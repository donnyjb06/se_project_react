import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ItemModal from './ItemModal/ItemModal';
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
import ModalProvider from '../contexts/Modal/Modal.provider';

function App() {
  return (
    <UserDataProvider>
      <ModalProvider>
        <ClothingDataProvider>
          <CurrentTemperatureUnitProvider>
            <WeatherDataProvider>
              <Header />
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
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </WeatherDataProvider>

            <ItemModal />
            <DeleteConfirmationModal />
            <AddItemModal />

            <RegisterModal />
            <LoginModal />
          </CurrentTemperatureUnitProvider>
        </ClothingDataProvider>
      </ModalProvider>
    </UserDataProvider>
  );
}

export default App;
