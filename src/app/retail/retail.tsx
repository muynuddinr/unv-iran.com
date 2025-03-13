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
  FiBarChart,
  FiEye,
  FiDollarSign,
  FiLayers
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Retail = () => {
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
            Retail Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Comprehensive loss prevention and operational intelligence solutions designed to protect your merchandise, optimize store operations, and enhance customer experience.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Retail Security" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Your Retail Business</h2>
                <p className="text-gray-700 mb-6">
                  In today's retail environment, security challenges extend beyond traditional theft prevention. Uniview offers a comprehensive range of security solutions designed specifically for retail businesses, helping you reduce shrinkage, optimize operations, and enhance the customer experience.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated retail security systems combine advanced surveillance technology with intelligent analytics, providing actionable insights into customer behavior, store performance, and potential security threats. From small boutiques to large retail chains, our solutions scale to meet your specific needs.
                </p>
                <p className="text-gray-700">
                  Uniview's retail security solutions are designed to be unobtrusive yet effective, allowing you to create a welcoming shopping environment while maintaining robust protection for your merchandise, staff, and customers.
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
              Our retail security solutions include these essential components to ensure comprehensive protection.
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
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiShield className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Theft Prevention</h3>
              <p className="text-gray-700">
                Advanced surveillance systems and anti-theft solutions that help detect and deter shoplifting, employee theft, and organized retail crime before they impact your bottom line.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiBarChart className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Customer Flow Analysis</h3>
              <p className="text-gray-700">
                Leverage AI-powered analytics to understand customer movement patterns, identify high-traffic areas, optimize store layouts, and improve the overall shopping experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FiDollarSign className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">POS Integration</h3>
              <p className="text-gray-700">
                Seamlessly integrate security cameras with your point-of-sale systems to correlate transaction data with video footage, helping identify suspicious transactions and prevent fraud.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiLayers className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Inventory Tracking</h3>
              <p className="text-gray-700">
                Monitor merchandise movement, automate inventory checks, and receive alerts for potential stockouts or irregularities, reducing losses and improving inventory management.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Retail Security</h2>
            <p className="text-xl text-gray-700">
              Our integrated approach to retail security delivers multiple advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-purple-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduced Shrinkage</h3>
                <p className="text-gray-600">
                  Minimize losses from theft, fraud, and administrative errors with comprehensive monitoring and prevention systems.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-purple-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Business Intelligence</h3>
                <p className="text-gray-600">
                  Gain valuable insights into customer behavior, store performance, and operational efficiency to make data-driven decisions.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-purple-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Staff Optimization</h3>
                <p className="text-gray-600">
                  Deploy your team more effectively based on customer traffic patterns and peak shopping times.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-purple-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Customer Experience</h3>
                <p className="text-gray-600">
                  Create a safer shopping environment while gathering insights to improve store layouts and customer service.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-purple-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Remote Management</h3>
                <p className="text-gray-600">
                  Monitor multiple store locations from anywhere with cloud-based solutions offering mobile access and real-time alerts.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-purple-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Liability Protection</h3>
                <p className="text-gray-600">
                  Maintain video evidence of incidents to protect against false claims and support insurance requirements.
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
              Our retail security solutions are perfect for a wide range of retail environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiUsers className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Fashion Retail</h3>
                <p className="text-gray-600 mb-4">
                  Specialized solutions for clothing stores to prevent theft, monitor fitting rooms, and analyze shopper behavior while maintaining a premium shopping experience.
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Electronics Stores</h3>
                <p className="text-gray-600 mb-4">
                  High-value merchandise protection with advanced surveillance, secure product displays, and customer service optimization for technology retailers.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-600 to-green-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiEye className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Supermarkets & Groceries</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions for grocery chains with checkout monitoring, cold storage supervision, and crowd management during peak shopping periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: National Retail Chain</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-6">
                      A nationwide retail chain with over 200 locations was facing significant inventory shrinkage and challenges in optimizing their store layouts for maximum sales performance.
                    </p>
                    <p className="text-gray-700 mb-6">
                      After implementing Uniview's comprehensive retail security solution, including integrated POS monitoring, customer flow analysis, and advanced theft prevention systems, they achieved:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      <li><strong>42% reduction</strong> in inventory shrinkage within the first year</li>
                      <li><strong>18% increase</strong> in sales per square foot after optimizing store layouts</li>
                      <li><strong>65% improvement</strong> in case resolution for security incidents</li>
                      <li>Return on investment achieved in less than 9 months</li>
                    </ul>
                    <p className="text-gray-700">
                      The integration of security with business intelligence transformed their loss prevention department from a cost center to a strategic asset contributing directly to profitability.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Retail Security Implementation" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Your Retail Business Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our security experts design a customized retail security solution that addresses your specific challenges and requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
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
      </section>
    </div>
  );
};

export default Retail;