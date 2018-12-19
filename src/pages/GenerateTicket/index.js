import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import BtnDiploma from '../../components/BtnDiploma';
import Generate from '../../../src/services/generateticketApi';

class GenerateTicket extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const res = await Generate.get('v_diplomado');
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
          <h2 className="title">Nome do Curso - 1º VIA</h2>
          <fieldset>
            <Menu />
          </fieldset>
          <fieldset>
            <div class="row">
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
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th>Status</th>
                  <th />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.courses
                    .filter(data => RegExp(this.state.search).test(data.name))
                    .map(data => (
                      <tr>
                        <td>
                          <img className="circle" src={user} alt="" />
                          {data.student_name}
                        </td>
                        <td>{data.academic_registe}</td>
                        <td>{data.year_entry}</td>
                        <td>{data.year_conclusion}</td>
                        <td>{data.status}</td>
                        <td>
                          <Submit />
                        </td>
                      </tr>
                    ))}
                </tr>
              </tbody>
            </table>
          </fieldset>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                {/*<a className="selecionar" href="tg">
                 GERAR DIPLOMA
 </a>*/}
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default GenerateTicket;
