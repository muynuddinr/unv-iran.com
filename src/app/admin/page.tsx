"use client";

import React from 'react';
import { FiUsers, FiShoppingBag, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users" 
          value="2,345" 
          change="+12.5%" 
          icon={<FiUsers className="h-6 w-6 text-blue-500" />} 
          positive={true} 
        />
        <StatCard 
          title="Total Products" 
          value="124" 
          change="+8.2%" 
          icon={<FiShoppingBag className="h-6 w-6 text-purple-500" />} 
          positive={true} 
        />
        <StatCard 
          title="Revenue" 
          value="$35,489" 
          change="+23.1%" 
          icon={<FiDollarSign className="h-6 w-6 text-green-500" />} 
          positive={true} 
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.8%" 
          change="-2.4%" 
          icon={<FiTrendingUp className="h-6 w-6 text-red-500" />} 
          positive={false} 
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        </div>
        <div className="divide-y">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">New order placed</p>
                  <p className="text-sm text-gray-500">Order #4580{item} was placed by user0{item}@example.com</p>
                </div>
                <span className="text-sm text-gray-500">{item}h ago</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-3 bg-gray-50 text-center">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  positive: boolean;
}

const StatCard = ({ title, value, change, icon, positive }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1 text-gray-800">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-gray-50">{icon}</div>
      </div>
      <div className={`mt-4 flex items-center ${positive ? 'text-green-600' : 'text-red-600'}`}>
        <span className="text-sm font-medium">{change}</span>
        <span className="ml-1 text-xs">since last month</span>
      </div>
    </div>
  );
}; 