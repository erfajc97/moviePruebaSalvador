import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movieDetail, setMovielDetail] = useState({});
  const { id } = useParams();
  function getFetch() {
    const MOVIES_URL = `https://www.omdbapi.com/?i=tt10857164&apikey=4cfc7abc`;
    axios.get(MOVIES_URL).then(res => setMovielDetail(res.data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="w-full bg-slate-500 min-h-screen flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-bold mb-2 text-xl">
          {' '}
          {movieDetail.Title}{' '}
        </h3>
        <h4 className="mb-2 font-bold text-white"> {movieDetail.Year} </h4>
        <img src={movieDetail.Poster} alt="" />

        <p className="text-white p-2 text-center"> {movieDetail.Plot} </p>
      </div>
    </div>
  );
};

export default MovieDetail;
