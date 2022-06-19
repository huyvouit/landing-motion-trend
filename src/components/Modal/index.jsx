import React, { useContext } from 'react';
import { PopUpContext } from '../../context/popup_provider';

import Icons from '../../assets/icons';
import './styles.scss';
import ModalInfo from './ModalInfo';
import ModalImage from './Modalmage';
import ModalVideo from './ModalSlider';
import ModalComment from './ModalComment';
import ModalDetail from './ModalDetail';

const MENU = [
  {
    icon: Icons.IconCopy,
    value: 'page',
  },
  {
    icon: Icons.IconLike,
    value: 'Like',
  },
  {
    icon: Icons.IconAdd2,
    value: 'Add',
  },
  {
    icon: Icons.IconShare,
    value: 'share',
  },
];

const Modal = () => {
  const { showPopUp, closePopUp } = useContext(PopUpContext);
  return (
    <div
      className="modal"
      style={{
        transform: showPopUp ? 'translate(-50%, 0vh)' : 'translate(-50%,-1000px)',
        opacity: showPopUp ? '1' : '0',
      }}
    >
      <div onClick={closePopUp} className="close">
        <img src={Icons.IconClose} alt="close" />
      </div>
      <div className="modal-menu">
        {MENU.map((item, index) => {
          return (
            <div className="item">
              <img src={item.icon} alt={item.value} />
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
      <div className="modal-wrapper">
        <div className="left-icon">
          <img src={Icons.IconLeft} alt="left" />
        </div>
        <div className="modal-content">
          <img src={Icons.IconTZ} alt="tz" className="icon-tz" />
          <img src={Icons.IconTZ} alt="tz" className="icon-tz-2" />
          <ModalInfo />
          <ModalImage />
          <ModalVideo />
          <div className="modal-footer">
            <ModalComment />
            <ModalDetail />
          </div>
        </div>
        <div className="right-icon">
          <img src={Icons.IconRight} alt="right" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
