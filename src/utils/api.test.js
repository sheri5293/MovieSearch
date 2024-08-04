import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getMovies, API } from "./api"; // Ensure this path is correct

const mock = new MockAdapter(axios);

describe("getMovies", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should fetch movies successfully", async () => {
    const searchTerm = "Harry Potter";
    const mockResponse = {
      Search: [
        {
          Title: "Harry Potter and the Sorcerer's Stone",
          Year: "2001",
          imdbID: "tt0241527",
          Type: "movie",
          Poster: "https://example.com/harrypotter.jpg",
        },
      ],
    };

    mock.onGet(API).reply(200, mockResponse);

    const movies = await getMovies(searchTerm);

    expect(movies).toEqual(mockResponse.Search);
  });

  it("should throw an error when the API call fails", async () => {
    const searchTerm = "Harry Potter";

    mock.onGet(API).reply(500);

    await expect(getMovies(searchTerm)).rejects.toThrow(
      "Request failed with status code 500"
    );
  });
});
