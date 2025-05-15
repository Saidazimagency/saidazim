import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What happens during the free strategy call?",
    answer: "During our 30-minute strategy call, we'll discuss your current marketing challenges, analyze your existing email performance, and share initial recommendations for improvement. You'll walk away with at least 2-3 actionable tips you can implement right away, regardless of whether you decide to work with us."
  },
  {
    id: 2,
    question: "How long does it take to see results from email marketing?",
    answer: "Most clients begin seeing improvements within the first 30 days as we implement quick wins and optimization strategies. For more substantial revenue impact, our comprehensive strategies typically show significant results within 60-90 days, with continuous improvement beyond that timeframe."
  },
  {
    id: 3,
    question: "Do you offer month-to-month contracts or require long-term commitments?",
    answer: "We offer flexible engagement options, including month-to-month services. However, our most successful clients typically choose our 3-month or 6-month packages, as email marketing is most effective when given sufficient time to optimize and develop comprehensive customer journeys."
  },
  {
    id: 4,
    question: "What email marketing platforms do you work with?",
    answer: "We have experience with all major email service providers, including Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and others. If you're currently using a platform that isn't optimal for your needs, we can also help with migration to a more suitable solution."
  },
  {
    id: 5,
    question: "Do you handle the creative aspects of emails, like copy and design?",
    answer: "Yes, our team includes experienced copywriters and designers who create compelling email content that aligns with your brand voice and drives engagement. We handle all aspects of email production, from strategy and content creation to technical setup and performance analysis."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <section id="faq" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Common questions about our strategy sessions and services.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-5 rounded-xl flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-dark-900 shadow-lg shadow-primary-500/10' 
                    : 'bg-dark-800 hover:bg-dark-800/80'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-primary-500 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="p-5 bg-dark-900/50 rounded-xl text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;