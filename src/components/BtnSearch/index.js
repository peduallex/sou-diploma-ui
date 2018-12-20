import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSearch from '../../assets/imgs/btnsearch.png';

const BtnSearch = ({ id }) => {
  return (
    <div>
      <Link to={`/diploma/${id}`}>
        <img src={ButtonSearch} />
      </Link>
    </div>
  );
};

export default BtnSearch;
