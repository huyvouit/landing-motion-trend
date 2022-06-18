import React from 'react';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Button from '../Button';
import TutorialItem from '../TutorialItem';

import './styles.scss';

const Tutorial = () => {
  return (
    <div className="tutorial">
      <div className="tutorial-wrapper">
        <div className="tutorial-intro">
          <p className="title">Tutorial</p>
          <div className="description">
            <p>Let's look at 7 ways to use motion trend more effectively in the first tutorial.</p>
          </div>
          <Button style={{ backgroundColor: '#070707', width: 162 }}>
            <p className="button-text">Watch now</p>
          </Button>
        </div>

        <div className="tutorial-video" style={{ backgroundImage: `url(${Images.BgVideo})` }}>
          <img src={Icons.IconLive} alt="live" className="icon-live" />
          <img src={Icons.IconPlay} alt="live" className="icon-play" />
          <div className="video-time">
            <p className="video-time-text">2:33</p>
          </div>
        </div>

        <div className="tutorial-list">
          {[...Array(3)].map((item, index) => (
            <TutorialItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
