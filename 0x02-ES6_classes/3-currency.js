export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get getCode() {
    return this._code;
  }

  set setCode(value) {
    this._code = value;
  }

  get getName() {
    return this._name;
  }

  set setName(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
