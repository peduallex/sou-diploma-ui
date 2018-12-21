import React, { Component } from 'react';
import './style.scss';
import Impressora from '../../assets/imgs/impressora.png';
import Dowloands from '../../assets/imgs/dowloand.svg';
import MenuVertical from '../../assets/imgs/menuvertical.svg';
import DiplomaImagem from '../../assets/imgs/diploma-icone.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import BtnEmail from '../../components/BtnEmail';
import BtnDiploma from '../../components/BtnDiploma';

function imprimir() {
  /*let conteudo = document.getElementById('print').innerHTML;
  let tela_impressao = window.open(
    'C:/sou-diploma-ui/src/pages/Diploma/index.js'
  );
  tela_impressao.document.write(conteudo);
  tela_impressao.window.print();
  tela_impressao.window.close();*/
}

const Diploma = ({
  match: {
    params: { ra }
  }
}) => {
  console.log(ra);
  return (
    <div>
      <div className="container-fluid">
        <div className="box-topo">
          <div className="row">
            <div className="col-md-12">
              <div className="float-right" />
              <div className="float-right">
                <div id="print" className="conteudo">
                  <button>Imprimir</button>
                  <img className="margin" src={Dowloands} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <img
          src={DiplomaImagem}
          alt="diploma-img"
          className="diploma-tamanho"
        />
        <div className="conteudo-diploma">
          A presidente da
          <span className="titulo">
            Universidade Virtual do Estado de São Paulo,
          </span>
          <br />
          <span className="subtitulo">
            no uso de suas atribuições, confere a
          </span>
          <h3 className="subtitulo-2">NOME DO DIPLOMADO</h3>
          <div className="conteudo">
            de nacionalidade brasileira,
            <br />
            portador da cédula de identidade RG XX.XXX.XXX-X SP,
            <br />
            nascido em XX, XXXXXX de XXXX,
            <br />
            e natural do Estado de São Paulo,
            <br />o diploma do
          </div>
          <h5 className="conteudo-titulo">
            Curso Sequencial de Fundamentos da Docência nas
            <br />
            Áreas de Matemática, Ciências Naturias e Humanas
          </h5>
          <span className="conteudo-texto">
            concluído em XXXXXX de XXXX
            <br />
            <span className="conteudo-texto-1">
              para que possa gozar dos direitos e prerrogativas legais,
            </span>
          </span>
          <p className="paragrafo">São Paulo, XX de XXXXXX de XXXX.</p>
        </div>
        <div className="container margem-conteudo">
          <div className="rows">
            <span className="sublinhado">Patricia Laczynski de Souza</span>
            <span className="sublinhado">Fernanda Gouveia</span>
            <span className="sublinhado negrito">Diplomado(a)</span>
          </div>
        </div>
        <div className="container">
          <div className="rows">
            <span className="negrito">Diretoria Acadêmica</span>
            <span className="negrito-1">Presidente</span>
          </div>
        </div>
        <br />
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
