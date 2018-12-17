import React from 'react';
import excel from '../../assets/imgs/excel.jpg';
import pdf from '../../assets/imgs/pdf.jpg';

const Dowloand = () => {
  return (
    <div>
      <a href="save">
        <img className="float-right" src={pdf} />
      </a>
      <a href="save">
        <img className="float-right" src={excel} />
      </a>
    </div>
  );
};

export default Dowloand;
