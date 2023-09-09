import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Ham_Button.css';

const HamButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const NavLink = ({ to, children }) => (
    <Link onClick={handleLinkClick} to={to} component={motion.div}>
      {children}
    </Link>
  );

  return (
    <div className={`button_container ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? <MdClose size={50} /> : <MdMenu size={50} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="dropdown-menu"
            initial={{ transform: 'translateY(-100%)' }}
            animate={{ transform: 'translateY(0)' }}
            exit={{ transform: 'translateY(-100%)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div classname="router">
              <NavLink to="/cmbrealtyandmortgage/">Home</NavLink>
              <NavLink to="/cmbrealtyandmortgage/about">About Us</NavLink>
              <NavLink to="/cmbrealtyandmortgage/listings">Listings</NavLink>
              <div className="row">
              <NavLink to="/cmbrealtyandmortgage/buyers">For Buyers</NavLink>
              </div>
              <div className='row'> 
                <h1>|</h1>
              </div>
              <div className="row">
              <NavLink to="/cmbrealtyandmortgage/sellers">For Sellers</NavLink>
              </div>
              <NavLink to="/cmbrealtyandmortgage/mortgage">Mortgage</NavLink>
              <NavLink to="/cmbrealtyandmortgage/contact">Contact Us</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamButton;
