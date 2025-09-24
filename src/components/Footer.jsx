import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900  backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <FaGlobe className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-white">
                CodeDashboard
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              A collection of machine coding tasks and frontend challenges to
              help developers prepare for technical interviews and improve their
              skills.
            </p>

            <div className="flex space-x-3">
              <a
                href="https://github.com/aftab-08khan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/aftab-khan-806617289/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              </a>

              <a
                href="https://portfolio-aftab-khan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="Portfolio"
              >
                <FaGlobe className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
              </a>

              <a
                href="mailto:akkhanaftab08@gmail.com"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          © {currentYear} CodeDashboard. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
