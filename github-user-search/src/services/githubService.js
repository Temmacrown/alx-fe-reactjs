import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";

/**
 * Fetch GitHub users with advanced search parameters
 * @param {string} username - GitHub username
 * @param {string} location - User location
 * @param {number} minRepos - Minimum repo count
 * @returns {Promise<Object>} Search results
 */
export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos > 0) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${SEARCH_URL}?q=${query}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ""}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error("Search failed");
  }
};
