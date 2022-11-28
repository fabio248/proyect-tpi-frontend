import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.setItem('isLogged', false);
    navigate('/login');
  }, []);
  return;
}

export default Logout;
