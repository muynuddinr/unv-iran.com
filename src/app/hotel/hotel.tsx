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
  FiKey
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hotel = () => {
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
            Hotel Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Comprehensive security systems designed to protect guests, staff, and property while enhancing the hospitality experience.
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
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Hotel Security"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Safeguarding the Hospitality Experience</h2>
                <p className="text-gray-700 mb-6">
                  In today's hospitality industry, security is a cornerstone of guest satisfaction. Uniview offers specialized security solutions designed specifically for hotels, resorts, and hospitality venues of all sizes.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated hotel security systems combine advanced technology with discreet implementation, providing comprehensive protection while maintaining the welcoming atmosphere guests expect. From lobby monitoring to room access control, perimeter protection to staff management, our solutions create a secure environment without compromising the hospitality experience.
                </p>
                <p className="text-gray-700">
                  Uniview's hotel security solutions are developed with input from hospitality security experts, designed to be scalable, and engineered to adapt to the evolving security needs of modern hotels.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Security Features</h2>
            <p className="text-xl text-gray-700">
              Our comprehensive hotel security solutions include these vital components to ensure property and guest safety.
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
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <FiVideo className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Surveillance Systems</h3>
              <p className="text-gray-700">
                High-definition cameras with discreet placement throughout public areas, entrances, corridors, and exterior spaces with intelligent analytics to detect unusual activities.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <FiKey className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Access Control</h3>
              <p className="text-gray-700">
                Advanced electronic key systems, RFID technology, and mobile credentials that enhance guest convenience while maintaining strict security protocols for guest rooms and restricted areas.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <FiLock className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Perimeter Security</h3>
              <p className="text-gray-700">
                Comprehensive protection for property boundaries with automated lighting, motion detection, and integrated alarm systems that prevent unauthorized access while maintaining aesthetic appeal.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Visitor Management</h3>
              <p className="text-gray-700">
                Digital visitor tracking and verification systems that streamline check-in processes while screening for potential security concerns and managing high-traffic periods efficiently.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Hotel Security</h2>
            <p className="text-xl text-gray-700">
              Our integrated approach to hotel security delivers multiple advantages for hospitality venues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-amber-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Guest Experience</h3>
                <p className="text-gray-600">
                  Create a secure environment where guests feel protected without intrusive security measures, improving satisfaction and loyalty.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-amber-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Asset Protection</h3>
                <p className="text-gray-600">
                  Safeguard valuable property assets, including furnishings, artwork, and equipment against theft, vandalism, and unauthorized use.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-amber-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Staff Safety</h3>
                <p className="text-gray-600">
                  Protect employees with panic buttons, monitored areas, and safety protocols, particularly for those working night shifts or in isolated areas.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-amber-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamline check-in/check-out procedures, key management, and room access, reducing administrative overhead and improving service delivery.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-amber-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Liability Reduction</h3>
                <p className="text-gray-600">
                  Minimize legal and financial risks with comprehensive monitoring, incident documentation, and proactive threat detection.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-amber-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Brand Protection</h3>
                <p className="text-gray-600">
                  Maintain and enhance your hotel's reputation by demonstrating commitment to guest safety and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Security Technologies</h2>
                <p className="text-gray-700 mb-6">
                  Uniview integrates cutting-edge technologies into our hotel security solutions to address the unique challenges of hospitality environments:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <FiAlertTriangle className="text-amber-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">AI-Powered Video Analytics</h4>
                      <p className="text-gray-600">Intelligent monitoring that can identify suspicious behavior, unauthorized access attempts, and left objects while respecting guest privacy.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <FiEye className="text-amber-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">Mobile Security Management</h4>
                      <p className="text-gray-600">Remote system control allowing security personnel and management to monitor and respond to situations from anywhere on property using smartphones or tablets.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <FiShield className="text-amber-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">Integrated Emergency Response</h4>
                      <p className="text-gray-600">Systems that automatically coordinate with local emergency services, featuring pre-programmed protocols for different types of incidents.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Advanced Hotel Security Technologies"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hospitality Security Applications</h2>
            <p className="text-xl text-gray-700">
              Our hotel security solutions are tailored for various hospitality environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/luxury-hotel.jpg" 
                  alt="Luxury Hotels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Luxury Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Premium security solutions with discreet implementation for high-end properties, including VIP protection features and integration with concierge services.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/resort-property.jpg" 
                  alt="Resort Properties"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Resort Properties</h3>
                <p className="text-gray-600 mb-4">
                  Wide-area coverage solutions for sprawling resort complexes with multiple buildings, outdoor spaces, and amenities like pools, beaches, and golf courses.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/business-hotel.jpg" 
                  alt="Business Hotels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Business Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Specialized security focused on conference facilities, business centers, and technology infrastructure for properties catering to corporate travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-amber-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Hospitality Venue Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our security experts design a customized hotel security solution that enhances guest experience while providing comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
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

export default Hotel;
