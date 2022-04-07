import ClubsRepository from '../../repositories/implementations/ClubsRepositories';
import GetByClubUseCase from './GetClubUseCase';
import GetByClubController from './GetClubController';

const clubsRepository = new ClubsRepository();
const getByClubUseCase = new GetByClubUseCase(clubsRepository);
const getByClubController = new GetByClubController(getByClubUseCase);

export default getByClubController;
