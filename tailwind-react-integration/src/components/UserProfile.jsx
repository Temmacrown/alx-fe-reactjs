import React from "react";

function UserProfile() {
  return (
    <div
      className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm lg:max-w-2xl
      mx-auto my-10 md:my-20 rounded-lg shadow-lg flex flex-col items-center gap-4
      transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      {/* Profile Image */}
      <img
        className="rounded-full w-24 h-24 md:w-36 md:h-36 
        transition-transform duration-300 ease-in-out hover:scale-110"
        src="https://via.placeholder.com/150"
        alt="User Profile"
      />

      {/* Profile Info */}
      <h1
        className="text-lg md:text-xl text-blue-800 font-semibold
        transition-colors duration-300 ease-in-out hover:text-blue-500"
      >
        John Doe
      </h1>
      <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
        Frontend Developer at Example Inc.
      </p>
    </div>
  );
}

export default UserProfile;
