import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../features/movies/moviesThunks";
import { toast } from "react-toastify";

const useMovies = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  const loadMovies = async (searchTerm) => {
    try {
      await dispatch(getMovies(searchTerm)).unwrap();
    } catch (error) {
      toast.error("Failed to fetch movies: " + error.message);
    }
  };

  return { movies, status, error, loadMovies };
};

export default useMovies;