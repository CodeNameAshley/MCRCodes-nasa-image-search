import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

export default function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Type a celestial object to search"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          go!
        </button>
      </form>
    </div>
  );
}
