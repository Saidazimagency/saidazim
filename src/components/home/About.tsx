import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import said from '../images/said.jpg'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">We transform how brands connect with customers.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 order-1 md:order-none"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 via-transparent to-accent-500/20 z-10"></div>
              <img 
                src = {said}
                alt="023 Agency team working" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
  className="md:w-1/2"
  variants={textVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
>
  <h3 className="text-2xl md:text-3xl font-bold mb-6">
    <span className='text-orange-500'>023 Agency</span>
  </h3>
  <p className="text-gray-300 mb-6">
    In the fast-growing pet industry, standing out requires more than just great products—it demands smart advertising.
    At 023 Agency, we help pet product brands unlock scalable growth through high-performing Meta and Google Ads.
  </p>
  <p className="text-gray-300 mb-6">
    Our data-driven strategies are built to maximize your ad spend, attract loyal customers, and generate consistent sales—
    all without wasting time or budget. We don’t just manage ads; we manage results.
  </p>
  <p className="text-gray-300">
    With years of experience scaling e-commerce brands, we know what works. Whether you're just launching or looking to scale,
    our campaigns are tailored to your audience, your product, and your goals—ensuring every dollar you invest works harder.
  </p>
  <div className="flex justify-center mt-12">
        <a
          href="/booking"
          className="inline-block bg-orange-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-700 transition"
          aria-label="Book a Call"
        >
          Book a Call
        </a>
      </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;