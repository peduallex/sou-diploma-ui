import React from 'react';

const Menu = () => {
  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <a href="#">Alunos Auditados</a>
          </li>
          <li>
            <a className="link1 active">Habilitados</a>
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
