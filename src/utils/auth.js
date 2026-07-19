import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Check if token expired
export const isTokenExpired = () => {
  const token = getToken();

  if (!token) return true;

  try {

    const decoded = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    return decoded.exp < currentTime;

  } catch {
    return true;
  }

};


// Final authentication check
export const isAuthenticated = () => {
   const token = getToken();

   if (!token) return false;

   if (isTokenExpired()) {
    logout();
    return false;
  }
  return true;
};