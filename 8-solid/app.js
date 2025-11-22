class Billing {
  amount = 0;
  calculateTotal() {}
}

class FixBilling extends Billing {
  constructor (amount) {
    super();
    this.amount = amount;
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  hours = 0;
  constructor (amount, hours) {
    super();
    this.amount = amount;
    this.hours = hours;
  }
  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  items = 0;
  constructor (amount, items) {
    super();
    this.amount = amount;
    this.items = items;
  }
  calculateTotal() {
    return this.amount * this.items;
  }
}

const fixBilling = new FixBilling(1000);
const hoursBilling = new HourBilling(8, 100);
const itemsBilling = new ItemBilling(2, 600);
console.log(fixBilling.calculateTotal());
console.log(hoursBilling.calculateTotal());
console.log(itemsBilling.calculateTotal());