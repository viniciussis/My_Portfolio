import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "./Modal.css";

const Modal = ({ message, switching, onSwitching, title }) => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  
  return (
    <>
      {switching && (
        <div className='modal'>
          <div className="modal__overlay" onClick={onSwitching} ></div>
          <div className={`modal__content ${isDarkMode ? '' : 'modal__contant--light'}`}>
            <h2 className="modal__title">{title}</h2>
            <p className="modal__para">{message}</p>
            <button className="modal__button" onClick={onSwitching}>
              {language === 'pt' ? 'fechar' : 'close'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal