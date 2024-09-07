import express from "express";
import bodyParser from "body-parser";

import Product from './Product.js';
import Customer from './Customer.js';
import Order from './Order.js';
import OrderDetail from './OrderDetail.js';




const app = express();
const port = 8081;
app.use(bodyParser.json());



app.post("/app", (req, res) => {

  const customer = new Customer();
  customer.createCustomer({ full_name: "Aziz Diop", email: "aziz@gmail.com", phone:32334545, address :"Tarkhile" });

  const prod1 = new Product();
  prod1.createProduct({ name: "PC-HP", quantity: 12, price: 40000 });

  const prod2 = new Product();
  prod2.createProduct({ name: "PC-DELL", quantity: 4, price: 50000 });

  const prod3 = new Product();
  prod3.createProduct({ name: "PC-Mac", quantity: 25, price: 100000 });

  const ordDet1 = new OrderDetail({ quantity: 5, prix: prod1.price, product: prod1 });
  const ordDet2 = new OrderDetail({ quantity: 1, prix: prod2.price, product: prod2 });
  const ordDet3 = new OrderDetail({ quantity: 12, prix: prod3.price, product: prod3 });

  let result = [];

  /** Create order */
  const order = new Order();
  order.createOrder({
    date: new Date(),
    amount: 190000,
    customer: customer.getCustomer(),
    details: [ordDet1, ordDet2, ordDet3],
  });

  result.push(order.getOrder()); // Adding first order in result array

  customer.editCustomer({ ful_name: "Daouda Sow", email: "daouda@gmail.com",phone:49494545, address :"Arrafat"  }); //Update curstomer data

  //Update order data
  order.editOrder({
    date: new Date(),
    amount: 180000,
    customer: customer.getCustomer(),
    details: [ordDet1, ordDet2, ordDet3],
  });

  /***** Association des elements simple */
  const association = {
    customer: customer.getCustomer(),
    prod1: prod1.getProduct(),
    prod2: prod2.getProduct(),
  };
  result.push(order.getOrder());

  const items = order.details;
  const prod4 = new Product();
  prod4.createProduct({ name: "Phone", quantity: 12, price: 20000 });
  items.push(new OrderDetail({ quantity: 1, price: prod4.price, product: prod4 }));

  //Update order data
  order.editOrder({
    date: new Date(),
    amount: 200000,
    customer: customer.getCustomer(),
    details: items,
  });

  let status = 200;
  let message = order;
  if (!order) {
    message = "Not found order";
    status = 400;
  }

  res.status(status).json({ order, result, association });
});







app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
