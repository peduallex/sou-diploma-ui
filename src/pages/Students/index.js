import React, { Component } from 'react';
import './style.scss';
import Pagination from 'react-js-pagination';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import ButtonSearch from '../../components/BtnSearch';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

class Students extends Component {
  state = {
    courses: [],
    search: '',
    activePage: 1,
    countPerPage: 5,
    tab: 0,
    coursesAuditados: [],
    coursesRetidos : [],
    coursesDiplomado : []
  };

  //chamadas students
  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  async componentDidMount() {

    try {
      const res = await Open.get('v_em_aberto');
      this.setState({
        courses: res.data
      });
    } catch (e) {
      if (/404/.test(e)) {
        alert('Error 404');
      }
    }

    try {

       const resAuditados = await Open.get('v_auditados')

      this.setState({
         coursesAuditados: resAuditados.data
      });
    } catch (e) {
      if (/404/.test(e)) {
        alert('Error 404');
      }
    }

    try {

       const resDiplomado = await Open.get('v_diplomado');

      this.setState({
        coursesDiplomado : resDiplomado.data
      });
    } catch (e) {
      if (/404/.test(e)) {
        alert('Error 404');
      }
    }

    try {

      const resRetidos = await Open.get('v_retidos');

      this.setState({
         coursesRetidos :resRetidos.data
      });
    } catch (e) {
      if (/404/.test(e)) {
        alert('Error 404');
      } else {
        alert('Error 500')
      }
    }
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleClickData = academic_register => {
    this.props.history.push(`/registration/${academic_register}`);
  };

  handleClickPrint = ra_student => {
    this.props.history.push(`/print/${ra_student}`);
  };

  handleClickDiploma = academic_register => {
    this.props.history.push(`/studentdiploma/${academic_register}`);
  };

  handleClickSeconday = academic_register => {
    this.props.history.push(`/secondway/${academic_register}`);
  };

  render() {
    return (
      <Tabs
        defaultTab="one"
        onChange={tabId => {
          console.log(tabId);
        }}
      >
        <TabPanel tabId="one">
          <div className="container">
            <h2 className="title">Nome do Curso - 1º VIA</h2>
            <fieldset>
              <Menu />
            </fieldset>
            <fieldset>
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
                    <th scope="col">
                      Atribuido em
                    </th>
                    <th scope="col">
                      Numero do
                      Processo
                    </th>
                    <th scope="col" />
                  </tr>
                </thead>
                 <tbody>
                  {this.state.courses
                    .filter(data => RegExp(this.state.search).test(data.name))
                    .filter(
                      (data, index) =>
                        index >=
                          this.state.countPerPage *
                            (this.state.activePage - 1) &&
                        index < this.state.countPerPage * this.state.activePage
                    )
                    .map(data => (
                      <tr onClick={() =>this.handleClickData(data.academic_register)}>
                      <td>
                          {data.name}
                      </td>
                        <td>
                          {data.academic_register}
                        </td>

                        <td>
                          {data.polo}
                        </td>

                        <td>
                          {data.year_entry}
                        </td>

                        <td>
                          {data.year_conclusion}
                        </td>

                        <td>
                          {data.data_atribuicao}
                        </td>
                        <td/>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link link-cor"
                  />
                </div>
              </div>
            </fieldset>
            <br />
            {/* <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar" href="tg">
                  VISUALIZAR
                </a>
              </div>
            </div>
          </div> */}
          </div>
        </TabPanel>

        {/* the end table one */}

        <TabPanel tabId="two">
          <div className="container">
            <h2 className="title">Nome do Curso - 1º VIA</h2>
            <fieldset>
              <Menu />
            </fieldset>
            <fieldset>
              <div className="row">
                <div className="col-md-6">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="defaultChecked2"
                    />
                    <label class="custom-control-label" for="defaultChecked2">
                  Selecionar Todos
  </label>
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
                  {
                    this.state.coursesAuditados

                     .filter(data => RegExp(this.state.search).test(data.name))
                     .filter(
                       (data, index) =>
                         index >=
                           this.state.countPerPage * (this.state.activePage - 1) &&
                         index < this.state.countPerPage * this.state.activePage
                     )
                     .map(data => (
                       <tr>
                         <td>{data.student_name}</td>
                         <td>{data.ra_student}</td>
                         <td>{data.course_name}</td>
                         <td>{data.year_entry}</td>
                         <td>{data.year_conclusion}</td>
                     <td>
                       <ButtonSearch id={data.ra_student} />
                    </td>
                     </tr>

                  ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            </fieldset>
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="float-right">
                  <a className="selecionar" onClick={() => this.handleClickDiploma(this.props.match.params.academic_register)}>IMPRIMIR</a>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* the end table two */}

        <TabPanel tabId="three">
          <div className="container">
            <h2 className="title">Nome do Curso - 1º VIA</h2>
            <fieldset>
              <Menu />
            </fieldset>
            <fieldset>
              {/* <div class="row">
              <div className="col-md-4">
                <Search />
              </div>
              <div className="col-md-7">
              <div className="right" /> <Dowloand />
             </div>
            </div> */}
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
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">Motivo da Retenção</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {this.state.coursesRetidos
                    //  .filter(item => RegExp(search, 'i').test(item.student_name))
                     .filter(
                      (data, index) =>
                         index >=
                           this.state.countPerPage * (this.state.activePage - 1) &&
                         index < this.state.countPerPage * this.state.activePage
                     )
                     .map(data => (
                       <tr onClick={() => this.handleClick(data.ra_student)}>
                       <td>{data.student_name}</td>
                         <td>{data.ra_student}</td>
                         <td>{data.course_name}</td>
                         <td>{data.year_entry}</td>
                         <td>{data.year_conclusion}</td>
                         <td>{data.status}</td>
                         <td>{data.reason_retention}</td>
                       </tr>
                     ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
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
        </TabPanel>

        {/* the end table three */}

        <TabPanel tabId="for">
          <div className="container">
            <h2 className="title">Nome do Curso - 1º VIA</h2>
            <fieldset>
              <Menu />
            </fieldset>
            <fieldset>
              <div className="row top">
                <div className="col-md-4">{/* <Search /> */}</div>
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
                  {this.state.coursesDiplomado
                    .filter(
                      (data, index) =>
                        index >=
                          this.state.countPerPage *
                            (this.state.activePage - 1) &&
                        index < this.state.countPerPage * this.state.activePage
                    )
                    .map(data => (
                      <tr
                        onClick={() => this. handleClickSeconday(data.academic_register)}
                      >
                      <td>{data.student_name}</td>
                      <td>{data.academic_register}</td>
                      <td>{data.year_entry}</td>
                      <td>{data.year_conclusion}</td>
                      <td>{data.status}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="float-right">
                <div className="padding">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.courses.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            </fieldset>
            <br />
            {/* <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                <a className="selecionar" href="tg">
                  VISUALIZAR
                </a>
              </div>
            </div>
          </div> */}
          </div>
        </TabPanel>

      </Tabs>
    );
  }
}

export default Students;
