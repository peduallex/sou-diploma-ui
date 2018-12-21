import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import Retaineds from '../../../src/services/RetainedApi';
class Retained extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const res = await Retaineds.get('v_auditados');
    this.setState({ courses: res.data });
  }

  handleClick = id => {
    this.props.history.push(`/generateticket/${id}`);
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
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col">Motivo da Retenção</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.courses.map(data => (
                  <tr onClick={() => this.handleClick(data.id)}>
                    <td>{data.student_name}</td>
                    <td>{data.ra_student}</td>
                    <td>{data.course_name}</td>
                    <td>{data.year_entry}</td>
                    <td>{data.year_conclusion}</td>
                    <td>{data.reason_retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                {/*<a className="selecionar" href="tg">
                ENVIAR E-MAIL
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

export default Retained;
