import { Passenger } from "../../Human/Passenger/Passenger";
export class Seat{
    constructor(private seatID: string,private passengers?: Passenger){
        this.seatID = seatID;
    }
    hasPassenger(): boolean{
        return this.passengers !== undefined;

    }
    setPassenger(passenger: Passenger){
        this.passengers = passenger;
    }
    getPassenger(){
        return this.passengers = this.passengers
    }
}
