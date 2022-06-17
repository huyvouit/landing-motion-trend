import React from 'react';
import Images from '../../assets/images';
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
      <div className="slider-icon left">
        <img src={Images.ChervonRight} onClick={slideRight} alt="chervon-right" />
      </div>
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div className="slider-card" key={index} onClick={() => setSelectedTab(index)}>
              <button
                className="slider-main"
                style={{ backgroundColor: selectedTab === index ? '#ff2e43' : '#070707' }}
              >
                <p className="slider-card-title">{slide.title}</p>
              </button>
            </div>
          );
        })}
      </div>
      <img
        src={Images.ChervonRight}
        className="slider-icon right"
        onClick={slideLeft}
        alt="chervon-right"
      />
    </div>
  );
};
export default CardSlider;