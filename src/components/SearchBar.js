import React from "react";
import "./../styles/SearchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder={placeholder || "Nhập vào mã số sinh viên..."}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
