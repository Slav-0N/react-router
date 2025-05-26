import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movie</Link>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default SharedLayout;
