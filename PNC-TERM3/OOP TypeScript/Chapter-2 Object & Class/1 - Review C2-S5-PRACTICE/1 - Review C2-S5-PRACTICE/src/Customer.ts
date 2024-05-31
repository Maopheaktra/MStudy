export class Customer {
  constructor(private firstName: string, private lastName: string) {}

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}
