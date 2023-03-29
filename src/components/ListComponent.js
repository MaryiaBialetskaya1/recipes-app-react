import React from "react";

const ListComponent = ({ ingredients }) => {
  return (
    <div className="listContainer">
      <p className="ingredients title">
        <span>Ingredients:&nbsp;</span>
      </p>
      <ul className="list">
        {ingredients.map((ingredient) => (
          <li className="listItem">{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
