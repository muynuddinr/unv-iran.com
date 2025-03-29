"use client";

import React from 'react';
import Link from 'next/link';
import { FiShield, FiLock, FiEye, FiAlertTriangle } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const Privacy = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-24" dir={dir}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('home.footer.privacyPolicy') || 'Privacy Policy'}
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Uniview Iran services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Uniview Iran is committed to protecting your privacy and personal information. This Privacy Policy describes how we collect, use, store, and disclose your information when you use our website, products, and services.
              </p>
              <p className="text-gray-700">
                By using our website or services, you consent to the practices described in this Privacy Policy. Please read this policy carefully to understand our practices regarding your information.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiEye className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Contact information (name, email address, phone number, company name)</li>
                <li>Account information if you create an account with us</li>
                <li>Location information when you use our services</li>
                <li>Information you provide when you contact our support team</li>
                <li>Information you provide when requesting a demo or consultation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect information about your interactions with our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Log data (IP address, browser type, pages visited, time spent on pages)</li>
                <li>Device information (device type, operating system)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiLock className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>To provide, maintain, and improve our products and services</li>
                <li>To process and fulfill your requests, orders, and transactions</li>
                <li>To communicate with you about our products, services, and promotions</li>
                <li>To personalize your experience and provide tailored content</li>
                <li>To analyze usage patterns and improve our website functionality</li>
                <li>To protect the security and integrity of our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiAlertTriangle className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners and affiliates who help us provide our services</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>In connection with a business transaction such as a merger or acquisition</li>
              </ul>
              <p className="text-gray-700">
                We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Your Rights and Choices</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Access and review the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability (receiving your data in a structured format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiLock className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiEye className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Cookies and Tracking Technologies</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar tracking technologies to collect information about your browsing activities. Cookies are small text files stored on your device that help us provide and improve our services.
              </p>
              <p className="text-gray-700 mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytical/performance cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality cookies:</strong> Remember choices you make and provide enhanced features</li>
                <li><strong>Targeting cookies:</strong> Deliver more relevant advertisements and marketing</li>
              </ul>
              <p className="text-gray-700">
                You can manage your cookie preferences through your browser settings. However, disabling certain cookies may impact your experience on our website.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Children's Privacy</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our website and services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us, and we will promptly delete the information.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiAlertTriangle className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Changes to This Policy</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a revised effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FiLock className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Uniview Iran</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@uniview-iran.com</p>
                <p className="text-gray-700 mb-2">Phone: +98 21 XXXX XXXX</p>
                <p className="text-gray-700">Address: [Your Address in Iran]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions About Your Privacy?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our team is here to help answer any questions you may have about our privacy practices or your rights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
              >
                Contact Our Privacy Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
