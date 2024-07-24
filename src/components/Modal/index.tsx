import './Modal.scss'

const Modal = () => {
  return (
    <>
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className={`modal__content modal__contant--light`}>
          <h2 className="modal__title"></h2>
          <p className="modal__para"></p>
          <button className="modal__button">fechar</button>
        </div>
      </div>
    </>
  )
}

export default Modal
