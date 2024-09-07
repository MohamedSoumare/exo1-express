export default class Product {
    constructor() {}
  
    createProduct(product) {
      this.name = product.name;
      this.quantity = product.quantity;
      this.price = product.price;
      console.log(
        `Product: ${this.name}, ${this.quantity}, ${this.price} has been created`
      );
    }
  
    editProduct(newProduct) {
      this.name = newProduct.name;
      this.quantity = newProduct.quantity;
      this.price = newProduct.price;
      console.log(
        `Product: ${this.name}, ${this.quantity}, ${this.price} has been updated`
      );
    }
  
    destroyProduct() {
      console.log(
        `Product: ${this.name}, ${this.quantity}, ${this.price} has been deleted`
      );
    }
  
    getProduct() {
      return {
        name: this.name,
        quantity: this.quantity,
        price: this.price,
      };
    }
  }
  