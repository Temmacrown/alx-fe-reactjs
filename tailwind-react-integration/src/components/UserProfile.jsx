import React from "react";

function UserProfile() {
  return (
    <div
      className="bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm lg:max-w-2xl
      mx-auto my-10 md:my-20 rounded-lg shadow-lg flex flex-col items-center gap-4
      transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      {/* Profile Image */}
      <img
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 transition-transform duration-300 ease-in-out hover:scale-110"
        src="https://via.placeholder.com/150"
        alt="User Profile"
      />

      {/* Heading with responsive typography */}
      <h1
        className="sm:text-lg md:text-xl text-blue-800 font-semibold my-4
        transition-colors duration-300 ease-in-out hover:text-blue-500"
      >
        John Doe
      </h1>

      {/* Paragraph with responsive text */}
      <p className="sm:text-sm md:text-base text-gray-600 text-center leading-relaxed">
        Frontend Developer at Example Inc.
      </p>
    </div>
  );
}

export default UserProfile;
