import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

const MoviesPage = () => {
  const [valueInput, setValueInput] = useState("");
  const [findMovie, setFindMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=34657bdb88b5016119b610ba744cbf88`
      )
      .then((r) => setFindMovie(r.data.results))
      .finally(setFindMovie([]));
  }, [searchParams, query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ query: valueInput });
    setValueInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          value={valueInput}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {findMovie.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ form: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MoviesPage;
