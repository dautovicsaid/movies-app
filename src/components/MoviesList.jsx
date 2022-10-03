import React from 'react';
import MovieCard from "./MovieCard";
import {allMovies} from "../constants/movies";

const MoviesList = () => {
    return (
        <div className="col-8 offset-2">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {allMovies.map(movie => {
                    return <MovieCard
                        // key = ... (Poželjno je imati jedinstveni identifikator unutar movies objekata, idealno id, a u suportnom bi trebalo izgenerisati random identifikator)
                        name={movie.name}
                        year={movie.year}
                        genre={movie.genre}
                        actors={movie.actors}
                        coverImage={movie.coverImage}
                    />
                })}
            </div>
        </div>

    )
}

export default MoviesList;