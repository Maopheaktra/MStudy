import { Passenger } from "../Human/Passenger/Passenger";
import { Departure } from "../Departure/Departure";
import { Gate } from "./Gate";
import { Route } from "./route";
import { Airlines } from "../Airline/airline";
import { Flight } from "../BookingFlight/Flight/flight";
export class Airport{
    private passenger : Passenger
    private gate: Gate
    private route: Route
    private flight: Flight[] = []
    private departure:Departure
    private  arrivalPlace : Departure
    constructor(
        private name: string,
    ){
        this.name = name;
        // this.gate = gate;
        // this.route = route;
        
    }
    getName(){
        return this.name;
    }
    
    // addGate(gate: Gate){
    //     this.gate.push(gate);
    // }

    // addRoute(route: Route){
    //     this.route.push(route);
    // }



    getGate(){
        return this.gate;
    }
    getRoute(){
        return this.route;
    }
    
    getGateFromFlight(){
        let gateFlight =[]
        for(let flight of this.flight){
            gateFlight.push(flight.getGate())
        }
    }
    getPassenger(){
        return this.passenger;
    }

}
