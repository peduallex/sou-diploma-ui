import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Search from '../../components/Search';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

class Process extends Component {
  state = {
    courses: [],
    search: ''
  };

  async componentDidMount() {
    const res = await Open.get('v_em_aberto');
    this.setState({ courses: res.data });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
    //console.log(this.state.search)
  };

  render() {
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
                {this.state.courses
                  .filter(data => RegExp(this.state.search).test(data.name))
                  .map(data => (
                    <tr>
                      <td>
                        <img className="circle" src={user} alt="" /> {data.name}
                      </td>
                      <td>{data.academic_register}</td>
                      <td>{data.polo}</td>
                      <td>{data.year_entry}</td>
                      <td>{data.year_conclusion}</td>
                      <td>xxxxxxx</td>
                    </tr>
                  ))}
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
  }
}

export default Process;
