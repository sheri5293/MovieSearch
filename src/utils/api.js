import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "8fa799d9ed64f37163d9d60cfa8dbdda";

export const getMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchTerm,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie:", error);
    throw error;
  }
};
