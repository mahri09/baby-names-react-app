import React from "react";

const FavoriteNames = ({ favoriteNames }) => {
  return (
    <div className="content ">
      Favorites:
      {favoriteNames.map((favName, index) => (
        <button key={index} className={favName.className}>
          {favName.name}
        </button>
      ))}
    </div>
  );
};

export default FavoriteNames;
