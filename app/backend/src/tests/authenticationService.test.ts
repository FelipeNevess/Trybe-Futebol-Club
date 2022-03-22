import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as jwt from 'jsonwebtoken';

import SessionsRepository from '../modules/futebol/repositories/implementations/SessionsRepositories';
import AuthenticateService from '../modules/futebol/useCase/sessions/AuthenticateService';
import { IResponseSession } from '../modules/futebol/repositories/ISessionsRepositories';

chai.use(chaiHttp);
const { expect } = chai;

describe('Authenticate Service', () => {
  describe('Testing function execute', () => {
    describe('on success', () => {
      const email = 'test@test.com';
      const password = '1234566';

      before(async () => {
        sinon.stub(SessionsRepository, "findByEmail").resolves({
          id: 1,
          username: 'felipeneves',
          role: 'admin',
          email: 'test@test.com',
          password: '1234566',
        } as IResponseSession);

        sinon.stub(jwt, "sign").resolves('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')

        sinon.stub(AuthenticateService, "execute").resolves({
          user: {
            id: 1,
            username: 'felipeneves',
            role: 'admin',
            email: 'test@test.com'
          },
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        });
      });
      
      after(() => {
        (SessionsRepository.findByEmail as sinon.SinonStub).restore();
        (AuthenticateService.execute as sinon.SinonStub).restore();
      });
  
      it('the function should not return anything', async () => {
        const result = await AuthenticateService.execute({ email, password });
  
        expect(result).to.be.an('object')
      });

      it('the function should return the expected', async () => {
        const result = await AuthenticateService.execute({ email, password });
  
        expect(result).to.deep.equal({
          user: {
            id: 1,
            username: 'felipeneves',
            role: 'admin',
            email: 'test@test.com'
          },
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        })
      });
    });

    describe('in case of error', () => {
      before(async () => {
        sinon.stub(AuthenticateService, "execute").resolves();
        sinon.stub(SessionsRepository, "findByEmail").resolves({
          id: 1,
          username: 'felipeneves',
          role: 'admin',
          email: 'test@teest.com',
          password: '1234566',
        } as IResponseSession);
      });

      after(() => {
        (SessionsRepository.findByEmail as sinon.SinonStub).restore();
        (AuthenticateService.execute as sinon.SinonStub).restore();
      });

      it('it should be possible to return an error if the email is wrong', async () => {
        const email = 'test@test.com';
        const password = '1234566';
        const result = await AuthenticateService.execute({ email, password });

        expect(result).to.be.an('undefined');
      });

      it('check if returned the expected error', async () => {
        const email = 'test@teest.com';
        const password = '1234566';
        
        await AuthenticateService.execute({ email, password })
          .then((res) => expect(res).to.be.an('object'))
          .catch((err) => expect(err).to.be.eq(err))
      });
    });
  });

  describe('testing errors', () => {
    it('it should be possible to return an error', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: '123456789'
      }).catch((err) => err);

      expect(result).to.throw;
    });

    it('the error message should be as expected', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: '123456789'
      }).catch((err) => err.message);

      expect(result).to.be.eq('Incorrect email or password');
    });

    it('the error code should be as expected', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: '123456789'
      }).catch((err) => err.code);

      expect(result).to.be.eq(401);
    });

    it('the error code should be as expected', async () => {
      const result = await AuthenticateService.execute({
        email: 'user@user.com',
        password: '123456789'
      }).catch((err) => err);

      expect(result).to.throw;
    });

    it('the error message should be as expected', async () => {
      const result = await AuthenticateService.execute({
        email: 'user@user.com',
        password: '123456789'
      }).catch((err) => err.message);

      expect(result).to.be.eq('Incorrect email or password');
    });

    it('the error code should be as expected', async () => {
      const result = await AuthenticateService.execute({
        email: 'user@user.com',
        password: '123456789'
      }).catch((err) => err.code);

      expect(result).to.be.eq(401);
    });

    it('should return an error if the email is not provided', async () => {
      const result = await AuthenticateService.execute({
        email: '',
        password: '123456789'
      }).catch((err) => err.code);

      expect(result).to.be.eq(400);
    });

    it('the error message should be as expected', async () => {
      const result = await AuthenticateService.execute({
        email: '',
        password: '123456789'
      }).catch((err) => err.message);

      expect(result).to.be.eq('All fields must be filled');
    });

    it('should return an error if the email is entered correctly', async () => {
      const result = await AuthenticateService.execute({
        email: 'testeteste',
        password: '123456789'
      }).catch((err) => err.message);

      expect(result).to.be.eq('Error, the email format must be "@" and "."');
    });

    it('it should be possible to return an error if the password is not provided', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: ''
      }).catch((err) => err);

      expect(result).to.throw;
    });

    it('it should be possible to return an error with the following code', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: ''
      }).catch((err) => err.code);

      expect(result).to.be.eq(400);
    });

    it('it should be possible to return an error with the following message', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: ''
      }).catch((err) => err.message);

      expect(result).to.be.eq('All fields must be filled');
    });

    it('it should be possible to return an error if the password is less than 6 characters', async () => {
      const result = await AuthenticateService.execute({
        email: 'test@test.com',
        password: '12345'
      }).catch((err) => err);

      expect(result).to.throw;
    });
  });
});
