// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div
      className="user-profile bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm lg:max-w-2xl 
      mx-auto my-10 md:my-20 rounded-lg shadow-lg flex flex-col lg:flex-row 
      items-center lg:items-start gap-6 
      transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto lg:mx-0 
        transition-transform duration-300 ease-in-out hover:scale-110"
      />

      {/* Profile Info */}
      <div className="text-center lg:text-left">
        <h1
          className="text-lg md:text-xl text-blue-800 my-4 lg:my-0 
          transition-colors duration-300 ease-in-out hover:text-blue-500"
        >
          John Doe
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new
          technologies.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
