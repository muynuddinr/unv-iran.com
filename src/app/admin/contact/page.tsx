"use client";

import React, { useState } from 'react';
import { FiMail, FiUser, FiPhone, FiMessageSquare, FiStar, FiTrash2 } from 'react-icons/fi';

// Mock data for contact messages
const mockMessages = [
  { 
    id: 1, 
    name: 'John Smith', 
    email: 'john.smith@example.com', 
    phone: '123-456-7890', 
    message: 'I\'m interested in your enterprise security solutions. Could you provide more information?', 
    date: '2023-09-15', 
    read: true 
  },
  { 
    id: 2, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@example.com', 
    phone: '555-123-4567', 
    message: 'We need to upgrade our current system. What would you recommend for a mid-sized office?', 
    date: '2023-09-12', 
    read: true 
  },
  { 
    id: 3, 
    name: 'Michael Brown', 
    email: 'mbrown@example.com', 
    phone: '333-777-8888', 
    message: 'Looking for a quote on your outdoor surveillance cameras. Please contact me ASAP.', 
    date: '2023-09-10', 
    read: false 
  },
  { 
    id: 4, 
    name: 'Emma Wilson', 
    email: 'ewilson@example.com', 
    phone: '444-555-6666', 
    message: 'I have some technical issues with my recently purchased system. Need help troubleshooting.', 
    date: '2023-09-08', 
    read: false 
  },
  { 
    id: 5, 
    name: 'David Clark', 
    email: 'dclark@example.com', 
    phone: '111-222-3333', 
    message: "I'd like to schedule a demo of your integrated security solutions for our new building project.", 
    date: '2023-09-05', 
    read: true 
  },
];

export default function ContactPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<typeof mockMessages[0] | null>(null);
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'read', 'unread'

  const filteredMessages = messages.filter(message => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'read') return message.read;
    if (filterStatus === 'unread') return !message.read;
    return true;
  });

  const markAsRead = (id: number) => {
    setMessages(messages.map(message => 
      message.id === id ? { ...message, read: true } : message
    ));
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Contact Messages</h1>
        <div className="flex space-x-2">
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Messages</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Message List */}
        <div className="w-full md:w-1/3 border-r">
          <div className="px-4 py-3 border-b bg-gray-50">
            <h2 className="font-medium text-gray-700">Inbox ({messages.filter(m => !m.read).length} unread)</h2>
          </div>
          <div className="overflow-y-auto h-[500px]">
            {filteredMessages.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No messages found</div>
            ) : (
              filteredMessages.map((message) => (
                <div 
                  key={message.id}
                  className={`px-4 py-3 border-b cursor-pointer transition-colors hover:bg-blue-50 
                    ${selectedMessage?.id === message.id ? 'bg-blue-50' : ''}
                    ${!message.read ? 'font-semibold bg-blue-50/50' : ''}`}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.read) markAsRead(message.id);
                  }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-2">
                        {message.name.charAt(0)}
                      </div>
                      <span className="text-sm">{message.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{message.date}</span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">{message.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="w-full md:w-2/3 flex flex-col">
          {selectedMessage ? (
            <>
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h3 className="font-medium text-lg">Message from {selectedMessage.name}</h3>
                <div className="flex space-x-2">
                  <button 
                    className="p-2 text-gray-500 hover:text-yellow-500 rounded-full hover:bg-gray-100 transition-colors"
                    title="Star message"
                  >
                    <FiStar size={18} />
                  </button>
                  <button 
                    className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 transition-colors"
                    title="Delete message"
                    onClick={() => deleteMessage(selectedMessage.id)}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <div className="mb-4 sm:mb-0">
                      <div className="flex items-center space-x-2 mb-3">
                        <FiUser className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-600">Name:</span>
                        <span className="text-sm text-gray-800">{selectedMessage.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMail className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-600">Email:</span>
                        <a href={`mailto:${selectedMessage.email}`} className="text-sm text-blue-600 hover:underline">
                          {selectedMessage.email}
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <FiPhone className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-600">Phone:</span>
                        <a href={`tel:${selectedMessage.phone}`} className="text-sm text-blue-600 hover:underline">
                          {selectedMessage.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600">Received:</span>
                        <span className="text-sm text-gray-800">{selectedMessage.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-start space-x-2 mb-2">
                      <FiMessageSquare className="text-blue-600 mt-1" />
                      <span className="text-sm font-medium text-gray-600">Message:</span>
                    </div>
                    <p className="text-gray-800 whitespace-pre-line pl-6">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Reply to Message
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500">
              <FiMail size={48} className="mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">No message selected</h3>
              <p>Select a message from the list to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 