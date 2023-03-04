import { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const UseAlan = () => {
  const navigatePath = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const [alanInstance, setAlanInstance] = useState();

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const navigate = useCallback(({ detail: payload }) => {
    if (payload === 'home') {
      navigatePath('/');
    } else {
      navigatePath(`/${payload}`);
    }
  }, [alanInstance])

  useEffect(() => {
    window.addEventListener("navigate", navigate);

    return () => {
      window.removeEventListener("navigate", navigate);
    }
  }, [navigate]);

  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(alanBtn({
      key: '4353db4c18f7988f9652878cf7deb3aa2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, payload }) => {
        window.dispatchEvent(new CustomEvent(command, { detail: payload }));
      }
    }));
  }, []);

  return null;
}

export default UseAlan;