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
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Book a Strategy Call | 023 Agency';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    "Custom marketing assessment for your specific brand",
    "Actionable strategies you can implement immediately",
    "Expert insights on industry trends and best practices",
    "No sales pressure - just valuable information"
  ];

  return (
    <div className="pt-24 pb-20">
      <motion.div 
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Book Your <span className="text-orange-500">Strategy Call</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Schedule a free 30-minute consultation with our marketing experts to discuss how we can help grow your home-office product brand.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-dark-800 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                
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
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <ArrowRight size={18} className="text-primary-500 mr-2" />
                    How to Prepare
                  </h3>
                  <p className="text-gray-300">
                    To make the most of our call, be ready to share your current marketing approach, main challenges, 
                    and goals for the future. Think about what success looks like for your brand in 3-6 months. 
                    This helps us tailor our advice to your specific situation.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-dark-800 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Schedule Your Call</h2>
                
                <div className="bg-white rounded-lg p-4 h-[500px]">
                  {/* Calendly inline widget - in a real implementation, this would be the actual Calendly embed */}
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-dark-900">
                      <p className="mb-4">Calendly integration would appear here.</p>
                      <p className="text-sm">This would be replaced with an actual Calendly embed in production.</p>
                    </div>
                  </div>
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