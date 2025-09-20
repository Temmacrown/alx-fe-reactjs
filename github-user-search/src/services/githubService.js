import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const advancedSearchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build query string
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });

    // Fetch more details for each user (because search/users gives limited info)
    const users = await Promise.all(
      response.data.items.map(async (u) => {
        const details = await axios.get(`${BASE_URL}/users/${u.login}`, {
          headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
        });
        return details.data;
      })
    );

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
