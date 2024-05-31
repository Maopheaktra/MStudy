import { Customer } from "./Customer";
import { Product } from "./Product";
import { Feedback } from "./Feedback";

export class Store {
  private customers: Customer[] = [];
  private products: Product[] = [];

  constructor(private name: string) {}

  addCustomers(...newCustomers: Customer[]) {
    this.customers = this.customers.concat(newCustomers);
  }

  addProducts(...newProduct: Product[]) {
    this.products = this.products.concat(newProduct);
  }

  /**
   * (see returns)
   * @param amount
   * @returns all prducts whose price is less or equal than given amount
   */
  getProductsLessThan(amount: number): Product[] {
    let result: Product[] = [];
    for (let product of this.products) {
      if (product.getPrice() <= amount) {
        result.push(product);
      }
    }
    return result;
  }

  /**
   * (See returns)
   * @param keyword
   * @returns  all product feedbacks containg the given keyword in their comment
   */
  getFeedbacksWith(keyword: string): Feedback[] {
    let result: Feedback[] = [];
    for (let product of this.products) {
      for (let feedback of product.feedbacks) {
        if (feedback.getComment().includes(keyword)) {
          result.push(feedback);
        }
      }
    }
    return result;
  }

  /**
   * (See returns)
   * @param customer
   * @returns all comments from given customer
   */
  getCommentsFrom(customer: Customer): string[] {
    let result: string[] = [];
    for (let product of this.products) {
      for (let feedback of product.feedbacks) {
        if (
          feedback.getCustomer().getFirstName() === customer.getFirstName() &&
          feedback.getCustomer().getLastName() == customer.getLastName()
        ) {
          result.push(feedback.getComment());
        }
      }
    }
    return result;
  }
}
