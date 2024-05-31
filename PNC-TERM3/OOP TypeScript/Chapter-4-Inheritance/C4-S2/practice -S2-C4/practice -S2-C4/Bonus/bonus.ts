class Address {
    city: string;
    street: string;
    constructor(city: string, street: string) {
        this.city = city;
        this.street = street;
    }
}

class Dates {
    date: string;
    time: string;
    constructor(date: string, time: string) {
        this.date = date;
        this.time = time;
    }
}

class Customer {
    firstName: string;
    lastName: string;
    address?: Address;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    addAddress(address: Address) {
        this.address = address;
    }
}

class Trip {
    busName: string;
    departureAddress: Address;
    arrivalAddress: Address;
    departureDate: Dates;
    arrivalDate: Dates;
    customers: Customer[] = [];
    constructor(busName: string, departureAddress: Address, arrivalAddress: Address, departureDate: Dates, arrivalDate: Dates) {
        this.busName = busName;
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }
}

// Create addresses
let ronanAddress = new Address("Paris", "France");
let vandaAddress = new Address("Phnom Penh", "Cambodia");
let departureAddress1 = new Address("Phnom Penh", "Cambodia");
let arrivalAddress1 = new Address("Kompot", "Cambodia");
let departureAddress2 = new Address("Phnom Penh", "Cambodia");
let arrivalAddress2 = new Address("Siem Reap", "Cambodia");

// Create dates
let date1 = new Dates("12.02.2024", "11:00AM");
let date2 = new Dates("12/02/2024", "3:00 PM");

// Create customers
let customer1 = new Customer("Ronan", "Ogor");
customer1.addAddress(ronanAddress);

let customer2 = new Customer("Him", "Hay");

let customer3 = new Customer("Chib", "Sovanda");
customer3.addAddress(vandaAddress);

// Create trips
let trip1 = new Trip("Trip 1", departureAddress1, arrivalAddress1, date1, date2);
trip1.addCustomer(customer1);
trip1.addCustomer(customer2);

let trip2 = new Trip("LyHor Express", departureAddress2, arrivalAddress2, date1, date2);
trip2.addCustomer(customer3);

console.log(trip1);
console.log(trip2);
