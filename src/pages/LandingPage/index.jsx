import React from 'react';
import CardSlider from '../../components/CardSlider';

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

  return <CardSlider slides={SLIDES_LIST} />;
};

export default LandingPage;
