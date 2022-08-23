class SoftError extends Error {
  errorMessage?: string;
  statusCode: number;
  constructor(message: string = "No message", statusCode: number = 500) {
    super(message);
    this.errorMessage = message;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default SoftError;
