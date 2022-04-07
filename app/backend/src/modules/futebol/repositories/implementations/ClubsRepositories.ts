import Club from '../../../../database/models/Club';
import IClubRepository from '../IClubRepository';

class ClubsRepository implements IClubRepository {
  async index(): Promise<Array<object>> {
    this.index = this.index.bind(this);

    const clubs = await Club.findAll();

    return clubs;
  }

  async show(id: number): Promise<object | null> {
    this.show = this.show.bind(this);

    const club = await Club.findOne({ where: { id } });

    return club;
  }
}

export default ClubsRepository;
