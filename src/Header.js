/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Header = ({ setSearchField, setFilteredByGender }) => {
  const handleSearchInputChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSetFilteredByGender = (e) => {
    setFilteredByGender(e.target.alt);
  };

  return (
    <div className="search-content">
      <input
        className=" me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearchInputChange}
      />
      <div className="icon-box">
        <img
          onClick={handleSetFilteredByGender}
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/941/941515.png"
          alt="all-babies"
        />
        <img
          onClick={handleSetFilteredByGender}
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/2641/2641644.png"
          alt="baby-girl"
        />
        <img
          onClick={handleSetFilteredByGender}
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/2867/2867024.png"
          alt="baby-boy"
        />
      </div>
    </div>
  );
};

export default Header;
