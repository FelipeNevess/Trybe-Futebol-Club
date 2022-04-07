import ClubsRepository from '../../repositories/IClubRepository';
import IRequest from './IClubList';

class ListClubUseCase {
  constructor(
    private clubsRepository: ClubsRepository,
  ) {}

  async execute(): Promise<IRequest[]> {
    const clubs = await this.clubsRepository.index() as IRequest[];

    return clubs;
  }
}

export default ListClubUseCase;
