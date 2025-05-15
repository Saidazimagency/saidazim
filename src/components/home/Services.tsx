import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { BrainCog, TrendingUp, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    icon: <BrainCog size={48} className="text-primary-500" />,
    title: "AI-Powered Optimization",
    description: "Leverage AI to scale smarter and faster across every stage of your growth journey.",
    features: [
      "Predictive customer targeting to increase ROAS",
      "Automated performance tracking & adjustments",
      "Dynamic budget allocation to boost high-performing ads",
      "AI-driven insights for creative & messaging decisions",
      "Hands-off workflows that reduce manual work"
    ]
  },
  {
    id: 2,
    icon: <TrendingUp size={48} className="text-primary-500" />,
    title: "Paid Advertising",
    description: "Meta and Google Ads that drive traffic, boost sales, and build your loyal customer base.",
    features: [
      "Full-funnel campaign strategy & execution",
      "Custom audience building & retargeting",
      "Eye-catching ad creatives that convert",
      "Daily performance tracking and optimizations",
      "Clear reporting with revenue-focused KPIs"
    ]
  },
  {
    id: 3,
    icon: <PieChart size={48} className="text-primary-500" />,
    title: "Unit Economics",
    description: "Understand your numbers to scale profitably and sustainably.",
    features: [
      "CAC & LTV tracking for every channel",
      "Profitability breakdowns by SKU & segment",
      "Smart pricing strategies to maximize margin",
      "Custom dashboards to monitor KPIs in real-time",
      "Actionable insights to improve profit per order"
    ]
  }
];

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

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-impact growth solutions tailored to pet product brands ready to scale.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 transition-transform duration-300 hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(249, 115, 22, 0.03))'
              }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 text-center mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-12">
      <Link
                to="/booking"
                className="inline-block bg-orange-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-700 transition"
                aria-label="Book a Call"
              >
                Book a Call
              </Link>
      </div>
    </section>
  );
};

export default Services;
