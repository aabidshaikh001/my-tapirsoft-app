'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IconCurrencyDollar, IconUsers, IconShoppingCart } from '@tabler/icons-react'; // Tabler Icons

// Interface for Benefit
interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const BenefitsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  const benefits: Benefit[] = [
    {
      id: 1,
      title: 'One Stop Services',
      description:
        'We are happy to inform you that you have reached an ideal place where you can get all services at one place.',
      icon: (
        <IconShoppingCart className="text-3xl text-orange-500 group-hover:text-blue-500 transition duration-300 ease-in-out" />
      ),
    },
    {
      id: 2,
      title: 'User Friendly',
      description:
        'Provide you a very easy to use, user-friendly and secure platform for any kind of services.',
      icon: (
        <IconCurrencyDollar className="text-3xl text-orange-500 group-hover:text-blue-500 transition duration-300 ease-in-out" />
      ),
    },
    {
      id: 3,
      title: 'Attract Customers',
      description:
        'You can attract more customers to your shop & business by providing fast and secure services.',
      icon: (
        <IconUsers className="text-3xl text-orange-500 group-hover:text-blue-500 transition duration-300 ease-in-out" />
      ),
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Left Column: Benefits List */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Benefits Of Our Services
            </h2>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`flex items-center mb-8 group transition-transform duration-700 ease-in-out ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                } delay-${index * 200}`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mr-6 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:scale-110">
                  {benefit.id < 10 ? `0${benefit.id}` : benefit.id}
                </div>
                {/* Icon */}
                <div className="mr-4 transform group-hover:scale-125 transition duration-300 ease-in-out group-hover:rotate-12">
                  {benefit.icon}
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition duration-300 ease-in-out">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Illustration */}
          <div className="lg:w-1/3">
            <Image
              src="/assets/GIF.gif"
              height={100}
              width={100}
              alt="Benefits Illustration"
              className={`w-72 h-auto transition-transform duration-1000 ease-in-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`} priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
