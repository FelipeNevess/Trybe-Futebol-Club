import MatchRepository from '../../repositories/implementations/MatchsRepositories';

interface IResponse {
  id: number;
  homeTeamGoals?: number;
  awayTeamGoals?: number;
}

class MatchService {
  static async execute({ id, awayTeamGoals, homeTeamGoals }: IResponse): Promise<string | void> {
    const result = await MatchRepository
      .update({ id, awayTeamGoals, homeTeamGoals });

    return result;
  }
}

export default MatchService;
