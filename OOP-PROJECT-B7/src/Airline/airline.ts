import { Aeroplanes } from "./Aeroplane/aeroplane";
import { Employee } from "../Human/Employee/employee";
import { Flight } from "../BookingFlight/Flight/flight";
import { Booking } from "../BookingFlight/Booking/booking";
export class Airlines{
    private name: string
    private airplane: Aeroplanes[] = []
    private employee: Employee[] = []
    private flight : Flight[] = []
    private booking: Booking[] = []
    constructor(name: string){
        this.name = name
   }
    addAeroplane(airplane: Aeroplanes): void {
        this.airplane.push(airplane);
    }

    addEmployee(employee: Employee): void {
        this.employee.push(employee);
    }
    
    
    addBooking(booking: Booking){
        return this.booking.push(booking)
    }

    addFlight(flight: Flight){
        this.flight.push(flight)
        }

    getBooking(booking:Booking){
        this.booking.push(booking)
    }


    findEmployeeSalary(){
        let EmployeeSalary =  0
        for(let employee of this.employee){
            EmployeeSalary += employee.getSalary()
        }
        return EmployeeSalary
    }


    findPassengerReturnTicket(){
        let numberOfPassenger = 0;
            for(let bookingTicket of this.booking){
                if(bookingTicket.getReturnTickets() == 0){
                    numberOfPassenger += 1
                }
            }
            return numberOfPassenger
   }

   findTypeMeal(booking: Booking){
        let listOfMeal = []
        for(let book of this.booking){
            if (book.getMeal()== booking.getMeal()) {
                listOfMeal.push(booking.getMeal());
            }
        }
        return listOfMeal
   }
}


