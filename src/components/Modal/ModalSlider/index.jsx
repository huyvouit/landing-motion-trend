import React, { useState, useEffect } from 'react';
import ytsApi from '../../../api/yts';
import Icons from '../../../assets/icons';

import Images from '../../../assets/images';
import MovieCard from '../../MovieCard';

import './styles.scss';
const VideoSlider = (props) => {
  const [listMovie, setListMovie] = useState([]);
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const fetchMovieList = async () => {
    try {
      const res = await ytsApi.getMoviesList({ page: 1, limit: 8, genre: 'action' });
      if (res.status === 'ok') {
        setListMovie(res.data.movies);
      }
    } catch (error) {
      console.log('error to get data list', error);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  console.log(listMovie);
  return (
    // <div className="modal-grid">
    <div id="main-slider-container1">
      <div id="slider">
        {listMovie.map((item, index) => {
          return (
            <div className="slider-card1" key={index}>
              <MovieCard {...item} />
            </div>
          );
        })}
      </div>
      <img
        src={Icons.IconChervonRight}
        className="slider-icon right"
        onClick={slideLeft}
        alt="chervon-right"
      />
    </div>
    // </div>
  );
};

const ModalVideo = () => {
  return (
    <div className="modal-video">
      <div className="information">
        <img src={Images.Profile} alt="profile" className="profile" />
        <p className="info-name">Kim Aeyong</p>
      </div>
      <VideoSlider />
    </div>
  );
};

export default ModalVideo;
