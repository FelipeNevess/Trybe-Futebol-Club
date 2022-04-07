import CreateMatchRepository from '../../repositories/implementations/MatchsRepositories';
import CreateMatchUseCase from './CreateMatchUseCase';
import CreateMatchController from './CreateMatchController';
import GetByClub from '../../repositories/implementations/ClubsRepositories';

const createMatchRepository = new CreateMatchRepository();
const getByClub = new GetByClub();

const createMatchUseCase = new CreateMatchUseCase(createMatchRepository, getByClub);

const createMatchController = new CreateMatchController(createMatchUseCase);

export default createMatchController;
