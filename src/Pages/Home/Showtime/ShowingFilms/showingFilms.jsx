import React from 'react';
import MovieList from '../MovieList/movieList';

const ShowingFilms = () => {
    return (
        <div>
            <MovieList showingOrComing = {false}/>
        </div>
    );
}

export default ShowingFilms;
