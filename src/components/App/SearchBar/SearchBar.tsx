import './index.scss';
import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: string;
};
function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   onSearch(searchTerm);
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
            placeholder=" search "
          />
        </div>
      </form>
    </section>
  );
}
export default SearchBar;
