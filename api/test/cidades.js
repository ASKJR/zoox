/* eslint-disable */
const path = require('path');
const dotEnvPath = path.resolve('./.env');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const dotenv = require('dotenv');

dotenv.config({
  path: dotEnvPath,
});

// Assertion
chai.should();
chai.use(chaiHttp);

describe('Cidade CRUD endpoints.', () => {
  describe('POST', () => {
    it('Deve criar uma nova cidade', (done) => {
      const estado = {
        nome: 'Mariluz',
        _idEstado: '60247684292ef759698da252',
      };

      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .post('/cidades')
        .set('X-Api-Key', process.env.API_KEY)
        .send(estado)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Cidade')
            .have.property('nome')
            .eq('Mariluz');
          response.body.should.have
            .property('data')
            .have.property('Cidade')
            .have.property('_idEstado')
            .eq('60247684292ef759698da252');
          done();
        });
    });
  });
  describe('GET', () => {
    it('Deve retornar todas as cidades', (done) => {
      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .get('/cidades')
        .set('X-Api-Key', process.env.API_KEY)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
  describe('PUT', () => {
    it('Deve atualizar uma cidade', (done) => {
      const cidadeId = '6027122fc078a42a06f92b18';
      const cidade = {
        nome: 'Mariluzzz',
        _idEstado: '60247684292ef759698da252',
      };
      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .put(`/cidades/${cidadeId}`)
        .set('X-Api-Key', process.env.API_KEY)
        .send(cidade)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Cidade')
            .have.property('nome')
            .eq('Mariluzzz');
          response.body.should.have
            .property('data')
            .have.property('Cidade')
            .have.property('_idEstado')
            .eq('60247684292ef759698da252');
          done();
        });
    });
  });
  describe('DELETE', () => {
    it('Deve deletar uma cidade', (done) => {
      const cidadeId = '60283072af6b7160009fc8f6';
      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .delete(`/cidades/${cidadeId}`)
        .set('X-Api-Key', process.env.API_KEY)
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });
  });
});
