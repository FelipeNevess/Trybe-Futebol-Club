import ClubsRepository from '../../repositories/implementations/ClubsRepositories';

class ClubService {
  static async execute(id: number): Promise<object | null> {
    const club = await ClubsRepository.show(id);

    return club;
  }
}

export default ClubService;
