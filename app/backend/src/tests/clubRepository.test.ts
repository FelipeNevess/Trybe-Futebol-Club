import * as chai from 'chai';
import chaiHttp = require('chai-http');

import ClubsRepository from '../modules/futebol/repositories/implementations/ClubsRepositories';

chai.use(chaiHttp);
const { expect } = chai;

describe('Clubs Repository', () => {
  it('it should be possible to return an array', async () => {
    const result = await ClubsRepository.index();

    expect(result).to.be.an('array');
  });

  it('it should be possible to return an array with objects', async () => {
    const result = await ClubsRepository.index();

    expect(result).to.not.empty;
  });

  it('it should be possible to return an object', async () => {
    const result = await ClubsRepository.show(1);

    expect(result).to.be.an('object');
    expect(result).to.not.empty;
  });

  it('it should be possible to return null', async () => {
    const result = await ClubsRepository.show(99);

    expect(result).to.be.eq(null);
  });
});
