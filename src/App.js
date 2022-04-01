import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from './components/cart/Cart';
import Checkout from "./components/Checkout";
import { ProductContext } from "./context";


function App() {
  return (
    <ProductContext.Consumer>
      {value => {
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Default />} />
              </Route>
              <Route path="/checkout" element={value.state.cart.length === 0 ? <Navigate to="/" /> : <Checkout />} />
            </Routes>
          </BrowserRouter>
        );
      }}
    </ProductContext.Consumer>
  )
}

export default App;
