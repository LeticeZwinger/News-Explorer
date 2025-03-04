import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setSearchQuery }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(input);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__container" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Enter topic"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          minLength={2}
          maxLength={30}
          name="search"
        />
        <button className="search-bar__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
