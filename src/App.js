import Header from './elements/Header'
import Footer from './elements/Footer'
import AboutSection from './elements/AboutSection'
import Certificates from './elements/Certificates'
import Projects from './elements/Projects'
import Form from './elements/Form'
import Title from './elements/Title'
import Skills from './elements/Skills'

function App() {
  return (
    <div className=''>
      <Header/>
      <AboutSection/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Title text='Conectando ideias, construindo oportunidades!'/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
