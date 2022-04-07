import { ICreateMatch } from '../../repositories/IMatchsRepositories';
import { IRequestUseCase } from './IUpdateMatch';

class UpdateMatchUseCase {
  constructor(private createMatch: ICreateMatch) {}

  async execute({ id, awayTeamGoals, homeTeamGoals }: IRequestUseCase): Promise<string | void> {
    const result = await this.createMatch.update({ id, awayTeamGoals, homeTeamGoals });

    return result;
  }
}

export default UpdateMatchUseCase;
