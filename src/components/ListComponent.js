import React from "react";

const ListComponent = ({ ingredients }) => {
  return (
    <div>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
