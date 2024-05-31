import { Flight } from "../BookingFlight/Flight/flight";
export class Gate{
    private flight: Flight[]=[]
    constructor(private gateId:string){
        this.gateId = gateId;
    }
    addFilght(flight:Flight) {
        return this.flight.push(flight)
    }
    
}