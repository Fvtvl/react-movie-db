import React from 'react';
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <li>
        <Image src={image} alt='movie-thumb' />
    </li>
  )
}

export default Thumb;