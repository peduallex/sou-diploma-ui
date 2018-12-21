import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

class Students extends Component {
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

  handleClick = id => {
    this.props.history.push(`/process/${id}`);
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
              <div className="col-md-6">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultChecked2"
                  />
                  {/* <label class="custom-control-label" for="defaultChecked2">
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
                  <th scope="col">Polo</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.courses
                  .filter(data => RegExp(this.state.search).test(data.name))
                  .map(data => (
                    <tr>
                      <td onClick={() => this.handleClick(data.id)}>
                        <img className="circle" src={user} alt="" /> {data.name}
                      </td>
                      <td onClick={() => this.handleClick(data.id)}>
                        {data.academic_register}
                      </td>
                      <td onClick={() => this.handleClick(data.id)}>
                        {data.polo}
                      </td>
                      <td onClick={() => this.handleClick(data.id)}>
                        {data.year_entry}
                      </td>
                      <td onClick={() => this.handleClick(data.id)}>
                        {data.year_conclusion}
                      </td>
                      <td>
                        <Submit />
                      </td>
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
                  VISUALIZAR
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

export default Students;
