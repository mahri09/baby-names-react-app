import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import nameData from "./data/nameData.json";
import Content from "./Content";
import FavoriteNames from "./FavoriteNames";
import "./App.css";

function App() {
  const [names, setName] = useState(nameData);
  const [filteredNames, setFilteredName] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [favoriteNames, setFavoriteNames] = useState([]);

  useEffect(() => {
    const filteredNames = names.filter((baby) => {
      return baby.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredName(filteredNames);
  }, [searchField]);
  return (
    <div className="container App">
      <Header handleSearch={setSearchField} />
      <FavoriteNames favoriteNames={favoriteNames} />
      <Content
        favoriteNames={favoriteNames}
        nameData={filteredNames}
        setFavoriteNames={setFavoriteNames}
      />
    </div>
  );
}

export default App;
