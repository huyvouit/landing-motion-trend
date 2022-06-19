import React from 'react';
import Button from '../../Button';
import Icons from '../../../assets/icons';
import Images from '../../../assets/images';
import './styles.scss';

const LIST_COMMENT = [
  {
    id: 0,
    name: 'Kim Aeyong',
    date: '2020. 07. 26',
    content: `Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
        saturation.. love it!`,
  },
  {
    id: 1,
    name: 'Kim Jimin',
    date: '2020. 07. 26',
    content: `Amazing work you have here. feels like an alternative reality with that much saturation.. love it!`,
  },
  {
    id: 2,
    name: 'Im Junghan',
    date: '2020. 07. 26',
    content: `Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
    saturation.. love it!z`,
  },
  {
    id: 3,
    name: 'Cayley',
    date: '2020. 07. 26',
    content: `Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
        saturation.. love it!`,
  },
  {
    id: 4,
    name: 'Kim Aeyong',
    date: '2020. 07. 26',
    content: `Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
        saturation.. love it!`,
  },
];
const ModalComment = () => {
  return (
    <div className="modal-comment">
      <p className="modal-comment-title">Comments</p>
      <div className="modal-textInput">
        <input type={'text'} placeholder="Write a comment now......" />
        <Button style={{ backgroundColor: '#070707', width: 70 }}>
          <img src={Icons.IconComment} alt="comment" />
        </Button>
      </div>
      <div className="list-comment">
        {LIST_COMMENT.map((item, index) => {
          return <CommentItem key={index} info={item} index={index} />;
        })}
      </div>
      <Button
        style={{ backgroundColor: '#fff', width: '100%', height: 38, border: '1px solid black' }}
      >
        <div className="button-item">
          <p>More comments</p>
          <img src={Icons.IconComment2} alt="comment" />
        </div>
      </Button>
    </div>
  );
};

export default ModalComment;

const CommentItem = ({ info }) => {
  return (
    <div className="comment-item">
      <div className="comment-info">
        <img src={Images.Profile} alt="avatar" className="user" />
        <div className="user-text">
          <p>{info.name}</p>
          <p>{info.date}</p>
        </div>
      </div>
      <p className="comment-content">{info.content}</p>

      <img src={Icons.IconDelete} alt="delete" className="icon-delete" />
      <img src={Icons.IconReport} alt="report" className="icon-report" />
    </div>
  );
};
