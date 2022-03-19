interface IResponseSession {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string;
}

interface ICreateSessionDTO {
  email: string;
  password: string;
}

export { ICreateSessionDTO, IResponseSession };
