"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FiGrid, FiBox, FiMessageSquare, 
  FiMail, FiLogOut, FiMenu, FiX 
} from 'react-icons/fi';
import logo from '../../../../public/logo.svg';

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: FiGrid },
    { href: '/admin/products', label: 'Products', icon: FiBox },
    { href: '/admin/contact', label: 'Contact', icon: FiMessageSquare },
    { href: '/admin/newsletter', label: 'Newsletter', icon: FiMail },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <aside
        className={`bg-white shadow-xl h-screen fixed md:sticky top-0 left-0 z-40 
          transition-all duration-300 ease-in-out
          ${collapsed ? 'w-20' : 'w-64'} 
          hidden md:flex flex-col`}
      >
        {/* Logo and Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/admin" className="flex items-center">
            <Image
              src={logo.src}
              alt="Uniview Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            {!collapsed && (
              <span className="ml-3 text-xl font-semibold text-gray-800">Admin</span>
            )}
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <FiMenu size={20} /> : <FiX size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 
                    ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  <item.icon className={`${collapsed ? 'text-xl' : 'text-lg mr-3'}`} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            className={`flex items-center py-3 px-4 w-full rounded-lg transition-all duration-200 
              text-gray-700 hover:bg-red-50 hover:text-red-600`}
          >
            <FiLogOut className={`${collapsed ? 'text-xl' : 'text-lg mr-3'}`} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`bg-white shadow-xl h-screen fixed top-0 left-0 z-40 
          transition-all duration-300 ease-in-out w-64
          md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/admin" className="flex items-center">
            <Image
              src={logo.src}
              alt="Uniview Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="ml-3 text-xl font-semibold text-gray-800">Admin</span>
          </Link>
          <button
            onClick={toggleMobileSidebar}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-label="Close Sidebar"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 
                    ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  onClick={toggleMobileSidebar}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  <item.icon className="text-lg mr-3" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            className="flex items-center py-3 px-4 w-full rounded-lg transition-all duration-200 
              text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            <FiLogOut className="text-lg mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar; 