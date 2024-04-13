import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { moviesId } = useParams();
  const [dataOfReviews, setDataOfReviews] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviesId}/reviews?language=en-US&page=1&api_key=34657bdb88b5016119b610ba744cbf88`
      )
      .then((r) => {
        setDataOfReviews(r.data.results);
      });
  }, [moviesId]);

  if (dataOfReviews.length !== 0) {
    return (
      <div>
        <ul>
          {dataOfReviews.map((review) => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  if (dataOfReviews.length === 0) {
    return <p>We don't have any reviews of this movie</p>;
  }
};

export default Reviews;
