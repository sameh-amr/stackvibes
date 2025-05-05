import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">StackVibes</h3>
            <p className="text-gray-400">
              Crafting digital experiences that matter with pixel-perfect precision.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">UI/UX Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition">Our Team</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">

              <a href="https://www.linkedin.com/company/stackvibes" className="text-gray-400 hover:text-white transition" target='_blank' rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} StackVibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;