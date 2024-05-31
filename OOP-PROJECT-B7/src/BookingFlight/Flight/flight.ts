import { Airlines } from "../../Airline/airline";
import { Gate } from "../../Airport/Gate";
import { Route } from "../../Airport/route";
import { Pilot } from "../../Human/Employee/Pilot";
import { CoPilot } from "../../Human/Employee/Co-Pilot";
import { date } from "../../Date-time/date";
import { time } from "../../Date-time/time";
import { Meal } from "../Booking/meal";
import { Booking } from "../Booking/booking";
import { Aeroplanes } from "../../Airline/Aeroplane/aeroplane";

export class Flight{
    meal: Meal;
    constructor(
        private flightNumber: number,
        private route:Route,
        private gate:Gate,
        private pilot:Pilot,
        private date : Date,
        private CoPilot : CoPilot,
        private departuretime : time,
        private arrivalTime : time, 
        private Aeroplane : Aeroplanes,

    ){
            this.flightNumber = flightNumber
            this.route = route
            this.gate = gate
            this.pilot = pilot
            this.CoPilot = CoPilot
            this.date = date
            this.departuretime = departuretime
            this.arrivalTime = arrivalTime

        }
        
        getFlightNumber(){
            return this.flightNumber;
        }
        //get passenger 

        getFlightDate(){
            return this.date;
        }        

        getPilotFromFlight(){
            return this.pilot.getPilotId()
        }
        getGate(){
            return this.gate;
        }
        getRoute(){
            return this.route;
        }

}