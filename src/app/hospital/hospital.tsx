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
  FiActivity
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hospital = () => {
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
            Uniview Iran <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Hospital Security Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Advanced Uniview surveillance systems designed specifically for Iranian healthcare facilities, ensuring patient safety and facility security while maintaining privacy standards.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="relative z-10">
                  <Image 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80" 
                    alt="Hospital Security Solutions" 
                    width={600} 
                    height={400} 
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Iranian Healthcare Environments</h2>
                <p className="text-gray-700 mb-6">
                  In Iran's evolving healthcare landscape, hospitals require robust security solutions that meet local requirements. Uniview Iran offers state-of-the-art surveillance systems specifically designed for healthcare facilities, providing the perfect balance between security and patient care.
                </p>
                <p className="text-gray-700 mb-6">
                  Our integrated hospital security cameras combine advanced Uniview technology with user-friendly management interfaces, delivering complete monitoring and control across your facility. From patient areas to medication storage, entrance monitoring to emergency response, our solutions create a comprehensive security ecosystem tailored to Iranian healthcare providers.
                </p>
                <p className="text-gray-700">
                  Uniview Iran's hospital security solutions are implemented with guidance from local healthcare security experts, designed to meet Iranian healthcare regulations, and engineered to adapt to the specific needs of modern medical facilities in Iran.
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
              Our comprehensive hospital security solutions include these vital components to ensure patient and staff safety.
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Advanced Surveillance</h3>
              <p className="text-gray-700">
                High-definition cameras with intelligent analytics to monitor patient areas, medication rooms, entrances, and high-risk locations while ensuring privacy compliance.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FiLock className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Access Control</h3>
              <p className="text-gray-700">
                Multi-factor authentication systems that restrict access to sensitive areas like pharmacies, nurseries, and patient record storage while enabling rapid access during emergencies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FiAlertTriangle className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Emergency Response</h3>
              <p className="text-gray-700">
                Integrated alert systems for duress situations, infant security, patient wandering prevention, and coordination with first responders during critical incidents.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600 transition-transform hover:scale-105"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiActivity className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Patient Monitoring</h3>
              <p className="text-gray-700">
                Specialized systems for monitoring high-risk patients, detecting falls, and tracking patient movement while maintaining dignity and privacy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Uniview Iran Security Solutions</h2>
            <p className="text-xl text-gray-700">
              Our specialized approach to healthcare surveillance delivers exceptional advantages for Iranian medical facilities.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Patient Safety</h3>
                <p className="text-gray-600">
                  Create a secure healing environment where patients can focus on recovery without safety concerns.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">HIPAA Compliance</h3>
                <p className="text-gray-600">
                  Security solutions designed to help maintain patient privacy and comply with healthcare regulations.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Medication Protection</h3>
                <p className="text-gray-600">
                  Secure pharmaceutical storage and monitoring to prevent theft and ensure proper administration.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Staff Safety</h3>
                <p className="text-gray-600">
                  Protect healthcare workers from workplace violence with rapid response systems and preventative monitoring.
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
                  Safeguard valuable medical equipment and supplies from theft, misplacement, or unauthorized use.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Centralized Management</h3>
                <p className="text-gray-600">
                  Unified security dashboard that integrates with hospital management systems for streamlined operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Security Applications</h2>
            <p className="text-xl text-gray-700">
              Our hospital security solutions are tailored for various healthcare environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/major-hospitals.jpg" 
                  alt="Major Hospitals Security" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Major Hospitals</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security solutions for large medical centers with multiple departments, high patient volume, and complex security needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/emergency-departments.jpg" 
                  alt="Emergency Departments Security" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Emergency Departments</h3>
                <p className="text-gray-600 mb-4">
                  Specialized security for high-stress areas with 24/7 operations, unpredictable situations, and potential security threats.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/images/specialty-clinics.jpg" 
                  alt="Specialty Clinics Security" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Specialty Clinics</h3>
                <p className="text-gray-600 mb-4">
                  Tailored security solutions for outpatient facilities, mental health centers, and specialty practice environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Healthcare Facility with Uniview Iran</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our local security experts design a customized Uniview surveillance solution that addresses your facility's specific requirements and challenges.
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

export default Hospital;
