import React from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Search from '../../components/Search';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

const Process = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Nome do Curso - 1º VIA </h2>

        <br />

        <fieldset>
          <nav id="menu">
            <ul>
              <li>
                <a className="link1 active" href="#">
                  Processos em aberto
                </a>
              </li>
              {/*<li>
                <a>Alunos habilitados</a>
              </li>*/}
            </ul>
          </nav>
        </fieldset>
        <fieldset>
          <div class="row top">
            <div className="col-md-5">
              <Search />
            </div>
            {/*<div className="col-md-7">
              <div className="right" /> <Dowloand />
  </div>*/}
          </div>
          <table className="table table-hover borda-tabela-titulos table2">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">RA</th>
                <th scope="col">Curso</th>
                <th scope="col">
                  Semestre / <br /> Ano de Ingresso
                </th>
                <th scope="col">
                  Semestre / <br /> de Conclusão
                </th>
                <th scope="col">Atribuido em</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
              </tr>
            </tbody>
          </table>
        </fieldset>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="float-right">
              <a className="selecionar" href="tg">
                SELECIONAR
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Process;
