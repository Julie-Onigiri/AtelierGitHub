import './index.scss';

function SearchBar() {
  return (
    <section className="search ui raised segment">
      <form className="search-form">
        <div className="search-form__box ui left icon input">
          <i aria-hidden="true" className="search-form__icon search icon" />
          <input
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
