import React from 'react';

const Menu = () => {
  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <a className="link1 active" href="#">
              Alunos Auditados
            </a>
          </li>
          <li>
            <a>Habilitados</a>
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
