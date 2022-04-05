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
          src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102832.png?token=exp=1648765631~hmac=b09bd8645ff5268723ac86a6ff9ffc6e"
          alt="all-babies"
        />
        <img
          onClick={handleSetFilteredByGender}
          className="search-icon"
          src="https://cdn-icons.flaticon.com/png/512/3320/premium/3320112.png?token=exp=1648765618~hmac=956912fc57f1985cb701189b665980f0"
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
