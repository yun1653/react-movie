import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>{movie.title}</h1>
      <div>
        {movie.genres?.map((item) => (
          <span>{item}</span>
        ))}
      </div>
      <img src={movie.medium_cover_image} alt="" />
      <p>{movie.description_full}</p>
    </div>
  );
}

export default Detail;
