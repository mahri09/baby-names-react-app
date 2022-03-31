import React from "react";

const Header = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div className="search-content">
      <input
        className=" me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
      <img
        className="search-icon"
        src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102832.png?token=exp=1648765631~hmac=b09bd8645ff5268723ac86a6ff9ffc6e"
        alt="baby image"
      />
      <img
        className="search-icon"
        src="https://cdn-icons.flaticon.com/png/512/3320/premium/3320112.png?token=exp=1648765618~hmac=956912fc57f1985cb701189b665980f0"
        alt="baby image"
      />
      <img
        className="search-icon"
        src="https://cdn-icons-png.flaticon.com/512/2867/2867024.png"
        alt="baby image"
      />
    </div>
  );
};

export default Header;
