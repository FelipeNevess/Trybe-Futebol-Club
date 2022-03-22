import * as chai from 'chai';
import chaiHttp = require('chai-http');

import getClubService from '../modules/futebol/useCase/getClub/GetClubService';

chai.use(chaiHttp);
const { expect } = chai;

describe('get club Service', () => {
  it('it should be possible to return an object', async () => {
    const result = await getClubService.execute(1);
    
    expect(result).to.be.an('object');
  });

  it('must not be an empty array', async () => {
    const result = await getClubService.execute(1);
    
    expect(result).to.be.not.empty;
  });

  it('it should be possible to return an error', async () => {
    const result = await getClubService
      .execute(99)
      .catch((err) => err);

    expect(result).Throw;
  });

  it('the error message should be as expected', async () => {
    const result = await getClubService
      .execute(99)
      .catch((err) => err.message);
    
    expect(result).to.be.eq('Club not found');
  });

  it('the error code should be as expected', async () => {
    const result = await getClubService
      .execute(99)
      .catch((err) => err.code);
  
    expect(result).to.be.eq(404);
  })

});
