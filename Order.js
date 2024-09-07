export default class Order {
  constructor() {}

  createOrder(order) {
    this.date = order.date;
    this.amount = order.amount;
    this.details = order.details;
    this.customer = order.customer;
    console.log(`Order has been created`);
  }

  editOrder(newOrder) {
    this.date = newOrder.date;
    this.amount = newOrder.amount;
    this.details = newOrder.details;
    this.customer = newOrder.customer;
    console.log(`Order has been updated`);
  }

  destroyOrder() {
    console.log(`Order has been deleted`);
  }

  getOrder() {
    return {
      date: this.date,
      amount: this.amount,
      details: this.details.length,
      customer: this.customer.name,
    };
  }
}
