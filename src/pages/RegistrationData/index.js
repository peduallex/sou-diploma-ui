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
                  <select class="form-control">
                    <option>Default select</option>
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
                  <select class="form-control">
                    <option>Abadia de Goiás</option>
                    <option>Abadia dos Dourados</option>
                    <option>Abadiânia</option>
                    <option>Abaeté</option>
                    <option>Abaetetuba</option>
                    <option>Abaiara</option>
                    <option>Abaíra</option>
                    <option>Abaré</option>
                    <option>Abatiá</option>
                    <option>Abdon Batista</option>
                    <option>Abel Figueiredo</option>
                    <option>Abelardo Luz</option>
                    <option>Abre Campo</option>
                    <option>Abreu e Lima</option>
                    <option>Abreulândia</option>
                    <option>Acaiaca</option>
                    <option>Açailândia</option>
                    <option>Acajutiba</option>
                    <option>Acará</option>
                    <option>Acarape</option>
                    <option>Acaraú</option>
                    <option>Acari</option>
                    <option>Acauã</option>
                    <option>Aceguá</option>
                    <option>Acopiara</option>
                    <option>Acorizal</option>
                    <option>Acrelândia</option>
                    <option>Acreúna</option>
                    <option>Açucena</option>
                    <option>Adamantina</option>
                    <option>Adelândia</option>
                    <option>Adolfo</option>
                    <option>Adrianópolis</option>
                    <option>Adustina</option>
                    <option>Afogados da Ingazeira</option>
                    <option>Afonso Bezerra</option>
                    <option>Afonso Cláudio</option>
                    <option>Afonso Cunha</option>
                    <option>Afrânio</option>
                    <option>Afuá</option>
                    <option>Agrestina</option>
                    <option>Agricolândia</option>
                    <option>Agrolândia</option>
                    <option>Agronômica</option>
                    <option>Aguaí</option>
                    <option>Aguanil</option>
                    <option>Agudo</option>
                    <option>Agudos</option>
                    <option>Agudos do Sul</option>
                    <option>Aguiar</option>
                    <option>Aguiarnópolis</option>
                    <option>Aimorés</option>
                    <option>Aiquara</option>
                    <option>Aiuaba</option>
                    <option>Aiuruoca</option>
                    <option>Ajuricaba</option>
                    <option>Alagoa</option>
                    <option>Alagoa Grande</option>
                    <option>Alagoa Nova</option>
                    <option>Alagoinha</option>
                    <option>Alagoinha</option>
                    <option>Alagoinha do Piauí</option>
                    <option>Alagoinhas</option>
                    <option>Alambari</option>
                    <option>Albertina</option>
                    <option>Alcântara</option>
                    <option>Alcântaras</option>
                    <option>Alcantil</option>
                    <option>Alcinópolis</option>
                    <option>Alcobaça</option>
                    <option>Aldeias Altas</option>
                    <option>Alecrim</option>
                    <option>Alegre</option>
                    <option>Alegrete</option>
                    <option>Alegrete do Piauí</option>
                    <option>Alegria</option>
                    <option>Além Paraíba</option>
                    <option>Alenquer</option>
                    <option>Alexandria</option>
                    <option>Alexânia</option>
                    <option>Alfenas</option>
                    <option>Alfredo Chaves</option>
                    <option>Alfredo Marcondes</option>
                    <option>Alfredo Vasconcelos</option>
                    <option>Alfredo Wagner</option>
                    <option>Algodão de Jandaíra</option>
                    <option>Alhandra</option>
                    <option>Aliança</option>
                    <option>Aliança do Tocantins</option>
                    <option>Almadina</option>
                    <option>Almas</option>
                    <option>Almeirim</option>
                    <option>Almenara</option>
                    <option>Almino Afonso</option>
                    <option>Almirante Tamandaré</option>
                    <option>Almirante Tamandaré do Sul</option>
                    <option>Aloândia</option>
                    <option>Alpercata</option>
                    <option>Alpestre</option>
                    <option>Alpinópolis</option>
                    <option>Alta Alegre dos Parecis</option>
                    <option>Alta Floresta</option>
                    <option>Alta Floresta do Oeste</option>
                    <option>Altair</option>
                    <option>Altamir</option>
                    <option>Altamira do Maranhão</option>
                    <option>Altamira do Paraná</option>
                    <option>Altaneira</option>
                    <option>Alterosa</option>
                    <option>Altinho</option>
                    <option>Altinópolis</option>
                    <option>Alto Alegre</option>
                    <option>Alto Alegre</option>
                    <option>Alto Alegre</option>
                    <option>Alto Alegre do Maranhão</option>
                    <option>Alto Alegre do Pindaré</option>
                    <option>Alto Araguaia</option>
                    <option>Alto Bela Vista</option>
                    <option>Alto Boa Vista</option>
                    <option>Alto Caparaó</option>
                    <option>Alto do Rodrigues</option>
                    <option>Alto Feliz</option>
                    <option>Alto Garças</option>
                    <option>Alto Horizonte</option>
                    <option>Alto Jequitibá</option>
                    <option>Alto Longá</option>
                    <option>Alto Paraguai</option>
                    <option>Alto Paraíso</option>
                    <option>Alto Paraíso</option>
                    <option>Alto Paraíso de Goiás</option>
                    <option>Alto Paraná</option>
                    <option>Alto Parnaíba</option>
                    <option>Alto Piquiri</option>
                    <option>Alto Rio Doce</option>
                    <option>Alto Rio Novo</option>
                    <option>Alto Santo</option>
                    <option>Alto Taquari</option>
                    <option>Altônia</option>
                    <option>Altos</option>
                    <option>Alumínio</option>
                    <option>Alvarães</option>
                    <option>Alvarenga</option>
                    <option>Alvinlândia</option>
                    <option>Alvinópolis</option>
                    <option>Alvorada</option>
                    <option>Alvorada</option>
                    <option>Alvorada de Minas</option>
                    <option>Alvorada do Gurguéia</option>
                    <option>Alvorada do Norte</option>
                    <option>Alvorada do Oeste</option>
                    <option>Alvorada do Sul</option>
                    <option>Amajarí</option>
                    <option>Amambai</option>
                    <option>Amapá</option>
                    <option>Amapá do Maranhão</option>
                    <option>Amaporã</option>
                    <option>Amaraji</option>
                    <option>Amaral Ferrador</option>
                    <option>Amaralina</option>
                    <option>Amarante</option>
                    <option>Amarante do Maranhão</option>
                    <option>Amargosa</option>
                    <option>Amaturá</option>
                    <option>Amélia Rodrigues</option>
                    <option>América Dourada</option>
                    <option>Americana</option>
                    <option>Americano do Brasil</option>
                    <option>Américo Brasiliense</option>
                    <option>Américo de Campos</option>
                    <option>Ametista do Sul</option>
                    <option>Amontada</option>
                    <option>Amorinópolis</option>
                    <option>Amparo</option>
                    <option>Amparo</option>
                    <option>Amparo da Serra</option>
                    <option>Amparo de São Francisco</option>
                    <option>Ampére</option>
                    <option>Anadia</option>
                    <option>Anagé</option>
                    <option>Anahy</option>
                    <option>Anajás</option>
                    <option>Anajatuba</option>
                    <option>Analândia</option>
                    <option>Anamã</option>
                    <option>Ananás</option>
                    <option>Ananindeua</option>
                    <option>Anápolis</option>
                    <option>Anapu</option>
                    <option>Anapurus</option>
                    <option>Anastácio</option>
                    <option>Anaurilândia</option>
                    <option>Anchieta</option>
                    <option>Anchieta</option>
                    <option>Andaraí</option>
                    <option>Andirá</option>
                    <option>Andorinha</option>
                    <option>Andradas</option>
                    <option>Andradina</option>
                    <option>André da Rocha</option>
                    <option>Andrelândia</option>
                    <option>Angatuba</option>
                    <option>Angelândia</option>
                    <option>Angélica</option>
                    <option>Angelim</option>
                    <option>Angelina</option>

                    <option>Angical</option>
                    <option>Angical do Piauí</option>
                    <option>Angico</option>
                    <option>Angicos</option>
                    <option>Angra dos Reis</option>
                    <option>Anguera</option>
                    <option>Anhanguera</option>
                    <option>Anhembi</option>
                    <option>Anhumas</option>
                    <option>Anicuns</option>
                    <option>Anísio de Abreu</option>
                    <option>Anita Garibaldi</option>
                    <option>Anitápolis</option>
                    <option>Anori</option>
                    <option>Anta Gorda</option>
                    <option>Antas</option>
                    <option>Antonina</option>
                    <option>Antonina do Norte</option>
                    <option>Antônio Almeida</option>
                    <option>Antônio Cardoso</option>
                    <option>Antônio Carlos</option>
                    <option>Antônio Carlos</option>
                    <option>Antônio Dias</option>
                    <option>Antônio Gonçalves</option>
                    <option>Antônio João</option>
                    <option>Antônio Martins</option>
                    <option>Antônio Olinto</option>
                    <option>Antônio Prado</option>
                    <option>Antônio Prado de Minas</option>
                    <option>Aparecida</option>
                    <option>Aparecida</option>
                    <option>Aparecida de Goiânia</option>
                    <option>Aparecida do Rio Doce</option>
                    <option>Aparecida do Rio Negro</option>
                    <option>Aparecida do Taboado</option>
                    <option>Aparecida D'Oeste</option>
                    <option>Aperibé</option>
                    <option>Apiacá</option>
                    <option>Apiacás</option>
                    <option>Apiaí</option>
                    <option>Apicum-Açu</option>
                    <option>Apiúna</option>
                    <option>Apodi</option>
                    <option>Aporá</option>
                    <option>Aporé</option>
                    <option>Apuarema</option>
                    <option>Apucarana</option>
                    <option>Apuí</option>
                    <option>Apuiarés</option>
                    <option>Aquidabã</option>
                    <option>Aquidauana</option>
                    <option>Aquiraz</option>
                    <option>Arabutã</option>
                    <option>Araçagi</option>
                    <option>Araçaí</option>
                    <option>Aracaju</option>
                    <option>Araçariguama</option>
                    <option>Araçás</option>
                    <option>Aracati</option>
                    <option>Aracatu</option>
                    <option>Araçatuba</option>
                    <option>Araci</option>
                    <option>Aracitaba</option>
                    <option>Aracoiaba</option>
                    <option>Araçoiaba</option>
                    <option>Araçoiaba da Serra</option>
                    <option>Aracruz</option>
                    <option>Araçu</option>
                    <option>Araçuaí</option>
                    <option>Aragarças</option>
                    <option>Aragoiânia</option>
                    <option>Aragominas</option>
                    <option>Araguacema</option>
                    <option>Araguaçu</option>
                    <option>Araguaiana</option>
                    <option>Araguaína</option>
                    <option>Araguainha</option>
                    <option>Araguanã</option>
                    <option>Araguanã</option>
                    <option>Araguapaz</option>
                    <option>Araguari</option>
                    <option>Araguatins</option>
                    <option>Araióses</option>
                    <option>Aral Moreira</option>
                    <option>Aramari</option>
                    <option>Arambaré</option>
                    <option>Arame</option>
                    <option>Aramina</option>
                    <option>Arandu</option>
                    <option>Arantina</option>
                    <option>Arapeí</option>
                    <option>Arapiraca</option>
                    <option>Arapoema</option>
                    <option>Araponga</option>
                    <option>Arapongas</option>
                    <option>Araporã</option>
                    <option>Arapoti</option>
                    <option>Arapuã</option>
                    <option>Arapuá</option>
                    <option>Araputanga</option>
                    <option>Araquari</option>
                    <option>Arara</option>
                    <option>Araranguá</option>
                    <option>Araraquara</option>
                    <option>Araras</option>
                    <option>Ararendá</option>
                    <option>Arari</option>
                    <option>Araricá</option>
                    <option>Araripe</option>
                    <option>Araripina</option>
                    <option>Araruama</option>
                    <option>Araruna</option>
                    <option>Araruna</option>
                    <option>Arataca</option>
                    <option>Aratiba</option>
                    <option>Aratuba</option>
                    <option>Aratuípe</option>
                    <option>Arauá</option>
                    <option>Araucária</option>
                    <option>Araújos</option>
                    <option>Araxá</option>
                    <option>Arceburgo</option>
                    <option>Arco-Íris</option>
                    <option>Arcos</option>
                    <option>Arcoverde</option>
                    <option>Areado</option>
                    <option>Areal</option>
                    <option>Arealva</option>
                    <option>Areia</option>
                    <option>Areia Branca</option>
                    <option>Areia Branca</option>
                    <option>Areia de Baraúnas</option>
                    <option>Areial</option>
                    <option>Areias</option>
                    <option>Areiópolis</option>
                    <option>Arenápolis</option>
                    <option>Arenópolis</option>
                    <option>Arez</option>
                    <option>Argirita</option>
                    <option>Aricanduva</option>
                    <option>Arinos</option>
                    <option>Aripuanã</option>
                    <option>Ariquemes</option>
                    <option>Ariranha</option>
                    <option>Ariranha do Ivaí</option>
                    <option>Armação dos Búzios</option>
                    <option>Armazém</option>
                    <option>Arneiroz</option>
                    <option>Aroazes</option>
                    <option>Aroeiras</option>
                    <option>Aroeiras Do Itaim</option>
                    <option>Arraial</option>
                    <option>Arraial do Cabo</option>
                    <option>Arraias</option>
                    <option>Arroio do Meio</option>
                    <option>Arroio do Padre</option>
                    <option>Arroio do Sal</option>
                    <option>Arroio do Tigre</option>
                    <option>Arroio dos Ratos</option>
                    <option>Arroio Grande</option>
                    <option>Arroio Trinta</option>
                    <option>Artur Nogueira</option>
                    <option>Aruanã</option>
                    <option>Arujá</option>
                    <option>Arvoredo</option>
                    <option>Arvorezinha</option>
                    <option>Ascurra</option>
                    <option>Aspásia</option>
                    <option>Assaí</option>
                    <option>Assaré</option>
                    <option>Assis</option>
                    <option>Assis Brasil</option>
                    <option>Assis Chateaubriand</option>
                    <option>Assu</option>
                    <option>Assunção</option>
                    <option>Assunção do Piauí</option>
                    <option>Astolfo Dutra</option>
                    <option>Astorga</option>
                    <option>Atalaia</option>
                    <option>Atalaia</option>
                    <option>Atalaia do Norte</option>
                    <option>Atalanta</option>
                    <option>Ataléia</option>
                    <option>Atibaia</option>
                    <option>Atílio Vivácqua</option>
                    <option>Augustinópolis</option>
                    <option>Augusto Corrêa</option>
                    <option>Augusto de Lima</option>
                    <option>Augusto Pestana</option>
                    <option>Aurelino Leal</option>
                    <option>Auriflama</option>
                    <option>Aurilândia</option>
                    <option>Aurora</option>
                    <option>Aurora</option>
                    <option>Aurora do Pará</option>
                    <option>Aurora do Tocantins</option>
                    <option>Autazes</option>
                    <option>Avaí</option>
                    <option>Avanhandava</option>
                    <option>Avaré</option>
                    <option>Aveiro</option>
                    <option>Avelino Lopes</option>
                    <option>Avelinópolis</option>
                    <option>Axixá</option>
                    <option>Axixá do Tocantins</option>
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
};

export default RegistrationData;
