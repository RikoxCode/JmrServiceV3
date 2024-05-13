export class HTTPError extends Error{
    constructor(message: string, public code: number) {
        super(message);
        this.name = "HTTPError";
        this.message = message;
        this.code = code;
    }
}
