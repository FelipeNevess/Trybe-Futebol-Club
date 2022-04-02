import ClubsRepository from '../../repositories/implementations/ClubsRepositories';

class ClubService {
  static async execute(): Promise<Array<object>> {
    const clubs = await ClubsRepository.index();

    return clubs;
  }
}

export default ClubService;
