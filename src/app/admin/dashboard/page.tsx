"use client";

import React from 'react';
import { 
  FiUsers, 
  FiShoppingBag, 
  FiDollarSign, 
  FiTrendingUp,
  FiBox,
  FiGrid
} from 'react-icons/fi';

export default function Dashboard() {
  // Sample statistics - in a real app, these would come from your API
  const stats = [
    { title: 'Total Products', value: '2,367', icon: FiBox, color: 'bg-blue-500' },
    { title: 'Categories', value: '48', icon: FiGrid, color: 'bg-green-500' },
    { title: 'Total Orders', value: '356', icon: FiShoppingBag, color: 'bg-purple-500' },
    { title: 'Total Revenue', value: '$23,456', icon: FiDollarSign, color: 'bg-amber-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
                  <Icon className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiTrendingUp className="mr-2 text-blue-600" /> 
            Recent Activity
          </h2>
          <div className="space-y-4">
            {/* Sample activity items - replace with real data */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center p-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-medium">{item}</span>
                </div>
                <div>
                  <p className="font-medium">Activity {item}</p>
                  <p className="text-sm text-gray-500">Description of the activity {item}</p>
                </div>
                <p className="ml-auto text-xs text-gray-500">{item}h ago</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiUsers className="mr-2 text-green-600" /> 
            Recent Messages
          </h2>
          <div className="space-y-4">
            {/* Sample messages - replace with real data */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center p-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">U{item}</span>
                </div>
                <div>
                  <p className="font-medium">User {item}</p>
                  <p className="text-sm text-gray-500">Message from user {item}</p>
                </div>
                <p className="ml-auto text-xs text-gray-500">{item * 2}m ago</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 