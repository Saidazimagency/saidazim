import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import CaseStudy from '../components/home/CaseStudy';
import Process from '../components/home/Process';
import Team from '../components/home/Team';
import FAQ from '../components/home/FAQ';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '023 Agency | Email & SMS Marketing Experts';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <CaseStudy />
      <Process />
      <Team />
      <FAQ />
      <CallToAction />
    </>
  );
};

export default Home;