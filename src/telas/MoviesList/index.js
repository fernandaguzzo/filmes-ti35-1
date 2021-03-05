import React from 'react';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import { useEffect, useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const loadingMovies = async () => {
    const response = await api.get(`/?apikey=925eba28&s=${search}`);
    setMovies([]);
    if (response.data.Search)
      setMovies(response['data'].Search);
  }

  useEffect(() => {
    loadingMovies();
  }, [search]);

  return (
    <>
      <h1>Lista de Filmes</h1>
      <div>
        <label htmlFor="search">Pesquisar:</label>
        <input
          id="search"
          name="search"
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
      </div>
      <ul>
        {movies.map(m => {
          return (
            <li key={m.imdbID}>
              <MovieCard
                cover={m.Poster}
                title={m.Title}
                release={m.Year}
                type={m.Type}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};


export default MovieList;