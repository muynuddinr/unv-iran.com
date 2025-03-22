"use client";

import React, { useState } from 'react';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiSearch, 
  FiGrid, 
  FiEye,
  FiFilter,
  FiChevronDown,
  FiBox
} from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const categories = [
    { 
      id: 1, 
      name: 'Security Cameras', 
      description: 'High-quality surveillance cameras', 
      status: 'Active', 
      products: 32,
      icon: 'https://via.placeholder.com/40'
    },
    { 
      id: 2, 
      name: 'Access Control', 
      description: 'Access management systems', 
      status: 'Active', 
      products: 17,
      icon: 'https://via.placeholder.com/40'
    },
    { 
      id: 3, 
      name: 'Alarms', 
      description: 'Security alarm systems', 
      status: 'Active', 
      products: 23,
      icon: 'https://via.placeholder.com/40'
    },
    { 
      id: 4, 
      name: 'Smart Home', 
      description: 'Home automation devices', 
      status: 'Inactive', 
      products: 12,
      icon: 'https://via.placeholder.com/40'
    },
    { 
      id: 5, 
      name: 'Accessories', 
      description: 'Security system accessories', 
      status: 'Active', 
      products: 41,
      icon: 'https://via.placeholder.com/40'
    },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
          <p className="text-gray-500 mt-1">Manage product categories</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all"
        >
          <FiPlus className="mr-2" /> Add Category
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white p-5 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <FiGrid className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Categories</h3>
              <p className="text-3xl font-bold">{categories.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white p-5 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <FiBox className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Products</h3>
              <p className="text-3xl font-bold">{categories.reduce((acc, cat) => acc + cat.products, 0)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-white p-5 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <FiEye className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Active Categories</h3>
              <p className="text-3xl font-bold">{categories.filter(c => c.status === 'Active').length}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="p-5 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src={category.icon} alt={category.name} className="h-10 w-10 object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">#{category.id}</div>
                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {category.products} products
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${category.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {category.status}
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredCategories.length}</span> of <span className="font-medium">{filteredCategories.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors">Previous</button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">1</button>
            <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </motion.div>
      
      {/* Add Category Modal - This would be implemented with a proper modal component */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Category</h2>
            {/* Form would go here */}
            <div className="flex justify-end mt-6">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg mr-2"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 