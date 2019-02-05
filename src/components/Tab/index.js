import React, { Component } from 'react';
import Search from '../../components/Search';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Open from '../../../src/services/OpenProcessApi';

class Table extends Component {
  state = {
    courses: [],
    search: '',
    activePage: 1,
    countPerPage: 5
  };
  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  async componentDidMount() {
    const res = await Open.get('v_em_aberto');
    this.setState({ courses: res.data });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleClick = academic_register => {
    this.props.history.push(`/registration/${academic_register}`);
  };

  render() {
    return (
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
                Numero do <br />
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
                    this.state.countPerPage * (this.state.activePage - 1) &&
                  index < this.state.countPerPage * this.state.activePage
              )
              .map(data => (
                <tr>
                  <td onClick={() => this.handleClick(data.academic_register)}>
                    {data.name}
                  </td>
                  <td onClick={() => this.handleClick(data.academic_register)}>
                    {data.academic_register}
                  </td>
                  <td onClick={() => this.handleClick(data.academic_register)}>
                    {data.polo}
                  </td>
                  <td onClick={() => this.handleClick(data.academic_register)}>
                    {data.year_entry}
                  </td>
                  <td onClick={() => this.handleClick(data.academic_register)}>
                    {data.year_conclusion}
                  </td>
                  <td>&nbsp;</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <div className="float-right">
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
        </div> */}
      </fieldset>
    );
  }
}

export default Table;
