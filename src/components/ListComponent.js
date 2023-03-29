import React from "react";

const ListComponent = ({ ingredients }) => {
  return (
    <div>
      <p className="ingredients">
        <span>Ingredients:&nbsp;</span>
      </p>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
