import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="bg-gray-100 h-48 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {product.category}
        </span>
        <h3 className="font-semibold mt-2">{product.name}</h3>
        <p className="text-xl font-bold text-blue-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;