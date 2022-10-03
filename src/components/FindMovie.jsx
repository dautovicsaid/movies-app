import React, {useState} from 'react';
import {allMovies} from "../constants/movies";
import MovieCard from "./MovieCard";

const FindMovie = () => {
    const [searchTerm,setSearchTerm] = useState('');
    // Poželjno bi bilo debounce-ovati onChange callback (pomoću biblioteke ili ručnom implementacijom debounce mehanizma).

    return (
        <div className="col-8 offset-2">
            <h3>Search for movie</h3>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="form-control" placeholder="Search movies"/>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {allMovies.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase())).map(movie => {
                return <MovieCard
                    // key = ... (Poželjno je imati jedinstveni identifikator unutar movies objekata, idealno id, a u suportnom bi trebalo izgenerisati random identifikator)
                    name={movie.name}
                    year={movie.year}
                    genre={movie.genre}
                    actors={movie.actors}
                    coverImage = {movie.coverImage}
                />
            })}
            </div>
        </div>
    )
}

export default FindMovie;

