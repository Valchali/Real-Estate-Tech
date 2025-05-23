import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <a
              href="https://wa.me/2347086387392"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 text-lg text-green-600 hover:text-green-700"
            >
              <FaWhatsapp className="text-2xl" />
              <span>+234 708 638 7392</span>
            </a>
            <a
              href="mailto:valchali@yahoo.com"
              className="flex items-center justify-center space-x-3 text-lg text-blue-600 hover:text-blue-700"
            >
              <FaEnvelope className="text-2xl" />
              <span>valchali@yahoo.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;