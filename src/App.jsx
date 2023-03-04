import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <Header />
          <div className="App__content">
            <Routes>
              <Route exact path="/auth" element={<Auth />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;