import React from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import ButtonSearch from '../../components/BtnSearch';
import Menu from '../../components/Menu';
import BtnEmail from '../../components/BtnEmail';

const Enable = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Nome do Curso - 1º VIA</h2>
        <fieldset>
          <Menu />
        </fieldset>
        <fieldset>
          <div class="row">
            <div className="col-md-6">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked2"
                />
                {/*<label class="custom-control-label" for="defaultChecked2">
                  Selecionar Todos
  </label>*/}
              </div>
            </div>
            {/*<div className="col-md-6">
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
                <th scope="col" />
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
                <td>
                  <ButtonSearch />
                </td>
                <td>{/*<BtnEmail />*/}</td>
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
                <td>
                  <ButtonSearch />
                </td>
                <td>{/*<BtnEmail />*/}</td>
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
                <td>
                  <ButtonSearch />
                </td>
                <td>{/*<BtnEmail />*/}</td>
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
                <td>
                  <ButtonSearch />
                </td>
                <td>{/*<BtnEmail />*/}</td>
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
                <td>
                  <ButtonSearch />
                </td>
                <td>{/*<BtnEmail />*/}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="float-right">
              {/*<a className="selecionar" href="tg">
                IMPRIMIR
</a>*/}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Enable;
