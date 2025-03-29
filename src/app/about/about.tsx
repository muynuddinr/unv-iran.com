"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiAward, FiGlobe, FiTarget, FiCheck, FiArrowRight, FiSend } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Uniview</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            A global leader in security and surveillance solutions, committed to making the world safer through innovative technology.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
            <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc9a6a25f" 
                  alt="Uniview Headquarters" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2011, Uniview has rapidly grown to become one of the leading global providers of video surveillance products and solutions. With a strong commitment to quality, innovation, and customer satisfaction, we&apos;ve established ourselves as a trusted partner for businesses and organizations worldwide.
            </p>
            <p className="text-gray-700 mb-6">
              Our journey began with a simple vision: to create cutting-edge security technology that helps protect people and assets. Today, we proudly serve customers across various industries in over 145 countries and regions, with a comprehensive portfolio of IP cameras, network video recorders, and integrated security solutions.
            </p>
            <p className="text-gray-700">
              At Uniview, we believe that security is not just about technology—it&apos;s about creating peace of mind for our customers. This philosophy drives everything we do, from product development to customer support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-700">
              Guided by our commitment to excellence, we strive to create a safer world through innovative security solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FiTarget className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative, reliable, and user-friendly security solutions that help our customers protect what matters most to them, while setting new standards for the industry.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FiGlobe className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700">
                To be the global leader in security technology, recognized for our innovation, quality, and commitment to making the world a safer place through advanced surveillance solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-lg p-8 transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-700">
                Integrity, innovation, excellence, and customer focus form the foundation of everything we do. We believe in building lasting relationships based on trust and delivering exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Principles That Guide Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheck className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer-Focused Innovation</h3>
                <p className="text-gray-600">
                  We develop our products with customer needs at the forefront, constantly pushing the boundaries of what&apos;s possible in security technology.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheck className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Without Compromise</h3>
                <p className="text-gray-600">
                  We maintain rigorous quality standards throughout our production process, ensuring our products deliver exceptional reliability and performance.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheck className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Responsibility</h3>
                <p className="text-gray-600">
                  We believe in contributing positively to the communities we serve, promoting sustainability, and maintaining the highest ethical standards.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheck className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Collaborative Excellence</h3>
                <p className="text-gray-600">
                  We foster a culture of teamwork and continuous improvement, where diverse perspectives come together to create extraordinary solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Presence</h2>
                <p className="text-gray-700 mb-6">
                  With headquarters in Asia and operations spanning across the Americas, Europe, Middle East, and Africa, Uniview has established a truly global footprint in the security industry.
                </p>
                <p className="text-gray-700 mb-6">
                  Our international network includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Research and development centers in multiple countries</li>
                  <li>Manufacturing facilities with advanced production capabilities</li>
                  <li>Local sales and support teams providing personalized service</li>
                  <li>A network of over 1,000 trusted distribution partners</li>
                  <li>Solutions deployed across 145+ countries and regions</li>
                </ul>
                <p className="text-gray-700">
                  This global presence allows us to combine international expertise with local knowledge, ensuring our customers receive solutions tailored to their specific regional needs.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                      alt="Uniview Global Presence" 
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

      {/* Innovation & Technology */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovation & Technology</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At the heart of our success is our relentless commitment to technological advancement and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Research & Development</h3>
            <p className="text-gray-700 mb-4">
              Our R&D team comprises over 1,500 engineers dedicated to pushing the boundaries of security technology. We invest more than 15% of our annual revenue into research and development.
            </p>
            <p className="text-gray-700">
              This commitment has resulted in numerous patents and groundbreaking advancements in areas such as AI-powered video analytics, high-definition imaging, and smart security integration.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Manufacturing Excellence</h3>
            <p className="text-gray-700 mb-4">
              Our state-of-the-art manufacturing facilities combine automated production lines with rigorous quality control processes, ensuring every product meets our exacting standards.
            </p>
            <p className="text-gray-700">
              We have implemented Industry 4.0 practices throughout our production ecosystem, enabling greater efficiency, consistency, and customization capabilities.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Future-Ready Solutions</h3>
            <p className="text-gray-700 mb-4">
              We&apos;re committed to developing solutions that anticipate tomorrow&apos;s security challenges, with significant investments in emerging technologies like:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Advanced artificial intelligence</li>
              <li>Machine learning algorithms</li>
              <li>IoT integration</li>
              <li>Cloud-based security platforms</li>
              <li>Edge computing capabilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Building a Safer World</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking for advanced security solutions or interested in career opportunities, we&apos;d love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Contact Us
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg flex items-center justify-center"
              >
                Explore Our Solutions
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
