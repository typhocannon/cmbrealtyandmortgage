import React from 'react';

import { Routes, Route, } from 'react-router-dom';

import './App.css';
import Preloader from './components/preloader/Preloader';
import Ham_Button from './components/ham_button/Ham_Button';

import Home from './components/home/Home';
import Listing from './components/listings/Listing';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  

  return (
    <>
      <Preloader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/buyers" element={<Contact />} />
        <Route path="/sellers" element={<Contact />} />
        <Route path="/mortgage" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Ham_Button/>
    </>
  );
}

export default App;
