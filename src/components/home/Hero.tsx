import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary-500/10 via-primary-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-dark-800/80 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-primary-500/10 blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative z-10">
  <motion.div 
    className="max-w-4xl mx-auto text-center"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h1 
      variants={itemVariants}
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
    >
      Turn Your Pet Brand Into a 
      <span className="text-primary-500"> Sales Machine</span>
    </motion.h1>
    
    <motion.p 
      variants={itemVariants}
      className="text-xl md:text-2xl text-gray-300 mb-8"
    >
      We help pet product brands scale fast with high-ROAS Meta & Google Ads—so you can focus on what you love, not your ad account.
    </motion.p>
    
    <motion.div variants={itemVariants}>
      <Link 
        to="/booking" 
        className="btn btn-primary text-lg px-8 py-4"
      >
        Book a Free Strategy Call <ChevronRight className="ml-2" size={20} />
      </Link>
    </motion.div>
  </motion.div>
</div>

    </section>
  );
};

export default Hero;