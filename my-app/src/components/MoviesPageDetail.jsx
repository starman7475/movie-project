import axios from "axios";
import { useEffect, useState, useRef, Suspense } from "react";
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
    <div className="menuOfMovie">
      <button type="button" className="btnBack">
        <Link to={backLink.current} className="btnBack">
          Go Back
        </Link>
      </button>
      <div className="information">
        <img
          src={`https://image.tmdb.org/t/p/w500${dataOfMovie.poster_path}`}
          alt={dataOfMovie.title}
          width="250px"
          height="350px"
        />
        <ul className="detailOfMovie">
          <li className="detailOfMovieLi">
            <h2 className="Overview">
              {dataOfMovie.title} ({dataOfMovie.release_date})
            </h2>
            <p>Stars: {Math.round(dataOfMovie.vote_average)}</p>
          </li>
          <li className="detailOfMovieLi">
            <h2 class="Overview">Overview:</h2>
            <p className="textOverview">{dataOfMovie.overview}</p>
          </li>
          <li>
            <h2 className="Overview">Genres:</h2>
            <p>
              {dataOfMovie.genres &&
                dataOfMovie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </li>
        </ul>
      </div>
      <div className="CastAndReview">
        <h2>Additional information</h2>
        <ul className="choiceCastAndReview">
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MoviesPageDetail;
