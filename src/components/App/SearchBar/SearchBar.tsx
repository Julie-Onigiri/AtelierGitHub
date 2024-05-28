import './index.scss';
import React, { useState } from 'react';
import axios from 'axios';

type SearchBarProps = {
  onResults: (repos: any[]) => void;
  onError: (error: string) => void;
};


function SearchBar({ onResults, onError }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchTerm}`
      );
      onResults(response.data.items);
    } catch (error) {
      onError('An error occurred while fetching data');
    }
  };

  return (
    <section className="search ui raised segment">
      <form onSubmit={handleFormSubmit} className="search-form">
        <div className="search-form__box ui left icon input">
          <i aria-hidden="true" className="search-form__icon search icon" />
          <input
            value={searchTerm}
            onChange={handleInputChange}
            className="search-form__input"
            type="text"
            placeholder="Search"
          />
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
