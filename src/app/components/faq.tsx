"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./faq.css";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What services does Tapirsoft offer?",
    answer:
      "Tapirsoft offers a range of software development services including web development, mobile app development, and custom software solutions.",
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "The time frame depends on the scope and complexity of the project. However, we strive to deliver high-quality solutions within agreed timelines.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern technologies such as React, Node.js, MongoDB, and other popular tools in the MERN stack. We also work with APIs and cloud services.",
  },
  {
    question: "How do I get started with Tapirsoft?",
    answer:
      "You can get started by contacting us through email or scheduling a meeting via our website. We’ll guide you through the process from there!",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.div
                className="cursor-pointer bg-white p-4 rounded-lg shadow-lg"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    &#x25BC; {/* Down arrow symbol */}
                  </motion.span>
                </div>
              </motion.div>
              {activeIndex === index && (
                <motion.div
                  className="p-4 text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
