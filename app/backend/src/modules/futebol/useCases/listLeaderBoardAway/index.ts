import LeaderBoardRepositories from '../../repositories/implementations/LeaderBoardRepositories';
import LeaderBoardAwayUseCase from './LeaderBoardAwayUseCase';
import LeaderBoardAwayController from './LeaderBoardAwayController';

const leaderBoardRepositories = new LeaderBoardRepositories();
const leaderBoardHomeUseCase = new LeaderBoardAwayUseCase(leaderBoardRepositories);
const leaderBoardHomeController = new LeaderBoardAwayController(leaderBoardHomeUseCase);

export default leaderBoardHomeController;
