class Trip {
    busName: string;
    departure: string;
    arrival:string;
    customer:Customer[] = [];
    // addresses: Address[] = [];
    constructor(busName: string, departure: string, arrival:string) {
        this.busName = busName
        this.departure = departure
        this.arrival = arrival
        this.customer = []
    }
    
    getCustomer(customer: Customer){
        this.customer.push(customer);
    }

}

class Address {
    city:string;
    street:string;
    constructor(city:string, street:string) {
        this.city = city;
        this.street = street;
    }
    
}

class Customer {
    firstName: string;
    lastName: string;
    address: Address | null = null;
    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address;
    }
    getAddress(address: Address){
        this.address = address;    
    }
    
}


// ------------------Customer----------------------
let Ronan = new Customer("Ronan", "Ogor");
let Him = new Customer("Him", "Hey");
let Sovanda = new Customer("Sovanda", "Chib");


// --------------Address-----------------
let address_ronan = new Address("Paris", "France");
let address_sovanda = new Address("Phnom Penh", "Cambodia");

Ronan.getAddress(address_ronan);
Sovanda.getAddress(address_sovanda);

// ----------------Bus Trip----------------
let bus_kaka = new Trip("Kaka bus","Phnom Penh, Cambodia", "Kompot, Cambodia");
bus_kaka.getCustomer(Him);
bus_kaka.getCustomer(Sovanda);

// ----------------Bus Trip2--------------
let layhor_bus = new Trip("LayHor Bus","Phnom Penh, Cambodia", "Siem Reap Cambodia");
layhor_bus.getCustomer(Him)
layhor_bus.getCustomer(Ronan)
layhor_bus.getCustomer(Sovanda)


console.log(bus_kaka);
console.log(layhor_bus);
