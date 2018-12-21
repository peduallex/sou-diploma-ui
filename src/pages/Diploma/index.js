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
import apiDiploma from '../../services/diplomaApi';
import api from '../../services/api';

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
];
class Diploma extends Component {
  state = {
    diploma: {},
    courses: []
  };

  async componentDidMount() {
    const {
      match: {
        params: { ra: student_id }
      }
    } = this.props;

    const diploma = await apiDiploma.get(
      `v_impressao_diploma?_where=(student_id,eq,65537)`
    );

    this.setState({
      diploma: diploma.data[0]
    });
  }

  imprimir = () => {
    let conteudo = document.getElementById('diploma').innerHTML;
    let tela_impressao = window.open('about:blank');
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
  };

  download = async () => {
    const {
      match: {
        params: { ra: student_id }
      }
    } = this.props;

    const data = { student_id };

    await api.post(`/report/pdf`, data);
  };

  handleClick = id => {
    this.props.history.push(`/studentdiploma/${id}`);
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="box-topo">
            <div className="row">
              <div className="col-md-12">
                <div className="float-right" />
                <div className="float-right">
                  <div id="print" className="conteudo">
                    <img src={Impressora} className="margin" />
                    <button>Imprimir</button>
                    <img className="margin" src={Dowloands} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="diploma">
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
            <h3 className="subtitulo-2">{this.state.diploma.name}</h3>
            <div className="conteudo">
              de nacionalidade {this.state.diploma.nacionalidade},
              <br />
              portador da cédula de identidade RG {this.state.diploma.RG} SP,
              <br />
              nascido em{' '}
              {this.state.diploma['birth_date']
                ? this.state.diploma['birth_date'].split('/')[0]
                : ''}
              ,{' '}
              {this.state.diploma['birth_date']
                ? this.state.diploma['birth_date'].split('/')[1]
                : ''}{' '}
              de{' '}
              {this.state.diploma['birth_date']
                ? this.state.diploma['birth_date'].split('/')[2]
                : ''}
              ,
              <br />
              e natural do Estado de São Paulo,
              <br />o diploma do
            </div>
            <h5 className="conteudo-titulo">
              {this.state.diploma['course_name']}
            </h5>
            <span className="conteudo-texto">
              concluído em{' '}
              {this.state.diploma['date_conclusion']
                ? this.state.diploma['date_conclusion'].split('/')[1]
                : ''}{' '}
              de{' '}
              {this.state.diploma['date_conclusion']
                ? this.state.diploma['date_conclusion'].split('/')[2]
                : ''}
              <br />
              <span className="conteudo-texto-1">
                para que possa gozar dos direitos e prerrogativas legais,
              </span>
            </span>
            <p className="paragrafo">
              São Paulo, {new Date().getDate()} de{' '}
              {months[new Date().getMonth()]} de {new Date().getFullYear()}.
            </p>
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
  }
}

export default Diploma;
