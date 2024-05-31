class trip {
    bus_name:string;
    departure_place:string;
    arrival_place:string;
    customer: customer[] =[]
    constructor (bus_name:string, departure_place:string,arrival_place:string){
        this.bus_name=bus_name;
        this.departure_place=departure_place;
        this.arrival_place=arrival_place;
    }
    //add customer
    add_customer(customer:customer){
        this.customer.push(customer);
    }
}
class customer {
    first_name:string;
    last_name :string;
    address: address[]=[]
    constructor (first_name:string, last_name:string){
        this.first_name=first_name;
        this.last_name=last_name;
    }
    //add address
    add_address(address:address){
        this.address.push(address)
    }
}
class address{
   city:string;
   street:string;
   constructor (city:string,street:string){
    this.city=city;
    this.street =street;
   }
}

// create customer
let ronan= new customer("Ronan","Ogor");
let him = new customer("Him","Hey");
let vanda = new customer("Sovanda","Chip");

//create address
let ronan_address =new address("pariec","France");
ronan.add_address(ronan_address);
// let himAddress =new address("pariec","France");
let vanda_address =new address("Phnom Penh","Cambodia");
vanda.add_address(vanda_address);

//create trips
let trip_1 = new trip("LYHOR Express","Phnom Penh,Cambodia","Kampot,Cambodia");
trip_1.add_customer(him);
trip_1.add_customer(vanda);

let trip_2 = new trip("KAKA Bus","Phnom Penh,Cambodia","Siem Reap,Cambodia");
trip_2.add_customer(ronan);
trip_2.add_customer(him);
trip_2.add_customer(vanda);


//consol log
console.log(trip_1);
console.log(trip_2);
