import React, { useState } from 'react';
import searchLogo from '../assets/images/icon-search.svg';
import '../assets/styles/Search.scss';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('keyboard');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm('');
      
  }
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit"><img src={searchLogo} alt="Search Logo" /></button>
    </form>
  );
};

export default Search;
