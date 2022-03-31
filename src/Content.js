import React from "react";

const Content = ({ nameData, setFavoriteNames, favoriteNames }) => {
  const handleClick = (e) => {
    console.log(e.target.className);
    setFavoriteNames(
      favoriteNames.concat({
        name: e.target.innerText,
        className: e.target.className,
      })
    );
  };

  return (
    <div className="container-fluid content">
      {nameData
        ? nameData.map((data) => {
            return (
              <button
                key={data.id}
                className={
                  data.sex === "f"
                    ? "pinkName btn btn-light"
                    : "blueName btn btn-light"
                }
                onClick={handleClick}
              >
                {data.name}
              </button>
            );
          })
        : ""}
    </div>
  );
};

export default Content;
