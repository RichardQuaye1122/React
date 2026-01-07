import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Quaye's Haven
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your one-stop shop for quality products at great prices
        </p>
        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <ShoppingBag className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">
            Browse through our extensive collection of quality products
          </p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Star className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Top Quality</h3>
          <p className="text-gray-600">
            All products are carefully selected for excellence
          </p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Truck className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">
            Enjoy free shipping on all orders
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Electronics', 'Sports', 'Home', 'Accessories'].map(category => (
            <Link
              key={category}
              to="/products"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-lg font-semibold text-gray-700 hover:text-blue-600"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;