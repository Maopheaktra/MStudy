import { Feedback } from "./Feedback";

export class Product {
  public feedbacks: Feedback[] = [];

  constructor(private name: string, private price: number) {}

  addFeedbacks(...newFeedbacks: Feedback[]) {
    this.feedbacks = this.feedbacks.concat(newFeedbacks);
  }

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }
}
