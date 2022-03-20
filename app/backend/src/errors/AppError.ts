class AppError extends Error {
  public readonly code: number;

  constructor(message: string, code = 400) {
    super(message);

    this.message = message;
    this.code = code;
  }
}

export default AppError;
