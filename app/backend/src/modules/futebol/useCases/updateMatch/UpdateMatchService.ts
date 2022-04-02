import MatchRepository from '../../repositories/implementations/MatchsRepositories';
import IUpdateMatch from './IUpdateMatch';

class MatchService {
  static async execute({ id, awayTeamGoals, homeTeamGoals }: IUpdateMatch): Promise<string | void> {
    const result = await MatchRepository
      .update({ id, awayTeamGoals, homeTeamGoals });

    return result;
  }
}

export default MatchService;
