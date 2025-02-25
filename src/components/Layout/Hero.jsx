import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/rabbit-hero.webp"; // Ensure correct path

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Rabbit"
        className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase mb-4">
            Vacation <br className="hidden sm:block" /> Ready
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide mb-6 max-w-lg mx-auto">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to="#"
            className="inline-block bg-white text-gray-950 px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition duration-300 hover:bg-gray-200"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
