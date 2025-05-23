import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="bg-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Let's Build Your Tech Advantage Together
          </h2>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              📲 Get Free Chatbot Template
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
            >
              📅 Book 15-Min Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;