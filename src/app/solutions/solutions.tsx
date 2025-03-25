"use client";

import React, { useState, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { 
  FiArrowRight, 
  FiCamera, 
  FiShield, 
  FiVideo, 
  FiBarChart,
  FiCheckCircle,
  FiArrowDown
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bank from '../../../public/solutions/bank.webp'
import hospital from '../../../public/solutions/hospital.webp';
import building from '../../../public/solutions/bank.webp'
import school from '../../../public/solutions/school.webp';
import hotel from '../../../public/solutions/hotel.webp';
import shopping from '../../../public/solutions/shopping.webp';
import warehouse from '../../../public/solutions/wherehouse.webp';
import retail from '../../../public/solutions/retail.webp';
import stadium from '../../../public/solutions/stadium.webp';


// Add TypeScript interfaces for better type safety
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface SolutionCategory {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  features: string[];
  color?: string;
}

const solutionCategories: SolutionCategory[] = [
  {
    id: 'building',
    name: 'Building',
    description: 'Comprehensive security solutions for commercial and residential complexes.',
    image: building,
    features: [
      'Perimeter Protection',
      'Access Control Systems',
      'Video Surveillance',
      'Visitor Management'
    ],
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'school',
    name: 'School',
    description: 'Advanced safety and security systems for educational institutions.',
    image: school,
    features: [
      'Campus-wide Monitoring',
      'Emergency Response Integration',
      'Student Safety Tracking',
      'Restricted Area Control'
    ],
    color: 'from-green-600 to-green-800'
  },
  {
    id: 'hotel',
    name: 'Hotel',
    description: 'Tailored security solutions for hospitality environments.',
    image: hotel,
    features: [
      'Guest Room Security',
      'Lobby and Common Area Surveillance',
      'Staff Monitoring',
      'Asset Protection'
    ],
    color: 'from-amber-500 to-amber-700'
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Loss prevention and operational intelligence for retail spaces.',
    image: retail,
    features: [
      'Theft Prevention',
      'Customer Flow Analysis',
      'POS Integration',
      'Inventory Tracking'
    ],
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 'shopping-mall',
    name: 'Shopping Mall',
    description: 'Comprehensive security management for large commercial spaces.',
    image: shopping,
    features: [
      'Multi-zone Monitoring',
      'Crowd Management',
      'Emergency Exit Tracking',
      'Parking Area Security'
    ],
    color: 'from-pink-500 to-pink-700'
  },
  {
    id: 'stadium',
    name: 'Stadium',
    description: 'High-performance security for large event venues.',
    image: stadium,
    features: [
      'Crowd Control',
      'VIP Area Protection',
      'Real-time Threat Detection',
      'Incident Response'
    ],
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'bank',
    name: 'Bank',
    description: 'Mission-critical security for financial institutions.',
    image: bank,
    features: [
      'Vault Monitoring',
      'ATM Surveillance',
      'Transaction Area Security',
      'Compliance Tracking'
    ],
    color: 'from-emerald-600 to-emerald-800'
  },
  {
    id: 'hospital',
    name: 'Hospital',
    description: 'Specialized security solutions for healthcare environments.',
    image: hospital,
    features: [
      'Patient Safety',
      'Restricted Area Control',
      'Medication Storage Monitoring',
      'Staff Safety'
    ],
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'warehouse',
    name: 'Warehouse & Logistics',
    description: 'Comprehensive security for storage and distribution centers.',
    image: warehouse,
    features: [
      'Inventory Protection',
      'Perimeter Security',
      'Vehicle Tracking',
      'Loading Dock Monitoring'
    ],
    color: 'from-cyan-600 to-cyan-800'
  }
];

// Core solutions data
const coreSolutions: Feature[] = [
  { 
    icon: FiCamera, 
    title: 'Intelligent Video Surveillance', 
    description: 'High-definition cameras with advanced analytics capabilities for real-time monitoring.' 
  },
  { 
    icon: FiShield, 
    title: 'Secure Access Control', 
    description: 'Multi-factor authentication and biometric solutions for enhanced entry management.' 
  },
  { 
    icon: FiVideo, 
    title: 'Unified Video Management', 
    description: 'Centralized platform for recording, analyzing, and managing video data across all your facilities.' 
  },
  { 
    icon: FiBarChart, 
    title: 'AI-Powered Video Analytics', 
    description: 'Proactive insights and anomaly detection for enhanced security and operational intelligence.' 
  }
];

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Add this new component for mobile view
const MobileSolutionCard = ({ category, onSelect }: {
  category: SolutionCategory;
  onSelect: () => void;
}) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-md overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-48">
      <Image 
        src={category.image}
        alt={category.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw"
      />
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{category.name}</h3>
        <button
          onClick={onSelect}
          className="self-end bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full 
                   flex items-center space-x-2 hover:bg-black/90 transition-colors shadow-md"
        >
          <span>View Details</span>
          <FiArrowRight />
        </button>
      </div>
    </div>
  </motion.div>
);

const SolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SolutionCategory>(solutionCategories[0]);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Memoized category list component
  const CategoryList = useMemo(() => (
    <motion.div 
      className="space-y-3"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {solutionCategories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => setSelectedCategory(category)}
          className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
            selectedCategory.id === category.id 
              ? 'bg-blue-50 text-blue-700 shadow-md' 
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm'
          }`}
          variants={fadeInUp}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                selectedCategory.id === category.id 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 group-hover:bg-blue-400'
              }`} />
              <span className="font-semibold">{category.name}</span>
            </div>
            <FiArrowRight className={`transform transition-all duration-300 ${
              selectedCategory.id === category.id 
                ? 'translate-x-1 opacity-100' 
                : 'opacity-50 group-hover:translate-x-1 group-hover:opacity-100'
            }`} />
          </div>
          <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors pl-5">
            {category.description.slice(0, 80)}...
          </p>
        </motion.button>
      ))}
    </motion.div>
  ), [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Hero Section with Enhanced Typography and Animation */}
        <motion.section 
          className="text-center mb-16 space-y-6 mt-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Tailored Security Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block">
              Every Industry
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uniview delivers state-of-the-art security solutions designed to address the unique challenges faced by businesses across various sectors.
          </p>
          
          {/* Mobile CTA for scrolling to solutions */}
          <motion.div 
            className="md:hidden mt-8 animate-bounce"
            whileHover={{ scale: 1.1 }}
          >
            <button 
              onClick={() => document.getElementById('mobile-solutions')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Scroll to solutions"
              className="flex items-center justify-center mx-auto bg-blue-50 text-blue-600 rounded-full p-3 shadow-md hover:shadow-lg transition-all"
            >
              <FiArrowDown className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Category List */}
          <div className="hidden md:block sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Industries
              </h2>
            </div>
            {CategoryList}
          </div>

          {/* Mobile View */}
          <div className="md:hidden" id="mobile-solutions">
            <div className="grid grid-cols-1 gap-4">
              {solutionCategories.map((category) => (
                <MobileSolutionCard
                  key={category.id}
                  category={category}
                  onSelect={() => {
                    setSelectedCategory(category);
                    document.getElementById('solution-details')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                />
              ))}
            </div>

            {/* Mobile Solution Details */}
            <motion.div
              id="solution-details"
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Add image section */}
                  <div className="relative h-48 w-full">
                    <Image 
                      src={selectedCategory.image}
                      alt={`${selectedCategory.name} Security Solutions`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw"
                      priority
                    />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedCategory.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {selectedCategory.description}
                      </p>
                    </div>
                  </div>

                  {/* Features section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <div className="space-y-3">
                      {selectedCategory.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-lg bg-gray-50"
                        >
                          <div className="flex items-center space-x-3">
                            <FiCheckCircle className="text-blue-600" />
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/${selectedCategory.id}`}
                      className="mt-6 w-full inline-flex items-center justify-center space-x-2 
                                bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md"
                    >
                      <span>Learn more about {selectedCategory.name}</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Category Details */}
          <div className="md:col-span-2 hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-80 md:h-96 group">
                  <Image 
                    src={selectedCategory.image}
                    alt={`${selectedCategory.name} Security Solutions`}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition duration-500 ease-in-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <motion.h2 
                        className="text-3xl font-bold text-white mb-2 drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {selectedCategory.name}
                      </motion.h2>
                      <motion.p 
                        className="text-lg text-white/90 drop-shadow max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {selectedCategory.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h3>
                  <motion.ul 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    key={selectedCategory.id}
                  >
                    {selectedCategory.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center space-x-3 group hover:bg-blue-50 p-3 rounded-lg transition-colors"
                        variants={fadeInUp}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          selectedCategory.color ? `bg-gradient-to-r ${selectedCategory.color}` : 'bg-blue-600'
                        } text-white shadow-md group-hover:scale-110 transition-transform`}>
                          <FiCheckCircle className="text-lg" />
                        </div>
                        <span className="text-lg text-gray-700 group-hover:text-blue-700 transition font-medium">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div 
                    className="mt-10 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link 
                      href={`/${selectedCategory.id}`}
                      className={`inline-flex items-center space-x-2 ${
                        selectedCategory.color ? `bg-gradient-to-r ${selectedCategory.color}` : 'bg-blue-600'
                      } text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}
                    >
                      <span>Learn more</span>
                      <FiArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Core Solutions Section */}
        <motion.section 
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Security Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced security solutions that adapt to your evolving needs.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {coreSolutions.map((solution, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl border-t-4 border-blue-600 group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <solution.icon className="text-blue-600 text-3xl group-hover:text-blue-700 transition-colors group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-lg">{solution.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section with Enhanced Gradient and Hover Effects */}
        <motion.section 
          className="mt-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-10 md:p-16 text-center shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
              Elevate Your Security Posture Today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with Uniview to design a customized security solution that meets your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6">
              <Link 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 group"
              >
                <span className="flex items-center justify-center">
                  Request a Consultation
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default SolutionsPage;