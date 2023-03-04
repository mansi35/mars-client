import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Home from './pages/Home/Home';
import CuisineSelector from './pages/CuisineSelector/CuisineSelector';
import CartPage from './pages/CartPage/CartPage';
import MenuPage from './pages/MenuPage/MenuPage';
import MarsMenu from './pages/MarsMenuPage/MarsMenu';
import useAlan from "./hooks/useAlan"
import ProfileDetails from './pages/Profile/Profile';



function App() {
  // useAlan()
  const Alan = () => {
    useAlan();
    return null;
  }
  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <Header />
          <Alan />
          <div className="App__content">
            <Routes>
              <Route exact path="/auth" element={<Auth />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<CartPage />} />
              <Route exact path="/cuisines" element={<CuisineSelector />} />
              <Route exact path="/menu" element={<MenuPage />} />
              <Route exact path="/marsmenu" element={<MarsMenu />} />
              <Route exact path="/profile" element={<ProfileDetails />} />
            </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;