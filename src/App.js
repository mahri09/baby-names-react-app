/* eslint-disable no-unused-vars */
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
  const [filteredByGender, setFilteredByGender] = useState("");

  useEffect(() => {
    let filteredNamesBySearch = names.filter((baby) => {
      return baby.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredName(filteredNamesBySearch);
  }, [searchField]);

  useEffect(() => {
    const filteredNamesByGender = names.filter((baby) => {
      if (filteredByGender === "baby-boy") {
        return baby.sex === "m";
      } else if (filteredByGender === "baby-girl") {
        return baby.sex === "f";
      } else {
        return baby;
      }
    });
    setFilteredName(filteredNamesByGender);
  }, [filteredByGender]);

  return (
    <div className="container App">
      <Header
        setSearchField={setSearchField}
        setFilteredByGender={setFilteredByGender}
      />
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
