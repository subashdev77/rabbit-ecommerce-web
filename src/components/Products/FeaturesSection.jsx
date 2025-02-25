import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdShoppingBag } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <section className="py-14 bg-white px-6">
      <div className="lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <MdShoppingBag size={28} className="text-gray-700" />
          </div>
          <h4 className="tracking-wide mb-2 uppercase font-semibold text-lg">
            Free International Shipping
          </h4>
          <p className="text-gray-600 text-base tracking-wide">
            On all orders over $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <HiArrowPathRoundedSquare size={28} className="text-gray-700" />
          </div>
          <h4 className="tracking-wide mb-2 uppercase font-semibold text-lg">
            45 Days Return
          </h4>
          <p className="text-gray-600 text-base tracking-wide">
            Money-back guarantee
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <FaRegCreditCard size={28} className="text-gray-700" />
          </div>
          <h4 className="tracking-wide mb-2 uppercase font-semibold text-lg">
            Secure Checkout
          </h4>
          <p className="text-gray-600 text-base tracking-wide">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
