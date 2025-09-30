import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-4">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
