import { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getMenuSuggestion } from '../api';

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

  const predict = useCallback((payload) => {
    const suggestions = getMenuSuggestion(payload);
    console.log(suggestions)
    alanInstance.playText(`Here are some suggestions based on your mood that you can try, first one is ${suggestions[0]}, second one is ${suggestions[1]} and third one is ${suggestions[2]}`);
  }, [alanInstance])



  useEffect(() => {
    window.addEventListener("navigate", navigate);
    window.addEventListener("comfort-food", predict);

    return () => {
      window.removeEventListener("navigate", navigate);
      window.removeEventListener("comfort-food", predict);
    }
  }, [navigate, predict]);

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