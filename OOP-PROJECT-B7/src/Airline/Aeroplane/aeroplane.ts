import { Seat } from "./seat";

export class Aeroplanes{
    constructor(private referenceNumber: string, private seat: Seat[] = []){
        this.referenceNumber = referenceNumber
        this.seat = []
    }
    addSeat(seat: Seat){
        return this.seat.push(seat)
    }
}

