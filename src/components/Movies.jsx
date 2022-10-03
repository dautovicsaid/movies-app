import React, {useState} from 'react';
import FindMovie from "./FindMovie";
import MoviesList from "./MoviesList";
import MoviesStatistics from "./MoviesStatistics";

const Movie = () => {
    const [displayComponent, setDisplayComponent] = useState(<MoviesList/>);

    return <div className="container">
        <div className="row mt-5">
            <div className="col-2 offset-3">
                <button onClick={() => setDisplayComponent(<MoviesList/>)}
                        className="btn btn-lg btn-outline-primary col-8">List
                </button>
            </div>
            <div className="col-2">
                <button onClick={() => setDisplayComponent(<MoviesStatistics/>)}
                        className="btn btn-lg btn-outline-primary col-8">Statistics
                </button>
            </div>
            <div className="col-2">
                <button onClick={() => setDisplayComponent(<FindMovie/>)}
                        className="btn btn-lg btn-outline-primary col-8">Search
                </button>
            </div>
        </div>
        <div className="row mt-5">
            {displayComponent}
        </div>
    </div>;
}

export default Movie;