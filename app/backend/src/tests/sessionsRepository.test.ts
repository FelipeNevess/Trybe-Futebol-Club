import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import SessionsRepository from '../modules/futebol/repositories/implementations/SessionsRepositories';
import { IResponseSession } from '../modules/futebol/repositories/ISessionsRepositories';

chai.use(chaiHttp);
const { expect } = chai;

describe('Sessions Repositories', () => {
  describe('Testing function findByEmail', () => {
    const email = 'test@test.com';

    before(async () => {
      sinon.stub(SessionsRepository, "findByEmail").resolves({
        id: 1,
        username: 'felipeneves',
        role: 'admin',
        email: 'test@test.com',
        password: '1234566',
      } as IResponseSession);
    });
    

    it('The return must be an object', async () => {
      const result = await SessionsRepository.findByEmail(email);

      expect(result).to.be.an('object');
    });

    it('The return must be an object', async () => {
      const result = await SessionsRepository.findByEmail(email);

      expect(result).to.be.an('object');
    });
  })
});
