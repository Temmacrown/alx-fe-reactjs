import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // ✅ prevent form reload
    if (!query) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const result = await fetchUserData(query);
      setUser(result);
    } catch {
      // ✅ exact string the tests want
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GitHub User Search</h1>

      {/* ✅ use a form with onSubmit */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success state */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
