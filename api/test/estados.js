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

describe('Estado CRUD endpoints.', () => {
  describe('POST', () => {
    it('Deve criar um novo estado', (done) => {
      const estado = {
        nome: 'Acre',
        sigla: 'AC',
      };

      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .post('/estados')
        .set('X-Api-Key', process.env.API_KEY)
        .send(estado)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Estado')
            .have.property('nome')
            .eq('Acre');
          response.body.should.have
            .property('data')
            .have.property('Estado')
            .have.property('sigla')
            .eq('AC');
          done();
        });
    });
  });
  describe('GET', () => {
    it('Deve retornar todos os estados', (done) => {
      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .get('/estados')
        .set('X-Api-Key', process.env.API_KEY)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Estados')
            .and.to.be.a('array');
          done();
        });
    });
  });
  describe('PUT', () => {
    it('Deve atualizar um estado', (done) => {
      const estadoId = '6023333f6f3bf03fc4fc9454';
      const estado = {
        nome: 'Minas Gerais',
        sigla: 'Mg',
      };
      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .put(`/estados/${estadoId}`)
        .set('X-Api-Key', process.env.API_KEY)
        .send(estado)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have
            .property('data')
            .have.property('Estado')
            .have.property('nome')
            .eq('Minas Gerais');
          response.body.should.have
            .property('data')
            .have.property('Estado')
            .have.property('sigla')
            .eq('Mg');
          done();
        });
    });
  });
  describe('DELETE', () => {
    it('Deve deletar um estado', (done) => {
      const estadoId = '6028082cb278d243ad65c83d';
      chai
        .request(`${process.env.BASE_URL_ENDPOINTS}`)
        .delete(`/estados/${estadoId}`)
        .set('X-Api-Key', process.env.API_KEY)
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });
  });
});
