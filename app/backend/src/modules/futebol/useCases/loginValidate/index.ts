import UserRepositories from '../../repositories/implementations/UserRepositories';
import LoginValidadeUseCase from './LoginValidateUseCase';
import LoginValidadeController from './LoginValidateController';

const iUserRepositories = new UserRepositories();
const loginValidadeUseCase = new LoginValidadeUseCase(iUserRepositories);
const loginValidadeController = new LoginValidadeController(loginValidadeUseCase);

export default loginValidadeController;
