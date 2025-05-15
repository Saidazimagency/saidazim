import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, Target, Lightbulb, Users, Clock
} from 'lucide-react';

const reasonsData = [
  {
    id: 1,
    icon: <BarChart3 size={36} className="text-primary-500" />,
    title: "Data-Driven Decisions",
    description: "We analyze your customer data to create highly targeted campaigns that resonate with your audience and drive conversions."
  },
  {
    id: 2,
    icon: <TrendingUp size={36} className="text-primary-500" />,
    title: "Proven ROI",
    description: "Our clients typically see a 30-50% increase in revenue from their Facebook channels within the first three months."
  },
  {
    id: 3,
    icon: <Target size={36} className="text-primary-500" />,
    title: "Segment Optimization",
    description: "We identify your most valuable customer segments and create tailored strategies that maximize lifetime value."
  },
  {
    id: 4,
    icon: <Lightbulb size={36} className="text-primary-500" />,
    title: "Creative Excellence",
    description: "Our copywriters and designers craft engaging content that reflects your brand voice and captivates your audience."
  },
  {
    id: 5,
    icon: <Users size={36} className="text-primary-500" />,
    title: "Dedicated Team",
    description: "You'll work with a specialized team that understands your business and is committed to your success."
  },
  {
    id: 6,
    icon: <Clock size={36} className="text-primary-500" />,
    title: "Automation Experts",
    description: "We build sophisticated automation sequences that nurture relationships and generate sales while you focus on growing your business."
  }
];

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Six reasons why leading brands trust us with their marketing.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasonsData.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl p-8 bg-dark-800/60 backdrop-blur transition-transform duration-300 hover:scale-[1.02] ${
                hoveredIndex === index ? 'shadow-lg shadow-primary-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(249, 115, 22, 0.03))'
              }}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}
              />
              
              <div className="relative z-10">
                <div className="mb-5">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
