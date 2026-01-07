import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../Data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 text-blue-600 hover:text-blue-700"
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/products')}
        className="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2"
      >
        ← Back to Products
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center text-9xl">
            {product.image}
          </div>
          
          <div>
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-4xl font-bold text-blue-600 mt-4">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 mt-6 leading-relaxed">
              High-quality {product.name.toLowerCase()} with excellent features
              and durability. Perfect for everyday use with a modern design that fits
              any lifestyle.
            </p>
            
            <button
              onClick={() => {
                addToCart(product);
                navigate('/cart');
              }}
              className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;