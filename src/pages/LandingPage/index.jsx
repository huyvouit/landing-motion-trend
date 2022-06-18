import React from 'react';
import ytsApi from '../../api/yts';
import CardSlider from '../../components/CardSlider';
import MovieCard from '../../components/MovieCard';
import MovieCategory from '../../components/MovieCategory';
import MovieGrid from '../../components/MovieGrid';
import './styles.scss';

const LandingPage = () => {
  const sliderClick = (slider) => {
    alert('hello world');
  };

  const SLIDES_LIST = [
    { title: 'Theme' },
    { title: 'Editing' },
    { title: 'Camera Action, Angle' },
    { title: 'Sound, Beat' },
    { title: 'Experimental' },
    { title: 'Elements' },
    { title: 'Car' },
    { title: 'Sound, Beat' },
    { title: 'Gun' },
    { title: 'Doll' },
  ];

  return (
    <main className="wrapper-main">
      <CardSlider slides={SLIDES_LIST} />
      <MovieCategory />
      <MovieGrid />
    </main>
  );
};

export default LandingPage;
