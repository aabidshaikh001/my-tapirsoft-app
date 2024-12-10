'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Mr. R.L. Choudary',
      role: 'CEO',
      img: '/assets/emp1.webp',
      summary:
        'With over a decade of leadership experience, Mr. Choudary has been instrumental in shaping the strategic direction of our company, driving growth, and fostering innovation.',
      socials: {
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Mr. Anuj',
      role: 'CTO',
      img: '/assets/emp2.webp',
      summary:
        'As CTO, Mr. Anuj leads our technology strategy with a focus on innovation and operational excellence, ensuring we stay ahead in the competitive tech landscape.',
      socials: {
        instagram: 'https://instagram.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      name: 'Mr. Sahil',
      role: 'Lead Developer',
      img: '/assets/emp3.webp',
      summary:
        'A passionate full-stack developer, Mr. Sahil ensures the delivery of high-quality, scalable solutions that align with our clients’ needs and expectations.',
      socials: {
        instagram: 'https://instagram.com/samjohnson',
        linkedin: 'https://linkedin.com/in/samjohnson',
        twitter: 'https://twitter.com/samjohnson',
      },
    },
  ];

  return (
    <div className="team-page lg:pt-20 pt-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 pb-12">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Meet Our Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A team of professionals dedicated to innovation, collaboration, and delivering excellence.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 overflow-hidden group transition-transform duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            {/* Image */}
            <Image
              src={member.img}
              alt={member.name}
              height={300}
              width={300}
              className="w-32 h-32 mx-auto rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110"
            />

            {/* Name and Role */}
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>

            {/* Hover Content */}
            {hoveredMember === index && (
              <motion.div
                className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white flex flex-col items-center justify-center text-center p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-sm mb-4">{member.summary}</p>
                <div className="flex gap-4">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
