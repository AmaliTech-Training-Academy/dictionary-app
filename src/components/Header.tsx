import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/Header.scss';
import LightAndDark from './LightAndDark';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logo} alt="App logo" /> 
        <LightAndDark/>
    </div>
  );
};

export default Header;
