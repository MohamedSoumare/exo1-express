export default class Customer {
  constructor() {}

  createCustomer(customer) {
    this.full_name = customer.full_name;
    this.email = customer.email;
    this.phone = customer.phone;
    this.address = customer.address;
    console.log(
      `Customer: ${this.full_name}, ${this.email}, ${this.phone}, ${this.address} has been created`
    );
  }

  editCustomer(newCustomer) {
    this.name = newCustomer.name;
    this.email = newCustomer.email;
    this.phone = newCustomer.phone;
    this.address = newCustomer.address;
    console.log(
      `Customer: ${this.name}, ${this.email}, ${this.phone}, ${this.address} has been updated`
    );
  }

  getCustomer() {
    console.log(`Customer: ${this.name}, ${this.email}, ${this.phone}, ${this.address}`);
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
  }

  destroyCustomer() {
    console.log(
      `Customer: ${this.name}, ${this.email}, ${this.phone}, ${this.address} has been deleted`
    );
  }
}
