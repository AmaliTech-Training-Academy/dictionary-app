import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logo} alt="App logo" /> 
        
    </div>
  );
};

export default Header;
