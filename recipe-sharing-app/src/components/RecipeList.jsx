import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) return <p>No recipes match your search.</p>;

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
