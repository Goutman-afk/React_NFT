import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import "./style/buttonConnect.css";
import "./style/buttonBuyNow.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./component/Products";
import Create from "./component/Create";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </> 
  );
}

export default App;
