import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from './components/cart/Cart';
import Checkout from "./components/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Default />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>

    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route exact path="/" component={Home}/>
    //     <Route path="/cart" component={Cart} />
    //     <Route path="/details/:id" component={Details} />
    //     <Route path="*" component={Default} />
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;
