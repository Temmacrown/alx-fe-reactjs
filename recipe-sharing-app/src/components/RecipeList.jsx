import React from "react";
import useRecipeStore from "../recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>🍲 Recipes</h2>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>
                Add to Favorites
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
