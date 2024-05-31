import { Flight } from "../BookingFlight/Flight/flight";
import { Departure } from "../Departure/Departure";
export class Route{
    private flight : Flight[] = []
    private departurePlace: Departure
    private arrivalPlace: Departure
    constructor(departurePlace: Departure, arrivalPlace: Departure){
        this.departurePlace = departurePlace
        this.arrivalPlace = arrivalPlace
        
    }
    addFlight(flight : Flight):void{
        this.flight.push(flight);
    }
}