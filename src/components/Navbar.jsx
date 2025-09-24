import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "React Interview Qs", link: "/react-qs" },
    { name: "JavaScript Coding Qs", link: "/js-coding-qs" },
    { name: "HTML/CSS Qs", link: "/html-css-qs" },
    { name: "Machine Coding Tasks", link: "/" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
          bg-neutral-900/90 backdrop-blur-md shadow-xl py-4
       border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center text-center justify-center">
              <FaGlobe className="text-white text-lg text-center" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
              CodeDashboard
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.link
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/aftab-08khan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-1 px-4 py-2 rounded-lg text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            <BsGithub size={28} />

            <span>GitHub</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 h-screen bg-black/90 backdrop-blur-sm flex justify-center items-start z-50 transition-opacity duration-300 md:hidden pt-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-neutral-900/95 border border-white/10 rounded-xl w-11/12 max-w-sm p-6 flex flex-col gap-3 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.link
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-4 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
