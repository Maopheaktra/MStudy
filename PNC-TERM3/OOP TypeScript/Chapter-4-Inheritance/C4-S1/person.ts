export class person {
    constructor(private name :string, private address: string, private dateOfBirth: string){
    }
    getName():string{
        return this.name;
    };
    getAddress():string{
        return this.address;
    }
}

