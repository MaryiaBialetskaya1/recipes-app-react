const Modal = ({ close }) => {
  return (
    <div className="overlay">
      <form className="form">
        <div className="modalHeader">
          <h3>Modal</h3>
          <button className="closeButton" onClick={close}>
            &times;
          </button>
        </div>
        <div className="modalBody">
          <p>This is Modal Body</p>
        </div>
        <div className="footer">
          <button onClick={close}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
