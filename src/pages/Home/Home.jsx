/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useMovies from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard/MovieCard";
import Navbar from "../../components/Navbar/Navbar";
import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledGrid,
  ErrorMessage,
  LoadingMessage,
} from "./Home.styles";
import { toast } from "react-toastify";

const Home = () => {
  const { movies, status, error, loadMovies } = useMovies();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      loadMovies(search);
    }
  };

  return (
    <StyledContainer>
      <Navbar onSearch={handleSearch} setSearch={setSearch} />
      {status === "loading" && <LoadingMessage>Loading...</LoadingMessage>}
      {status === "failed" && <ErrorMessage>{toast.error(error)}</ErrorMessage>}
      {status === "succeeded" && movies.length === 0 && <p>No movies found.</p>}
      <StyledGrid container spacing={2}>
        {status === "succeeded" &&
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard
                title={movie.Title}
                rating={movie.imdbRating}
                image={movie.Poster}
              />
            </Grid>
          ))}
      </StyledGrid>
    </StyledContainer>
  );
};

export default Home;
