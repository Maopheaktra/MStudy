class Country {
    countryName: string;
    population: number;
    capitalName: string;
    currency: string;
    
    
    constructor(countryName:string, population: number, capitalName: string, currency: string){
        this.countryName= countryName;
        this.population= population;
        this.capitalName=capitalName;
        this.currency= currency;
        
    }
    getInformation(): string{
        return `WELCOME TO ${this.countryName}, population: ${this.population} million people,Capital: ${this.capitalName},Currency: ${ this.currency}!`;
    }
}
const France = new Country("France", 70, "Paris", "Euro");
const Cambodia = new Country("Cambodia", 17, "Phnom Penh", "Riels")
const UK = new Country("UK", 80, "Londo", "Pound");

console.log(France.getInformation());
console.log(Cambodia.getInformation());
console.log(UK.getInformation());
