import { useEffect, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition p-4"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-bold">{recipe.title}</h2>
          <p className="text-gray-600 text-sm">{recipe.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
