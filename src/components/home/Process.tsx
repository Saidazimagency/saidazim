import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  "3 Days": [
    {
      day: "Day 1",
      title: "Audience Research & Setup",
      description: "Identify your ideal customer and set up ad accounts.",
      details:
        "We analyze your target audience, competitors, and market trends to build precise customer profiles. We also set up and audit your advertising accounts on platforms like Facebook, Google Ads, and TikTok.",
    },
    {
      day: "Day 2",
      title: "Creative Strategy",
      description: "Plan engaging ad creatives and copy.",
      details:
        "Based on audience insights, we design compelling ad creatives, headlines, and copy to maximize engagement and click-through rates. We create multiple variations for A/B testing.",
    },
    {
      day: "Day 3",
      title: "Campaign Setup & Launch",
      description: "Configure campaigns and launch.",
      details:
        "We build campaign structures tailored to your goals, configure targeting, budgets, and bidding strategies. After thorough review, we launch campaigns and monitor initial performance.",
    },
  ],
  "7 Days": [
    {
      day: "Day 1-2",
      title: "In-Depth Market & Competitor Analysis",
      description: "Comprehensive analysis to refine targeting and messaging.",
      details:
        "We deep dive into competitor ads, audience behaviors, and platform algorithms to uncover opportunities and gaps. This research guides our campaign structure and creative approach.",
    },
    {
      day: "Day 3-4",
      title: "Multi-Channel Campaign Planning",
      description: "Strategize ads across Facebook, Google, and more.",
      details:
        "We develop integrated campaign plans that leverage the strengths of each platform, setting goals and KPIs. We also plan retargeting funnels and lookalike audience strategies.",
    },
    {
      day: "Day 5-6",
      title: "Creative Production & Testing",
      description: "Create and test multiple ad variations.",
      details:
        "Our creative team produces ads in various formats (video, carousel, static) to appeal to different segments. We set up A/B testing to optimize messaging and design.",
    },
    {
      day: "Day 7",
      title: "Launch & Monitoring",
      description: "Launch campaigns and monitor early results.",
      details:
        "Campaigns are launched with detailed tracking. We monitor key metrics daily, making adjustments to bids, budgets, and creatives to improve performance.",
    },
  ],
  "30 Days": [
    {
      day: "Week 1",
      title: "Comprehensive Setup & Baseline Metrics",
      description: "Establish tracking, pixels, and benchmarks.",
      details:
        "We install tracking pixels, set up conversion APIs, and define baseline performance metrics. We audit previous campaigns to avoid past mistakes.",
    },
    {
      day: "Week 2",
      title: "Advanced Targeting & Funnel Design",
      description: "Build sophisticated retargeting funnels.",
      details:
        "We segment audiences based on behavior and intent, designing multi-step funnels to nurture leads through ads, email, and landing pages.",
    },
    {
      day: "Week 3",
      title: "Scaling & Optimization",
      description: "Scale winning ads while optimizing costs.",
      details:
        "We increase budgets on top-performing ads, pause underperformers, and adjust targeting to reduce cost per acquisition (CPA) while maintaining ROI.",
    },
    {
      day: "Week 4",
      title: "Reporting & Continuous Improvement",
      description: "Analyze results and plan next steps.",
      details:
        "We provide detailed reports covering ROAS, customer lifetime value, and conversion rates. Insights guide ongoing campaign refinement and future strategies.",
    },
  ],
};

const tabNames = Object.keys(data);

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Process() {
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <section
      id="process"
      className="bg-black text-white py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-2">Our Process</h2>
        <p className="text-white">
          How we grow your paid ads campaigns effectively.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
            ${
              activeTab === tab
                ? "bg-orange-600 text-black shadow-[0_0_8px_rgba(255,127,0,0.7)]"
                : "bg-gray-900 text-orange-400 hover:bg-orange-600 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {data[activeTab].map(({ day, title, description, details }, i) => (
            <motion.div
              key={day}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 12px #FF7F00" }}
              className="bg-gray-900 rounded-xl p-6 cursor-default border-2 border-transparent hover:border-orange-600 transition"
            >
              <h3 className="text-orange-500 font-bold mb-1">{day}</h3>
              <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-300 mb-3">{description}</p>
              <p className="text-gray-400 text-sm">{details}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Book a Call Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/booking"
          className="inline-block bg-orange-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-700 transition"
          aria-label="Book a Call"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
