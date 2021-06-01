import React from 'react';
import MovieList from '../MovieList/movieList';

const ComingFilms = () => {
    return (
        <div>
            <MovieList showingOrComing={true}/>
        </div>
    );
}

export default ComingFilms;
