import React from 'react';
import './styles.scss';

const Button = (props) => {
  const { children, ...other } = props;
  return (
    <div className="button-primary" {...other}>
      {children}
    </div>
  );
};

export default Button;
