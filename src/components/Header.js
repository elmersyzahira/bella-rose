import React, { useState } from "react";
import logo from "../images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600">
          <img src={logo} alt="Bella Rose Logo" className="w-auto h-8" />
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-pink-600 transition">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-pink-600 transition">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-pink-600 transition">
            Services
          </a>
          <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition">
            Gallery
          </a>
          <a href="#contact" className="text-gray-700 hover:text-pink-600 transition">
            Contact
          </a>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-pink-600">
            Home
          </a>
          <a href="#about" className="block text-gray-700 hover:text-pink-600">
            About
          </a>
          <a href="#services" className="block text-gray-700 hover:text-pink-600">
            Services
          </a>
          <a href="#gallery" className="block text-gray-700 hover:text-pink-600">
            Gallery
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-pink-600">
            Contact
          </a>
          <a
            href="#contact"
            className="block text-center bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
