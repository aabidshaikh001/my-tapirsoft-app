'use client';

import React from 'react';
import {
  IconTools,
  IconUsers,
  IconBulb,
  IconCode,
  IconBrandReact,
  IconBrandNodejs,
  IconDatabase,
  IconBrandPhp,
  IconSettingsAutomation,
  IconCloud,
  IconBrandDocker,
  IconBrandNextjs,
} from '@tabler/icons-react'; // Tabler Icons
import { motion } from 'framer-motion'; // Framer Motion

const LearnMore: React.FC = () => {
  const sections = [
    {
      title: 'Our Services',
      description: 'We provide a range of software development services tailored to your needs.',
      icon: <IconTools size={40} className="text-blue-500" />,
      delay: 0.3,
    },
    {
      title: 'Our Team',
      description: 'Our dedicated team of experts ensures your project’s success from start to finish.',
      icon: <IconUsers size={40} className="text-green-500" />,
      delay: 0.4,
    },
    {
      title: 'Innovation',
      description: 'We leverage the latest technologies to provide innovative solutions for your business.',
      icon: <IconBulb size={40} className="text-yellow-500" />,
      delay: 0.5,
    },
    {
      title: 'Development Process',
      description: 'Our agile development process ensures flexibility and responsiveness to your needs.',
      icon: <IconCode size={40} className="text-red-500" />,
      delay: 0.6,
    },
  ];

  const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces.', icon: <IconBrandReact size={40} className="text-blue-600" />, delay: 0.3 },
    { name: 'Node.js', description: 'A JavaScript runtime for server-side development.', icon: <IconBrandNodejs size={40} className="text-green-600" />, delay: 0.4 },
    { name: 'MongoDB', description: 'A NoSQL database for scalable applications.', icon: <IconDatabase size={40} className="text-green-700" />, delay: 0.5 },
    { name: 'PHP', description: 'A popular scripting language for web development.', icon: <IconBrandPhp size={40} className="text-purple-600" />, delay: 0.6 },
    { name: 'TensorFlow', description: 'An open-source library for machine learning and AI development.', icon: <IconSettingsAutomation size={40} className="text-orange-600" />, delay: 0.7 },
    { name: '.NET', description: 'A framework for building web applications and services.', icon: <IconCloud size={40} className="text-blue-800" />, delay: 0.8 },
    { name: 'Java', description: 'A high-level programming language for applications.', icon: <IconBrandDocker size={40} className="text-red-600" />, delay: 0.9 },
    { name: 'Next.js', description: 'A powerful framework for building web applications.', icon: <IconBrandNextjs size={40} className="text-gray-800" />, delay: 1.0 },
  ];

  return (
    <div className="container lg:pt-20 mx-auto px-4 py-16">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Learn More About Us
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our services, our team, and our approach to delivering cutting-edge solutions.
      </motion.p>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: section.delay }}
          >
            {section.icon}
            <h2 className="text-xl font-semibold mt-4">{section.title}</h2>
            <p className="text-gray-600 mt-2 text-center">{section.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="mt-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technologies & APIs We Use
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We utilize a range of technologies and APIs to build high-quality software solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: tech.delay }}
            >
              {tech.icon}
              <h2 className="text-xl font-semibold mt-4">{tech.name}</h2>
              <p className="text-gray-600 mt-2 text-center">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
