"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiArrowRight, 
  FiCamera, 
  FiShield, 
  FiVideo, 
  FiBarChart,
  FiCheckCircle,
  FiArrowDown,
  FiSearch
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  image: string;
  features: string[];
  color?: string;
}

const solutionCategories: SolutionCategory[] = [
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
    ],
    color: 'from-blue-600 to-blue-800'
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
    ],
    color: 'from-green-600 to-green-800'
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
    ],
    color: 'from-amber-500 to-amber-700'
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
    ],
    color: 'from-purple-600 to-purple-800'
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
    ],
    color: 'from-pink-500 to-pink-700'
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
    ],
    color: 'from-orange-500 to-orange-700'
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
    ],
    color: 'from-emerald-600 to-emerald-800'
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
    ],
    color: 'from-red-500 to-red-700'
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

const SolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SolutionCategory>(solutionCategories[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCategories, setFilteredCategories] = useState(solutionCategories);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Filter categories based on search and filters
  const filterCategories = useCallback(() => {
    let filtered = solutionCategories;
    
    if (searchQuery) {
      filtered = filtered.filter(category => 
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.features.some(feature => 
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (activeFilters.length > 0) {
      filtered = filtered.filter(category =>
        activeFilters.some(filter => 
          category.features.some(feature =>
            feature.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    setFilteredCategories(filtered);
  }, [searchQuery, activeFilters]);

  useEffect(() => {
    filterCategories();
  }, [searchQuery, activeFilters, filterCategories]);

  // Handle search keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Memoized category list component
  const CategoryList = useMemo(() => (
    <motion.div 
      className="space-y-3"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {filteredCategories.map((category) => (
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
  ), [filteredCategories, selectedCategory]);

  // Search and filter overlay
  const SearchOverlay = () => (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search solutions... (⌘K)"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Access Control', 'Video Surveillance', 'Analytics', 'Integration'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilters(prev => 
                      prev.includes(filter) 
                        ? prev.filter(f => f !== filter)
                        : [...prev, filter]
                    )}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      activeFilters.includes(filter)
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto p-4">
              {filteredCategories.length > 0 ? (
                filteredCategories.map(category => (
                  <button
                    key={category.id}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg group transition-colors"
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsSearchOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                        {category.name}
                      </h3>
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.description.slice(0, 100)}...
                    </p>
                  </button>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No results found for &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-white">
      <SearchOverlay />
      
      {/* Search Trigger Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow z-40 flex items-center space-x-2"
        onClick={() => setIsSearchOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiSearch className="text-gray-700" />
        <span className="text-sm text-gray-600 hidden sm:inline">
          Search solutions (⌘K)
        </span>
      </motion.button>

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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Industries
              </h2>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Search solutions"
              >
                <FiSearch className="text-gray-600" />
              </button>
            </div>
            {CategoryList}
          </div>

          {/* Mobile Category List - Simplified */}
          <div className="md:hidden space-y-4">
            {solutionCategories.map((category) => (
              <motion.div 
                key={category.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-blue-50 transition-colors"
                  aria-expanded={selectedCategory.id === category.id}
                >
                  <span className="text-xl font-semibold text-gray-800">{category.name}</span>
                  <FiArrowRight
                    className={`h-6 w-6 transform transition-transform ${
                      selectedCategory.id === category.id ? 'rotate-90 text-blue-600' : 'text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {selectedCategory.id === category.id && (
                  <motion.div 
                    className="p-6 pt-0"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <Image 
                        src={category.image}
                        alt={`${category.name} Security Solutions`}
                        fill
                        sizes="(max-width: 768px) 100vw"
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <FiCheckCircle className="text-blue-600 text-lg shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Category Details */}
          <div className="md:col-span-2">
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-8 ${
                    selectedCategory.color ? `via-gradient-to-r ${selectedCategory.color}/30` : ''
                  }`}>
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
                      href={`/solutions/${selectedCategory.id}`}
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