import React, { useState } from "react";
import Hair from "../images/Hair.jpg";
import Bridal from "../images/Bridal.jpg";
import facial from "../images/facial.jpg";

import GelManicure from "../images/GelManicure.jpg";
import Pedicure from "../images/Pedicure.jpg";
import AntiAging from "../images/AntiAging.jpg";

const services = [
  {
    title: "Hair Styling & Cut",
    description: "Professional cuts, styling, and color treatments",
    price: "From $85",
    category: "Hair",
    image: Hair
  },
  {
    title: "Bridal Makeup",
    description: "Complete bridal look with trial session",
    price: "From $150",
    category: "Makeup",
    image: Bridal
  },
  {
    title: "Facial Treatment",
    description: "Deep cleansing and rejuvenating facial",
    price: "From $95",
    category: "Skincare",
    image: facial
  },
  {
    title: "Gel Manicure",
    description: "Long-lasting gel polish with nail art",
    price: "From $45",
    category: "Nails",
    image: GelManicure
  },
  {
    title: "Luxury Pedicure",
    description: "Relaxing foot treatment with massage",
    price: "From $65",
    category: "Nails",
    image: Pedicure
  },
  {
    title: "Anti-Aging Treatment",
    description: "Advanced skincare for youthful glow",
    price: "From $120",
    category: "Skincare",
    image: AntiAging
  },
];

const categories = ["All Services", "Hair", "Makeup", "Skincare", "Nails"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === "All Services"
      ? services
      : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="bg-pink-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-900">Our Services</h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Discover our comprehensive range of beauty treatments designed to enhance your natural radiance
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 flex-wrap mt-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  selectedCategory === cat
                    ? "bg-pink-600 text-white border-pink-600"
                    : "text-pink-600 border-pink-400 hover:bg-pink-600 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image Card */}
              <div className="relative h-40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                  {service.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center text-white text-lg font-bold">
                  {service.title.split(" ")[0]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 text-left">
                <h3 className="text-pink-900 font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{service.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
