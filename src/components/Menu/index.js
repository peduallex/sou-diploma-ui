import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Actions, Action } from './style';
class Menu extends Component {
  state = {
    tab: 0
  };
  render() {
    const { tab } = this.state;
    return (
      <div>
        <nav id="menu">
          <Actions>
            <Action
              active={tab === 0}
              onClick={() => this.setState({ tab: 0 })}
            >
              <b>Em Aberto</b>
            </Action>
            <Action
              active={tab === 1}
              onClick={() => this.setState({ tab: 1 })}
            >
              <b>Auditados</b>
            </Action>
            <Action
              active={tab === 2}
              onClick={() => this.setState({ tab: 2 })}
            >
              <b>Retidos</b>
            </Action>
            <Action
              active={tab === 3}
              onClick={() => this.setState({ tab: 3 })}
            >
              <b>Diplomado</b>
            </Action>
          </Actions>
        </nav>
      </div>
    );
  }
}

export default Menu;
