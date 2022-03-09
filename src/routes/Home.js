import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const url =
    'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : null}
      <div className={styles.movies}>
        {movies.map((item) => {
          return (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
