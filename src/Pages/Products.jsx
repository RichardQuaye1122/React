import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { PRODUCTS } from '../Data/products';
import ProductCard from '../Components/ProductCard';

const Products = ({ searchTerm = '' }) => {
  const navigate = useNavigate();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(localSearchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      
      <div className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;