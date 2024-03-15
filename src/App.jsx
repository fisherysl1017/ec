import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import { FitsoleHome } from "./components/fitsoleHome";
import { Footer } from "./components/footer";
import { Eachcategory } from "./components/eachcategory";
import { Eachproduct } from "./components/eachproduct";

function App() {
  return (
    <BrowserRouter>
   
    
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/fitsole" element={<FitsoleHome></FitsoleHome>}></Route>
        <Route path="/category/:name" element={<Eachcategory></Eachcategory>}></Route>
        <Route path="/eachproduct/:name" element={<Eachproduct></Eachproduct>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
