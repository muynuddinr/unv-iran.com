"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FiSearch, FiMenu, FiX, FiMail, FiPhone, 
  FiHome, FiBox, FiTool, FiInfo, FiSend,
  FiChevronDown, FiChevronRight
} from 'react-icons/fi';
import logo from '../../../public/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  // Mobile menu state for expandable solutions section
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

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
    // { href: '/solutions', label: 'Solutions', icon: FiTool },
    // { href: '/about', label: 'About', icon: FiInfo },
    // { href: '/contact', label: 'Contact', icon: FiSend },
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

  const industryLinks = [
    { href: '/building', label: 'Building', icon: '🏢' },
    { href: '/retail', label: 'Retail', icon: '🛒' },
    { href: '/bank', label: 'Bank', icon: '🏦' },
    { href: '/school', label: 'School', icon: '🎓' },
    { href: '/shopping-mall', label: 'Shopping Mall', icon: '🛍️' },
    { href: '/hospital', label: 'Hospital', icon: '🏥' },
    { href: '/warehouse', label: 'Warehouse and Logistics', icon: '🏭' },
    { href: '/stadium', label: 'Stadium', icon: '🏟️' },
    { href: '/hotel', label: 'Hotel', icon: '🏨' },
  ];

  const functionLinks = [
    { href: '/smart-Intrusion-Prevention', label: 'Smart intrusion prevention', icon: '📊' },
  ];

  const toggleMegaMenu = (e: React.MouseEvent) => {
    if (window.innerWidth >= 768) { // Only for desktop
      e.preventDefault();
      setMegaMenuOpen(!megaMenuOpen);
    }
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const megaMenu = document.getElementById('solutions-mega-menu');
      const solutionsLink = document.getElementById('solutions-link');
      
      if (megaMenuOpen && megaMenu && !megaMenu.contains(event.target as Node) && 
          solutionsLink && !solutionsLink.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [megaMenuOpen]);

  // Clean up body classes when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    };
  }, []);

  const toggleMobileSubMenu = () => {
    setMobileSubMenuOpen(!mobileSubMenuOpen);
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
              
              {/* Solutions with Mega Menu */}
              <div className="relative group" id="solutions-nav-item">
                <button
                  id="solutions-link"
                  className={`relative group flex items-center text-gray-700 
                    hover:text-blue-600 transition-all duration-300 
                    font-medium text-sm uppercase tracking-wider
                    ${pathname.startsWith('/solutions') ? 'text-blue-600 font-semibold' : ''}`}
                  onClick={toggleMegaMenu}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  <FiTool className="mr-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                  Solutions
                  <FiChevronDown className={`ml-1 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                      transform transition-transform duration-300 origin-left
                      ${pathname.startsWith('/solutions') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </button>
                
                {/* Refined Solutions Mega Menu */}
                <div 
                  id="solutions-mega-menu"
                  className={`absolute left-1/2 -translate-x-1/2 mt-8 w-screen max-w-5xl bg-gradient-to-r from-blue-100 to-purple-100 
                    shadow-md rounded-md border border-gray-200
                    transform transition-all duration-300 origin-top z-50
                    ${megaMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                >
                  {/* Light overlay for rest of the page when mega menu is open */}
                  {megaMenuOpen && (
                    <div 
                      className="fixed inset-0 bg-black/5 z-[-1]" 
                      onClick={() => setMegaMenuOpen(false)}
                      aria-hidden="true"
                    />
                  )}
                  
                  <div className="max-h-[70vh] overflow-y-auto">
                    <div className="grid md:grid-cols-2 p-3 md:p-4 gap-3 md:gap-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-md p-3">
                        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-200 pb-2">
                          Solutions by Industry
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
                          {industryLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              <span className="text-lg mr-2 min-w-6 text-center">{link.icon}</span>
                              <span className="font-medium text-sm">{link.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white/80 backdrop-blur-sm rounded-md p-3">
                        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-200 pb-2">
                          Solutions by Function
                        </h3>
                        <div className="grid grid-cols-1 gap-1 md:gap-2">
                          {functionLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center p-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              <span className="text-lg mr-2 min-w-6 text-center">{link.icon}</span>
                              <span className="font-medium text-sm">{link.label}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 p-2 bg-white rounded-md border border-gray-100">
                          <Link 
                            href="/solutions"
                            className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium text-sm"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            View All Solutions
                            <FiChevronRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about"
                className={`relative group flex items-center text-gray-700 
                  hover:text-blue-600 transition-all duration-300 
                  font-medium text-sm uppercase tracking-wider
                  ${pathname === '/about' ? 'text-blue-600 font-semibold' : ''}`}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                <FiInfo className="mr-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                About
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                    transform transition-transform duration-300 origin-left
                    ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </Link>
              
              <Link
                href="/contact"
                className={`relative group flex items-center text-gray-700 
                  hover:text-blue-600 transition-all duration-300 
                  font-medium text-sm uppercase tracking-wider
                  ${pathname === '/contact' ? 'text-blue-600 font-semibold' : ''}`}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                <FiSend className="mr-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                Contact
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                    transform transition-transform duration-300 origin-left
                    ${pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </Link>
              
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
            className={`md:hidden transition-all duration-500 ease-in-out 
              ${isOpen 
                ? 'max-h-[80vh] opacity-100 visible overflow-y-auto' 
                : 'max-h-0 opacity-0 invisible overflow-hidden'
              } bg-white/95 rounded-xl shadow-lg`}
            aria-hidden={!isOpen}
          >
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
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
              
              {/* Solutions Menu Item with Expandable Sub-Items */}
              <div className="border-t border-b border-gray-100 py-2">
                <button
                  onClick={toggleMobileSubMenu}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 text-sm 
                    ${pathname.startsWith('/solutions') 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  aria-expanded={mobileSubMenuOpen}
                >
                  <div className="flex items-center">
                    <FiTool className="mr-3 opacity-60" />
                    Solutions
                  </div>
                  <FiChevronDown className={`transition-transform duration-300 ${mobileSubMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`pl-2 space-y-2 transition-all duration-300 
                  ${mobileSubMenuOpen ? 'mt-2 max-h-[2000px] opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}
                >
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3 mx-2">
                    <h3 className="px-3 py-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                      By Industry
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      {industryLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="mr-2">{link.icon}</span>
                          <span className="text-xs font-medium">{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3 mx-2">
                    <h3 className="px-3 py-2 text-xs font-bold text-purple-800 uppercase tracking-wider">
                      By Function
                    </h3>
                    <div className="space-y-1">
                      {functionLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-purple-600 hover:bg-white/80 backdrop-blur-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="mr-2">{link.icon}</span>
                          <span className="text-xs font-medium">{link.label}</span>
                        </Link>
                      ))}
                    </div>
                    
                    <Link
                      href="/solutions"
                      className="flex items-center justify-between px-3 py-2 mt-2 text-sm text-purple-600 bg-white/80 backdrop-blur-sm rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">View All Solutions</span>
                      <FiChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about"
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 text-sm 
                  ${pathname === '/about' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                <FiInfo className="mr-3 opacity-60" />
                About
              </Link>
              
              <Link
                href="/contact"
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 text-sm 
                  ${pathname === '/contact' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                <FiSend className="mr-3 opacity-60" />
                Contact
              </Link>
              
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
