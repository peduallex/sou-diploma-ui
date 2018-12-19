import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import editar from '../../assets/imgs/editar.jpg';
import { Formik, Form } from 'formik';
import Dropzone from 'react-dropzone';
import {
  Row,
  Col,
  DragDrop,
  Text,
  Document,
  Accepted,
  Icon,
  Field,
  Button
} from './styles';
import Upload from '../../assets/imgs/upload.svg';
import Open from '../../assets/imgs/open.svg';
import Success from '../../assets/imgs/sucesso_upload.svg';
import PersonalData from '../../../src/services/PersonalDataApi';

class RegistrationData extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const res = await PersonalData.get(
      '/v_dados_pessoais?_where=(id,eq,65536)'
    );
    this.setState({ courses: res.data });
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ files: { rg: {}, history: {}, conclusion: {} } }}
          render={({ setFieldValue, values }) => (
            <div className="container-fluid wrap">
              <h3 className="title-registration">Dados Cadastrais</h3>
              <div className="img">
                <img src={user} />
                <br />
                <a className="link" href="link">
                  Link para o Diploma
                  <img className="link" src={Open} />
                </a>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome Civil</span>

                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome Social</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.assumed_name}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <br />
              <div className="col-md-4">
                <Row>
                  <Col>
                    <Dropzone
                      accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
                      onDrop={([file, ...rest]) => {
                        setFieldValue(
                          'files.rg',
                          Object.assign(file, {
                            preview: URL.createObjectURL(file)
                          })
                        );
                      }}
                      multiple={false}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <DragDrop {...getRootProps()}>
                          <Document>RG</Document>
                          <Text>Arraste para cá ou</Text>
                          <Icon
                            src={
                              JSON.stringify(values.files.rg) !== '{}'
                                ? Success
                                : Upload
                            }
                          />
                          <Field {...getInputProps()} />
                          <Button>Procure no computador</Button>
                          <Accepted>
                            Arquivos aceitos: pdf, jpg, png, bmp
                          </Accepted>
                        </DragDrop>
                      )}
                    </Dropzone>
                  </Col>
                </Row>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Documento de Identidade</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.rg_number}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Emissor/Estado</span>
                    <select class="form-control">
                      {this.state.courses.map(data => (
                        <option>{data.rg_orgao}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Nacionalidade</span>
                    <select class="form-control">
                      <option>Default select</option>
                    </select>
                  </fieldset>
                </div>
              </div>

              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">CPF</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.cpf}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Titulo de Eleitor</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.titulo_number}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Naturalidade</span>
                    <select class="form-control">
                      <option>Default select</option>
                    </select>
                  </fieldset>
                </div>
              </div>

              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome da Mãe</span>
                    <p>
                      <img src={editar} /> Pedro Souza
                    </p>
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">Nome do Pai</span>
                    <p>
                      <img src={editar} /> Pedro Souza
                    </p>
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-12">
                  <fieldset className="border">
                    <span className="title-box">
                      Endereço Residencial (com complementos)
                    </span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.street}&nbsp;
                        {data.street_number}&nbsp;-&nbsp;
                        {data.street_complement}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">CEP</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />

                        {data.zipcode}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">Bairro</span>
                    <p>
                      <img src={editar} /> Pedro Souza
                    </p>
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">Cidade</span>
                    <select class="form-control">
                      {this.state.courses.map(data => (
                        <p>
                          <img src={editar} />
                          {data.city_id}
                        </p>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset className="border">
                    <span className="title-box">Estado</span>
                    <select class="form-control">
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-6">
                  <fieldset className="border">
                    <span className="title-box">E-mail Pessoal</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.email_pessoal}
                      </p>
                    ))}
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset className="border">
                    <span className="title-box">E-mail Institucional</span>
                    {this.state.courses.map(data => (
                      <p>
                        <img src={editar} />
                        {data.email_inst}
                      </p>
                    ))}
                  </fieldset>
                </div>
              </div>
              <h3 className="title-registration">Dados de Ingresso</h3>
              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Curso</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Nível do Curso</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Tipo de Curso</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Polo</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Semestre/Ano de Ingresso</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Semestre/Ano de Conclusão</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
              </div>
              <div className="row espaco">
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Grau Conferido</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">Data da Colação Grau</span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
                <div className="col-md-4">
                  <fieldset className="border">
                    <span className="title-box">
                      Data de Expedição do Diploma
                    </span>
                    <p>Pedro Souza</p>
                  </fieldset>
                </div>
              </div>
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="float-right">
                      <a className="selecionar" href="tg">
                        DEFERIR
                      </a>
                    </div>
                    <div className="float-right">
                      <a className="voltar" href="tg">
                        VOLTAR
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          )}
        />
      </div>
    );
  }
}

export default RegistrationData;
