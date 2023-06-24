import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  fullName = "Sree Chandu";
  title = "Salesforce Developer";

  @track address = {
    city: "Bangalore",
    pincode: 560037,
    country: "India"
  };

  address2 = {
    city: "Bangalore",
    pincode: 560037,
    country: "India"
  };

  changeHandler(event) {
    this.title = event.target.value;
  }

  trackHandler(event) {
    this.address.city = event.target.value;
  }

  useSpreadOperator(event) {
    this.address2 = { ...this.address2, city: event.target.value };
  }

  /** getter example */
  users = ["Sree", "Chandu", "Latha"];
  num1 = 10;
  num2 = 20;

  get firstUser() {
    return this.users[0];
  }

  get multiplyNumbers() {
    return this.num1 * this.num2;
  }
}
