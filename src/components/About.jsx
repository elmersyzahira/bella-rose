import React from "react";
import { Star } from "lucide-react"; 
import place from "../images/place.jpeg"; // mets le bon chemin vers ton image

const About = () => {
  return (
    <section id="about" className="bg-pink-50 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texte */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-4">
            About Bella Rose
          </h2>
          <p className="text-gray-700 mb-4">
            Founded in 2015, Bella Rose Beauty Salon has been dedicated to enhancing
            natural beauty and boosting confidence through exceptional beauty services.
            Our team of skilled professionals uses only the finest products and latest
            techniques to deliver outstanding results.
          </p>
          <p className="text-gray-700 mb-6">
            We believe that every woman deserves to feel beautiful and confident. 
            Our luxurious salon environment provides a peaceful escape where you can 
            relax, rejuvenate, and rediscover your inner glow. From hair styling 
            to skincare, we offer comprehensive beauty solutions tailored to your 
            unique needs.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-6">
            <div>
              <p className="text-pink-600 text-2xl font-bold">8+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-pink-600 text-2xl font-bold">15k+</p>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
            <div>
              <p className="text-pink-600 text-2xl font-bold">50+</p>
              <p className="text-gray-600 text-sm">Beauty Awards</p>
            </div>
          </div>
        </div>

        {/* Image Card avec img */}
        <div className="relative">
          {/* <div className="bg-gradient-to-r from-pink-400 to-pink-300 rounded-xl h-64 md:h-72 flex items-center justify-center overflow-hidden"> */}
            <img 
              src={place} 
              alt="Luxury Salon Interior" 
              className="w-full h-full object-cover rounded-xl" 
            />
          {/* </div> */}
          <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
            <Star className="text-pink-600 fill-pink-600" size={18} />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
