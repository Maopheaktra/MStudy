// TODO
export class Publisher {
    constructor(private name: string, private address: string) {
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
}