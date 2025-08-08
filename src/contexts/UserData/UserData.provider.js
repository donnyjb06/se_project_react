import { useEffect, useState } from 'react';
import { getToken, removeToken, setToken } from '../../utils/token';
import { getUserInfo } from '../../utils/api';
import { UserDataContext } from './UserData.context';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../utils/auth';
import { signUp } from '../../utils/auth';

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getInitialUserInfo = () => {
      const user = localStorage.getItem('user');

      if (!user) return;
      setUserData(user);
    };

    const getJwt = async () => {
      try {
        const jwt = getToken();

        if (!jwt) return;

        const { username, email, avatar, _id } = await getUserInfo(jwt);

        setIsLoggedIn(true);
        setUserData({ username, email, avatar, _id });
      } catch (error) {
        console.error(error);
      }
    };
  });

  const handleLogin = async (email, password) => {
    try {
      const res = await logIn(email, password);

      setToken(res.jwt);
      const user = await getUserInfo(res.jwt);
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
      const token = await logIn(email, password);

      setToken(token);
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
    setUserData({ email: '', username: '', avatar: '', _id: '' });
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider