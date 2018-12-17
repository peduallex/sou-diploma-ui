import React from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';

const Students = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Nome do Curso - 1º VIA</h2>
        <fieldset>
          <Menu />
        </fieldset>
        <fieldset>
          <div class="row">
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-7">
              <div className="right" /> <Dowloand />
            </div>
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
                <th>Status</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="circle" src={user} alt="" /> Engenharia de
                  Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>

                <td>
                  <BtnEmail />
                  <button hidden id="button2">
                    Botão 2
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} alt="" /> Engenharia de
                  Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>

                <td>
                  <BtnEmail />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} alt="" /> Engenharia de
                  Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>

                <td>
                  <BtnEmail />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} alt="" /> Engenharia de
                  Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>

                <td>
                  <BtnEmail />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="circle" src={user} alt="" /> Engenharia de
                  Produção
                </td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>

                <td>xxxx</td>
                <td>
                  <BtnEmail />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="float-right">
              <a className="selecionar" href="tg">
                GERAR DIPLOMA
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Students;
