import React from 'react';
import { useParams } from 'react-router-dom';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import Spinner from './Spinner/Spinner';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import MovieInfo from './MovieInfo/MovieInfo';
//hook 
import { useMovieFetch } from '../Hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';



const Movie = () => {

    const { movieId } = useParams()

    const {state: movie, loading, error } = useMovieFetch(movieId)
    
    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>
  return (
    <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
    </>
  )
}

export default Movie;