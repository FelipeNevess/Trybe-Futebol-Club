import UpdateMatchRepository from '../../repositories/implementations/MatchsRepositories';
import UpdateMatchUseCase from './UpdateMatchUseCase';
import UpdateMatchController from './UpdateMatchController';

const updateMatchRepository = new UpdateMatchRepository();
const updateMatchUseCase = new UpdateMatchUseCase(updateMatchRepository);
const updateMatchController = new UpdateMatchController(updateMatchUseCase);

export default updateMatchController;
