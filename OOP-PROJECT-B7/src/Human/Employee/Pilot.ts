import { Gender } from "../Person";
import { crewMember,Employee } from "./employee";
import { Flight } from "../../BookingFlight/Flight/flight";
import { date } from "../../Date-time/date";

export class Pilot extends Employee {
    constructor(
        private CardID : string,
        Name :string,
        email: string, 
        gender:Gender,
        Category : crewMember,
        private flight : Flight[] = [],
        private date : Date[] = [],
    ){
        super(Name , email,gender, Category);
        this.CardID = CardID
    }
    addflight(flight: Flight){
        return this.flight.push(flight);
    }
    addDate(date: Date){
        return this.date.push(date);
    }
    getdate(){
        return this.date;
    }
    
    getPilotId(){
        return this.CardID;
    }
    findPilotFlights(schedule: Date){
        let listFlightForPilot =[]
        for(let flight of this.flight){
            if((flight.getFlightDate().getTime() == schedule.getTime()) && flight.getPilotFromFlight()){
                listFlightForPilot.push(flight)
            }
          
        }
        return listFlightForPilot
      }
}