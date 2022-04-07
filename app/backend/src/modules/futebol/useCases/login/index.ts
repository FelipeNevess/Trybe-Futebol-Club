import CreateAuthenticateUserCase from './CreateAuthenticateUseCase';
import SessionsRepository from '../../repositories/implementations/SessionsRepositories';
import CreateAuthenticateController from './CreateAuthenticateController';

const sessionsRepository = new SessionsRepository();
const createAuthenticateUserCase = new CreateAuthenticateUserCase(sessionsRepository);
const createAuthenticateController = new CreateAuthenticateController(createAuthenticateUserCase);

export default createAuthenticateController;
