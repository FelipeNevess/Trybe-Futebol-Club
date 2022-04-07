import MatchRepository from '../../repositories/implementations/MatchsRepositories';
import ListMatchUseCase from './ListMatchUseCase';
import ListMatchController from './ListMatchController';

const matchRepository = new MatchRepository();
const listMatchUseCase = new ListMatchUseCase(matchRepository);
const listMatchController = new ListMatchController(listMatchUseCase);

export default listMatchController;
