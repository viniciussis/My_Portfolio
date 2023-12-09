import Header from './elements/Header'
import Footer from './elements/Footer'
import AboutSection from './elements/AboutSection'
import Certificates from './elements/Certificates'
import Form from './elements/Form'
import Title from './elements/Title'
import Skills from './elements/Skills'
import ArrowTop from './elements/ArrowTop'
import ProjectSection from './elements/ProjectSection'

function App() {
  return (
    <div className=''>
      <Header/>
      <AboutSection/>
      <ProjectSection/>
      <Skills/>
      <Certificates/>
      <Title text='Conectando ideias, construindo oportunidades!'/>
      <Form/>
      <Footer/>
      <ArrowTop/>
    </div>
  );
}

export default App;
