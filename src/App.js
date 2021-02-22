import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import api from './services/api';

const App = () => {
  const [movies, setMovies] = useState([]);

  const loadingMovies = async () => {
    const response = await api.get('/');
    setMovies(response['data'].Search);
  }
  
  useEffect(() => {
    loadingMovies();
  },[]);

  return (
    <>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map(m => {
          return(
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

export default App;
