import React, { useState } from "react";
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
    <nav className="sticky top-0 z-50 bg-neutral-950 text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            CodeDashboard
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  location.pathname === item.link
                    ? "bg-neutral-800 text-white"
                    : "text-gray-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
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
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-neutral-900/90 backdrop-blur-lg border border-white/10 rounded-xl w-80 max-w-xs p-6 flex flex-col gap-4 shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors text-center ${
                  location.pathname === item.link
                    ? "bg-neutral-800 text-white"
                    : "text-gray-300 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
