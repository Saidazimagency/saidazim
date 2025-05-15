import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "Pet Products Success Story",
    subtitle: "From Low Engagement to 45% Revenue Growth",
    image: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
    industry: "Pet Products",
    results: [
      "Paid ads ROAS increased by 350%",
      "Cost per acquisition (CPA) reduced by 40%",
      "Click-through rates improved to 6.8%",
      "Conversion rate boosted by 30%",
      "45% overall revenue growth within 6 months"
    ]
  },
  {
    title: "Home Office Ergonomics",
    subtitle: "Scaling Through Paid Advertising",
    image: "https://images.pexels.com/photos/3740219/pexels-photo-3740219.jpeg",
    industry: "Office Equipment",
    results: [
      "400% increase in paid ads-driven revenue",
      "Average cost per click (CPC) decreased by 35%",
      "Customer acquisition rate improved by 50%",
      "Ad impressions grew by 200% in 4 months",
      "ROI on paid campaigns: 5000%"
    ]
  },
  {
    title: "Tech Accessories Brand",
    subtitle: "Mastering Multi-Channel Paid Ads",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    industry: "Consumer Electronics",
    results: [
      "Paid ads ROI increased by 280%",
      "Cross-channel conversion rate up 65%",
      "Customer lifetime value grew by 85%",
      "Reduced ad spend waste by 45%",
      "New customer retention rate: 68%"
    ]
  }
];

const CaseStudy = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-dark-800">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">023 Agency Case Studies, see how we can help you</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-dark-900 hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-900/40 backdrop-blur-sm z-10" />
                <div className="absolute bottom-4 left-4 z-20 bg-primary-500/10 text-primary-400 px-4 py-1 rounded-full text-sm font-semibold">
                  {study.industry}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 italic">{study.subtitle}</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-500 mt-1 mr-2">●</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
