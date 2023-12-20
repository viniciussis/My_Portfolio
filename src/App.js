import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Default from "./components/Default";
import { LanguageProvider } from "./context/LanguageContext.js";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<Default/>}>
            <Route index element={<Home/>}/> 
            <Route path='/about-me' element={<Home/>}/>
            <Route path='/certificates' element={<Home/>}/>
            <Route path='/projects' element={<Home/>}/>
            <Route path='/contact' element={<Home/>}/>
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
