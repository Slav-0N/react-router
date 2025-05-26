import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const id = useParams();
  const [details, setDetails] = useState();
  const staticLocation = useRef();
  staticLocation.current = location.state?.from || '/';

  const getDetails = async id => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id['movie-details']}?api_key=3ca44921ce7d7d1a85260e2073ddef9c`
      );
      setDetails(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      getDetails(id);
    }
  }, [id]);

  return (
    <>
      <Link to={staticLocation.current}>Go back</Link>
      <h1>MovieDetails is working</h1>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
