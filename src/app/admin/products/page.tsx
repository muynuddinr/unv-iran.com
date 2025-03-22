"use client";

import React, { useState } from 'react';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiSearch, 
  FiFilter, 
  FiChevronDown, 
  FiEye, 
  FiBarChart2 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Sample product data
  const products = [
    { id: 1, name: 'Security Camera 4K', category: 'Cameras', price: '$199.99', stock: 24, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Doorbell Camera', category: 'Smart Home', price: '$129.99', stock: 15, image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Motion Sensor', category: 'Sensors', price: '$49.99', stock: 32, image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Alarm System', category: 'Security', price: '$299.99', stock: 8, image: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Surveillance Kit', category: 'Kits', price: '$499.99', stock: 5, image: 'https://via.placeholder.com/50' },
  ];
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500 mt-1">Manage your product inventory</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-200 transition-all">
            <FiBarChart2 className="mr-2" /> Analytics
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all">
            <FiPlus className="mr-2" /> Add Product
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="p-5 border-b">
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow w-full md:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            
            <div className="flex space-x-3 w-full md:w-auto">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="px-4 py-2 border rounded-lg flex items-center hover:bg-gray-50 transition-all w-full md:w-auto justify-center"
              >
                <FiFilter className="mr-2 text-gray-600" />
                Filters
                <FiChevronDown className={`ml-2 text-gray-600 transform transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white w-full md:w-auto">
                <option value="">All Categories</option>
                <option value="Cameras">Cameras</option>
                <option value="Smart Home">Smart Home</option>
                <option value="Sensors">Sensors</option>
                <option value="Security">Security</option>
                <option value="Kits">Kits</option>
              </select>
            </div>
          </div>
          
          {filterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <div className="flex space-x-3">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="number" 
                    placeholder="Max" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All</option>
                  <option value="instock">In Stock</option>
                  <option value="low">Low Stock</option>
                  <option value="outofstock">Out of Stock</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="newest">Newest First</option>
                  <option value="pricelow">Price: Low to High</option>
                  <option value="pricehigh">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-md bg-gray-200 overflow-hidden">
                        <img src={product.image} alt={product.name} className="h-10 w-10 object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">#{product.id}</div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${product.stock > 10 ? 'bg-green-100 text-green-800' : 
                       product.stock > 0 ? 'bg-yellow-100 text-yellow-800' : 
                       'bg-red-100 text-red-800'}`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                        <FiEye />
                      </button>
                      <button className="p-1 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                        <FiEdit2 />
                      </button>
                      <button className="p-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t flex items-center justify-between bg-gray-50">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredProducts.length}</span> of <span className="font-medium">{filteredProducts.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors">Previous</button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">1</button>
            <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 