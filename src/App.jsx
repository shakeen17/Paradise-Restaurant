
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { Cart } from "./component/Cart";
import { Header } from './component/Header';
import { About } from "./component/About";
import { Order } from "./component/Order";
import { Catering } from "./component/Catering";

import { createContext, useState ,useEffect } from "react";

import { Footer } from "./component/Footer";
import { Product } from "./component/Product";
import { CardDesign } from "./component/CardDesign";
import { Loader } from './component/Loader';
import DisplayData from "./component/DisplayData";



export const dataContext = createContext();
function App() {
  
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds
  }, []);

  if (loading) {
    return <Loader />;
  }

  
  
  return (
    <>
    <dataContext.Provider value = {{cart,setCart}} >
    <BrowserRouter>
     <Header count = {cart} />
      <div className="container">
      <Routes>
       <Route path="/" element = {<Home/>} />
       <Route path="/cart" element = {<Cart/>} />
       <Route path="/about" element = {<About/>} />
       <Route path="/order" element = {<Order/>} />
       <Route path="/catering" element = {<Catering/>} />
       <Route path='/Product/:category' element = {<Product/>} />
       <Route path="/displaydata" element = {<DisplayData/>} />
       <Route path="/carddesign" element = { <CardDesign/> } />
      
      </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
    </dataContext.Provider>
    </>
  )
}

export default App
