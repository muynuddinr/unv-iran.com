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
  FiTruck,
  FiBox,
  FiAlertTriangle,
  FiMap
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Warehouse = () => {
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
            Warehouse & Logistics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Comprehensive security systems designed to protect inventory, monitor operations, and optimize logistics in warehouse and distribution environments.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-cyan-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1586528116311-c6ff7f1c4e94" 
                      alt="Warehouse Security" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Warehouse Operations</h2>
                <p className="text-gray-700 mb-6">
                  Modern warehouses and logistics centers face unique security challenges with high-value inventory, complex operations, and multiple access points. Uniview provides specialized security solutions tailored to meet these challenges head-on.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated warehouse security systems combine advanced surveillance technology with intelligent monitoring tools, providing comprehensive visibility across your entire facility. From loading docks to storage areas, entry points to shipping zones, our solutions create a complete security ecosystem.
                </p>
                <p className="text-gray-700">
                  Uniview's warehouse security solutions are designed to not only protect assets but also enhance operational efficiency, reduce losses, and provide valuable business intelligence for logistics optimization.
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
              Our warehouse security solutions include these essential components to ensure comprehensive protection.
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
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <FiVideo className="text-cyan-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Perimeter Surveillance</h3>
              <p className="text-gray-700">
                Advanced camera systems that monitor facility perimeters with motion detection, thermal imaging, and intrusion alerts to prevent unauthorized access.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiBox className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Inventory Monitoring</h3>
              <p className="text-gray-700">
                High-definition cameras with AI analytics to monitor storage areas, track inventory movement, and detect unusual activities around high-value merchandise.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiTruck className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Loading Dock Security</h3>
              <p className="text-gray-700">
                Integrated monitoring systems for loading docks with license plate recognition, shipment verification, and synchronized recording during loading/unloading.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-cyan-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Access Control</h3>
              <p className="text-gray-700">
                Multi-tiered access control systems that manage entry to different warehouse zones, track personnel movement, and integrate with time and attendance systems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Warehouse Security</h2>
            <p className="text-xl text-gray-700">
              Our integrated approach to warehouse security delivers multiple advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduced Shrinkage</h3>
                <p className="text-gray-600">
                  Minimize inventory loss from theft, misplacement, and damage with comprehensive monitoring and verification systems.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Gain insights into workflow patterns, identify bottlenecks, and optimize logistical operations through video analytics.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Safety</h3>
                <p className="text-gray-600">
                  Monitor compliance with safety protocols, detect hazards, and ensure proper equipment operation to protect workers and assets.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Claims Resolution</h3>
                <p className="text-gray-600">
                  Quickly resolve shipping discrepancies, damage claims, and customer disputes with reliable video evidence of handling and shipping procedures.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Compliance Support</h3>
                <p className="text-gray-600">
                  Meet industry regulations and insurance requirements with documented security measures and comprehensive audit trails.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Remote Management</h3>
                <p className="text-gray-600">
                  Monitor multiple facilities from a central location with cloud-based surveillance and management tools for improved oversight.
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
                  Uniview integrates cutting-edge technologies into our warehouse security solutions to address the evolving challenges of logistics environments:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                        <FiAlertTriangle className="text-cyan-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">AI-Powered Video Analytics</h4>
                      <p className="text-gray-600">Intelligent algorithms that detect unusual patterns, identify potential security breaches, and provide real-time alerts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                        <FiMap className="text-cyan-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">RFID Integration</h4>
                      <p className="text-gray-600">Synchronize security footage with RFID tracking to create a comprehensive inventory monitoring system with enhanced accountability.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                        <FiTruck className="text-cyan-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">Vehicle Management</h4>
                      <p className="text-gray-600">Automated license plate recognition, driver identification, and vehicle tracking to enhance logistics security and efficiency.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                        <FiShield className="text-cyan-600 text-sm" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">Environmental Monitoring</h4>
                      <p className="text-gray-600">Temperature, humidity, and environmental sensors integrated with security systems to protect sensitive inventory and detect potential hazards.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1586528116493-9f31b0b6a6e5" 
                    alt="Advanced Warehouse Security" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
            <p className="text-xl text-gray-700">
              Our warehouse security solutions are tailored for various logistics environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-cyan-600 to-cyan-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiBox className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Distribution Centers</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security for large-scale distribution hubs with high-volume shipping operations and complex inventory management requirements.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiTruck className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Logistics Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Integrated security for 3PL and 4PL providers managing complex supply chains with multiple entry points and diverse inventory types.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-cyan-700 to-blue-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiShield className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Cold Storage Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Specialized security solutions for temperature-controlled environments with monitoring for both security threats and environmental conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Global Logistics Provider</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-6">
                      A leading logistics company operating 15 distribution centers across North America was facing challenges with inventory shrinkage, operational inefficiencies, and security compliance.
                    </p>
                    <p className="text-gray-700 mb-6">
                      After implementing Uniview's integrated warehouse security solution with AI-powered video analytics, access control, and vehicle monitoring systems, they achieved:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      <li><strong>37% reduction</strong> in inventory shrinkage within the first year</li>
                      <li><strong>22% improvement</strong> in loading dock efficiency</li>
                      <li><strong>45% decrease</strong> in security-related incidents</li>
                      <li><strong>15% reduction</strong> in insurance premiums due to enhanced security measures</li>
                      <li>Complete ROI achieved within 14 months of implementation</li>
                    </ul>
                    <p className="text-gray-700">
                      The company was particularly impressed with how our security solutions provided valuable business intelligence that helped optimize their operations beyond just security benefits.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c" 
                        alt="Warehouse Success Story" 
                        width={500} 
                        height={400} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Warehouse Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our security experts design a customized warehouse security solution that addresses your specific challenges and requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
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

export default Warehouse;
