import LeaderBoardRepositories from '../../repositories/implementations/LeaderBoardRepositories';
import LeaderBoardHomeUseCase from './LeaderBoardHomeUseCase';
import LeaderBoardHomeController from './LeaderBoardHomeController';

const leaderBoardRepositories = new LeaderBoardRepositories();
const leaderBoardHomeUseCase = new LeaderBoardHomeUseCase(leaderBoardRepositories);
const leaderBoardHomeController = new LeaderBoardHomeController(leaderBoardHomeUseCase);

export default leaderBoardHomeController;
