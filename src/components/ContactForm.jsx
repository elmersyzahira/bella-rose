import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-purple-900">Get In Touch</h2>
          <p className="text-gray-600 mt-2">
            Ready to transform your look? Contact us today to schedule your
            appointment or ask any questions about our services.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/myzdggzl"
          method="POST"
          className="space-y-4"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Service */}
          <select
            name="service"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option>Select Service</option>
            <option>Hair Transformation</option>
            <option>Makeup Makeover</option>
            <option>Skincare</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
