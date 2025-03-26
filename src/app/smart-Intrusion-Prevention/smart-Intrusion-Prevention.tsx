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
  FiRadio,
  FiActivity,
  FiCpu
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const SmartIntrusionPrevention = () => {
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
            Smart Intrusion <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Prevention</span> Solutions
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Advanced AI-powered intrusion detection and prevention systems designed to identify and respond to security threats before they escalate.
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
                  src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Smart Intrusion Prevention"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Proactive Security Intelligence</h2>
                <p className="text-gray-700 mb-6">
                  In today's evolving security landscape, traditional alarm systems are no longer sufficient. Uniview's Smart Intrusion Prevention solutions use advanced AI algorithms to distinguish between real threats and false alarms, dramatically enhancing security effectiveness.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated systems combine multiple detection technologies with intelligent analytics to create a predictive security environment that identifies potential breaches before they occur. From perimeter protection to internal monitoring, our solutions provide comprehensive coverage.
                </p>
                <p className="text-gray-700">
                  Uniview's Smart Intrusion Prevention technology is designed to be adaptable, scalable, and future-proof, ensuring your security infrastructure evolves with emerging threats and changing needs.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Detection Features</h2>
            <p className="text-xl text-gray-700">
              Our smart intrusion prevention solutions include these essential technologies to ensure comprehensive protection.
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
                <FiActivity className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI-Powered Analytics</h3>
              <p className="text-gray-700">
                Machine learning algorithms that continuously improve threat detection accuracy, reducing false alarms while ensuring genuine threats are identified.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FiRadio className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Multi-Sensor Integration</h3>
              <p className="text-gray-700">
                Seamless integration of motion sensors, glass-break detectors, door/window contacts, and environmental monitors for comprehensive protection.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiVideo className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Video Verification</h3>
              <p className="text-gray-700">
                Automatic video recording and analysis when alarms are triggered, providing visual confirmation of intrusions and valuable evidence for investigations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FiCpu className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Edge Computing</h3>
              <p className="text-gray-700">
                On-device processing that enables real-time threat assessment and response, even when network connectivity is compromised or bandwidth is limited.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Smart Intrusion Prevention</h2>
            <p className="text-xl text-gray-700">
              Our integrated approach to intrusion prevention delivers multiple advantages.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Minimized False Alarms</h3>
                <p className="text-gray-600">
                  Advanced filtering technology dramatically reduces false positives, ensuring security resources are focused on genuine threats.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Early Threat Detection</h3>
                <p className="text-gray-600">
                  Identify potential intrusions at the earliest stages, allowing for preventive actions before physical breaches occur.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Automated Response</h3>
                <p className="text-gray-600">
                  Trigger automatic security measures when threats are detected, from locking down specific areas to alerting security personnel.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Monitoring</h3>
                <p className="text-gray-600">
                  Continuous surveillance with consistent attention to detail that never fatigues, ensuring round-the-clock protection.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Remote Management</h3>
                <p className="text-gray-600">
                  Monitor and manage your intrusion prevention system from anywhere via secure mobile apps and web interfaces.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Detailed Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive reporting and analysis of security events to identify patterns and improve future protection strategies.
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
              Our smart intrusion prevention solutions are ideal for various environments and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/commercial-building.jpg" 
                  alt="Commercial Buildings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Commercial Buildings</h3>
                <p className="text-gray-600 mb-4">
                  Protect office buildings, retail spaces, and commercial properties with intelligent systems that distinguish between routine activity and security threats.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/critical-infrastructure.jpg" 
                  alt="Critical Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Critical Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Safeguard utilities, data centers, and essential facilities with advanced perimeter protection and multi-layer security measures.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/residential-property.jpg" 
                  alt="Residential Properties"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Residential Properties</h3>
                <p className="text-gray-600 mb-4">
                  Protect homes and residential complexes with intelligent systems that differentiate between residents, guests, and potential intruders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Enterprise Data Center</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-6">
                      A Fortune 500 company with a 50,000 square foot data center was experiencing recurring false alarms with their legacy security system, causing unnecessary evacuations and business disruptions.
                    </p>
                    <p className="text-gray-700 mb-6">
                      After implementing Uniview's Smart Intrusion Prevention solution with AI-powered analytics and multi-sensor integration, they achieved:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      <li><strong>95% reduction</strong> in false alarms within the first month</li>
                      <li><strong>100% detection rate</strong> for actual security incidents</li>
                      <li><strong>60% faster</strong> response times to verified threats</li>
                      <li><strong>40% reduction</strong> in security staffing costs</li>
                      <li>Return on investment achieved within 8 months</li>
                    </ul>
                    <p className="text-gray-700">
                      The system's ability to distinguish between routine maintenance work and actual intrusion attempts transformed their security operations, allowing them to allocate resources more efficiently while maintaining the highest levels of protection.
                    </p>
                  </div>
                  <div className="relative h-80 md:h-full min-h-[300px]">
                    <Image 
                      src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                      alt="Data Center Security"
                      fill
                      className="object-cover rounded-xl"
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
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Enhance Your Security Posture Today</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let our security experts design a customized smart intrusion prevention solution that addresses your specific challenges and requirements.
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
        </div>
      </section>
    </div>
  );
};

export default SmartIntrusionPrevention;
