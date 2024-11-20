import { useState } from 'react';
import { products } from '../data/products';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = (products || [])
    .filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
      return false;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="category" className="font-semibold text-lg">Category:</label>
          <select 
            id="category"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)} 
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="All">All</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Fitness">Fitness</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="font-semibold text-lg">Sort by price:</label>
          <select 
            id="sort"
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)} 
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">Category: {product.category}</p>
              <p className="font-semibold text-xl text-blue-600 mt-2">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
