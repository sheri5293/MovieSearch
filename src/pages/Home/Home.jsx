/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getMovies } from "../../features/movies/moviesThunks";
import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledGrid,
  ErrorMessage,
  LoadingMessage,
} from "./Home.styles";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  const [searching, setSearching] = useState(false);

  useEffect(() => {
    dispatch(getMovies("Harry Potter"));
  }, [dispatch]);

  const handleSearch = (query) => {
    setSearching(true);
    toast.dismiss();
    toast.info("Searching for movies...", {
      onClose: () => {
        dispatch(getMovies(query));
        setSearching(false);
      },
    });
  };

  useEffect(() => {
    if (status === "failed") {
      toast.error(error);
    }
  }, [status, error]);

  return (
    <StyledContainer>
      <Navbar onSearch={handleSearch} />
      {searching && <LoadingMessage>Loading...</LoadingMessage>}
      {status === "failed" && <ErrorMessage>{toast.error(error)}</ErrorMessage>}
      {status === "succeeded" && movies.length === 0 && <p>No movies found.</p>}
      <StyledGrid container spacing={2}>
        {status === "succeeded" &&
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard
                title={movie.title}
                rating={movie.vote_average}
                image={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              />
            </Grid>
          ))}
      </StyledGrid>
      <ToastContainer />
    </StyledContainer>
  );
};

export default Home;
