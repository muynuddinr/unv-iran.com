"use client";

import React from 'react';
import { FiBell, FiUser, FiSettings } from 'react-icons/fi';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b z-10">
      <div className="px-4 py-3 md:px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800 hidden md:block">
          Admin Dashboard
        </h1>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors relative">
            <FiBell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
            <FiSettings size={20} />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
              <FiUser size={16} />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@uniview.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;