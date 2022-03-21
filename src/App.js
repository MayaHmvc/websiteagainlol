import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Graphs from './components/Pages/Graphs';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/graphs' element={<Graphs/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;