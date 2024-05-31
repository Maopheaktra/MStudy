class House {
  private chairs: Chair[] = [];

  /**
   * Add a chair of given ID
   * @param chairID the chair ID
   * @return the created chair
   */
  addChair(chairID: string): Chair {
    //todo
    let chairNumber = parseInt(chairID);
    let newChair = new Chair(chairNumber, this);
    this.chairs.push(newChair);
    return newChair;

  }
}

class Chair {
  constructor(private chairId: number, private house: House) {
    this.chairId = chairId;
    this.house = house;
  }
  getChairId() { 
    return this.chairId;
  }
}

// MAIN
let newHouse = new House();
let newChair1 = newHouse.addChair("45");
 // Add a chair of id 45
console.log(newChair1.getChairId());
