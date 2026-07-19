import { Navigate,  useLocation } from 'react-router-dom';

import { isAuthenticated } from '../utils/auth.js';

export default function ProtectedRoute({ children }) {
   const location = useLocation();

  if (!isAuthenticated()) {
    return(
        <Navigate to="/" 
        replace
        state={{
          openLogin: true,
          message:
            "Please login to continue. If you don't have an account yet, signup.",
          from: location.pathname
        }}/>
    );
  }

  return children;
}