'use client'
import React,{useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import {
  IconCreditCard,
  IconBattery2,
  IconFileDollar,
  IconBrandWhatsapp,
  IconMail,
  IconBook,
} from '@tabler/icons-react';
import StatsSection from '../app/components/StatsSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './bgwhite.css'

import BenefitsSection from '../app/components/beniftssection';
import { motion } from 'framer-motion';
import FaqSection from '../app/components/faq';
import Image from 'next/image';




function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);
  const fullScreenSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const heroSliderImages = [
    '/assets/hero1.jpeg',
    '/assets/hero2.jpeg',
    '/assets/hero3.jpeg',
  ];

  const testimonialsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const logoData = [
    { src: '/assets/bank1.png', alt: 'HDFC Bank' },
    { src: '/assets/bank2.png', alt: 'Yes Bank' },
    { src: '/assets/bank3.png', alt: 'NSDL' },
    { src: '/assets/bank4.png', alt: 'Bank of Baroda' },
    // Add more logos as needed
  ];

  const awardsData = [
    {
      title: 'Best Software Development Company 2023',
      logo: '/assets/logo1.png',
      description: 'Awarded for excellence in software development and innovative solutions.',
    },
    {
      title: 'Innovative Startup of the Year 2022',
      logo: '/assets/logo2.jpg',
      description: 'Recognized as a top innovative company in the tech industry.',
    },
    {
      title: 'Top IT Solutions Provider 2021',
      logo: '/assets/logo3.png',
      description: 'Honored for providing cutting-edge IT solutions to businesses worldwide.',
    },
  ];
  return (
    <>
      {/* Full-screen Carousel before Hero Section */}
      <div className="relative w-full min-h-screen lg:pt-14">
        <Slider {...fullScreenSliderSettings} className="w-full h-full">
          {heroSliderImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <Image
                src={image}
                alt={`slide-${index}`}
                className="object-cover w-full h-full"
                height={1000}
                width={1000} priority
              />
            </div>
          ))}
        </Slider>

        {/* Text and Buttons Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-2">
            Transforming Ideas into Digital Solutions.
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl">
            At Tapirsoft, we leverage innovative technology and expert craftsmanship to turn your visions into reality. From concept to deployment, our dedicated team is committed to delivering high-quality software solutions tailored to your unique needs.
          </p>
          <div className="flex space-x-2">
            <Link href="/getstarted"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition duration-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-white">
  <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-6 xl:gap-0 lg:py-12 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-2 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
        Building the Future with Tapirsoft
      </h1>
      <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-6 md:text-base lg:text-lg">
        We provide world-class software solutions to bring your ideas to life. Join us in shaping tomorrow with cutting-edge technology.
      </p>
      <div className="flex flex-col sm:flex-row">
        <Link href="/getstarted"
          className="inline-flex items-center justify-center px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-base font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-primary-300 transform transition duration-500 hover:scale-105"
        >
          Get Started
        </Link>
        <Link href="/learnmore"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 hover:bg-gray-100 rounded-lg focus:ring-4 focus:ring-gray-100 transform transition duration-500 hover:scale-105"
        >
          Learn More
        </Link>
      </div>
    </div>
    <div className="lg:mt-0 lg:col-span-5 lg:flex">
      <Image
        src="/assets/hero4.jpg"
        alt="mockup"
        className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        height={700}
        width={700} priority/>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Features</h2>
            <p className="text-gray-600 mt-2">
              Why you should choose Tapirsoft for your next project.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'AEPS Software', icon: <IconCreditCard className="text-4xl mr-3" /> }, { title: 'Recharge Software', icon: <IconBattery2 className="text-4xl mr-3" /> }, { title: 'BBPS Software', icon: <IconFileDollar className="text-4xl mr-3" /> }].map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 flex items-center">
                {feature.icon}
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">
                    We deliver fast and scalable solutions tailored to your needs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Awards sections */}
        <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Our Awards & Achievements</h2>
          <p className="text-gray-600 mt-2">We are proud to be recognized for our efforts and contributions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105  bg-white1 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <Image src={award.logo} alt={`${award.title} logo`} className="w-fit h-20 mb-4"    height={100}
                width={100} priority />
              <h3 className="text-xl font-semibold text-gray-800">{award.title}</h3>
              <p className="text-gray-600 text-center mt-2">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* statssection */}
      <StatsSection/>
      {/* benefits sections */}
      <BenefitsSection/>
      
      
      {/* Bank Logos Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Trusted Partners</h2>
          <p className="text-gray-600 mb-8">We collaborate with leading banks and financial institutions to offer the best services.</p>

          {/* Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
            {logoData.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} className="w-40 mx-auto"    height={100}
              width={100} priority/>
            ))}
          </div>
        </div>
      </section>
            <FaqSection/>


      {/* Testimonials Section with Carousel */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-screen-xl px-2 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Testimonials</h2>
          <p className="mt-4 mb-6 text-lg text-gray-500 dark:text-gray-400">
            Hear what our clients have to say about us.
          </p>

          <Slider {...testimonialsSliderSettings} className="mx-4">
            {[{ text: '"Tapirsoft has exceeded our expectations."', author: '— Sahil Khan, Hydrabad' }, { text: '"The team at Tapirsoft was incredibly professional."', author: '— Sumit Chaudary, Haryana' }, { text: '"Their innovative solutions helped us grow our business."', author: '— Sarthak Reddy, Kerela' }].map((testimonial, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <p className="text-lg italic text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                <p className="mt-4 font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
       {/* Contact Information Section */}
       <footer className="bg-white py-10 w-full">
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
    <IconBook size={22} /> Book Meeting
  </a>
</div>


          
        </div>
      </footer>
     

      
    </>
  );
}

export default Home;
