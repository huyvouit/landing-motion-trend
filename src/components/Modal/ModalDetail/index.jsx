import React from 'react';
import Images from '../../../assets/images';
import Icons from '../../../assets/icons';

import './styles.scss';
import Button from '../../Button';

const INTERACTIVE = [
  {
    icon: Icons.IconLike,
    value: '18',
  },
  {
    icon: Icons.IconView,
    value: '18',
  },
  {
    icon: Icons.IconMess,
    value: '18',
  },
];

const IMAGE = [Images.Pre, Images.PhotoShop, Images.Ill];

const PROPS = [
  'Editing',
  'Camera action, Angle',
  'Sound, Beat',
  'Graphical',
  'Experimental',
  'Editing',
];
const ModalDetail = () => {
  return (
    <div className="modal-detail">
      <div className="modal-owner">
        <p className="owner-text">Owner</p>
        <div className="owner-info">
          <img src={Images.Profile} alt="avatar" className="user" />
          <div className="user-text">
            <p>Kim Aeyong</p>
            <div className="sub-text">
              <img src={Icons.IconPin} alt="pin" />
              <p>Korea, Republic of</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-port">
        <p className="port-text">The first portfolio movement.</p>
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
        <p className="port-text-2">Publishing date : 2020.10.15</p>
      </div>
      <div className="modal-port">
        <p className="create-text">Creative field</p>
        <div className="interactive-2">
          {IMAGE.map((item, index) => {
            return <img src={item} alt="like" className="img" />;
          })}
        </div>
      </div>
      <div className="modal-port">
        <div className="list-props">
          {PROPS.map((item, index) => {
            return <div className="props-item">{item}</div>;
          })}
        </div>
      </div>
      <div className="modal-report">
        <button
          className="button-report"
          //   style={{ backgroundColor: '#fff', width: 339, height: 38, border: '1px solid black' }}
        >
          <div className="button-item">
            <img src={Icons.IconReport} alt="report" />
            <p>Report</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModalDetail;
