import React from 'react';

const style = {
  padding: '10px',
  borderBottom: '3px solid transparent',
  display: 'inline-block',
  cursor: 'pointer',
  color: '#000',
  textAlign: 'center',
  fontweight: 'bold'
};

const activeStyle = {
  ...style,
  color: '#000',
  borderBottom: '3px solid #d71356'
};

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
);

export default CustomTab;
