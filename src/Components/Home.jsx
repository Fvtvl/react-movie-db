import React from 'react';

//Components
import HeroImage from './HeroImage/HeroImage';

//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from '../config';

//Image 
import NoImage from '../images/no_image.jpg'
import Grid from './Grid/Grid';


const Home = () => {
    
    const { state, loading, error } = useHomeFetch();
    console.log(state);

  return (
    <>
      {state.results[0] ?
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
      /> : null
      }
      <Grid header='Popular Movies'>
        {state.results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </Grid>
    </>
  )
}

export default Home;