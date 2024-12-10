'use client';

import React from 'react';
import {
  IconBuildingSkyscraper,
  IconPigMoney,
  IconTruckDelivery,
  IconHeartbeat,
  IconSchool,
  IconShoppingCart,
  IconMail,
  IconBrandWhatsapp,
  IconBook2,
} from '@tabler/icons-react'; // Tabler Icons
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      title: 'Real Estate Software',
      icon: <IconBuildingSkyscraper size={48} className="text-blue-500" />,
      description: 'Comprehensive solutions for real estate management, property listings, CRM systems, and automated workflows.',
    },
    {
      title: 'Banking & Finance Software',
      icon: <IconPigMoney size={48} className="text-green-500" />,
      description: 'Secure, reliable, and scalable software solutions for the banking and financial services industry.',
    },
    {
      title: 'Transportation & Logistics Software',
      icon: <IconTruckDelivery size={48} className="text-yellow-500" />,
      description: 'End-to-end logistics and transport management systems designed for optimizing fleet, route, and shipment tracking.',
    },
    {
      title: 'Healthcare Software',
      icon: <IconHeartbeat size={48} className="text-red-400" />,
      description: 'Tailor-made software for hospitals, clinics, and healthcare management, ensuring smooth patient and doctor interactions.',
    },
    {
      title: 'Education Software',
      icon: <IconSchool size={48} className="text-purple-500" />,
      description: 'Transform educational institutions with learning management systems, student information systems, and e-learning platforms.',
    },
    {
      title: 'E-Commerce Software',
      icon: <IconShoppingCart size={48} className="text-pink-400" />,
      description: 'Custom-built e-commerce solutions for seamless online shopping experiences, payment gateways, and inventory management.',
    },
  ];

  return (
    <div className="py-16 lg:pt-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Solutions</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{solution.title}</h3>
              <p className="text-gray-500">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <footer className="bg-white py-10 w-full">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            For more information about our software solutions, feel free to reach out!
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center">
            <a
              href="mailto:info@tapirsoft.com"
              aria-label="Email Us"
              className="mt-4 w-full sm:w-auto min-h-[48px] px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300 flex justify-center items-center gap-2"
            >
              <IconMail size={22} /> Email Us
            </a>
            <a
              href="https://wa.me/919216262833"
              aria-label="Contact via WhatsApp"
              className="mt-4 w-full sm:w-auto min-h-[48px] px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded transition duration-300 flex justify-center items-center gap-2"
            >
              <IconBrandWhatsapp size={22} /> Contact
            </a>
            <a
              href="https://calendly.com/tapirsoft/30min"
              aria-label="Book a Meeting"
              className="mt-4 w-full sm:w-auto min-h-[48px] px-6 py-3 text-gray-600 bg-gray-300 hover:bg-gray-400 rounded transition duration-300 flex justify-center items-center gap-2"
            >
              <IconBook2 size={22} /> Book Meeting
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;
