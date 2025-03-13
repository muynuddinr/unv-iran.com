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
  FiAlertTriangle,
  FiRadio,
  FiLayers
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Stadium = () => {
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
            Stadium Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Comprehensive security systems designed to protect large venues, manage crowds, and ensure the safety of events and spectators.
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
                  src="https://images.unsplash.com/photo-1508098682722-4b6a4d3d9827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Stadium security systems by Uniview" 
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Large-Scale Events</h2>
                <p className="text-gray-700 mb-6">
                  Modern stadiums and large venues present unique security challenges with thousands of attendees, multiple entry points, and high-profile events. Uniview offers specialized security solutions designed specifically for these demanding environments.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated stadium security systems combine advanced surveillance technology with intelligent crowd management tools, providing comprehensive protection and monitoring across your entire venue. From perimeter security to real-time threat detection, our solutions create layers of protection that help prevent incidents and enable swift response when needed.
                </p>
                <p className="text-gray-700">
                  Uniview's stadium security solutions are developed with input from venue security experts, designed to be scalable for events of any size, and engineered to adapt to the evolving security needs of modern entertainment and sports facilities.
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
              Our comprehensive stadium security solutions include these vital components to ensure venue safety.
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
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Crowd Management</h3>
              <p className="text-gray-700">
                Advanced analytics for crowd density monitoring, flow optimization, and automatic alerts when overcrowding is detected in specific sections or entry points.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiVideo className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">High-Definition Surveillance</h3>
              <p className="text-gray-700">
                Ultra-HD cameras with wide viewing angles, powerful zoom capabilities, and low-light performance to monitor all areas of the venue with exceptional clarity.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiShield className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Access Control</h3>
              <p className="text-gray-700">
                Multi-level access systems for different stadium zones, including ticketing integration, staff credentials, and VIP area restrictions with real-time validation.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiAlertTriangle className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Incident Detection</h3>
              <p className="text-gray-700">
                AI-powered analytics that identify potential security threats, unauthorized access attempts, unusual behavior patterns, and emergency situations in real-time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Stadium Security</h2>
            <p className="text-xl text-gray-700">
              Our integrated approach to stadium security delivers multiple advantages for venue operators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Spectator Safety</h3>
                <p className="text-gray-600">
                  Create a secure environment where fans can enjoy events with peace of mind, knowing comprehensive security measures are in place.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Rapid Incident Response</h3>
                <p className="text-gray-600">
                  Minimize response times to security incidents with real-time alerts, centralized monitoring, and coordinated security team deployment.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Optimize staff deployment, entrance flow, and crowd management based on real-time data and historical analytics.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Risk Mitigation</h3>
                <p className="text-gray-600">
                  Reduce liability and insurance costs with documented security measures and comprehensive incident prevention strategies.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Brand Protection</h3>
                <p className="text-gray-600">
                  Maintain and enhance venue reputation by ensuring consistently safe, secure, and enjoyable experiences for all attendees.
                </p>
              </div>
            </div>
            
            <div className="flex p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-orange-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Meet or exceed safety standards and regulations for large public venues with comprehensive security infrastructure.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stadium Security Applications</h2>
            <p className="text-xl text-gray-700">
              Our solutions are tailored for various large venue environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiLayers className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Sports Stadiums</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security for football, baseball, soccer, and multi-purpose sports venues with large capacities and regular event schedules.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-yellow-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiRadio className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Concert Venues</h3>
                <p className="text-gray-600 mb-4">
                  Tailored security solutions for indoor and outdoor performance spaces with flexible configurations and varying attendance levels.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-500 to-red-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiEye className="text-white text-5xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Multi-Purpose Arenas</h3>
                <p className="text-gray-600 mb-4">
                  Adaptable security infrastructure for venues that host various event types from sporting competitions to conventions and exhibitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Metropolitan Sports Arena</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-6">
                      A 65,000-seat sports stadium hosting major league games and concerts was experiencing challenges with entrance congestion, security incident response times, and staff coordination during large events.
                    </p>
                    <p className="text-gray-700 mb-6">
                      After implementing Uniview's integrated stadium security solution, including AI-powered video analytics, crowd management tools, and centralized command center, they achieved:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      <li><strong>40% reduction</strong> in entrance waiting times during peak arrival periods</li>
                      <li><strong>62% improvement</strong> in security incident response times</li>
                      <li><strong>30% decrease</strong> in reported security incidents</li>
                      <li><strong>25% increase</strong> in visitor satisfaction scores related to venue safety</li>
                      <li>Return on investment achieved within 18 months of implementation</li>
                    </ul>
                    <p className="text-gray-700">
                      The venue management team was particularly impressed with how the system integrated with existing infrastructure and provided unexpected operational benefits beyond security.
                    </p>
                  </div>
                  <div className="relative h-80 md:h-96">
                    <Image 
                      src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Stadium security command center" 
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
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to enhance your venue security?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Contact our stadium security specialists to discuss how Uniview can create a customized solution for your venue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                <span>Schedule a Consultation</span>
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/solutions" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                <span>Explore More Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stadium;
