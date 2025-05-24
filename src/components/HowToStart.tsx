import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowToStart = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "1",
      title: "Set up AI Chatbot",
      description: "Get our free AI property chatbot template",
    },
    {
      number: "2",
      title: "Create Video Tour",
      description: "Film a 5-minute video tour of your best listing",
    },
    {
      number: "3",
      title: "Launch Ad Campaign",
      description: "Run daily targeted Instagram ads",
    },
  ];

  return (
    <section id="how-to-start" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
            How to Start Today
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Works</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Low Cost: All tools mentioned are free/cheap
              </li> */}
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Fast Results: Stand out immediately (most agents still rely on flyers)
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Builds Trust: Tech makes you look established (even if you're new)
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToStart;