"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCamera, FiShield, FiVideo, FiBarChart, FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Advanced Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Solutions</span> for Modern Protection
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Uniview provides cutting-edge surveillance technologies that help businesses and homes stay secure in today&apos;s challenging environment.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/products" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Explore Products <FiArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 border border-blue-200 hover:border-blue-300 px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-50 filter blur-3xl"></div>
                <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="/hero-security.jpg" 
                      alt="Security Camera System" 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Comprehensive Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our integrated systems provide complete protection for your property, assets, and people.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiCamera className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Surveillance Cameras</h3>
              <p className="text-gray-600">
                High-definition cameras with advanced features for indoor and outdoor monitoring.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 border-t-4 border-purple-600">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiShield className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Access Control</h3>
              <p className="text-gray-600">
                Secure entry systems with keycard, biometric, and mobile access options.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 border-t-4 border-green-600">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FiVideo className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Video Management</h3>
              <p className="text-gray-600">
                Intuitive software for monitoring, recording and managing your security footage.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 border-t-4 border-orange-600">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiBarChart className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Analytics</h3>
              <p className="text-gray-600">
                AI-powered video analytics for threat detection and business intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions For Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Solutions For Every Industry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored security approaches for different business environments and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/solutions/retail" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transform transition-transform group-hover:scale-105">
                <div className="h-48 bg-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Retail</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Prevent theft, monitor customer flow, and improve store operations.
                  </p>
                  <span className="text-blue-600 font-medium flex items-center group-hover:underline">
                    Learn more <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/solutions/bank" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transform transition-transform group-hover:scale-105">
                <div className="h-48 bg-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Banking</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Comprehensive security for financial institutions, ATMs, and vaults.
                  </p>
                  <span className="text-purple-600 font-medium flex items-center group-hover:underline">
                    Learn more <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link href="/solutions/school" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transform transition-transform group-hover:scale-105">
                <div className="h-48 bg-green-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Protect students and staff with specialized campus security systems.
                  </p>
                  <span className="text-green-600 font-medium flex items-center group-hover:underline">
                    Learn more <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/solutions" 
              className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Industry Solutions <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses and organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
              </div>
              <blockquote className="text-gray-700 mb-6">
                &ldquo;Uniview&apos;s integrated security system has transformed how we monitor our retail locations. The analytics features have helped us not only improve security but also understand customer behavior.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">Security Director, Retail Chain</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
              </div>
              <blockquote className="text-gray-700 mb-6">
                &ldquo;The access control system has been flawless. Easy to manage, reliable, and our employees appreciate being able to use their phones for building access. Installation was quick and support has been excellent.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">SW</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Wilson</p>
                  <p className="text-sm text-gray-500">Facility Manager, Tech Company</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
              </div>
              <blockquote className="text-gray-700 mb-6">
                &ldquo;We&apos;ve used several security vendors over the years, but Uniview&apos;s cameras and software are in a different league. The image quality and night vision capabilities are outstanding for our campus security.&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">RM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Robert Miller</p>
                  <p className="text-sm text-gray-500">Director of Safety, University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to enhance your security?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let&apos;s discuss how Uniview&apos;s solutions can address your security challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Uniview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional security solutions backed by innovation and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Industry-Leading Technology</h3>
                <p className="text-gray-600">
                  Cutting-edge hardware and software solutions that stay ahead of security challenges.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Integration</h3>
                <p className="text-gray-600">
                  Our systems work together perfectly and integrate with your existing infrastructure.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Exceptional Support</h3>
                <p className="text-gray-600">
                  24/7 technical support and maintenance services to keep your systems running smoothly.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Systems that grow with your business, from small installations to enterprise-scale deployments.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Management</h3>
                <p className="text-gray-600">
                  User-friendly interfaces that simplify security administration for your team.
                </p>
              </div>
            </div>
            
            <div className="flex p-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Cost-Effective</h3>
                <p className="text-gray-600">
                  Optimal balance of performance and value, with solutions for every budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
