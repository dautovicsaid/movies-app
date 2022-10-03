import React, {useEffect, useState} from 'react';
import {allMovies} from "../constants/movies";
import MovieCard from "./MovieCard";

const MoviesStatistics = () => {
    const [targetGenreCount, setTargetGenreCount] = useState();
    const [matchingYearCount, setMatchingYearCount] = useState();
    const [matchingYearRangeList, setMatchingYearRangeList] = useState([]);
    const [matchingGenreAndYearList, setMatchingGenreAndYearList] = useState([]);
    const [matchingYearLastMovieName, setMatchingYearLastMovieName] = useState();
    const [targetActorMovies, setTargetActorMovies] = useState([]);


    useEffect(() => {
        setTargetGenreCount(allMovies.filter(movie => movie.genre === "Comedy").length);
        setMatchingYearCount(allMovies.filter(movie => movie.year === 2012).length);
        setMatchingYearRangeList(allMovies.filter(movie => movie.year >= 1990 && movie.year <= 1999));
        setMatchingGenreAndYearList(allMovies.filter(movie => movie.genre === "Drama" && movie.year > 2000));
        setMatchingYearLastMovieName(allMovies.filter(movie => movie.year === 2010).pop().name);
        setTargetActorMovies(allMovies.filter(movie => movie.actors.includes("Leonardo DiCaprio")));
    }, []);

    return (
        <div className="col-8 offset-2">
            <p>Ukupan broj filmova: {allMovies.length}</p>
            <p>Broj filmova sa žanrom "Komedija": {targetGenreCount}</p>
            <p>Broj filmova iz 2012 godine: {matchingYearCount}</p>
            <p>Lista filmova izmedju 1990 i 1999 godine:</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {matchingYearRangeList.map(movie =>
                    <MovieCard
                        // key = ... (Poželjno je imati jedinstveni identifikator unutar movies objekata, idealno id, a u suportnom bi trebalo izgenerisati random identifikator)
                        name={movie.name}
                        year={movie.year}
                        genre={movie.genre}
                        actors={movie.actors}
                        coverImage={movie.coverImage}
                    />)}
            </div>
            <p className="mt-3">Lista naziva filmova sa žanrom "Drama" godine veće od 2000:</p>
            <ul>
                {matchingGenreAndYearList.map(movie =>
                    <li>{movie.name}</li>
                )}
            </ul>
            <p>
                Poslednji film u listi iz 2010: {matchingYearLastMovieName}
            </p>
            <p>Lista cover slika filmova u kojima glumi Leonardo DiCaprio:</p>
            <ul>
                <div className="row row-cols-3">
                    {targetActorMovies.map(movie => {
                            return <div>
                                <img src={movie.coverImage}
                                     className="img-fluid" alt="..."
                                     style={{width: 300, heigth: 300, objectFit: "contain"}}/>
                            </div>;
                        }
                    )
                    }
                </div>
            </ul>
        </div>
    )
}

export default MoviesStatistics;

