import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-pink-100 text-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-3">
            Bella Rose
          </h2>
          <p className="text-gray-600">
            Bringing out the best in you with professional beauty, skincare, 
            and hair services tailored just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-pink-600 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">Services</a></li>
            <li><a href="#" className="hover:text-purple-500">Gallery</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-pink-600 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-pink-500 text-xl">
            <a href="#" className="hover:text-purple-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-600"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-600"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Belle Beauty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
