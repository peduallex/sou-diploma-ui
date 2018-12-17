import React from 'react';
import './style.scss';
import alert from '../../assets/imgs/seta_alert.png';

const Alert = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Enviar
      </button>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <img src={alert} />
              Número do processo: 2018DA38763482H
              <p />
              <img src={alert} />
              Processo movido para a aba "Retidos".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
