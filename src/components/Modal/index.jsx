import React, { useContext } from 'react';
import { PopUpContext } from '../../context/popup_provider';

import Icons from '../../assets/icons';
import './styles.scss';
import ModalInfo from './ModalInfo';

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
      <div className="modal-wrapper">
        <div className="left-icon">
          <img src={Icons.IconLeft} alt="left" />
        </div>
        <div className="modal-content">
          <img src={Icons.IconTZ} alt="tz" className="icon-tz" />
          <img src={Icons.IconTZ} alt="tz" className="icon-tz-2" />
          <ModalInfo />
        </div>
        <div className="right-icon">
          <img src={Icons.IconRight} alt="right" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
