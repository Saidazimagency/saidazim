import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import saidazim from '../images/saidazim.png'

const teamData = [
  {
    id: 1,
    name: "Saidazim",
    role: "CEO",
    image: saidazim,
    bio: "Saidazim is the CEO of 023 Agency, driving innovative strategies to help e-commerce brands grow through email marketing and customer engagement"},
  {
    id: 2,
    name: "Sarah Chen",
    role: "Head of Paid Advertising",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    bio: "Former Meta ads specialist with deep expertise in scaling customer acquisition campaigns. Sarah has helped dozens of brands achieve 3x+ ROAS.",

  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Analytics & Unit Economics",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    bio: "Data scientist turned marketer, Michael brings a unique analytical approach to marketing strategy. Expert in customer lifetime value modeling and profitability optimization.",

  }
];

const Team = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  return (
    <section id="team" className="py-20 bg-dark-900">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the experts behind our successful strategies.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-64 h-64 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary-500 mb-4">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.bio}</p>
              <a 
                href={`mailto:${member.email}`}
                className="text-primary-500 hover:text-primary-400 transition-colors"
              >
                {member.email}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;