'use client';  // Mark this file as a client-side component

import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/assets/logo.webp"
              alt="Tapirsoft Logo"
              className="w-32"
              height={100}
              width={100}
            />
            <p className="text-gray-700">
              Monday – Friday: <br />
              10:30 AM to 06:00 PM,
              <br />
              Saturday & Sunday OFF
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Company</h4>
            <ul className="space-y-2">
              {['About Tapir', 'Our Philosophy', 'Portfolio', 'Our Team', 'Our Partners', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Industries</h4>
            <ul className="space-y-2">
              {[
                'Banking & Finance',
                'Manufacturing',
                'Transportation & Logistics',
                'Healthcare',
                'Education',
                'Real Estate',
                'E-Commerce',
              ].map((industry, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">{industry}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Services</h4>
            <ul className="space-y-2">
              {['Design & Development', 'Solution', 'Technology'].map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">{service}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <div>
              <h5 className="text-gray-700">Gurugram Office</h5>
              <p className="text-sm text-gray-500">
                3rd Floor, Sector 67, above Cyber Park, Bhondsi, Gurugram, Haryana 122102
              </p>
            </div>
            <div>
              <h5 className="text-gray-700">Hyderabad Office</h5>
              <p className="text-sm text-gray-500">
                1st Floor, Cyber Crown, Sec-II, HUDA Techno, Madhapur, Hyderabad, 500081
              </p>
            </div>
          </div>

          <div className="text-center md:text-left  mt-4 md:mt-0">
            <p className="text-gray-700">Phone: <br/>+91 9216262833</p>
            <p className="text-gray-700">
              Mail:{' '}
              <a href="mailto:help@tapirsoft.com" className="hover:underline">
                help@tapirsoft.com
              </a>
            </p>
          </div>

          <div className="mt-4 md:mt-0 space-x-4">
            {['linkedin', 'twitter', 'facebook', 'youtube'].map((platform, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-gray-700">
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">&copy; 2018-2024 TAPIRSOFT. All Rights Reserved</p>
          <Link href="/term&conditions" className="text-sm text-gray-600 hover:text-orange-500">Terms & Conditions</Link>{' '}
          |{' '}
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-orange-500">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
