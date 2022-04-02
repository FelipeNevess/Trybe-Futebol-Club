import AppError from '../../../../errors/AppError';
import MatchRepository from '../../repositories/implementations/MatchsRepositories';
import ClubService from '../getClub/GetClubService';
import { IRequest, IResponse } from './ICreateMatch';

class MatchService {
  static async execute(
    { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress }: IRequest,
  ): Promise<object> {
    await ClubService.execute(homeTeam);
    await ClubService.execute(awayTeam);

    if (awayTeam === homeTeam) {
      throw new AppError('It is not possible to create a match with two equal teams', 401);
    }

    const match = await MatchRepository.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
    });

    return match as IResponse;
  }
}

export default MatchService;
