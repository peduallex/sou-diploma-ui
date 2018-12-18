import React from 'react';

const Menu = () => {
  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <a href="#">Em Aberto</a>
          </li>
          <li>
            <a className="link1 active">Auditados</a>
          </li>
          <li>
            <a href="#">Retidos</a>
          </li>
          <li>
            <a href="#">Diplomados</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
