import React from 'react';

const MovieCard = ({movie:{imdbID,Year,Title,Poster,Type}}) => {
  
  return (
    <div className="movie" key={imdbID}>
        <span className='year'> {Year} </span>
        <img src={Poster !== "N/A" ? Poster: 'https://via.placeholder.com/400'} alt={Title} />
        <span className='type'>{Type}</span>
        <h3>{Title}</h3>
    </div>
  );
};

export default MovieCard;