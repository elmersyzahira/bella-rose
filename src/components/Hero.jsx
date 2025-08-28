// src/components/Hero.jsx
import React from "react";
import HeroImage from "../images/hero-bg.jpeg"

const Hero = () => {
  return (
    <section id="home" className="relative bg-pink-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage} // Remplace par le chemin de ton image
          alt="Beauty Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-800 bg-opacity-40"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Bella Rose
        </h1>
        <p className="text-lg md:text-xl text-white mt-2">Beauty Salon</p>
        <p className="max-w-xl text-white mt-4">
          Where beauty meets elegance. Transform yourself with our luxurious
          treatments and expert care.
        </p>

        {/* Boutons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
            <a href="#contact">Book Appointment</a>
          </button>
          <button className="border border-white hover:bg-white hover:text-pink-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
            <a href="#services">View Services</a> 
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 animate-bounce">
          <span className="w-5 h-8 border-2 border-white rounded-full flex items-start justify-center p-1">
            <span className="w-1 h-2 bg-white rounded-full"></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
