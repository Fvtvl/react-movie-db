import React from 'react';

//Components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';
import Spinner from './Spinner/Spinner';

//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from '../config';

//Image 
import NoImage from '../images/no_image.jpg';





const Home = () => {
    
    const { state,
            loading,
            error, 
            setSearchTerm, 
            searchTerm, 
            setIsLoadingMore 
          } = useHomeFetch();

  if(error) return <div>Something went wrong...</div>

  return (
    <>
      {!searchTerm && state.results[0] ?
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
      /> : null
      }
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(movie => (
          <Thumb 
            key={movie.id}
            clickable
            movieId={movie.id}
            image={
              movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : NoImage
              }

            />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
      )}
    </>
  )
}

export default Home;