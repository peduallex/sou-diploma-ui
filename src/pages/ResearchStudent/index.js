import React, { Component } from 'react';
import api from '../../../src/services/diplomaApi';
import './style.scss';

class Audit extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const res = await api.get('v_habilitados');
    this.setState({ courses: res.data });
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="col-md-9 border center">
            <div className="text-center">
              <h5>
                Selecione o curso de GRADUAÇÃO E ANO DE INGRESSO que deseja
                acessar:
              </h5>
            </div>
            <div class="row">
              <div className="col-md-5 center">
                <div className="text-center">
                  <form action="fs" method="post">
                    <div class="submit-line">
                      <input
                        placeholder="Pesquise curso ou ano de ingresso"
                        type="text"
                      />
                      <button class="submit-lente" type="submit">
                        <i class="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <table className="table table-hover borda-tabela-titulos">
              <thead>
                <tr>
                  <th scope="col">Nome do Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano do Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> Ano de Conclusão
                  </th>
                  <th scope="col">
                    Numeros de <br />
                    Alunos Habilitados
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.courses.map(data => (
                  <tr>
                    <td>{data.name_course}</td>
                    <td>{data.course_id}</td>
                    <td>{data.year_entry}</td>
                    <td>{data._count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <div className="container">
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
      </div>
    );
  }
}

export default Audit;
