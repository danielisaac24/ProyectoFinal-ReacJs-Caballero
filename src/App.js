import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";
import CartProvider from './Components/CartContext';
import Cart from "./Components/Cart";
import {Checkout} from './Components/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>  
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/Item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Cart"} element={<Cart/>} />
          <Route path={"/Checkout"} element={<Checkout/>} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
      <Footer/>  
    </div>
  );
}

export default App;
