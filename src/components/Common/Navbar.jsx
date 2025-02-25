import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCardDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="bg-white w-full">
      <nav className="mx-auto w-[90%] flex justify-between items-center h-16 text-black">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Rabbit
          </Link>
        </div>

        {/* Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="#"
            className="hover:text-gray-600 text-gray-700 text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="hover:text-gray-600 text-gray-700 text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="hover:text-gray-600 text-gray-700 text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="hover:text-gray-600 text-gray-700 text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-black" aria-label="Profile">
            <FaRegUser />
          </Link>

          {/* Shopping Cart with Badge */}
          <button
            onClick={toggleCardDrawer}
            className="relative hover:text-black"
            aria-label="Cart"
          >
            <FaShoppingCart />
            <span className="absolute -top-4 bg-red-400 text-white rounded-full text-xs px-2 py-0.5">
              4
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavDrawer}
            className="md:hidden hover:text-black"
            aria-label="Menu"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCardDrawer={toggleCardDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoClose size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleCardDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleCardDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleCardDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleCardDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
