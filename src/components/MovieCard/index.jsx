import React from 'react';

import Icons from '../../assets/icons';
import Images from '../../assets/images';

import './styles.scss';

const MovieCard = (props) => {
  const { background_image_original, title, index, runtime } = props;

  return (
    <div className="movie-card">
      <div
        className="movie-card-image"
        style={{ backgroundImage: `url(${background_image_original})` }}
      >
        {index === 0 && <img src={Icons.IconTZ} alt="live" className="icon" />}
        <div className="info">
          <p className="info-title">{title}</p>
          <p className="info-time">{`${Math.floor(runtime / 60)}:${runtime % 60}`}</p>
        </div>
      </div>
      <div className="movie-card-auth">
        <div className="auth-left">
          <div className="auth-flex">
            <img src={Images.AvaAuthor} alt="avatar" style={{ width: 16, height: 16 }} />
            <p className="auth-name">Kim Aeyong</p>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-flex">
            <img src={Icons.IconLike} alt="like" />
            <p className="auth-name">18</p>
          </div>
          <div className="auth-flex">
            <img src={Icons.IconView} alt="view" />
            <p className="auth-name">18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
