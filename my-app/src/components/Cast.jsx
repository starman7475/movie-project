import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviesId}/credits?language=en-US&api_key=34657bdb88b5016119b610ba744cbf88`
      )
      .then((responce) => {
        setCast(responce.data.cast);
      });
  }, [moviesId]);
  return (
    <div>
      <ul className="actor">
        {cast.map((actor) => {
          return (
            <li key={actor.id}>
              <img
                className="actorImg"
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="200px"
                height="300px"
                onError={(e) => {
                  e.target.src =
                    "https://pbs.twimg.com/media/EjJmZG1XgAAyzZu.jpg";
                }}
              />
              <p className="actorName">{actor.name}</p>
              <p className="actorCharacter"> Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
