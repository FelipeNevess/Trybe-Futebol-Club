import { ICreateMatch } from '../../repositories/IMatchsRepositories';
import IListMatch from './IListMatch';

class ListMatchUseCase {
  constructor(
    private createMatch: ICreateMatch,
  ) {}

  async execute(inProgress?: string): Promise<IListMatch[]> {
    const match = await this.createMatch.index() as IListMatch[];

    if (inProgress) {
      const findByInProgress = match
        .filter((item) => String(item.inProgress) === inProgress);

      return findByInProgress;
    }

    return match;
  }
}

export default ListMatchUseCase;
