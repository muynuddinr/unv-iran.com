"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FiSearch, FiMenu, FiX, FiMail, FiPhone, 
  FiHome, FiBox, FiTool, FiInfo, FiSend 
} from 'react-icons/fi';
import logo from '../../../public/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: FiHome },
    { href: '/products', label: 'Products', icon: FiBox },
    { href: '/solutions', label: 'Solutions', icon: FiTool },
    { href: '/about', label: 'About', icon: FiInfo },
    { href: '/contact', label: 'Contact', icon: FiSend },
  ];

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const nav = document.getElementById('mobile-menu');
    if (isOpen && nav && !nav.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      // You could navigate to search results or perform search
    }
  };

  return (
    <>
      {/* Enhanced Top Contact Bar - Now with fixed positioning */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-100 to-purple-100 
          text-gray-800 py-2 shadow-sm transition-all duration-300
          ${isScrolled ? 'opacity-100' : 'opacity-100'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2 hover:text-blue-800 transition-all group">
            <FiMail className="text-blue-600 group-hover:scale-110 transition-transform" />
            <a 
              href="mailto:info@uniview.com" 
              className="text-gray-700 hover:text-blue-900 text-xs sm:text-sm"
            >
              info@uniview.com
            </a>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-800 transition-all group">
            <FiPhone className="text-blue-600 group-hover:scale-110 transition-transform" />
            <a 
              href="tel:+1-555-123-4567" 
              className="text-gray-700 hover:text-blue-900 text-xs sm:text-sm"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Adjusted top padding to account for fixed contact bar */}
      <nav 
        className={`fixed w-full z-40 top-8 transition-all duration-300 
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with more pronounced hover effect */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center transform transition-all duration-300 
                  hover:scale-105 hover:rotate-3 active:scale-95 group"
                aria-label="Home"
              >
                <Image 
                  src={logo.src}
                  alt="Uniview Logo"
                  width={56}
                  height={56}
                  className="w-auto h-14 group-hover:drop-shadow-md"
                  priority
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop Navigation with Enhanced Interactivity */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative group flex items-center text-gray-700 
                    hover:text-blue-600 transition-all duration-300 
                    font-medium text-sm uppercase tracking-wider
                    ${pathname === link.href ? 'text-blue-600 font-semibold' : ''}`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <link.icon className="mr-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                      transform transition-transform duration-300 origin-left
                      ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </Link>
              ))}
              
              {/* Enhanced Search Bar with Form */}
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-blue-300 
                    bg-gray-100 hover:bg-white transition-all duration-300 
                    text-sm w-56 lg:w-64 shadow-sm hover:shadow-md"
                  aria-label="Search"
                  role="searchbox"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 
                    text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 
                transition-all duration-300 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                rounded-md p-2 hover:bg-blue-50"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* Mobile Menu with Improved Design */}
          <div 
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
              ${isOpen 
                ? 'max-h-[32rem] opacity-100 visible' 
                : 'max-h-0 opacity-0 invisible'
              }`}
            aria-hidden={!isOpen}
          >
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-white/95 rounded-xl shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 text-sm 
                    ${pathname === link.href 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <link.icon className="mr-3 opacity-60" />
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative px-4 py-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-blue-300 
                    bg-gray-100 hover:bg-white transition-all duration-300 text-sm 
                    shadow-sm hover:shadow-md"
                  aria-label="Search"
                  role="searchbox"
                />
                <button 
                  type="submit" 
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 
                    text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
