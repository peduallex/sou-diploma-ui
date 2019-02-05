import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import './style.scss';
const Menu = () => (
  <div>
    <TabList>
      <Tab focusable tabFor="one">
        Processos em aberto
      </Tab>
      <Tab focusable tabFor="two">
        Alunos habilitados
      </Tab>
      <Tab focusable tabFor="three">
        Retidos
      </Tab>
      <Tab focusable tabFor="for">
        Diplomados
      </Tab>
    </TabList>
  </div>
);

export default Menu;
