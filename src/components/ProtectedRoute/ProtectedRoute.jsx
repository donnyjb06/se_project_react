import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({isLoggedIn, children, anonymous=false}) => {
  const location = useLocation()
  const from = location.state?.from || '/'

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />
  }

  if (!isLoggedIn && !anonymous) {
    console.warn("You must be logged in to access this route")
    return <Navigate to="/login" state={{from: location}} replace />
  }

  return children
}

export default ProtectedRoute