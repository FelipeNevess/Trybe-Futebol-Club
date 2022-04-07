import AppError from '../../../../errors/AppError';
import ClubsRepository from '../../repositories/IClubRepository';
import IRequest from './IGetByClub';

class GetByClubUseCase {
  constructor(
    private clubsRepository: ClubsRepository,
  ) {}

  async execute(id: number): Promise<IRequest> {
    const club = await this.clubsRepository.show(id) as IRequest;

    if (!club) {
      throw new AppError('There is no team with such id!');
    }

    return club;
  }
}

export default GetByClubUseCase;
