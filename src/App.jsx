import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductProvider";
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog"
import Login from "./pages/Login";
// import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import CartPage from "./pages/CartPage";
// import "./assets/bootstrap.min (1).css"

const App = () => {
  return (
    <BrowserRouter>
     <CartProvider>
     <ProductProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:url" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        {/* <Footer/> */}
      </ProductProvider>
     </CartProvider>
    </BrowserRouter>
  );
};

export default App;
