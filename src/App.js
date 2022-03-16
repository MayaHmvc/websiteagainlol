import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes> 
            <Route path='/' exact component=
            {Home} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
