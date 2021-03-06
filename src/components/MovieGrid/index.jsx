import React, { useState, useEffect } from 'react';
//support
import ytsApi from '../../api/yts';
//component
import MovieCard from '../MovieCard';
import Tutorial from '../Tutorial';

import './styles.scss';

const MovieGrid = () => {
  const [listMovie, setListMovie] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovieList = async (page) => {
    try {
      const res = await ytsApi.getMoviesList({ page, limit: 30, genre: 'action' });
      if (res.status === 'ok') {
        setListMovie([...listMovie, ...res.data.movies]);
      }
    } catch (error) {
      console.log('error to get data list', error);
    }
  };

  const handleLoadMore = () => {
    fetchMovieList(page + 1);
    setPage(page + 1);
  };
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      handleLoadMore();
    }
  };
  useEffect(() => {
    fetchMovieList(page);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
    <div className="movie-list">
      <div className="movie-grid">
        {listMovie.slice(0, 25).map((item, index) => {
          return <MovieCard key={index} {...item} index={index} />;
        })}
      </div>
      <Tutorial />
      <div className="movie-grid">
        {listMovie.slice(25).map((item, index) => {
          return <MovieCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default MovieGrid;
