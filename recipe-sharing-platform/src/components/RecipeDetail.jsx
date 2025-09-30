import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>1 tbsp olive oil</li>
              <li>2 cloves garlic</li>
              <li>1 cup chopped onions</li>
              <li>Additional recipe-specific ingredients…</li>
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Heat the pan with olive oil.</li>
              <li>Add onions and garlic, sauté until golden.</li>
              <li>Add main ingredients and cook thoroughly.</li>
              <li>Season to taste and serve hot.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
