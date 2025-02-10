import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__container">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Enter topic"
          minLength={2}
          maxLength={60}
          name="search"
        />
        <button
          className="search-bar__btn"
          name="search"
          title="Search"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
