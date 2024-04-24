import React from 'react';

import logo from '../assets/header/kiehls.png'

function Header() {
  return (
    <header className="header">
      {/* Logo and navigation elements go here */}

      <img src={logo} alt="Kiehl's" className='logo' />
    </header>
  );
}

export default Header;