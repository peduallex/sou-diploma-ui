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
                ANDREA GONÇALVES MARIANO SOUZA (2 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                CAIO GUILHERME SOARES FERNANDES (1 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                GENIVALDO LINHARES BRANDÃO (4 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                HAROLDO FELIPPE AVELLAR (2 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                LEILA MIGUELINA APARECIDA COSTA SOMENK (2 processos)
              </a>
            </li>
            <li className="li">
              <a className="a" href="r">
                MARCIO ROCHA DE PINHO (2 processos)
              </a>
            </li>
          </ul>
        </div>
      </Popup>
    </div>
  );
};

export default Submit;
