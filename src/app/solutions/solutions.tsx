"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { 
  FiArrowRight, 
  FiCamera, 
  FiShield, 
  FiVideo, 
  FiBarChart,
  FiCheckCircle
} from 'react-icons/fi';

const solutionCategories = [
  {
    id: 'building',
    name: 'Building',
    description: 'Comprehensive security solutions for commercial and residential complexes.',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    features: [
      'Perimeter Protection',
      'Access Control Systems',
      'Video Surveillance',
      'Visitor Management'
    ]
  },
  {
    id: 'school',
    name: 'School',
    description: 'Advanced safety and security systems for educational institutions.',
    image: 'https://images.unsplash.com/photo-1531537571171-dbba9a9d2d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    features: [
      'Campus-wide Monitoring',
      'Emergency Response Integration',
      'Student Safety Tracking',
      'Restricted Area Control'
    ]
  },
  {
    id: 'hotel',
    name: 'Hotel',
    description: 'Tailored security solutions for hospitality environments.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Guest Room Security',
      'Lobby and Common Area Surveillance',
      'Staff Monitoring',
      'Asset Protection'
    ]
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Loss prevention and operational intelligence for retail spaces.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Theft Prevention',
      'Customer Flow Analysis',
      'POS Integration',
      'Inventory Tracking'
    ]
  },
  {
    id: 'shopping',
    name: 'Shopping Mall',
    description: 'Comprehensive security management for large commercial spaces.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Multi-zone Monitoring',
      'Crowd Management',
      'Emergency Exit Tracking',
      'Parking Area Security'
    ]
  },
  {
    id: 'stadium',
    name: 'Stadium',
    description: 'High-performance security for large event venues.',
    image: 'https://images.unsplash.com/photo-1508098682722-4b6a4d3d9827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Crowd Control',
      'VIP Area Protection',
      'Real-time Threat Detection',
      'Incident Response'
    ]
  },
  {
    id: 'bank',
    name: 'Bank',
    description: 'Mission-critical security for financial institutions.',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Vault Monitoring',
      'ATM Surveillance',
      'Transaction Area Security',
      'Compliance Tracking'
    ]
  },
  {
    id: 'hospital',
    name: 'Hospital',
    description: 'Specialized security solutions for healthcare environments.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
    features: [
      'Patient Safety',
      'Restricted Area Control',
      'Medication Storage Monitoring',
      'Staff Safety'
    ]
  },
  {
    id: 'warehouse',
    name: 'Warehouse & Logistics',
    description: 'Comprehensive security for storage and distribution centers.',
    image: 'https://images.unsplash.com/photo-1586528116311-c6ff7f1c4e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: [
      'Inventory Protection',
      'Perimeter Security',
      'Vehicle Tracking',
      'Loading Dock Monitoring'
    ]
  }
];

const SolutionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(solutionCategories[0]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Hero Section with Enhanced Typography */}
        <section className="text-center mb-16 space-y-6 mt-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Tailored Security Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Every Industry
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uniview delivers state-of-the-art security solutions designed to address the unique challenges faced by businesses across various sectors.
          </p>
        </section>

        {/* Solution Categories with Improved Responsiveness */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mobile Category Accordion */}
          <div className="md:hidden space-y-4">
            {solutionCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-blue-50 transition-colors"
                >
                  <span className="text-xl font-semibold text-gray-800">{category.name}</span>
                  <FiArrowRight
                    className={`h-6 w-6 transform transition-transform ${
                      expandedCategory === category.id ? 'rotate-90 text-blue-600' : 'text-gray-500'
                    }`}
                  />
                </button>
                {expandedCategory === category.id && (
                  <div className="p-6 pt-0">
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <Image 
                        src={category.image}
                        alt={`${category.name} Security Solutions`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <FiCheckCircle className="text-blue-600 text-lg shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Category List */}
          <div className="hidden md:block space-y-4">
            {solutionCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                  selectedCategory.id === category.id 
                    ? 'bg-blue-50 text-blue-700 shadow-md' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold group-hover:translate-x-1 transition-transform">
                    {category.name}
                  </span>
                  <FiArrowRight className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>

          {/* Category Details with Enhanced Styling */}
          <div className="hidden md:block md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-transform hover:scale-[1.02]">
              <div className="relative h-80 md:h-96 group">
                <Image 
                  src={selectedCategory.image} 
                  alt={`${selectedCategory.name} Security Solutions`}
                  fill
                  className="object-cover transition duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {selectedCategory.name}
                    </h2>
                    <p className="text-lg text-white/90 drop-shadow">
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCategory.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-3 group hover:bg-blue-50 p-2 rounded-lg transition-colors"
                    >
                      <FiCheckCircle className="text-blue-600 group-hover:text-blue-700 transition text-lg shrink-0" />
                      <span className="text-lg text-gray-700 group-hover:text-blue-700 transition">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Security Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced security solutions that adapt to your evolving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: FiCamera, 
                title: 'Intelligent Video Surveillance', 
                description: 'High-definition cameras with advanced analytics capabilities.' 
              },
              { 
                icon: FiShield, 
                title: 'Secure Access Control', 
                description: 'Multi-factor authentication for enhanced entry management.' 
              },
              { 
                icon: FiVideo, 
                title: 'Unified Video Management', 
                description: 'Centralized platform for recording, analyzing, and managing video data.' 
              },
              { 
                icon: FiBarChart, 
                title: 'AI-Powered Video Analytics', 
                description: 'Proactive insights for enhanced security and operational intelligence.' 
              }
            ].map((solution, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl border-t-4 border-blue-600 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                  <solution.icon className="text-blue-600 text-3xl group-hover:text-blue-700 transition" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-700 transition">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-lg">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section with Gradient and Hover Effects */}
        <section className="mt-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-16 text-center shadow-2xl hover:scale-[1.01] transition-transform">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Elevate Your Security Posture Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with Uniview to design a customized security solution that meets your unique requirements.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Request a Consultation
            </Link>
            <Link 
              href="/products" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full font-medium transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore Our Products
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SolutionsPage;
