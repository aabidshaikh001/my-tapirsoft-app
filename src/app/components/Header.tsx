'use client'; // Enable client-side component

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconMenu2, IconBrandWhatsapp } from '@tabler/icons-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 lg:fixed top-0 left-0 right-0 z-40 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.webp"
              alt="Tapirsoft Logo"
              width={100}
              height={100}
              priority
              className="h-10 sm:h-9"
            />
          </Link>

          {/* Contact Button and Menu Toggle */}
          <div className="flex items-center lg:order-2">
            <a
              href="https://wa.me/919216262833"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 flex gap-2 items-center"
            >
              Contact <IconBrandWhatsapp size={18} />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <IconMenu2 size={30} />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { path: '/', label: 'Home' },
                { path: '/aboutus', label: 'About Us' },
                { path: '/solutions', label: 'Solutions' },
                { path: '/blog', label: 'Blog' },
                { path: '/fintech', label: 'Fintech' },
                { path: '/team', label: 'Team' },
                { path: '/contactus', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block py-2 pr-4 pl-3 text-gray-700 rounded lg:p-0 lg:hover:text-orange-500 dark:text-white dark:hover:text-orange-500 ${
                      pathname === item.path
                        ? 'text-orange-500 font-semibold'
                        : 'hover:text-orange-500'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
