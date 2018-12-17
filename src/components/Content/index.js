import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jumbotron from '../Jumbotron';
import Audit from '../../pages/Audit';
import Students from '../../pages/Students';
import Process from '../../pages/Process';
import Enabled from '../../pages/Enabled';
import Print from '../../pages/Print';
import StudentDiploma from '../../pages/StudentDiploma';
import SecondWay from '../../pages/SecondWay';
import Retained from '../../pages/Retained';

import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';

const links = [
  {
    name: 'Auditoria',
    active: true,
    url: '/'
  },
  {
    name: 'Colação de Grau',
    active: false,
    url: '/colocao'
  },
  {
    name: 'Diplomas',
    active: false,
    url: '/diplomas'
  },
  {
    name: 'Estágios',
    active: false,
    url: '/estagio'
  },
  {
    name: 'Ingresso',
    active: false,
    url: '/admission'
  },
  {
    name: 'Vida Acadêmica',
    active: false,
    url: '/academic'
  },
  {
    name: 'Prontuário',
    active: false,
    url: '/report'
  }
];

const Content = () => (
  <Fragment>
    <Jumbotron title="Apoio ao aluno" icon={Avaliations} links={links} />
    <Main>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={({ match: { url } }) => (
              <Fragment>
                <Route exact path={`${url}`} component={Audit} />
                <Route path={`/students`} component={Students} />
                <Route path={`/process`} component={Process} />
                <Route path={`/enabled`} component={Enabled} />
                <Route path={`/print`} component={Print} />
                <Route path={`/studentdiploma`} component={StudentDiploma} />
                <Route path={`/secondway`} component={SecondWay} />
                <Route path={`/retained`} component={Retained} />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Main>
  </Fragment>
);
export default Content;
