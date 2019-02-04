import React from 'react';
import './style.scss';

const SecondWay = () => {
  return (
    <div>
      <div className="container">
        <fieldset className="fieldset">
          <h5>
            Você esta imprimindo a 2º Via do Diploma para Augusto Cavalcante
          </h5>

          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInput1">
                  Número de série da primeira folha
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInput1"
                  aria-describedby="emailHelp"

                />
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInput2">Quantidade de impressos</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInput2"
                  aria-describedby="emailHelp"
                  value="1"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Assinaturas</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Funcionário</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Assinaturas</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Funcionário</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Assinaturas</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Funcionário</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div class="form-group green-border-focus">
                <label for="exampleFormControlTextarea5">
                  Motivo para impressão da 2º via
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea5"
                  rows="6"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="float-right">
              <a className="selecionar" href="tg">
                IMPRIMIR 2º VIA
              </a>
            </div>
          </div>
        </div>
        <br />
  </div>
    </div>
  );
};

export default SecondWay;
