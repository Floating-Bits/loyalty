import React from 'react';
import './Header.css';
import logo from './img/logo.webp';
import personicon from './img/personicon.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <h1 className="title">MONTY'S</h1>
      <div className="header-right">
        <img src={personicon} alt="person" className="personicon"/>
      </div>
    </header>
  );
}

export default Header;