export class UnautherizedError extends Error{
    constructor(message: string, public code: number) {
        super(message);
        this.name = "UnautherizedError";
    }
}
