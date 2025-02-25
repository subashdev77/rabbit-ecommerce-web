import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-red-500 text-white py-2">
      <div className="container w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-300 text-xl md:text-2xl">
            <FaFacebookSquare />
          </a>
          <a href="#" className="hover:text-gray-300 text-xl md:text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300 text-xl md:text-2xl">
            <FaLinkedin />
          </a>
        </div>

        {/* Welcome Message */}
        <div className="text-center">
          <p className="text-sm md:text-lg">Welcome to our website</p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-sm md:text-lg">Call us: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
