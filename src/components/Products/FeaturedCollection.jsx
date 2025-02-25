import React from "react";
import { Link } from "react-router-dom";
import Featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="py-10 max-sm:px-4 max-lg:px-6 w-full">
      <div className="lg:w-[90%]  mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam repellendus voluptates iusto maiores quod pariatur! Modi,
            alias?
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        {/* Right content */}
        <div className=" w-full lg:w-1/2">
          <img
            src={Featured}
            alt="Featured Collection"
            className="w-full h-full object-cover  lg:rounded-br-3xl rounded-tl-3xl lg:rounded-tl-none rounded-tr-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
