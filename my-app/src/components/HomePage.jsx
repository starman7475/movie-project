import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import s from "../App.css";

const HomePage = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=34657bdb88b5016119b610ba744cbf88"
      )
      .then((response) => {
        setPopularMovie(response.data.results);
      });
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {popularMovie.map((obj) => {
          return (
            <li key={obj.id}>
              <Link to={`movies/${obj.id}`}>{obj.title || obj.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HomePage;
