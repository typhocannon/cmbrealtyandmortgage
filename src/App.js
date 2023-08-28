import React from 'react';

import { Routes, Route, } from 'react-router-dom';

import './App.css';
import Preloader from './components/preloader/Preloader';
import Ham_Button from './components/ham_button/Ham_Button';

import Home from './screens/home/Home';
import Listing from './screens/listings/Listing';
import About from './screens/about/About';
import Contact from './screens/contact/Contact';
import Seller from './screens/seller/Seller';
import Buyer from './screens/buyer/Buyer';
function App() {
  

  return (
    <>
      <Preloader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/buyers" element={<Buyer/>} />
        <Route path="/sellers" element={<Seller />} />
        <Route path="/mortgage" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Ham_Button/>
    </>
  );
}

export default App;
