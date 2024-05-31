class hotels {
    
    constructor(private name:string,) {
        this.name = name;

    }
}

class Customers {
    constructor(private firstName :string, private lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;

        
    }
}


class Room{
    constructor(private roomID:number, private numberOFBeds:number){
        this.roomID = roomID;
        this.numberOFBeds = numberOFBeds;
    }
}


class Address{
    constructor(private street:string, private city:string){
        this.street = street;
        this.city = city;
    }
}