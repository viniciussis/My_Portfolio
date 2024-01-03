import './Contact.css'
import Form from '../../components/Form'
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
  const {isDarkMode} = useTheme();

  return (
    <div className={`contact ${isDarkMode ? '' : 'contact--light'}`}>
      <Form/>
    </div>
  )
}

export default Contact