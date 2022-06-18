import React from 'react';
import Icons from '../../../assets/icons';
import Images from '../../../assets/images';
import Button from '../../Button';

import './styles.scss';

const LIST_IMAGE = [Images.Video2, Images.Video3, Images.Video4];
const INTERACTIVE = [
  {
    icon: Icons.IconLike,
    value: '1,688',
  },
  {
    icon: Icons.IconView,
    value: '18,178',
  },
  {
    icon: Icons.IconUser,
    value: '332',
  },
];
const ModalImage = () => {
  return (
    <div className="modal-list">
      <div className="video" style={{ backgroundImage: `url(${Images.Video1})` }}>
        <img src={Icons.IconPlay} alt="live" className="icon-play" />
      </div>
      <div className="modal-intro">
        <p className="text">{`Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is  my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.`}</p>
      </div>

      <dic className="list-image">
        {LIST_IMAGE.map((item, index) => (
          <img key={index} src={item} alt="movie" className="image" />
        ))}
      </dic>

      <dic className="portfolio">
        <p className="text">The first portfolio movement.</p>
        <div className="interactive">
          {INTERACTIVE.map((item, index) => {
            return (
              <div className="interactive-item" key={index}>
                <img src={item.icon} alt="like" />
                <p className="text-item">{item.value}</p>
              </div>
            );
          })}
        </div>
        <p className="sub-text">Publishing date : 2020.10.15</p>
        <div className="button-list">
          <Button
            style={{ backgroundColor: '#fff', width: 142, height: 38, border: '1px solid black' }}
          >
            <div className="text-button">
              <img src={Icons.IconLove} alt="love" style={{ width: 14, height: 14 }} />
              <p className="text" style={{ color: '#222222' }}>
                Like
              </p>
            </div>
          </Button>
          <Button style={{ backgroundColor: '#070707', width: 142 }}>
            <div className="text-button">
              <img src={Icons.IconAdd} alt="love" />
              <p className="text">Add</p>
            </div>
          </Button>
        </div>
      </dic>
    </div>
  );
};

export default ModalImage;
