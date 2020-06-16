import React from "react";

const SearchButton = ({ handleSearch }) => (
  <div className="search-button-container">
    <button className="search-button" onClick={handleSearch}>Search</button>
  </div>
)

export default SearchButton;
