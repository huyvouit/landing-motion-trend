import React from 'react';

import Images from '../../assets/images';
import Icons from '../../assets/icons';

import './styles.scss';

const CardSlider = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(4);
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <div className="slider-icon1 left1">
        <img src={Icons.IconChervonLeft} onClick={slideRight} alt="chervon-right" />
      </div>
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index} onClick={() => setSelectedTab(index)}>
              <button
                className="slider-main"
                style={{ backgroundColor: selectedTab === index ? '#ff2e43' : '#070707' }}
              >
                {slide.title}
                {/* <p className="slider-card-title"></p> */}
              </button>
            </div>
          );
        })}
      </div>

      <img
        src={Images.ChervonRight}
        className="slider-icon right1"
        onClick={slideLeft}
        alt="chervon-right"
      />
    </div>
  );
};
export default CardSlider;
