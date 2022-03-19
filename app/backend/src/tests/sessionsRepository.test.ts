import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import SessionsRepository from '../modules/futebol/repositories/implementations/SessionsRepositories';
import { IResponseSession } from '../modules/futebol/repositories/ISessionsRepositories';

chai.use(chaiHttp);
const { expect } = chai;

const email = 'test@test.com';
const password = '1234566';

describe('Sessions Repositories', () => {
  describe('Testing function findByEmail', () => {
    describe('if you find a user', () => {
      before(async () => {
        sinon.stub(SessionsRepository, "findByEmail").resolves({
          id: 1,
          username: 'felipeneves',
          role: 'admin',
          email: 'test@test.com',
          password: '1234566',
        } as IResponseSession);
      });
      
      after(() => {
        (SessionsRepository.findByEmail as sinon.SinonStub).restore();
      });
  
      it('The return must be an object', async () => {
        const result = await SessionsRepository.findByEmail(email);
  
        expect(result).to.be.an('object');
      });
  
      it('To the function of having an expected return', async () => {
        const result = await SessionsRepository.findByEmail(email);      
  
        expect(result).to.deep.equal({
          id: 1,
          username: 'felipeneves',
          role: 'admin',
          email: 'test@test.com',
          password: '1234566',
        });
      });
    });
    
    describe('if no user is found', () => {
      before(async () => {
        sinon.stub(SessionsRepository, "findByEmail").resolves(null);
      });
      
      after(() => {
        (SessionsRepository.findByEmail as sinon.SinonStub).restore();
      });

      it('checks if the function returns a null', async () => {
        const result = await SessionsRepository.findByEmail('email@errado.com');
        console.log(result);
  
  
        expect(result).to.be.eq(null);
      })
    })
  });

  describe('Testing function create', () => {
    before(async () => {
      sinon.stub(SessionsRepository, "create").resolves();
    });
    
    afterEach( async () => {
      (SessionsRepository.create as sinon.SinonStub).restore();
    });

    it('the function should not return anything', async () => {
      const result = await SessionsRepository.create({email, password });

      expect(result).to.be.an('undefined')
    });
  });
});
