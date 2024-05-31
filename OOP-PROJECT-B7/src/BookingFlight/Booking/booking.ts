import { Meal } from "./meal";
import { Baggages } from "./bagages";
import { Departure } from "../../Departure/Departure";
import { Passenger } from "../../Human/Passenger/Passenger";
import { Flight } from "../Flight/flight";


export enum TypeTickets{
    return_Ticket,
    single_Ticket,
}

export class Booking{
    private bookingReference: string;
    private flight: Flight[] = []
    private passengers: Passenger;
    private departurePlace: Departure;
    private arrivalPlace: Departure;
    private typeTickets: TypeTickets; 
    private bagages?: Baggages[] | null;
    private meals: Meal;
    private price: number;

    constructor(bookingReference: string, passengers: Passenger, departurePlace: Departure,arrivalPlace:Departure, typeTickets: TypeTickets, bagages: Baggages,price: number){
        this.bookingReference = bookingReference,
        this.passengers = passengers,
        this.departurePlace = departurePlace,
        this.arrivalPlace = arrivalPlace
        this.typeTickets = typeTickets,
        bagages = bagages,
        this.price = price


    }
    addBookingFlight(flight:Flight):void{
        this.flight.push(flight)
    }
    setBaggages(bagagges: Baggages[]):void{
        this.bagages = bagagges
    }
    getPassenger(): Passenger{
        return this.passengers;
    }

    getReturnTicket(){
        return this.typeTickets;
    }    


    setTypeTickets(newTypeTickets:TypeTickets): void{
        this.typeTickets = newTypeTickets;
    }

    getReturnTickets(){
        return this.typeTickets;
    }

    setMeal(meals:Meal): void{
        this.meals = meals
    }

    getMeal(){
        return this.meals
    }
    getGateFromFlight(){
        let gateOfFlight = []
        for(let flight of this.flight){
            gateOfFlight.push(flight.getGate())
        }
        return gateOfFlight
    }

}

