import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechTools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tools = [
    {
      title: "AI Lead Magnets",
      description: "WhatsApp chatbot that qualifies buyers instantly by asking about budget and preferred area.",
    },
    {
      title: "Lazy Listing Hack",
      description: "Transform phone videos into professional virtual tours with Matterport - no extra equipment needed.",
    },
    {
      title: "Traffic Escape Plan",
      description: "Use Google Maps API to schedule viewings during low-traffic windows automatically.",
    },
  ];

  return (
    <section id="tech-tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
            Tech Tools That Win
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-indigo-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">Localized Tip</h3>
            <p className="text-indigo-700">
              Add Hausa voiceovers to your tours – 68% of Abuja's middle-class buyers prefer it!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechTools;