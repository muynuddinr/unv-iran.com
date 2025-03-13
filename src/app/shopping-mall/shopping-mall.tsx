"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiShield, 
  FiVideo, 
  FiUsers, 
  FiCheckCircle, 
  FiArrowRight, 
  FiSend,
  FiEye,
  FiMap,
  FiAlertTriangle,
  FiLayers
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const ShoppingMall = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shopping Mall Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Comprehensive security management systems designed to protect your retail space, enhance customer experience, and streamline operations.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96">
                <Image 
                  src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Shopping Mall Security"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Complex Retail Environments</h2>
                <p className="text-gray-700 mb-6">
                  Shopping malls present unique security challenges with their large, open spaces, multiple entrances, diverse tenant mix, and high visitor volume. Uniview offers comprehensive security solutions designed specifically for these complex environments.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated shopping mall security systems combine advanced surveillance technology with intelligent analytics, providing complete visibility across your entire property. From common areas to parking structures, food courts to loading docks, our solutions ensure comprehensive protection.
                </p>
                <p className="text-gray-700">
                  Uniview's mall security solutions are designed to balance robust security with a positive customer experience, helping you create a safe, welcoming environment for shoppers, staff, and vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Security Features</h2>
            <p className="text-xl text-gray-700">
              Our shopping mall security solutions include these essential components to ensure comprehensive protection.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-pink-500 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <FiMap className="text-pink-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Multi-zone Monitoring</h3>
              <p className="text-gray-700">
                Advanced surveillance systems that provide comprehensive coverage of all mall areas, with customized monitoring solutions for different zones based on specific security needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Crowd Management</h3>
              <p className="text-gray-700">
                AI-powered analytics that monitor crowd density, flow patterns, and gather occupancy data to prevent overcrowding and optimize staffing during peak shopping periods.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FiAlertTriangle className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Emergency Exit Tracking</h3>
              <p className="text-gray-700">
                Dedicated monitoring of emergency exits and evacuation routes with automatic alerts for blocked pathways and integration with emergency response systems.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiEye className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Parking Area Security</h3>
              <p className="text-gray-700">
                Comprehensive coverage of parking structures with license plate recognition, suspicious behavior detection, and 24/7 monitoring to protect vehicles and prevent crime.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Mall Security</h2>
            <p className="text-xl text-gray-700">
              Our integrated approach to shopping mall security delivers multiple advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-pink-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Safety</h3>
                <p className="text-gray-600">
                  Comprehensive monitoring that significantly reduces security incidents, creating a safer environment for shoppers, employees, and tenants.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-pink-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Improved Customer Experience</h3>
                <p className="text-gray-600">
                  Enhanced security that remains unobtrusive, allowing shoppers to enjoy a pleasant, worry-free environment throughout your mall.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-pink-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Insights</h3>
                <p className="text-gray-600">
                  Valuable data on foot traffic patterns, dwell times, and visitor behavior that helps optimize mall layout and tenant placement.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-pink-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Rapid Incident Response</h3>
                <p className="text-gray-600">
                  Immediate alerts and comprehensive video evidence that enable swift and effective response to security incidents, minimizing impacts.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-pink-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduced Liability</h3>
                <p className="text-gray-600">
                  Comprehensive monitoring and documentation that can significantly reduce liability risks and potentially lower insurance premiums.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-pink-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Centralized Management</h3>
                <p className="text-gray-600">
                  Unified system that allows security personnel to monitor and manage all security aspects from a single, intuitive platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
            <p className="text-xl text-gray-700">
              Our shopping mall security solutions are perfect for a variety of retail environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-pink-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiLayers className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Traditional Enclosed Malls</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions for large indoor shopping centers with multiple entrances, food courts, and extensive common areas requiring coordinated security.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiShield className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Open-Air Shopping Centers</h3>
                <p className="text-gray-600 mb-4">
                  Specialized security for outdoor retail environments with unique perimeter protection needs and weather-resistant surveillance equipment.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiVideo className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Mixed-Use Developments</h3>
                <p className="text-gray-600 mb-4">
                  Integrated solutions for complex spaces combining retail, dining, entertainment, and residential areas with varied security requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Metropolitan Shopping Center</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-6">
                      A major shopping center with over 200 stores and 2 million square feet of retail space was experiencing challenges with security coverage, theft incidents, and inefficient use of security personnel.
                    </p>
                    <p className="text-gray-700 mb-6">
                      After implementing Uniview's integrated mall security solution, including AI-powered video analytics, centralized monitoring, and crowd management tools, they achieved:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      <li><strong>35% reduction</strong> in reported security incidents within six months</li>
                      <li><strong>22% decrease</strong> in retail theft across tenant stores</li>
                      <li><strong>40% improvement</strong> in security response times</li>
                      <li><strong>15% increase</strong> in customer satisfaction scores related to safety</li>
                      <li>Return on investment achieved within the first year</li>
                    </ul>
                    <p className="text-gray-700">
                      The mall management team was able to optimize security staffing based on traffic data, significantly reducing costs while improving overall security coverage and effectiveness.
                    </p>
                  </div>
                  
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1555529771-122e5d9f2341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Shopping Mall Security Command Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Secure Your Shopping Mall Today</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let our security experts design a customized shopping mall security solution that addresses your specific challenges and requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
                >
                  <FiSend className="mr-2" />
                  Request a Consultation
                </Link>
                <Link 
                  href="/products" 
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg flex items-center justify-center"
                >
                  Explore Our Products
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingMall;
