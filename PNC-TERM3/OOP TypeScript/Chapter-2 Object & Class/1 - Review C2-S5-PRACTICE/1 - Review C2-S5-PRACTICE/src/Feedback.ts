import { Customer } from "./Customer";

export class Feedback {
  constructor(
    private customer: Customer,
    private comment: string,
    private score?: number
  ) {}

  getCustomer() {
    return this.customer;
  }
  getComment() {
    return this.comment;
  }
  getScore() {
    return this.score;
  }
}
