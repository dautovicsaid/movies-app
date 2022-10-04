import React, {useEffect, useState} from 'react';
import {allMovies} from "../constants/movies";
import MovieCard from "./MovieCard";

const MoviesStatistics = () => {
    const [allMoviesCount,setAllMoviesCount] = useState();
    const [targetGenreCount, setTargetGenreCount] = useState();
    const [matchingYearCount, setMatchingYearCount] = useState();
    const [matchingYearRangeList, setMatchingYearRangeList] = useState([]);
    const [matchingGenreAndYearList, setMatchingGenreAndYearList] = useState([]);
    const [matchingYearLastMovie, setMatchingYearLastMovie] = useState();
    var matchingYearMovies = allMovies.filter(movie => movie.year === 2010);
    const [targetActorMovies, setTargetActorMovies] = useState([]);

    useEffect(() => {
        setAllMoviesCount(allMovies.length);
        setTargetGenreCount(allMovies.filter(movie => movie.genre === "Comedy").length);
        setMatchingYearCount(allMovies.filter(movie => movie.year === 2012).length);
        setMatchingYearRangeList(allMovies.filter(movie => movie.year >= 1990 && movie.year <= 1999));
        setMatchingGenreAndYearList(allMovies.filter(movie => movie.genre === "Drama" && movie.year > 2000));
        setMatchingYearLastMovie(matchingYearMovies[matchingYearMovies.length-1]);
        setTargetActorMovies(allMovies.filter(movie => movie.actors.includes("Leonardo DiCaprio")));
    }, []);

    return (
        <div className="col-8 offset-2">
            <p>Ukupan broj filmova: {allMoviesCount}</p>
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
                Poslednji film u listi iz 2010:
            </p>
            <div className="row row-cols-md-3 justify-content-center">
            {matchingYearLastMovie && <MovieCard
                name={matchingYearLastMovie.name}
                year={matchingYearLastMovie.year}
                genre={matchingYearLastMovie.genre}
                actors={matchingYearLastMovie.actors}
                coverImage={matchingYearLastMovie.coverImage}

            />}
            </div>
            <p className="my-3">Lista cover slika filmova u kojima glumi Leonardo DiCaprio:</p>
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

