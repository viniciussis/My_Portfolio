import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Default from "./components/Default";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default/>}>
          <Route index element={<Home/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
