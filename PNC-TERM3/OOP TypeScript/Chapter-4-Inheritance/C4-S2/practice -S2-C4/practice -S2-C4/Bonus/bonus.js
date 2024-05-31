var Address = /** @class */ (function () {
    function Address(city, street) {
        this.city = city;
        this.street = street;
    }
    return Address;
}());
var Dates = /** @class */ (function () {
    function Dates(date, time) {
        this.date = date;
        this.time = time;
    }
    return Dates;
}());
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.addAddress = function (address) {
        this.address = address;
    };
    return Customer;
}());
var Trip = /** @class */ (function () {
    function Trip(busName, departureAddress, arrivalAddress, departureDate, arrivalDate) {
        this.customers = [];
        this.busName = busName;
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
    Trip.prototype.addCustomer = function (customer) {
        this.customers.push(customer);
    };
    return Trip;
}());
// Create addresses
var ronanAddress = new Address("Paris", "France");
var vandaAddress = new Address("Phnom Penh", "Cambodia");
var departureAddress1 = new Address("Phnom Penh", "Cambodia");
var arrivalAddress1 = new Address("Kompot", "Cambodia");
var departureAddress2 = new Address("Phnom Penh", "Cambodia");
var arrivalAddress2 = new Address("Siem Reap", "Cambodia");
// Create dates
var date1 = new Dates("12.02.2024", "11:00AM");
var date2 = new Dates("12/02/2024", "3:00 PM");
// Create customers
var customer1 = new Customer("Ronan", "Ogor");
customer1.addAddress(ronanAddress);
var customer2 = new Customer("Him", "Hay");
var customer3 = new Customer("Chib", "Sovanda");
customer3.addAddress(vandaAddress);
// Create trips
var trip1 = new Trip("Trip 1", departureAddress1, arrivalAddress1, date1, date2);
trip1.addCustomer(customer1);
trip1.addCustomer(customer2);
var trip2 = new Trip("LyHor Express", departureAddress2, arrivalAddress2, date1, date2);
trip2.addCustomer(customer3);
console.log(trip1);
console.log(trip2);
