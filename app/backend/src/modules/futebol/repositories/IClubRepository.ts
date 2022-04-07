interface IClubRepository {
  index(): Promise<Array<object>>
  show(id: number): Promise<object | null>
}

export default IClubRepository;
