import { useState } from "react";
import ListComponent from "./ListComponent";

const RecipeComponent = ({
  key,
  title,
  image,
  calories,
  ingredients,
  cuisineType,
  servings,
  mealtype,
  totalTime,
}) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div className="recipe-card">
      <aside>
        <img src={image} className="cardImage" alt="recipe pic" />
      </aside>
      <article>
        <h2>{title}</h2>
        <h3>{mealtype}</h3>
        <ul>
          <li>
            <span className="icon icon-users"></span>
            <span>{servings}</span>
          </li>
          <li>
            <span className="icon icon-clock"></span>
            <span>{totalTime} min</span>
          </li>
          <li>
            <span className="icon icon-level"></span>
            <span>Beginner level</span>
          </li>
          <li>
            <span className="icon icon-calories"></span>
            <span>{calories.toFixed()}</span>
          </li>
        </ul>

        <p>{cuisineType} cuisine</p>

        {/* <p className="ingredients">
          <span>Ingredients:&nbsp;</span>
          {ingredients}
        </p> */}
      </article>
      <div>
        <button onClick={handleClick}>See Ingredients</button>
        {isShown && <ListComponent ingredients={ingredients} />}
      </div>
    </div>
  );
};

export default RecipeComponent;
