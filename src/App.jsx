import React, { useEffect, useState } from 'react';
import Movies from './Pages/Movies';
import withResults from './mocks/withresults.json';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('');
  const [prev, setPrev] = useState([]);

  function getFetch() {
    const MOVIES_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=4cfc7abc&s=${search}`;
    axios.get(MOVIES_URL).then(res => setPrev(res.data.Search));
  }
  useEffect(() => {
    if (search === '') {
      axios
        .get(`https://www.omdbapi.com/?i=tt3896198&apikey=4cfc7abc&s=Marvel`)
        .then(res => setPrev(res.data.Search));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    getFetch();
  };

  return (
    <div className="bg-slate-600 min-h-screen w-full">
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-4xl pt-5 text-white ">
          {' '}
          Search a Movie{' '}
        </h1>
        <form onSubmit={handleSubmit} className="mt-3">
          <input
            className="rounded-lg p-2  "
            placeholder="Marvel, Matrix, Barbie..."
            type="text"
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2  hover:bg-slate-500 border-2 border-solid p-2 rounded-lg text-white font-bold"
          >
            {' '}
            Search{' '}
          </button>
        </form>
      </header>
      <main>
        <Movies movies={prev} />
      </main>
    </div>
  );
};

export default App;
