import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

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
    <div className="main">
      <h1 class="nameTrend">Trending today:</h1>
      <ul class="ulContent">
        {popularMovie.map((obj) => {
          return (
            <li key={obj.id} className="liObj">
              <Link to={`movies/${obj.id}`}>{obj.title || obj.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HomePage;
