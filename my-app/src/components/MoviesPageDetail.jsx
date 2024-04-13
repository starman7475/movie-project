import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

const MoviesPageDetail = () => {
  const { moviesId } = useParams();
  const [dataOfMovie, setDataOfMovie] = useState([]);
  const location = useLocation();
  const backLink = useRef(location.state?.form ?? "/");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviesId}?api_key=34657bdb88b5016119b610ba744cbf88`
      )
      .then((response) => {
        setDataOfMovie(response.data);
      });
  }, [moviesId]);

  return (
    <div>
      <button type="button">
        <Link to={backLink.current}>Go Back</Link>
      </button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${dataOfMovie.poster_path}`}
          alt={dataOfMovie.title}
          width="200px"
          height="300px"
        />
        <ul>
          <li>
            <h2>
              {dataOfMovie.title} ({dataOfMovie.release_date})
            </h2>
            <p>Stars: {Math.round(dataOfMovie.vote_average)}</p>
          </li>
          <li>
            <h2>Overview:</h2>
            <p>{dataOfMovie.overview}</p>
          </li>
          <li>
            <h2>Genres:</h2>
            <p>
              {dataOfMovie.genres &&
                dataOfMovie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default MoviesPageDetail;
