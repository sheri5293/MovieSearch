/* eslint-disable no-unused-vars */
import React from "react";
import MovieCard from "./MovieCard";

export default {
  title: "Components/MovieCard",
  component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Star Wars",
  rating: 8.5,
  image: "https://path/to/image.jpg",
};
