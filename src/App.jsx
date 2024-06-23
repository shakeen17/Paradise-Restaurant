
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { Cart } from "./component/Cart";
import { Header } from './component/Header';
import { About } from "./component/About";
import { Order } from "./component/Order";
import { Catering } from "./component/Catering";
import { Arabian } from "./component/Arabian";
import { Pasta } from "./component/Pasta";
import { Indian } from "./component/Indian";
import { Biriyani } from "./component/Biriyani";
import { createContext, useState } from "react";
import { Dessert } from "./component/Dessert";
import { Drinks } from "./component/Drinks";
import { Chinese } from "./component/Chinese";
import { Italian } from "./component/Italian";
import { Footer } from "./component/Footer";



export const dataContext = createContext();
function App() {
  

  const [cart, setCart] = useState([]);
  
  return (
    <>
    <dataContext.Provider value = {{cart,setCart}} >
    <BrowserRouter>
     <Header />
      <div className="container">
      <Routes>
       <Route path="/" element = {<Home/>} />
       <Route path="/cart" element = {<Cart/>} />
       <Route path="/about" element = {<About/>} />
       <Route path="/order" element = {<Order/>} />
       <Route path="/catering" element = {<Catering/>} />
       <Route path='/Arabian' element = {<Arabian/>} /> 
       <Route path='/Pasta' element = {<Pasta/>} /> 
       <Route path='/Indian' element = {<Indian/>} /> 
       <Route path='/Biriyani' element = {<Biriyani/>} /> 
       <Route path='/Dessert' element = {<Dessert/>} /> 
       <Route path='/Drinks' element = {<Drinks/>} />
       <Route path='/Chinese' element = {<Chinese/>} />
       <Route path='/Italian' element = {<Italian/>} /> 
      </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
    </dataContext.Provider>
    </>
  )
}

export default App
