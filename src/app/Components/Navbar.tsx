"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../../public/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { href: '/products', label: 'Products' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
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

  // Handle keyboard navigation
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 bg-white ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center"
              aria-label="Home"
            >
              <Image 
                src={logo.src}
                alt="Uniview Logo"
                width={40}
                height={40}
                className="w-auto h-10"
                priority
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm uppercase tracking-wider relative group py-2
                  ${pathname === link.href ? 'text-blue-600' : ''}`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300
                  ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
            
            {/* Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-500 bg-white transition-all duration-300 w-72 text-sm"
                aria-label="Search"
                role="searchbox"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 w-5 h-5" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 invisible'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-xl mt-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm
                  ${pathname === link.href 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative px-4 py-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-500 bg-white transition-all duration-300 text-sm"
                aria-label="Search"
                role="searchbox"
              />
              <FiSearch className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
