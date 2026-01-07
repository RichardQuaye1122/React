import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            QUAYE'S HAVEN
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-200 transition">
              Products
            </Link>
            <Link to="/cart" className="relative p-2 hover:bg-blue-700 rounded-lg transition">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;