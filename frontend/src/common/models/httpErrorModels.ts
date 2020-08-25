export class HttpErrorBase<T> extends Error {
    constructor(message: string, public body: T, public code: number) {
        super(message);
    }
}

type DefaultErrorBody = Record<string, string>;

export class HttpError extends HttpErrorBase<DefaultErrorBody> {}
