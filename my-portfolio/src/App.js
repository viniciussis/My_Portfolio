import Header from './elements/Header'
import Footer from './elements/Footer'
import AboutSection from './elements/AboutSection'
import Certificates from './elements/Certificates'
import Projects from './elements/Projects'
import Form from './elements/Form'

function App() {
  return (
    <div className=''>
      <Header/>
      <AboutSection/>
      <Projects/>
      <Certificates/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
