import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, ...routePath }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/" />
}