"use client";

import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiSearch, 
  FiTrash2, 
  FiEye, 
  FiFilter,
  FiChevronDown,
  FiMessageSquare,
  FiUser,
  FiCalendar,
  FiChevronRight,
  FiX,
  FiArrowRight
} from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contact() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  
  const contacts = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '+1234567890',
      subject: 'Product Inquiry - Security Camera System',
      message: 'I am interested in your 4K security camera system. Can you provide more details about the installation process and pricing?',
      date: '2024-03-15',
      status: 'Unread'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '+1234567891',
      subject: 'Support Request - Camera Setup',
      message: 'I recently purchased your doorbell camera and I\'m having trouble with the WiFi connection. Can you help me troubleshoot this issue?',
      date: '2024-03-14',
      status: 'Read'
    },
    { 
      id: 3, 
      name: 'Michael Brown', 
      email: 'michael@example.com', 
      phone: '+1234567892',
      subject: 'Quote Request - Business Security',
      message: 'I own a retail store and I\'m looking for a comprehensive security solution. Can you provide a quote for a system with 8 cameras and access control?',
      date: '2024-03-13',
      status: 'Replied'
    },
    { 
      id: 4, 
      name: 'Sarah Johnson', 
      email: 'sarah@example.com', 
      phone: '+1234567893',
      subject: 'Partnership Opportunity',
      message: 'Our company specializes in smart home installation and we\'re interested in partnering with your brand. Let\'s schedule a call to discuss the possibilities.',
      date: '2024-03-12',
      status: 'Read'
    },
  ];

  const filteredContacts = contacts
    .filter(contact => 
      (contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterStatus === 'all' || contact.status.toLowerCase() === filterStatus.toLowerCase())
    );

  const statusColors = {
    'Unread': 'bg-blue-100 text-blue-800',
    'Read': 'bg-gray-100 text-gray-800',
    'Replied': 'bg-green-100 text-green-800'
  };

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Contact Messages</h1>
          <p className="text-gray-500 mt-1">Manage customer inquiries</p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6"
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white p-5 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <FiMessageSquare className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total Messages</h3>
              <p className="text-3xl font-bold">{contacts.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white p-5 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <FiMail className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Unread Messages</h3>
              <p className="text-3xl font-bold">{contacts.filter(c => c.status === 'Unread').length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-white p-5 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-lg">
              <FiArrowRight className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Replied Messages</h3>
              <p className="text-3xl font-bold">{contacts.filter(c => c.status === 'Replied').length}</p>
            </div>
          </div>
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
                placeholder="Search messages..."
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            
            <div className="flex space-x-3 w-full md:w-auto">
              <button 
                onClick={() => setFilterStatus('all')}
                className="px-4 py-2 border rounded-lg flex items-center hover:bg-gray-50 transition-all w-full md:w-auto justify-center"
              >
                All
              </button>
              <button 
                onClick={() => setFilterStatus('Unread')}
                className="px-4 py-2 border rounded-lg flex items-center hover:bg-gray-50 transition-all w-full md:w-auto justify-center"
              >
                Unread
              </button>
              <button 
                onClick={() => setFilterStatus('Read')}
                className="px-4 py-2 border rounded-lg flex items-center hover:bg-gray-50 transition-all w-full md:w-auto justify-center"
              >
                Read
              </button>
              <button 
                onClick={() => setFilterStatus('Replied')}
                className="px-4 py-2 border rounded-lg flex items-center hover:bg-gray-50 transition-all w-full md:w-auto justify-center"
              >
                Replied
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{contact.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${statusColors[contact.status as keyof typeof statusColors]}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FiEye />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 