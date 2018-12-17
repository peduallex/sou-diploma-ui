import React from 'react';
import './style.scss';
import email from '../../assets/imgs/enviar.svg';

const BtnEmail = () => {
  return (
    <div>
      <a href="mail">
        <img className="mail" src={email} />
      </a>
    </div>
  );
};

export default BtnEmail;
