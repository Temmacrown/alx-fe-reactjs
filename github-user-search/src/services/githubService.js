import axios from "axios";

const BASE_URL = "https://api.github.com/search/users;

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

    // Trim to clean query string
    query = query.trim();

    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // GitHub returns results inside 'items'
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


