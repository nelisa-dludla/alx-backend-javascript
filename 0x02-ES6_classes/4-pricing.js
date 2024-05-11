export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get getAmount() {
    return this._amount;
  }

  set setAmount(value) {
    this._amount = value;
  }

  get getCurrency() {
    return this._currency;
  }

  set setCurrency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()} `;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
