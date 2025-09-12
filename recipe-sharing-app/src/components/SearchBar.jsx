import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    />
  );
};

export default SearchBar;
