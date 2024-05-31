// Import the employees the passenger
import { Airlines } from "./Airline/airline";
import { Aeroplanes } from "./Airline/Aeroplane/aeroplane";
import { Seat } from "./Airline/Aeroplane/seat";
import { Departure } from "./Departure/Departure";
import { Gate } from "./Airport/Gate";
import { Route } from "./Airport/route";

import { Baggages } from "./BookingFlight/Booking/bagages";
import { Flight } from "./BookingFlight/Flight/flight";
import { Booking, TypeTickets } from "./BookingFlight/Booking/booking";

import { Gender } from "./Human/Person";
import { Passenger } from "./Human/Passenger/Passenger";
import { crewMember, Employee } from "./Human/Employee/employee";
import { Pilot } from "./Human/Employee/Pilot";
import { CoPilot } from "./Human/Employee/Co-Pilot";
import { time } from "./Date-time/time";
import { Meal } from "./BookingFlight/Booking/meal";
import { Airport } from "./Airport/airport";

// Crete departure______________
let departure1 = new Departure("Frenc", "Paris");
let departure2 = new Departure("Cambodia", "Phnom Penh");

// Create Arrival__________________
let arrival1 = new Departure("Switzerland","Bern");
let arrival2 = new Departure("Philippines", "Manila");

// Create date__________________
let date1 = new Date("05/05/2024");
let date2 = new Date("06/10/2024"); 

// Create Time___________________
let departuretime1 = new time("10:50PM");
let arrivaltime = new time("12:00AM");

// Create gate____________________-
let gate1 = new Gate("10PP");
let gate2 = new Gate("12A");

//Create route_______________
let route1 = new Route(departure2, arrival1);
let route2 = new Route(departure1, arrival2);

// Create Seat________________
let seat1 = new Seat("12E")
let seat2 = new Seat("12F")
let seat3 = new Seat("12G")
let seat4 = new Seat("12H")

// Create Aeroplanes________________
let airplane1 = new Aeroplanes("PHM1");
airplane1.addSeat(seat1);
airplane1.addSeat(seat2);
airplane1.addSeat(seat3);



// Create Pilot_____________
let Pilot1 = new Pilot("PM12", "Chorn", "chorn@167gmail.com", Gender.Male, crewMember.PILOT);
Pilot1.setSalary(1000);
let CoPILOT1 = new CoPilot("C12", "SNA", "sna@167gmail.com", Gender.Male, crewMember.PILOT);
CoPILOT1.setSalary(900);
// Create flight____________-
let flight1 = new Flight(12,route1, gate1, Pilot1, date1, CoPILOT1, departuretime1, arrivaltime, airplane1);
Pilot1.addflight(flight1)

gate1.addFilght(flight1);

// Create Passenger_______________
let passenger1= new Passenger("1", "Veasna", "sna@gmail.com", Gender.Male);
let passenger2= new Passenger("2", "Rady", "dy@gmail.com", Gender.Female);
// Create Airport_________________
let Airport1 = new Airport("International Airport");

// Create airline____________
let airline1 = new Airlines("Internatonal Airline");
airline1.addAeroplane(airplane1);
airline1.addEmployee(Pilot1);
airline1.addEmployee(CoPILOT1);

// Create Meal____________________
let meal1 = Meal.VEGETERIAN;
let meal2 = Meal.NON_VEGETERIAN;
let meal3 = Meal.KID;

// Create Bagagges_____________--
let bag1 = new Baggages(2);
let bag2 = new Baggages(10);
let bag3 = new Baggages(5);

// Create Booking______________
let booking1 = new Booking("123F", passenger1, departure1, arrival1, TypeTickets.return_Ticket, bag1,540 );
let booking2 = new Booking("567D", passenger2, departure2, arrival1, TypeTickets.return_Ticket, bag1,700 );
booking1.setMeal(meal1);
// Crete Passenger_______________
let passenerger1 = new Passenger("12E", "Pheaktra", "pheaktra@gemail.com", Gender.Female);
passenger1.addTrip(booking1);
// add Flight to booking___________
booking1.addBookingFlight(flight1);
// add booking to airline_____________
airline1.addBooking(booking1);
airline1.addBooking(booking2);
airline1.addFlight(flight1);

// Passenger_________-
console.log(passenger1);
// find passenger from airport_____________
console.log(passenerger1);

// Log passenger return ticket__________-
console.log(airline1.findPassengerReturnTicket());

// Find pilot's flight______________--
console.log(Pilot1.findPilotFlights(date1));

// Find Meal type for flight______________
console.log(airline1.findTypeMeal(booking1));


// Find salary for employee_______________
console.log(airline1.findEmployeeSalary());

// Find gate for passenger________________
console.log(passenger1.findGate());