interface IUserRepositories {
  role: string,
}

interface IGetByUserId {
  show(id: number): Promise<IUserRepositories | null>
}

export { IGetByUserId, IUserRepositories };
