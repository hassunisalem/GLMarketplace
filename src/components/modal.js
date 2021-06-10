import '../styles.css';

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" >
            Yes I want it
        </button>
      </section>
    </div>
  );
};


export default Modal;