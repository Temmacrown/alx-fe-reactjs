import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  // =========================
  // Recipe Data
  // =========================
  recipes: [],

  // =========================
  // Search & Filtering
  // =========================
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // auto-trigger filter when term changes
  },
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // =========================
  // Favorites
  // =========================
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites // prevent duplicates
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // =========================
  // Recommendations
  // =========================
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Simple mock recommendation system
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
