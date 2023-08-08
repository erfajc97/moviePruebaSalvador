import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Movies = ({ movies }) => {
  return (
    <div className="w-full mt-5 ">
      <ul className=" grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 ">
        {movies.map(movie => (
          <Link key={movie.imdbID} to={`/movieDetail `}>
            <li className="flex flex-col justify-center items-center">
              <p className="text-white text-center font-semibold border-2 border-solid bg-black p-2 rounded-lg w-40 ">
                {' '}
                {movie.Title}{' '}
              </p>
              <p className="text-white font-bold mb-2"> {movie.Year} </p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
