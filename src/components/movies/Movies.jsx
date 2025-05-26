import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  return (
    <>
      <h1>Movies is working</h1>
      {/* <Link to={location.state.from}>Go back</Link> */}
      {
        <Link to="movie-details" state={{ from: location }}>
          movie-details
        </Link>
      }
    </>
  );
};

export default Movies;
