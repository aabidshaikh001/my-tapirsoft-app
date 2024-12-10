'use client';
import React from 'react';
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from '@tabler/icons-react';
import Image from 'next/image';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Mr. R.L. Choudary',
      role: 'CEO',
      img: '/assets/emp1.webp',
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
      socials: {
        instagram: 'https://instagram.com/samjohnson',
        linkedin: 'https://linkedin.com/in/samjohnson',
        twitter: 'https://twitter.com/samjohnson',
      },
    },
  ];

  return (
    <div className="about-us-page bg-white md:pt-10 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      {/* Hero Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn more about our journey, mission, and the dedicated team behind TapirSoft.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            At TapirSoft, we aim to revolutionize the tech industry by providing innovative
            solutions tailored to meet the needs of modern businesses. Our commitment is to
            deliver high-quality, reliable, and sustainable technology solutions with a focus on
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Our team is composed of highly skilled and passionate professionals dedicated to
            building cutting-edge software solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                  height={100}
                  width={100}
                  loading="lazy"
                />
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>

                <div className="flex justify-center mt-4 space-x-3">
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Instagram`}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <IconBrandInstagram size={24} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <IconBrandLinkedin size={24} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Twitter`}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <IconBrandTwitter size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We believe in transparency, innovation, and putting our clients first. These values
            drive us to continually improve and offer the best possible services to those we work
            with.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p>We constantly seek innovative ways to solve challenges and stay ahead.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-2">Customer First</h3>
              <p>We put our customers at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
