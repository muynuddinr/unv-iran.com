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
  FiLock,
  FiEye,
  FiAlertTriangle,
  FiGlobe
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import img1 from '../../../public/bank/Bank banner.webp'
import img2 from '../../../public/bank/Retail Bank.webp'
import img3 from '../../../public/bank/Credit Unions.webp'
import img4 from '../../../public/bank/Corporate Banking.webp'

const Bank = () => {
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
            Uniview Iran <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Banking Security Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Advanced security camera solutions for Iranian financial institutions, providing comprehensive surveillance and protection for assets, staff, and customers.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
              <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src={img1} 
                    alt="Bank Security" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted Banking Security Solutions in Iran</h2>
              <p className="text-gray-700 mb-6">
                As Iran's leading provider of security solutions, Uniview Iran understands the unique challenges faced by local banking institutions. Our advanced surveillance systems are designed to meet the specific security requirements of Iranian banks while ensuring compliance with local regulations.
              </p>
              <p className="text-gray-700 mb-6">
                Our integrated security camera systems combine cutting-edge Uniview technology with professional installation and support, delivering complete surveillance coverage across your banking facilities. From ATM monitoring to vault security, our solutions provide comprehensive protection tailored to Iranian banking standards.
              </p>
              <p className="text-gray-700">
                Uniview Iran's banking security solutions are scalable and cost-effective, with local technical support and warranty coverage to ensure long-term reliability and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features of Uniview Iran's Banking Solutions</h2>
            <p className="text-xl text-gray-700">
              Our specialized security camera systems include these essential components for Iranian banks.
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
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiVideo className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Video Surveillance</h3>
              <p className="text-gray-700">
                High-definition cameras with facial recognition capabilities to monitor all areas of your banking facility, cash handling areas, ATMs, and safe deposit vaults.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiLock className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Access Control</h3>
              <p className="text-gray-700">
                Multi-factor authentication systems for secure access to restricted areas, vaults, and after-hours entry, with complete audit trails and real-time monitoring.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FiAlertTriangle className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Intrusion Detection</h3>
              <p className="text-gray-700">
                Advanced alarm systems with immediate notification capabilities, integrated with glass-break sensors, motion detectors, and panic buttons for comprehensive protection.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <FiEye className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Fraud Detection</h3>
              <p className="text-gray-700">
                AI-powered video analytics for unusual activity detection, real-time alert systems for theft prevention, and transaction monitoring at teller stations and ATMs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Iran Banking Security</h2>
            <p className="text-xl text-gray-700">
              Partner with Iran's trusted security solutions provider for comprehensive protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Meet financial industry security standards and regulations with documented audit trails and comprehensive security measures.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Asset Protection</h3>
                <p className="text-gray-600">
                  Safeguard physical currency, safety deposit boxes, and critical financial documents from theft, fraud, and unauthorized access.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Confidence</h3>
                <p className="text-gray-600">
                  Build trust with clients by demonstrating a commitment to security and ensuring their personal information and assets are protected.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamline security operations with integrated systems that work together seamlessly, reducing manual monitoring and response times.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Incident Prevention</h3>
                <p className="text-gray-600">
                  Proactively identify security threats before they materialize with AI-powered analytics and real-time monitoring capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Evidence Collection</h3>
                <p className="text-gray-600">
                  Capture high-quality video evidence for investigations and provide irrefutable documentation for law enforcement when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
            <p className="text-xl text-gray-700">
              Our banking security solutions are perfect for a wide range of financial institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={img2} 
                  alt="Retail Banking" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Retail Banking</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security for branch locations including lobby areas, teller stations, ATMs, and night deposit boxes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={img3} 
                  alt="Credit Unions" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Credit Unions</h3>
                <p className="text-gray-600 mb-4">
                  Tailored security systems for smaller financial institutions that balance robust protection with operational simplicity.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={img4} 
                  alt="Corporate Banking" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Corporate Banking</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise-grade security solutions for corporate headquarters, trading floors, and data centers with advanced access control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Bank with Uniview Iran</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our local security experts to design a customized surveillance solution for your banking institution, with professional installation and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Request a Free Consultation
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg flex items-center justify-center"
              >
                View Our Products
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bank;
