import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Jumbotron from '../Jumbotron';
import Students from '../../pages/Students';
import Process from '../../pages/Process';
import Enabled from '../../pages/Enabled';
import Print from '../../pages/Print';
import RegistrationData from '../../pages/RegistrationData';
import StudentDiploma from '../../pages/StudentDiploma';
import SecondWay from '../../pages/SecondWay';
import Retained from '../../pages/Retained';
import GenerateTicket from '../../pages/GenerateTicket';
import Protocol from '../../pages/Protocol';
import ResearchStudent from '../../pages/ResearchStudent';
import Diploma from '../../pages/Diploma';

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
                <Route exact path={`${url}`} component={ResearchStudent} />
                <Route path={`/students`} component={Students} />
                <Route path={`/process`} component={Process} />
                <Route path={`/enabled`} component={Enabled} />
                <Route path={`/print`} component={Print} />
                <Route path={`/registration`} component={RegistrationData} />
                <Route path={`/diploma`} component={Diploma} />
                <Route path={`/studentdiploma`} component={StudentDiploma} />
                <Route path={`/secondway`} component={SecondWay} />
                <Route path={`/retained`} component={Retained} />
                <Route path={`/generateticket`} component={GenerateTicket} />
                <Route path={`/protocol`} component={Protocol} />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </Main>
  </Fragment>
);
export default Content;
