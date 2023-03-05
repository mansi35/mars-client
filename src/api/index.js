import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
const MLAPI = axios.create({ baseURL: 'https://comfort-food-predictor.onrender.com/food' })
// const API = axios.create({ baseURL: 'https://mars-server-x1ib.onrender.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const getMenuSuggestion = (mood) => MLAPI.get(`/${mood}`);
