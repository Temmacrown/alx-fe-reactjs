import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial" }}>
        <h1>🍲 Recipe Sharing App</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/favorites" style={{ marginRight: "10px" }}>Favorites</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
