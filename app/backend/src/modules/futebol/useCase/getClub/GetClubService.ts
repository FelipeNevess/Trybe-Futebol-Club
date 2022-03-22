import AppError from '../../../../errors/AppError';
import ClubsRepository from '../../repositories/implementations/ClubsRepositories';

class ClubService {
  static async execute(id: number): Promise<object | null> {
    const club = await ClubsRepository.show(id);

    if (!club) {
      throw new AppError('Club not found', 404);
    }

    return club;
  }
}

export default ClubService;
