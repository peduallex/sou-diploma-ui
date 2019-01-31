import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const Menu = () => (
  <div>
    <TabList>
          <Tab tabFor="one">Processos em aberto</Tab>
          <Tab tabFor="two">Alunos habilitados</Tab>
          <Tab tabFor="three">Retidos</Tab>
          <Tab tabFor="for">Diplomados</Tab>
    </TabList>
  </div>
);

export default Menu;
