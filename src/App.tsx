import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      
      <main>
        <AnimatePresence>
          {/* Hero - No animation needed as it's the first element */}
          <Hero />
          
          {/* Other sections with staggered animations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.section variants={sectionVariants}>
              <Services />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Projects />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Team />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Testimonials />
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <Contact />
            </motion.section>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;