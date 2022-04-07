import UpdateMatchFinishRepository from '../../repositories/implementations/MatchsRepositories';
import UpdateMatchFinishUseCase from './UpdateMatchFinishUseCase';
import UpdateMatchFinishController from './UpdateMatchFinishController';

const updateMatchFinishRepository = new UpdateMatchFinishRepository();
const updateMatchFinishUseCase = new UpdateMatchFinishUseCase(updateMatchFinishRepository);
const updateMatchFinishController = new UpdateMatchFinishController(updateMatchFinishUseCase);

export default updateMatchFinishController;
