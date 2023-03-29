const Modal = ({ close, ingredients }) => {
  return (
    <div className="overlay">
      <form className="form">
        <div class="outer">
          <div class="inner" onClick={close}>
            <label>Back</label>
          </div>
        </div>
        <div className="modalBody">
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
        </div>
        <div className="footer">
          <button className="modalButton" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
