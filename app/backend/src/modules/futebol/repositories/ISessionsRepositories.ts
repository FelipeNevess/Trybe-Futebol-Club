interface ICreateSessionsRepositoriesDTO {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string;
}

interface ICreateSessionsRepositories {
  findByEmail(email: string): Promise<ICreateSessionsRepositoriesDTO | null>
}

export { ICreateSessionsRepositoriesDTO, ICreateSessionsRepositories };
