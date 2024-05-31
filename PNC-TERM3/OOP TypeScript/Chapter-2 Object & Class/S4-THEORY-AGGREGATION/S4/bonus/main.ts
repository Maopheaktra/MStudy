class Trip {
    busName: string;
    departure: Address;
    arrival:Address;
    daparturedate : date;
    arrivaldate: date;
    customer:Customer[] = [];
    // addresses: Address[] = [];
    constructor(busName: string, departure:Address, arrival:Address, daparturedate : date,arrivaldate: date) {
        this.busName = busName
        this.departure = departure
        this.arrival = arrival
        this.customer = []
        this.daparturedate = daparturedate;
        this.arrivaldate = arrivaldate;
    }
    
    getCustomer(customer: Customer){
        this.customer.push(customer);
    }

}

class date {
    date:string;
    time:string;
    constructor(date:string, time:string) {
        this.date = date;
        this.time = time;
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


// ----------------address-----------------
let address_ronan = new Address("Paris", "France")
let address_sovanda = new Address("Phnom Penh", "Cambodia")
let departure1 = new Address("Phnom Penh", "Cambodia")
let departure2 = new Address("Phnom Penh", "Cambodia")
let arrival1 = new Address("Kompot", "Cambodia")
let arrival2 = new Address("Siem Reap", "Cambodia")


Ronan.getAddress(address_ronan)
Sovanda.getAddress(address_ronan)
// -------------date-------------
let date1 = new date("25/04/2024", "10:40PM");
let date2 = new date("26/04/2024", "06:00AM");

let date3 = new date("10/04/2024", "9:50AM")
let date4 = new date("11/04/2024", "12:50AM")

// -------------Trip--------------
let bus1 = new Trip("Kaka bus", departure1, arrival1, date1, date2);
bus1.getCustomer(Ronan)
bus1.getCustomer(Him)

let bus2 = new Trip("Layhor", departure2, arrival2, date3, date4);
bus1.getCustomer(Ronan)
bus1.getCustomer(Him)
bus1.getCustomer(Sovanda)

console.log(bus1);
console.log(bus2);
