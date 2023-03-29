const RecipeBox = ({
  key,
  title,
  image,
  calories,
  ingredients,
  healthLabels,
  servings,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="recipe pic" />
      <h4>{calories.toFixed()} calories</h4>
      {/* <ul className="list">
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul> */}
      <h4>{servings} servings</h4>
    </div>
  );
};

export default RecipeBox;
