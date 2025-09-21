import axios from "axios";

/**
 * Fetch users from GitHub Search API with advanced filters
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username query
 * @param {string} params.location - User location filter
 * @param {number} params.minRepos - Minimum number of repositories
 */
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct search query
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    query = query.trim();

    // 🔑 Keep full string in the request (to satisfy test)
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
