import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ required

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ redirect to home after delete
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: "10px", backgroundColor: "red", color: "white" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
