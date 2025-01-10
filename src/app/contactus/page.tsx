'use client';

import React, {  FormEvent } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconBuildings, IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
import {
  IconMail,
  IconBrandWhatsapp,
  IconBook2,
} from '@tabler/icons-react';



const ContactUs: React.FC = () => {
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!",{
      style: {
        backgroundColor: "#1f2937",
        color: "#fff",
        fontWeight: "bold",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px"
      }
    });
  
  };

  return (
    <div className="bg-gray-100 min-h-screen  lg:pt-16">
     <div className="relative bg-cover bg-center h-80" style={{ backgroundImage: "url('/assets/image.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start px-12">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <nav className="mt-2 flex items-center">
            <a href="/" className="text-orange-500 font-medium hover:underline">Home</a>
            <span className="text-white mx-2">›</span>
            <a href='#' className="text-white">Contact Us</a>
          </nav>
          <hr className="w-full border-t border-gray-500 mt-4" />
        </div>
      </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-gray-700 mb-6">
          Whether you&apos;re searching for a new engineering partner or starting a new career, we would love to hear from you.
        </p>
        <div className="mb-6">
          <h2 className="font-semibold text-lg flex items-center text-gray-800">
            <IconBuildings className="mr-2 text-orange-500" /> Office Addresses
          </h2>
          <p className="text-gray-700 mt-4">
            <span className="font-semibold">Gurugram Office</span><br />
            3rd Floor, Sector 67, above Cyber Park, Bhondsi, Gurugram, Haryana 122102          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Hyderabad Office</span><br />
            1st Floor, Cyber Crown, Sec-II, HUDA Techno, Madhapur, Hyderabad, 500081</p>
                  
          
        </div>
        <div className="flex items-center mb-2">
          <IconMailFilled className="mr-2 text-orange-500" />
          <a href="mailto:help@tapirsoft.com" className="text-orange-500 hover:underline">help@tapirsoft.com</a>
        </div>
        <div className="flex items-center">
          <IconPhoneFilled className="mr-2 text-orange-500" />
          <a href="tel:+912269199247" className="text-orange-500 hover:underline">+91-2269199247</a>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Get in touch!</h2>
        <p className="text-sm text-gray-600 mb-4">We&apos;ll contact you shortly - just fill out the form.</p>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name*" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="text" placeholder="Last Name" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Email ID*" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="tel" placeholder="Phone Number*" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>
          <textarea placeholder="Enter your message" className="border p-2 rounded w-full h-24 focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
          <button type="submit" onClick={handleSubmit} className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition">Submit</button>
        </form>
      </div>
    </div>

      <div className="mt-8 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9409381669975!2d77.05725877428316!3d28.390851795016733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e83bb73bd9%3A0xfa27d59a72595eb0!2sTAPIRSOFT%20%7C%20Best%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1725938809460!5m2!1sen!2sin"
          className="w-full h-96 border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <footer className="mt-16 text-center">
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:info@tapirsoft.com"
            className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg"
          >
            <IconMail className="inline mr-2" /> Email Us
          </a>
          <a
            href="https://wa.me/919216262833"
            className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg"
          >
            <IconBrandWhatsapp className="inline mr-2" /> WhatsApp
          </a>
          <a
            href="https://calendly.com/tapirsoft/30min"
            className="text-gray-800 bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg"
          >
            <IconBook2 className="inline mr-2" /> Book Meeting
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
