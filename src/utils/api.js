import axios from "axios";

export const API = "https://www.omdbapi.com";
const apiKey = "b5382e81";

export const getMovies = async (searchTerm) => {
  try {
    const response = await axios.get(API, {
      params: {
        apikey: apiKey,
        s: searchTerm,
        type: "movie",
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
