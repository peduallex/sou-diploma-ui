import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './style.scss';
import audited from '../../services/AuditedApi';
import user from '../../assets/imgs/user.jpg';
import Open from '../../services/OpenProcessApi';

class Submit extends Component {
  constructor() {
    super();
    this.state = {
      processes: []
    }
  }

  async componentDidMount() {
    try {
      const res = await Open.get('v_atribuidos');
      this.setState({
        processes: res.data
      });
      console.log(res)
    } catch (e) {
      if (/404/.test(e)) {
        alert('Error 404');
      }
    }
  }

  handleClick = (id, name) => {
    const { academic_register } = this.props;
    const { student_id } = this.props;
    audited.post('responsible-process', { id, academic_register, name, student_id });
  };

  //handleClickImg = () => {};

  render() {
    const { processes } = this.state;
    return (
      <div>
        <Popup trigger={<button> Atribuir</button>} position="left center">
          <div>
            <ul className="ul">
              {processes.map(process => (
                <li className="li">
                  <a
                    className="a"
                    onClick={() => this.handleClick(process.id, process.name)}
                  >
                    {process.name} ({process.processes} processo(s))
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Submit;
