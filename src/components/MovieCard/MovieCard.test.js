/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("MovieCard", () => {
  it("renders correctly with given props", () => {
    const { getByText, getByAltText } = render(
      <MovieCard
        title="Harry Potter"
        rating={8.5}
        image="https://someurl.com/poster.jpg"
      />
    );

    expect(getByText("Harry Potter")).toBeInTheDocument();
    expect(getByText("Rating: 8.5")).toBeInTheDocument();
    expect(getByAltText("Harry Potter")).toBeInTheDocument();
  });
});
