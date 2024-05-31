import { batModile } from "./BatMobile";
// import { Vehicle } from "./vehicle";
import { tuctuc } from "./TucTuc";
import { miniVan} from "./MiniVan";
import { VehicleConvoy } from "./vehicleConvoy";


// ---------Create a batModbile--------------
let batModiles1 =  new batModile("minimum", 5000, false);

//----------------Create a Tuctuc------------- 
let tuctuc1 = new tuctuc("Tuctuc1", 2500, 5);

// -------------------Create a MiniVan-----------------
let miniVan1 = new miniVan("miniVan1", 4000, 30,20);

// Create a VehicleConvoy---------------
let vehicleConvoy1 = new VehicleConvoy();
vehicleConvoy1.addVehicle(miniVan1);
vehicleConvoy1.addVehicle(batModiles1);
vehicleConvoy1.addVehicle(tuctuc1);

// console.log(batModiles1.getSpeed());
// console.log(tuctuc1.getSpeed());
// console.log(miniVan1.getSpeed());

console.log(vehicleConvoy1.getMaxspeed());

