import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const getMovie = async () => {
    try {
      const movieList = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=3ca44921ce7d7d1a85260e2073ddef9c'
      );
      setMovie(movieList.data.results);
      console.log(movieList.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>Home is working</h1>
      <ul>
        {movie &&
          movie.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
