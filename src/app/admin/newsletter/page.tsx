"use client";

import React, { useState } from 'react';
import { FiMail, FiSend, FiUpload, FiSearch, FiFilter, FiDownload } from 'react-icons/fi';

// Mock data for subscribers
const mockSubscribers = [
  { id: 1, email: 'john.doe@example.com', dateSubscribed: '2023-08-05', status: 'Active' },
  { id: 2, email: 'jane.smith@example.com', dateSubscribed: '2023-08-12', status: 'Active' },
  { id: 3, email: 'robert.johnson@example.com', dateSubscribed: '2023-08-18', status: 'Active' },
  { id: 4, email: 'lisa.brown@example.com', dateSubscribed: '2023-08-20', status: 'Inactive' },
  { id: 5, email: 'michael.wilson@example.com', dateSubscribed: '2023-08-22', status: 'Active' },
  { id: 6, email: 'sarah.taylor@example.com', dateSubscribed: '2023-08-25', status: 'Active' },
  { id: 7, email: 'david.martinez@example.com', dateSubscribed: '2023-08-27', status: 'Pending' },
  { id: 8, email: 'emily.anderson@example.com', dateSubscribed: '2023-08-30', status: 'Active' },
  { id: 9, email: 'james.thomas@example.com', dateSubscribed: '2023-09-02', status: 'Active' },
  { id: 10, email: 'jennifer.jackson@example.com', dateSubscribed: '2023-09-05', status: 'Inactive' },
];

// Mock data for campaigns
const mockCampaigns = [
  { id: 1, name: 'Summer Sale Announcement', sentDate: '2023-08-10', opens: 1245, clicks: 523, status: 'Sent' },
  { id: 2, name: 'New Product Launch', sentDate: '2023-08-22', opens: 1876, clicks: 834, status: 'Sent' },
  { id: 3, name: 'September Newsletter', sentDate: '2023-09-01', opens: 1532, clicks: 687, status: 'Sent' },
  { id: 4, name: 'Holiday Special Preview', sentDate: null, opens: 0, clicks: 0, status: 'Draft' },
];

export default function NewsletterPage() {
  const [activeTab, setActiveTab] = useState('subscribers'); // 'subscribers', 'campaigns', 'compose'
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter subscribers based on search and status
  const filteredSubscribers = mockSubscribers.filter(subscriber => {
    const matchesSearch = subscriber.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || subscriber.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Newsletter Management</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('compose')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm flex items-center"
          >
            <FiSend className="mr-2" /> Compose Newsletter
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium text-sm focus:outline-none transition-colors ${
              activeTab === 'subscribers' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('subscribers')}
          >
            Subscribers
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm focus:outline-none transition-colors ${
              activeTab === 'campaigns' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('campaigns')}
          >
            Campaigns
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm focus:outline-none transition-colors ${
              activeTab === 'compose' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('compose')}
          >
            Compose
          </button>
        </div>

        {/* Subscribers Tab */}
        {activeTab === 'subscribers' && (
          <div>
            <div className="p-4 border-b bg-gray-50 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search subscribers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="sm:w-48">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                <FiDownload className="mr-2" /> Export
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Subscribed
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FiMail className="text-blue-500 mr-2" />
                          <div className="text-sm font-medium text-gray-900">{subscriber.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{subscriber.dateSubscribed}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${subscriber.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            subscriber.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {subscriber.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">10</span> subscribers
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      1
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div>
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <h2 className="font-medium text-gray-700">Recent Campaigns</h2>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                <FiFilter className="mr-2" /> Filter
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campaign Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Sent
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Opens
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Clicks
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockCampaigns.map((campaign) => (
                    <tr key={campaign.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {campaign.sentDate || 'Not sent yet'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{campaign.opens}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{campaign.clicks}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${campaign.status === 'Sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Duplicate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Compose Tab */}
        {activeTab === 'compose' && (
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Newsletter Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter newsletter subject..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recipients
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all-subscribers"
                      name="recipients"
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      defaultChecked
                    />
                    <label htmlFor="all-subscribers" className="ml-2 block text-sm text-gray-700">
                      All Active Subscribers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="selected-subscribers"
                      name="recipients"
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="selected-subscribers" className="ml-2 block text-sm text-gray-700">
                      Selected Subscribers
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Newsletter Content
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b flex items-center space-x-4">
                    <button className="p-1 text-gray-600 hover:text-blue-600 rounded hover:bg-gray-100">
                      <span className="font-bold">B</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-blue-600 rounded hover:bg-gray-100">
                      <span className="italic">I</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-blue-600 rounded hover:bg-gray-100">
                      <span className="underline">U</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-blue-600 rounded hover:bg-gray-100">
                      <FiUpload />
                    </button>
                  </div>
                  <textarea
                    id="content"
                    rows={12}
                    className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Compose your newsletter content here..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Save as Draft
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Preview
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Send Newsletter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 