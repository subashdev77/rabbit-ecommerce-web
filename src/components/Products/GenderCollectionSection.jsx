import React from "react";
import MensCollectionImage from "../../assets/mens-collection.webp";
import WomensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-12 w-full">
      <div className="lg:w-[90%] mx-auto max-sm:px-4 max-lg:px-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img
            src={WomensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white bg-opacity-90 p-3 sm:p-4">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline font-medium transition hover:text-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={MensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white bg-opacity-90 p-3 sm:p-4">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline font-medium transition hover:text-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
