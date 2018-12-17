import React from 'react';
import Popup from 'reactjs-popup';
import './style.scss';

const Submit = () => {
  return (
    <div>
      <Popup trigger={<button> Atribuir</button>} position="left center">
        <div>
          <ul className="ul">
            <li className="li">
              <a className="a" href="r">
                Nome Sobrenome (2 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                Nome Sobrenome (1 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                Nome Sobrenome (4 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                Nome Sobrenome (2 processos)
              </a>
            </li>
          </ul>
        </div>
      </Popup>
    </div>
  );
};

export default Submit;
