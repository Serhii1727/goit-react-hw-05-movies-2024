import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <NavLink to="movies/:movieId">Marvel</NavLink>
    </>
  );
};

export default Home;
