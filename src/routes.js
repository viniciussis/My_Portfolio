import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Certificates from "./pages/Certificates/index.js";
import Projects from "./pages/Projects/index.js";
import Contact from "./pages/Contact/index.js";
import Default from "./components/Default/index.js";
import { LanguageProvider } from "./context/LanguageContext.js";
import { ThemeProvider } from "./context/ThemeContext.js";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path='/' element={<Default/>}>
              <Route index element={<Home/>}/> 
              <Route path='/certificates' element={<Certificates/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Route>
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
