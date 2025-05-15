import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    "Deep-Dive Analysis of Your Ad Performance",
    "Advanced E-Commerce Advertising Strategies",
    "AI & Data-Driven Optimization for Lower CAC & Higher ROI",
    "15-Minute Call – No Sales, Just Real Value"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-dark-900 to-dark-800">
      <motion.div 
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="bg-dark-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-xl shadow-primary-500/5">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Marketing?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8"
            >
              Book a free strategy call to discuss how we can help grow your home-office product brand.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mb-10 space-y-3"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Check size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/booking" 
                className="btn btn-primary text-lg px-10 py-4 group"
              >
                Book Your Free Demo Call
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;