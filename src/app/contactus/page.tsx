'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import {
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBook2,
} from '@tabler/icons-react';

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contactNumber?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): FormErrors => {
    const formErrors: FormErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) formErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid.";
    if (!formData.contactNumber.trim()) formErrors.contactNumber = "Contact number is required.";
    if (!/^\d{10}$/.test(formData.contactNumber)) formErrors.contactNumber = "Contact number should be 10 digits.";
    if (!formData.message.trim()) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('https://tapirsoft-server.onrender.com/api/contact/', formData);
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', contactNumber: '', message: '' });
      } catch (error) {
        toast.error('Failed to send the message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container lg:pt-20 mx-auto p-8 bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center">
      <ToastContainer />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Let’s Build Something Great Together!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Share your vision with us, and we'll bring it to life with our expertise.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg p-8 bg-white dark:bg-gray-700 shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          {['name', 'email', 'contactNumber', 'message'].map((field, idx) => (
            <div className="mb-4" key={idx}>
              <label
                htmlFor={field}
                className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 capitalize"
              >
                {field === 'contactNumber' ? 'Contact Number' : field}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  rows={4}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              ) : (
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              )}
              {errors[field as keyof FormErrors] && (
                <p className="text-red-500 text-sm">{errors[field as keyof FormErrors]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none ${
              isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {[
          {
            city: 'Gurugram',
            address: '3rd Floor, Sector 67, above Cyber Park, Bhondsi, Haryana 122102',
          },
          {
            city: 'Hyderabad',
            address: '1st Floor, Cyber Crown, Sec-II, HUDA Techno, Madhapur, 500081',
          },
        ].map((office, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{office.city} Office</h3>
            <p className="text-gray-600 dark:text-gray-300">{office.address}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9409381669975!2d77.05725877428316!3d28.390851795016733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e83bb73bd9%3A0xfa27d59a72595eb0!2sTAPIRSOFT%20%7C%20Best%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1725938809460!5m2!1sen!2sin"
          className="w-full h-64 border-0 rounded-lg"
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
