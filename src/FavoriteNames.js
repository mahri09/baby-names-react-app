import React from "react";

const FavoriteNames = ({ favoriteNames }) => {
  return (
    <div className="content favorite-content">
      Click to Add Favorite Baby Names:
      {favoriteNames.map((favName, index) => (
        <button key={index} className={favName.className}>
          {favName.name}
        </button>
      ))}
    </div>
  );
};

export default FavoriteNames;
