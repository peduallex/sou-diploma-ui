import React from 'react';
import './style.scss';
import Impressora from '../../assets/imgs/impressora.png';
import Dowloands from '../../assets/imgs/dowloand.svg';
import MenuVertical from '../../assets/imgs/menuvertical.svg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import BtnDiploma from '../../components/BtnDiploma';

const Diploma = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="box-topo">
          <div className="row">
            <div className="col-md-12">
              <span className="text-diploma">
                Número do diploma : 12345678910
              </span>

              <div className="float-right">
                <div class="form-group input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-search" />
                  </span>
                  <input
                    name="consulta"
                    id="txt_consulta"
                    placeholder="Consultar"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div className="float-right">
                <img className="margin" src={Impressora} />
                <img className="margin" src={Dowloands} />
                <img className="margin" src={MenuVertical} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="diploma">
          <p>Diploma</p>
        </div>
        <br />

        <div className="row">
          <div className="col-md-12">
            <div className="float-right">
              <a className="selecionar" href="tg">
                VOLTAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Diploma;
