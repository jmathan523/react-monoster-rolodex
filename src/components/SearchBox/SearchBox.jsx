import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, onInputChange }) => {
  return (
    <div className="search-box">
      <input
        className="input-box"
        type="search"
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchBox;
