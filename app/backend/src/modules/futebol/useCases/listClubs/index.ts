import ListClubRepository from '../../repositories/implementations/ClubsRepositories';
import ListClubUseCase from './ListClubUseCase';
import ListClubController from './ListClubController';

const listClubRepository = new ListClubRepository();
const listClubUseCase = new ListClubUseCase(listClubRepository);
const listClubController = new ListClubController(listClubUseCase);

export default listClubController;
