import { useEffect, useState } from 'react';
import { getToken, removeToken, setToken } from '../../utils/token';
import { editUserInfo, getUserInfo } from '../../utils/api';
import { UserDataContext } from './UserData.context';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../utils/auth';
import { signUp } from '../../utils/auth';

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    avatar: '',
    _id: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getJwt = async () => {
      try {
        const jwt = getToken();

        if (!jwt) return;

        const user = await getUserInfo(jwt);

        setIsLoggedIn(true);
        setUserData(user);
      } catch (error) {
        console.error(error);
      }
    };

    getJwt();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const res = await logIn(email, password);

      setToken(res.token);
      const user = await getUserInfo(res.token);
      setUserData(user);
      setIsLoggedIn(true);
      const redirectPath = location.state?.from?.pathname || '/';
      navigate(redirectPath);
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = async (name, email, avatar, password) => {
    try {
      const newUser = await signUp(email, password, name, avatar);
      const res = await logIn(email, password);

      setToken(res.token);
      setUserData(newUser);
      setIsLoggedIn(true);
      const redirectPath = location.state?.from?.pathname || '/';
      navigate(redirectPath);
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    setUserData({ email: '', name: '', avatar: '', _id: '' });
  };

  const handleEditProfile = async (name, avatar) => {
    try {
      const updateEntries = Object.entries({ name, avatar });
      const filteredUpdates = Object.fromEntries(
        updateEntries.filter(([_, value]) => value.trim() !== ''),
      );

      const updatedUser = await editUserInfo(filteredUpdates);
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: updatedUser.name,
        avatar: updatedUser.avatar,
      }));
    } catch (error) {
      throw error;
    }
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
        handleEditProfile,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
