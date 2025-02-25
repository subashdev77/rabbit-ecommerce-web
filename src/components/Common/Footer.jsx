import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-10 bg-white text-black">
      <div className="lg:w-[90%] mx-auto max-sm:px-4 max-lg:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 lg:px-0">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-gray-700 text-sm mb-6 font-medium">
            Sign up and get 10% off your first order.
          </p>

          {/* Newsletter Form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full bg-gray-100 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Contact Info */}
          <p className="text-gray-500">Call Us</p>
          <p className="text-gray-700 font-medium flex items-center">
            <FaPhone size={16} className="mr-2" /> 0123-456-789
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 text-center">
        <p className="text-gray-500 text-sm tracking-tight">
          © 2025, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
