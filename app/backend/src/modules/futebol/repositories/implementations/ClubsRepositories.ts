import Club from '../../../../database/models/Club';

class ClubsRepository {
  static async index(): Promise<Array<object>> {
    const clubs = await Club.findAll();

    return clubs;
  }

  static async show(id: number): Promise<object | null> {
    const club = await Club.findOne({ where: { id } });

    return club;
  }
}

export default ClubsRepository;
