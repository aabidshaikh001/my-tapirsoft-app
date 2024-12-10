'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  IconMail,
  IconBrandWhatsapp,
  IconBook2,
  IconCreditCardPay,
  IconCash,
  IconCreditCard,
  IconPlaneDeparture,
  IconBuildingBank,
  IconBuildingSkyscraper,
} from '@tabler/icons-react';

const Fintech = () => {
  const softwareSolutions = [
    {
      title: 'AEPS Software',
      description: 'Enable seamless Aadhaar-based transactions for your customers.',
      icon: <IconBuildingBank size={40} className="text-blue-500" />,
    },
    {
      title: 'Recharge Software',
      description: 'Easy and quick mobile and DTH recharge solutions.',
      icon: <IconCreditCardPay size={40} className="text-green-500" />,
    },
    {
      title: 'BBPS Software',
      description: 'Bill payment services through the Bharat Bill Payment System.',
      icon: <IconCash size={40} className="text-orange-500" />,
    },
    {
      title: 'DMT Software',
      description: 'Direct Money Transfer solutions for quick transactions.',
      icon: <IconCreditCard size={40} className="text-red-500" />,
    },
    {
      title: 'Travel Software',
      description: 'Comprehensive travel management solutions.',
      icon: <IconPlaneDeparture size={40} className="text-purple-500" />,
    },
    {
      title: 'Payment Gateway',
      description: 'Secure payment processing solutions for your business.',
      icon: <IconBuildingSkyscraper size={40} className="text-gray-800" />,
    },
  ];

  return (
    <div className="bg-gray-100 lg:pt-14 min-h-screen">
      {/* Header */}
      <header className="py-10 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Software Solutions
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Providing innovative software solutions to meet your business needs.
        </motion.p>
      </header>

      {/* Software Solutions */}
      <section className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareSolutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {solution.icon}
                <h2 className="text-2xl font-semibold text-gray-800 ml-2">{solution.title}</h2>
              </div>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Information Section */}
      <footer className="bg-white py-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            For more information about our software solutions, feel free to reach out!
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center mt-6">
            <a
              href="mailto:info@tapirsoft.com"
              aria-label="Email Us"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300 flex items-center gap-2"
            >
              <IconMail size={22} /> Email Us
            </a>
            <a
              href="https://wa.link/ty9bea"
              aria-label="Contact via WhatsApp"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded transition duration-300 flex items-center gap-2"
            >
              <IconBrandWhatsapp size={22} /> Contact
            </a>
            <a
              href="https://calendly.com/tapirsoft/30min"
              aria-label="Book a Meeting"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-gray-600 bg-gray-300 hover:bg-gray-400 rounded transition duration-300 flex items-center gap-2"
            >
              <IconBook2 size={22} /> Book Meeting
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fintech;
