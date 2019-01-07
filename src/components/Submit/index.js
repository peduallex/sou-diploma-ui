import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './style.scss';

import audited from '../../services/AuditedApi';

class Submit extends Component {
	handleClick = (id, name) => {
		audited.post('finaldaurl', { id, name });
		console.log(id, name);
	};
	render() {
		return (
			<div>
				<Popup trigger={<button> Atribuir</button>} position="left center">
					<div>
						<ul className="ul">
							<li className="li" onClick={this.handleClick(1, 'ANDREA GONÇALVES')}>
								<a className="a">ANDREA GONÇALVES MARIANO SOUZA (2 processos)</a>
							</li>
							<li className="li" onClick={this.handleClick(2, 'CAIO GUILHERME')}>
								<a className="a">CAIO GUILHERME SOARES FERNANDES (1 processos)</a>
							</li>
							<li className="li" onClick={this.handleClick(3, 'GENIVALDO LINHARES')}>
								<a className="a">GENIVALDO LINHARES BRANDÃO (4 processos)</a>
							</li>
							<li className="li" onClick={this.handleClick(4, 'HAROLDO FELIPE')}>
								<a className="a">HAROLDO FELIPPE AVELLAR (2 processos)</a>
							</li>
							<li className="li" onClick={this.handleClick(5, 'LEILA MIGUELINA')}>
								<a className="a">LEILA MIGUELINA APARECIDA COSTA SOMENK (2 processos)</a>
							</li>
							<li className="li" onClick={this.handleClick(6, 'MARCIO ROCHA')}>
								<a className="a">MARCIO ROCHA DE PINHO (2 processos)</a>
							</li>
						</ul>
					</div>
				</Popup>
			</div>
		);
	}
}

export default Submit;
