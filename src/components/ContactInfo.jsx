import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <h2 className="text-xl font-bold text-pink-600 mb-6">
            Visit Our Salon
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-pink-100 p-3 rounded-full text-pink-600">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">123 Beauty Boulevard</p>
              <p className="text-gray-600">Elegant District, City 12345</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-pink-100 p-3 rounded-full text-pink-600">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">(555) 123-BEAUTY</p>
              <p className="text-gray-600">(555) 123-2328</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex gap-4 text-pink-600 text-lg">
              <a href="#" className="hover:text-purple-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-purple-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-purple-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-purple-600">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          {/* Hours */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-pink-100 p-3 rounded-full text-pink-600">
              <FaClock />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Hours</h3>
              <p className="text-gray-600">Mon–Fri: 9:00 AM – 8:00 PM</p>
              <p className="text-gray-600">Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-600">Sun: 10:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-3 rounded-full text-pink-600">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">hello@bellebeauty.com</p>
              <p className="text-gray-600">appointments@bellebeauty.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
