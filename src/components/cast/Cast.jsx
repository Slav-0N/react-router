import { useParams } from 'react-router-dom';

const Cast = () => {
  const pageParams = useParams();
  console.log('Cast pageParams', pageParams['']);

  return <h1>Cast is working</h1>;
};

export default Cast;
