function plusOne(value) {
  return value + 1;
}

function interest(value) {
  return value * 1.2;
}

class Account {
  constructor(balance) {
    this.balance = balance;
  }
  
  map(fn) {
    return new Account( fn(this.balance) );
  }
  
  deposit(fn) {
    return fn(this.balance);
  }
}

console.log(new Account(30).map(interest));
console.log(new Account(30).map(plusOne));

console.log( new Account(30).deposit(sum(50)) );

function sum(first) {
  return (second) => {
    return first+second;
  }
}

// ###############################################################

class Bill {
  
  constructor(products) {
    this.products = products;
  }
  
  price(fn) {
    return this.products.reduce(fn, 0);
  }
  
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price
  }
}

class Item {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}

let macarrao = new Product('Macarrão', 0.90, 3);
let arroz = new Product('Arrois', 5, 1);

function sumUnitPrice(totalPrice, item) {
  return totalPrice + item.product.price;
}

function sumQuantityUnitPrice(totalPrice, item) {
  return totalPrice + (item.product.price * item.quantity);
}

let compras = [new Item(macarrao, 3), new Item(arroz, 1)];
console.log( new Bill(compras).price(sumUnitPrice) );
console.log( new Bill(compras).price(sumQuantityUnitPrice) );