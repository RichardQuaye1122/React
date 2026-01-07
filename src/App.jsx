import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';  // ⬅️ MAKE SURE THIS IS HERE
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Carts from './Pages/Carts';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar onSearch={setSearchTerm} />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products searchTerm={searchTerm} />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Carts />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;