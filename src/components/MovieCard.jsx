import React from 'react';

const MovieCard = ({name, year, genre, actors,coverImage}) => {
    return (
        <div className="col">
            <div className="card" style={{height:600}}>
                <img src={coverImage}
                     className="card-img-top img-fluid" alt="..." style={{objectFit: "contain"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="row">
                        <div className="col-4 offset-2">
                            {genre}
                        </div>
                        <div className="col-4">
                            {year}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <p>
                            {actors.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;

