import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Opportunity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facts = [
    {
      title: "Online First",
      description: "61% of buyers search online first (PropertyPro.ng data)",
    },
    {
      title: "AI Automation",
      description: "AI chatbots handle 70% of routine property queries",
    },
    {
      title: "Virtual Tours",
      description: "Virtual tours get 4x more engagement than photos",
    },
  ];

  return (
    <section id="opportunity" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
            The Tech Opportunity in Real Estate
          </h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Success Story</h3>
            <div className="space-y-4">
              {/* <p className="text-gray-600">Agency owner Femi in Asokoro added AI tools last year. His results:</p> */}
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✔</span>
                  50% less time wasted on 'tire-kickers'
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✔</span>
                  3x more qualified leads
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✔</span>
                  AI can close deals from Canada without physical meetings
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;