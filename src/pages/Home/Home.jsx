/* eslint-disable react/jsx-no-undef */

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
  LoaderContainer,
  NoMoviesMessage,
} from "./Home.styles";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      dispatch(getMovies("Harry Potter"));
    }
  }, [dispatch, query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setSearching(true);
    toast.dismiss();
    toast.info("Searching for movies...", {
      onClose: () => {
        dispatch(getMovies(newQuery));
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
      {searching && (
        <LoaderContainer>
          <ClipLoader color={"#1976d2"} loading={searching} size={50} />
        </LoaderContainer>
      )}
      {status === "failed" && <ErrorMessage>{toast.error(error)}</ErrorMessage>}
      {status === "succeeded" && movies.length === 0 && !searching && (
        <NoMoviesMessage>No movies found.</NoMoviesMessage>
      )}
      <StyledGrid container spacing={2}>
        {status === "succeeded" &&
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
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
