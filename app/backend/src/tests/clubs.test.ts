import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp)

describe('Testing match', async () => {
  it('It should be possible to return an array of objects', async () => {
    const response = await chai
      .request(app)
      .get('/clubs');
    
    chai.expect(response.status).to.equal(200);
    chai.expect(response.body).to.be.an('array');
    chai.expect(response.body).to.not.empty;
  });

  it('It should be possible to return a specific club', async () => {
    const response = await chai
      .request(app)
      .get('/clubs/5');
    
    chai.expect(response.status).to.equal(200);
    chai.expect(response.body).to.be.an('object');
    chai.expect(response.body).to.not.empty;
    chai.expect(response.body).to.deep.eq({
      id: 5,
      clubName: 'Cruzeiro'
    });
  });
})