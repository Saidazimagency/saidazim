import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Booking = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Book a Strategy Call | 023 Agency';

    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const benefits = [
    'Custom marketing assessment for your specific brand',
    'Actionable strategies you can implement immediately',
    'Expert insights on industry trends and best practices',
    'No sales pressure - just valuable information',
  ];

  return (
    <div className="pt-24 pb-20 bg-dark-900">
      <motion.div
        className="container mx-auto px-4"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Book Your <span className="text-orange-500">Strategy Call</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Schedule a free 30-minute consultation with our marketing experts to discuss how we can help grow your
              brand.
            </motion.p>
          </div>

          {/* Grid: What to Expect & Calendly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What to Expect */}
            <motion.div variants={itemVariants}>
              <div className="bg-dark-800 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-white">What to Expect</h2>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 bg-primary-500/10 p-1 rounded-full">
                        <Check size={16} className="text-primary-500" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-dark-900/50 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center text-white">
                    <ArrowRight size={18} className="text-primary-500 mr-2" />
                    How to Prepare
                  </h3>
                  <p className="text-gray-300">
                    To make the most of our call, be ready to share your current marketing approach, main challenges,
                    and goals for the future. Think about what success looks like for your brand in 3-6 months. This
                    helps us tailor our advice to your specific situation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Calendly Scheduling */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
              style={{ minHeight: '500px' }}
            >
              <div className="bg-dark-800 rounded-xl p-8 max-w-xl w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Schedule Your Call</h2>
                <div className="bg-white rounded-lg p-4 h-[500px] overflow-hidden">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/saidazimagency/30min"
                    style={{ minWidth: '320px', height: '100%', width: '100%', marginLeft: '-30px' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Booking;
