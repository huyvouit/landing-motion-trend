import React from 'react';
import Images from '../../../assets/images';
import Icons from '../../../assets/icons';
import Button from '../../Button';

import './styles.scss';

const ModalInfo = () => {
  return (
    <div className="modal-info">
      <div className="info-left">
        <img src={Images.Profile} alt="avatar" className="profile" />
      </div>
      <div className="info-detail">
        <p className="text">The first portfolio movement.</p>
        <div className="subText">
          <p className="name">Kim Aeyong</p>
          <p className="type">Design, Music Video, Advertising</p>
        </div>
        <div className="button-list">
          <div className="button-left">
            <Button
              style={{ backgroundColor: '#fff', width: 140, height: 38, border: '1px solid black' }}
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
                <img src={Icons.IconUser2} alt="love" />
                <p className="text">Follow</p>
              </div>
            </Button>
            <Button style={{ backgroundColor: '#070707', width: 142 }}>
              <div className="text-button">
                <img src={Icons.IconAdd} alt="love" />
                <p className="text">Add</p>
              </div>
            </Button>
          </div>
          <Button
            style={{
              backgroundColor: '#fff',
              width: 140,
              height: 38,
              border: '1px solid black',
            }}
          >
            <p className="edit">Edit Project</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
