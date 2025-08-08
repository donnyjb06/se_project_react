import { Navigate, useLocation } from 'react-router-dom';
import { useUserData } from '../../hooks/useUserData';

const ProtectedRoute = ({ children, anonymous = false }) => {
  const { isLoggedIn } = useUserData();
  const location = useLocation();
  const from = location.state?.from || '/';

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!isLoggedIn && !anonymous) {
    console.warn('You must be logged in to access this route');
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
