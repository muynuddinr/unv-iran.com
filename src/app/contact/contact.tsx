"use client";

import React, { useState, FormEvent } from 'react';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const tempErrors: { name?: string; email?: string; message?: string } = {};
    let formIsValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(tempErrors as { name: string; email: string; message: string });
    return formIsValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Simulated API call - replace with actual submission logic
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          toast.success('Message sent successfully!');
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          toast.error('Failed to send message. Please try again.');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
        console.error('Submission error:', error);
      }
    } else {
      toast.error('Please correct the errors in the form');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-24">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <FiSend className="mr-3 text-blue-600" /> Contact Us
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiMail className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-600">Email</p>
                  <a 
                    href="mailto:info@uniview.com" 
                    className="text-blue-800 hover:underline"
                  >
                    info@uniview.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FiPhone className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-600">Phone</p>
                  <a 
                    href="tel:+1-555-123-4567" 
                    className="text-blue-800 hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-600">Address</p>
                  <p className="text-gray-800">
                    123 Tech Lane, Innovation Park, CA 94000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-purple-600">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border 
                      ${errors.name ? 'border-red-500' : 'border-gray-200'}
                      focus:outline-none focus:ring-2 focus:ring-blue-300 
                      bg-gray-100 hover:bg-white transition-all duration-300`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border 
                      ${errors.email ? 'border-red-500' : 'border-gray-200'}
                      focus:outline-none focus:ring-2 focus:ring-blue-300 
                      bg-gray-100 hover:bg-white transition-all duration-300`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 
                  bg-gray-100 hover:bg-white transition-all duration-300"
              />
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border 
                    ${errors.message ? 'border-red-500' : 'border-gray-200'}
                    focus:outline-none focus:ring-2 focus:ring-blue-300 
                    bg-gray-100 hover:bg-white transition-all duration-300 resize-none`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white py-4 rounded-full hover:from-blue-700 hover:to-purple-700 
                  transition-all duration-300 flex items-center justify-center space-x-2 
                  group shadow-md hover:shadow-lg"
              >
                <FiSend className="mr-2 group-hover:animate-bounce" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;