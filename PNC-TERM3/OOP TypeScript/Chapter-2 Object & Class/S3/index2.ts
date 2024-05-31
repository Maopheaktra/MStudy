class houses {
    name:string;
    rooms: Room[] = [];
    doors :Door[] = [];
    constructor(name:string) {
        this.name = name;
        this.rooms = [];
        this.doors = [];
    }
    addRoom(room:Room){
        this.rooms.push(room);
    }
    addDoor(door:Door){
        this.doors.push(door);
    }
}

class Room {
    numberOfRoom: number;
    door :Door[] = [];
    constructor(numberOfRoom: number) {
        this.numberOfRoom = numberOfRoom;
        this.door = [];
    }
    addDoor(door:Door){
        this.door.push(door);
    }
}

class Door {
    numberOfDoor:number
    constructor(numberOfDoor:number) {
        this.numberOfDoor = numberOfDoor;
    }
}


let house1 = new houses("Pheaktra");
const rooms = new Room(2);
const doors = new Door(3);
// const doors1 = new Door(2)
rooms.addDoor(doors);
house1.addRoom(rooms);
house1.addDoor(doors);
console.log(house1);
// console.log(rooms);
