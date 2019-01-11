import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import CustomTab from './CustomTab';
import Info from '../../pages/Enabled';
import About from '../../pages/Retained';
import Contact from '../../pages/Process';

const Menu = () => (
  <div>
    <Tabs activeTab="about">
      <TabList>
        <Tab component={CustomTab} label="Info" id="info" />
        <Tab compoffnent={CustomTab} label="About" id="about" />
        <Tab component={CustomTab} label="Contact" id="contact" />
      </TabList>
      <TabList>
        <TabPanel component={Info} id="info" />
        <TabPanel component={About} id="about" />
        <TabPanel component={Contact} id="contact" />
      </TabList>
    </Tabs>
  </div>
);

export default Menu;
