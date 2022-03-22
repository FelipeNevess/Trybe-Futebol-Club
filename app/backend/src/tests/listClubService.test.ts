import * as chai from 'chai';
import chaiHttp = require('chai-http');

import ClubService from '../modules/futebol/useCase/listClubs/ListClubService';

chai.use(chaiHttp);
const { expect } = chai;

describe('Club Service', () => {
  it('it should be possible to return an array', async () => {
    const result = await ClubService.execute();
    
    expect(result).to.be.an('array');
  });

  it('the array must not be empty', async () => {
    const result = await ClubService.execute();
    
    expect(result).to.not.empty;
  });
});
