import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp)

describe('Testing login', async () => {
  describe('Testing email', () => {
    it('It should be possible to return an error if the email is informed', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send({
          password: 'secret_admin',
        });
      
      chai.expect(response.status).to.equal(401);
      chai.expect(response.body.message).to.equal('All fields must be filled');
    });

    it('It should be possible to return an error if the email is invalid', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'test@test.com',
          password: 'secret_admin',
        });

      chai.expect(response.status).to.equal(401);
      chai.expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
    });
  });

  describe('Testing password', () => {
    it('it should be possible to return an error if the password is not given', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'admin@admin.com',
        });
  
      chai.expect(response.status).to.equal(401);
      chai.expect(response.body.message).to.equal('All fields must be filled');
    });

    it('it should be possible to return an error if the password is not valid', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'admin@admin.com',
          password: 'dereguejhonson',
        });

      chai.expect(response.status).to.equal(401);
      chai.expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
    });
  });
  
  it('it should be possible to login successfully', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'secret_admin',
      });

    chai.expect(response.status).to.equal(200);
    chai.expect(response.body.user).not.to.be.undefined
    chai.expect(response.body.token).not.to.be.undefined
  });
})