import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies as fetchMovies } from "../../utils/api";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const movies = await fetchMovies(searchTerm);
      return movies;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
