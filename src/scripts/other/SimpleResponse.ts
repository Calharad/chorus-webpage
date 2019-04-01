export class SimpleResponse {
    constructor(state: boolean, desc: string = null) {
        this.state = state;
        this.desc = desc;
    }

    toJSON(): string {
        return JSON.stringify(this);
    }

    readonly state: boolean;
    readonly desc: string;
}