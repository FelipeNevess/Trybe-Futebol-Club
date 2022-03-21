import Match from '../../../../database/models/Matche';

class MatchRepository {
  static async index(): Promise<Array<object>> {
    const matches = await Match.findAll();

    return matches;
  }
}

export default MatchRepository;
