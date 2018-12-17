import React from 'react';
import './style.scss';

const Search = () => {
  return (
    <div>
      <form action="fs" method="post">
        <div class="submit-line">
          <input placeholder="Pesquise nome ou polo" type="text" />
          <button class="submit-lente" type="submit">
            <i class="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
