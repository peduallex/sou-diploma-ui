import React, { Component } from 'react';

import './style.scss';

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
];
class LayoutDiploma extends Component {
  render() {
    const { diploma, signatures, employees } = this.props;
    return (
      <div id="diploma">
        <div class="content">
          <p class="paragraph">
            A presidente da{' '}
            <span>Universidade Virtual do Estado de São Paulo</span>,
          </p>
          <p class="paragraph -marginBottom">
            no uso de suas atribuições, confere a
          </p>
          <h1 id="name">{diploma.name}</h1>
          <p class="paragraph">de nacionalidade {diploma.nacionalidade},</p>
          <p class="paragraph">
            portador da cédula de identidade RG {diploma.RG} SP,
          </p>
          <p class="paragraph">
            nascido em{' '}
            {diploma['birth_date'] ? diploma['birth_date'].split('/')[0] : ''}{' '}
            de{' '}
            {diploma['birth_date']
              ? months[Number(diploma['birth_date'].split('/')[1]) - 1]
              : ''}{' '}
            de{' '}
            {diploma['birth_date'] ? diploma['birth_date'].split('/')[2] : ''}
          </p>
          <p class="paragraph">e natural do Estado de São Paulo,</p>
          <p class="paragraph">o diploma do</p>
          <h2 id="course">{diploma['course_name']}</h2>
          <p class="paragraph">
            concluído em{' '}
            {diploma['date_conclusion']
              ? months[Number(diploma['date_conclusion'].split('/')[1]) - 1]
              : ''}{' '}
            de{' '}
            {diploma['date_conclusion']
              ? diploma['date_conclusion'].split('/')[2]
              : ''}
          </p>
          <p class="paragraph -marginBottom">
            para que possa gozar dos direitos e prerrogativas legais.
          </p>
          <p class="paragraph">
            São Paulo, {new Date().getDate()} de {months[new Date().getMonth()]}{' '}
            de {new Date().getFullYear()}.
          </p>
        </div>
        <div class="signatures">
          <p class="signature">
            {employees[0]} <span>{signatures[0]}</span>
          </p>
          <p class="signature">
            {employees[1]} <span>{signatures[1]}</span>
          </p>
          <p class="signature">
            <span>Diplomado(a)</span>{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default LayoutDiploma;
