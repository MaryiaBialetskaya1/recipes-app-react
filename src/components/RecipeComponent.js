import { useState } from "react";
import Modal from "./Modal";
import ListComponent from "./ListComponent";

const RecipeComponent = ({
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

  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };

  return (
    <div className="recipe-card">
      <aside>
        <img src={image} className="cardImage" alt="recipe pic" />
      </aside>
      <article>
        <h2 className="title">{title}</h2>
        <h3 className="mealtype">Good for: {mealtype}</h3>
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

        <p className="paragraph">{cuisineType} cuisine</p>
      </article>
      <div>
        <button className="button" onClick={open}>
          See Ingredients
        </button>
        {openModal && <Modal close={close} ingredients={ingredients} />}
      </div>
      {/* <button className="button" onClick={handleClick}>
        See Ingredients
      </button>
      {isShown && <ListComponent ingredients={ingredients} />} */}
    </div>
  );
};

export default RecipeComponent;
