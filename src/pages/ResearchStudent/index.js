import React from 'react';
import './style.scss';

const ResearchStudent = () => {
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
              <tr>
                <td>Engenharia de Produção</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>Engenharia de Produção</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>Engenharia de Produção</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>Engenharia de Produção</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>Engenharia de Produção</td>
                <td>xxxx</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
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
};

export default ResearchStudent;
