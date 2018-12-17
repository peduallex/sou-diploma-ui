import React from 'react';
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

const RegistrationData = () => {
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
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <div className="row espaco">
              <div className="col-md-12">
                <fieldset className="border">
                  <span className="title-box">Nome Social</span>
                  <p>
                    <img src={editar} />
                    Pedro Souza
                  </p>
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
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Emissor/Estado</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Nacionalidade</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>

            <div className="row espaco">
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">CPF</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Titulo de Eleitor</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Naturalidade</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <div className="row espaco">
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Cidade de Nascimento</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
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
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <div className="row espaco">
              <div className="col-md-3">
                <fieldset className="border">
                  <span className="title-box">CEP</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
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
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-3">
                <fieldset className="border">
                  <span className="title-box">Estado</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <div className="row espaco">
              <div className="col-md-6">
                <fieldset className="border">
                  <span className="title-box">E-mail Pessoal</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset className="border">
                  <span className="title-box">E-mail Institucional</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <h3 className="title-registration">Dados de Ingresso</h3>
            <div className="row espaco">
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Curso</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Nível do Curso</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Tipo de Curso</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <div className="row espaco">
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Polo</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Semestre/Ano de Ingresso</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Semestre/Ano de Conclusão</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
            </div>
            <div className="row espaco">
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Grau Conferido</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">Data da Colação Grau</span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
                </fieldset>
              </div>
              <div className="col-md-4">
                <fieldset className="border">
                  <span className="title-box">
                    Data de Expedição do Diploma
                  </span>
                  <p>
                    <img src={editar} /> Pedro Souza
                  </p>
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
};

export default RegistrationData;
