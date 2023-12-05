import Header from './elements/Header'
import Footer from './elements/Footer'
import AboutSection from './elements/AboutSection'
import Certificates from './elements/Certificates'
import Projects from './elements/Projects'
import Form from './elements/Form'
import Title from './elements/Title'

function App() {
  return (
    <div className=''>
      <Header/>
      <AboutSection/>
      <Projects/>
      <Certificates/>
      <Title text='Conectando ideias, construindo oportunidades!'/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
