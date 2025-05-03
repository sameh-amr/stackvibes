import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white py-20 md:py-28 flex items-center min-h-[60vh]">
      {/* Tech background layers */}
      <div className="absolute inset-0 z-0">
        {/* Circuit board background */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop')] 
          bg-cover bg-center opacity-40"
        ></div>
        
        {/* Binary code animation (reduced number of elements) */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.8)_100%)]">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute text-green-400 font-mono text-xs md:text-sm"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `floatUp ${Math.random() * 8 + 4}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                {Math.random().toString(2).substring(2, 8)}
              </div>
            ))}
          </div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(72,180,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(72,180,212,0.1)_1px,transparent_1px)]"></div>
        
        {/* Glowing particles (reduced count) */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400 blur-sm"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `pulse ${Math.random() * 3 + 1.5}s ease-in-out infinite alternate`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/50 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Digital Innovation
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-300"
        >
          Stackvibe transforms ideas into cutting-edge digital experiences with 
          <span className="text-blue-300 font-medium"> mobile and web </span> solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-3"
        >
          <a 
            href="#contact" 
            className="relative bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-indigo-500/30 overflow-hidden group text-sm md:text-base"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition duration-300"></span>
          </a>
          <a 
            href="#projects" 
            className="relative border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300 shadow-lg hover:shadow-purple-500/20 overflow-hidden group text-sm md:text-base"
          >
            <span className="relative z-10">View Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-300"></span>
          </a>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style >{`
        @keyframes floatUp {
          0% { transform: translateY(50vh); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-50px); opacity: 0; }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.2); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default Hero;