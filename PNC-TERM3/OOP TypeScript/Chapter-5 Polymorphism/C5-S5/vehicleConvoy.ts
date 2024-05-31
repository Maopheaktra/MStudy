import { Vehicle } from "./vehicle";

export class VehicleConvoy {
    vehiles : Vehicle[] = [];
    constructor() { }
    addVehicle(vehicle: Vehicle) {
        return this.vehiles.push(vehicle);
    }
    getMaxspeed():number{
        let maxSpeed = 0;
        this.vehiles.forEach(vehicle =>{
            if(vehicle.getSpeed() > maxSpeed){
                maxSpeed = vehicle.getSpeed();
            }
        });
    return maxSpeed;
    }
}