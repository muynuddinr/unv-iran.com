"use client";

import React from 'react';
import { 
  FiUsers, 
  FiShoppingBag, 
  FiDollarSign, 
  FiTrendingUp,
  FiBox,
  FiGrid,
  FiActivity,
  FiCalendar,
  FiClock
} from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Dashboard() {
  // Sample statistics
  const stats = [
    { title: 'Total Products', value: '2,367', icon: FiBox, color: 'from-blue-500 to-blue-600' },
    { title: 'Categories', value: '48', icon: FiGrid, color: 'from-emerald-500 to-green-600' },
    { title: 'Total Orders', value: '356', icon: FiShoppingBag, color: 'from-indigo-500 to-purple-600' },
    { title: 'Total Revenue', value: '$23,456', icon: FiDollarSign, color: 'from-amber-500 to-yellow-600' },
  ];

  const recentActivities = [
    { id: 1, action: 'New product added', subject: '4K Security Camera', time: '2 hours ago', icon: FiBox, color: 'bg-blue-100 text-blue-600' },
    { id: 2, action: 'Customer contact', subject: 'Product inquiry from Jane', time: '5 hours ago', icon: FiUsers, color: 'bg-green-100 text-green-600' },
    { id: 3, action: 'New order placed', subject: 'Order #38291', time: '1 day ago', icon: FiShoppingBag, color: 'bg-purple-100 text-purple-600' },
    { id: 4, action: 'Newsletter sent', subject: 'Monthly Newsletter', time: '2 days ago', icon: FiActivity, color: 'bg-amber-100 text-amber-600' },
    { id: 5, action: 'Category updated', subject: 'Smart Home', time: '3 days ago', icon: FiGrid, color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex items-center space-x-3 text-sm">
          <FiCalendar className="text-gray-500" />
          <span className="text-gray-600">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mr-4`}>
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-md lg:col-span-2"
        >
          <h2 className="text-lg font-semibold mb-6 flex items-center">
            <FiTrendingUp className="mr-2 text-blue-600" /> 
            <span>Recent Activity</span>
          </h2>
          <div className="space-y-5">
            {recentActivities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Icon />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-gray-900">{item.action}</p>
                    <p className="text-sm text-gray-600">{item.subject}</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <FiClock className="mr-1" />
                    {item.time}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-lg font-semibold mb-6 flex items-center">
            <FiUsers className="mr-2 text-green-600" /> 
            <span>Quick Stats</span>
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-4 text-white">
              <div className="text-sm opacity-80">New Users (This Month)</div>
              <div className="text-3xl font-bold mt-1">157</div>
              <div className="text-xs mt-2 flex items-center">
                <FiTrendingUp className="mr-1" /> +12% from last month
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="text-sm text-gray-600">Total Products</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">2,367</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="text-sm text-gray-600">Total Categories</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">48</div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-600">Subscribers</div>
              <div className="flex justify-between items-end">
                <div className="text-2xl font-bold text-gray-800">1,254</div>
                <div className="text-xs text-green-600 flex items-center">
                  <FiTrendingUp className="mr-1" /> +8.5%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 