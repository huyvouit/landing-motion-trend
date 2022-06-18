import React from 'react';
import Images from '../../assets/images';
import Icons from '../../assets/icons';
import './styles.scss';
const TutorialItem = () => {
  return (
    <div className="tutorial-item">
      <img src={Images.BgVideo} alt="video" className="image" />
      <div className="tutorial-info">
        <p className="text">Tutorial</p>
        <p className="description">
          A tutorial video with Motion Trend. Let's Learn Motion Trends.
        </p>
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

export default TutorialItem;
