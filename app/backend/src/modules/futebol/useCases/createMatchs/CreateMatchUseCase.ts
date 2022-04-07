import AppError from '../../../../errors/AppError';

import { ICreateMatch } from '../../repositories/IMatchsRepositories';
import ClubsRepository from '../../repositories/IClubRepository';
import { IRequest, IResponse } from './ICreateMatch';

class CreateMatchUseCase {
  constructor(
    private matchRepository: ICreateMatch,
    private clubsRepository: ClubsRepository,
  ) {}

  async execute({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  }: IRequest): Promise<IResponse> {
    const verifyClub1 = await this.clubsRepository.show(homeTeam);
    const verifyClub2 = await this.clubsRepository.show(awayTeam);

    if (!verifyClub1 || !verifyClub2) {
      throw new AppError('There is no team with such id!');
    }

    if (awayTeam === homeTeam) {
      throw new AppError('It is not possible to create a match with two equal teams');
    }

    const match = await this.matchRepository.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress,
    }) as IResponse;

    return match;
  }
}

export default CreateMatchUseCase;
