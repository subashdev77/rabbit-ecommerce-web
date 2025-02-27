import React from "react";
import MyOrdersPage from "./MyOrdersPage";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow lg:w-[90%] mx-auto w-full p-4 md:p-6 ">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="w-full h-48 md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
            <p className="text-lg text-gray-600 mb-4">john@example.com</p>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
          {/* Right Section */}
          <div className="w-full md-2/3 lg:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
