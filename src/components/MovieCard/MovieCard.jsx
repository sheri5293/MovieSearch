/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { CardContainer } from "./MovieCard.styles";

const MovieCard = ({ title, rating, image }) => (
  <CardContainer>
    <Card>
      <img src={image} alt={title} />
      <CardContent>
        <Typography variant="h5" className="movie-title">
          {title}
        </Typography>
        <Typography variant="subtitle1" className="movie-rating">
          Rating: {rating}
        </Typography>
      </CardContent>
    </Card>
  </CardContainer>
);

export default MovieCard;
